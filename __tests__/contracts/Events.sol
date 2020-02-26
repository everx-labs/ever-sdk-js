pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract Events {


    modifier OnlyOwner {
        require(msg.pubkey() == tvm.pubkey(), 100);
        tvm.accept();
        _;
    }
    event EventThrown(uint256 id);

    function emitValue(uint256 id) public {
    	tvm.accept();
        emit EventThrown(id);
    }

    function returnValue(uint256 id) public returns (uint256) {
    	tvm.accept();
        emit EventThrown(id);
        return id;
    }

    function sendAllMoney(address payable dest_addr) public OnlyOwner {
		selfdestruct(dest_addr);
	}
}