pragma solidity >=0.6.0;
pragma AbiHeader time;
pragma AbiHeader expire;

abstract contract Upgradable {
    /*
     * Set code
     */

    function upgrade(TvmCell newcode) public virtual {
        require(msg.pubkey() == tvm.pubkey(), 101);
        tvm.accept();
        tvm.commit();
        tvm.setcode(newcode);
        tvm.setCurrentCode(newcode);
        onCodeUpgrade();
    }

    function onCodeUpgrade() internal virtual;
}

contract GiverV2 is Upgradable {

    mapping(uint256 => uint64) m_messages;

    modifier acceptOnlyOwner {
        require(msg.pubkey() == tvm.pubkey(), 101);
        tvm.accept(); 
        _;
	}
    
    /*
     * Publics
     */

    /// @notice Allows to accept simple transfers.
    receive() external {}

    /// @notice Transfers grams to other contracts.
    function sendTransaction(address dest, uint128 value, bool bounce) public {
        dest.transfer(value, bounce, 3);
        gc();
    }

    /*
     * Privates
     */
    
    /// @notice Function with predefined name called after signature check. Used to
    /// implement custom replay protection with parallel access.
    function afterSignatureCheck(TvmSlice body, TvmCell message) private inline 
        returns (TvmSlice) 
    {
        // owner check
        require(msg.pubkey() == tvm.pubkey(), 101);
        // load and drop message timestamp (uint64)
        (, uint64 expireAt) = body.decode(uint64, uint32);
        require(expireAt > now, 57);
        uint256 msgHash = tvm.hash(message);
        require(!m_messages.exists(msgHash), 102);
        
        tvm.accept();
        m_messages[msgHash] = expireAt;

        return body;
    }

    /// @notice Allows to delete expired messages from dict.
    function gc() private inline {
        (uint256 msgHash, uint64 expireAt, bool ok) = m_messages.min();
        while (ok) {
            if (expireAt <= now) {
                delete m_messages[msgHash];
            }
            (msgHash, expireAt, ok) = m_messages.next(msgHash);
        }
    }

    /*
     * Get methods
     */
    struct Message {
        uint256 hash;
        uint64 expireAt;
    }
    function getMessages() public view returns (Message[] messages) {
       (uint256 msgHash, uint64 expireAt, bool ok) = m_messages.min();
        while (ok) {
            messages.push(Message(msgHash, expireAt));
            (msgHash, expireAt, ok) = m_messages.next(msgHash);
        }
    }

    function onCodeUpgrade() internal override {}
}