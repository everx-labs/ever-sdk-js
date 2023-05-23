pragma ever-solidity 0.65.0;
pragma AbiHeader time;
pragma AbiHeader expire;

contract Touch {
	uint32 public timestamp;

	modifier checkOwnerAndAccept {
		require(msg.pubkey() == tvm.pubkey(), 102);
		tvm.accept();
		_;
	}

	constructor() public {
		require(tvm.pubkey() != 0, 101);
		require(msg.pubkey() == tvm.pubkey(), 102);
		tvm.accept();
		timestamp = now;
	}

	function touch() public checkOwnerAndAccept {
		timestamp = now;
	}

	function getTimestamp() public view returns(uint32) {
		return timestamp;
	}
}
