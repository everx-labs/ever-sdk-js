pragma solidity >=0.6.0;
pragma AbiHeader expire;


contract SimpleContract {

	uint public m_a;
	uint32 public m_b;

	constructor(uint a, uint32 b) public {
		// check that contract's public key is set
		require(tvm.pubkey() != 0, 101);

		// NOTE: To protect from deploying this contract by hacker it's good idea to check msg.sender. See 17_SimpleWallet.sol
		tvm.accept();
		m_a = a;
		m_b = b;
	}
    
    // Modifier that allows public function to accept external calls only from the contract owner.
	modifier checkOwnerAndAccept {
		require(msg.pubkey() == tvm.pubkey(), 102);
		tvm.accept();
		_;
	}

    function sendAllMoney(address dest_addr) public checkOwnerAndAccept {
		selfdestruct(dest_addr);
	}

    function get() public view alwaysAccept returns (uint, uint32) {
        return (m_a, m_b);
    }
}