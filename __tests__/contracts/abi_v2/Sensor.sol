pragma solidity >= 0.6.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;

contract Test {
    uint16 data;
    uint256 m_ownerKey;

    constructor(uint256 ownerKey) public {
        require(ownerKey>0);
        tvm.accept();
        m_ownerKey = ownerKey;
    }

    function getData() public view returns (uint16) {
       return data;
    }

    function setData(uint16 input) public {
        require(msg.pubkey() == m_ownerKey, 101);
        tvm.accept();
        data = input;
    }
}