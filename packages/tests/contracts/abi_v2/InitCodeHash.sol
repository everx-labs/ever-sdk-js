pragma ton-solidity >=0.5.0;

contract TestSetCodeNew {

	uint m;

	function f() public view returns (uint) {
		tvm.accept();
		return tvm.initCodeHash();
	}

	function onCodeUpgrade() private {
		m = 222;
		if (m == 222) {
			return;
		}
		return ;
	}

	function getCode() public pure returns (TvmCell) {
		return tvm.code();
	}
}
