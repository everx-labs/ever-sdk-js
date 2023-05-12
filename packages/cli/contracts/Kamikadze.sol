pragma ever-solidity 0.65.0;
pragma AbiHeader time;
pragma AbiHeader expire;

contract Kamikaze {

	modifier checkOwnerAndAccept {
		require(msg.pubkey() == tvm.pubkey(), 102);
		tvm.accept();
		_;
	}

	constructor() public {
		require(tvm.pubkey() != 0, 101);
		require(msg.pubkey() == tvm.pubkey(), 102);
		tvm.accept();
	}

	function sendAllMoney(address dest_addr) public checkOwnerAndAccept {
		selfdestruct(dest_addr);
	}
}
