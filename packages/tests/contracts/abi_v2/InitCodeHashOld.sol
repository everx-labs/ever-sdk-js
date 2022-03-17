pragma ton-solidity >=0.5.0;

contract TestSetCodeNew {

	function f111() pure public returns (uint) {
		return 111;
	}

	function fix_baga(TvmCell newCode) public {
		tvm.accept();
		tvm.setcode(newCode);
		tvm.setCurrentCode(newCode);
		onCodeUpgrade();
	}

	function onCodeUpgrade() private {
	}
}
