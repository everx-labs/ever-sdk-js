pragma solidity >=0.5.0;
pragma AbiHeader v1;

contract Simple {

    uint32 param1;
    uint param2;

    constructor(uint32 _param1, uint _param2) public {
        param1 = _param1;
        param2 = _param2;
    }

	function get() public view alwaysAccept returns (uint32, uint) {
        return (param1, param2);
    }

    modifier alwaysAccept {
		// Runtime function that allows contract to process inbound messages spending
		// its own resources (it's necessary if contract should process all inbound messages,
		// not only those that carry value with them).
		tvm.accept();
		_;
	}

	modifier OnlyOwner {
        require(msg.pubkey() == tvm.pubkey(), 100);
        tvm.accept();
        _;
    }

	function sendAllMoney(address payable dest_addr) public OnlyOwner {
		selfdestruct(dest_addr);
	}
}
