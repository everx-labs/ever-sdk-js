pragma solidity >=0.6.0;
pragma AbiHeader time;
pragma AbiHeader expire;

contract ContractDeployer {
		// Struct to store information about deployed contracts.
	struct DeployedContract {
		address addr;
		TvmCell stateInit;
		uint256 pubkey;
	}

	// Deployed contracts database.
	mapping(uint => DeployedContract) contracts;
	uint public lastID = 0;

	// State variable storing the address of deployed contract.
	address contractAddress;

	// Modifier that allows public function to accept external calls only from the contract owner.
	modifier acceptOnlyOwner {
		require(tvm.pubkey() == msg.pubkey(), 101);
		tvm.accept();
		_;
	}


	// First variant of contract deploying

	// State variable storing the StateInin of deployed contract. It contains contract's code and data.
	TvmCell contractStateInit;

	function setContract(TvmCell _contract) public acceptOnlyOwner {
		contractStateInit = _contract;
	}

	function deploy(uint256 pubkey, uint128 gram_amount,
	uint32 constructor_id, uint32 constructor_param0, uint constructor_param1) public acceptOnlyOwner returns (address) {
		// Runtime function that inserts public key into contracts data field.
		TvmCell stateInitWithKey = tvm.insertPubkey(contractStateInit, pubkey);

		// tvm.hash() - Runtime function that computes the representation hash ot TvmCell.
		address addr = address(tvm.hash(stateInitWithKey));

		// Functions to deploy a contract and call it's constructor.
		tvm.deployAndCallConstructor(stateInitWithKey, addr, gram_amount, constructor_id, constructor_param0, constructor_param1);
		return addr;
	}


	// Second variant of contract deploying

	// State variable storing the code of deployed contract.
	TvmCell contractCode;

	function setCode(TvmCell _code) public acceptOnlyOwner {
		contractCode = _code;
	}

	// Second variant of contract deployment.
		function deploy2(TvmCell data, uint128 gram_amount,
		uint32 constructor_id, uint32 constructor_param0, uint constructor_param1) public acceptOnlyOwner returns (address) {
			// Runtime function to generate StateInit from code and data cells.
			TvmCell stateInit = tvm.buildStateInit(contractCode, data);

			// tvm.hash() - Runtime function that computes the representation hash ot TvmCell.
			address addr = address(tvm.hash(stateInit));

			// Functions to deploy a contract and call it's constructor.
			tvm.deployAndCallConstructor(stateInit, addr, gram_amount, constructor_id, constructor_param0, constructor_param1);
			return addr;
		}

	// Third variant of contract deploying

	function deploy3(TvmCell contr, address addr, uint128 gram_amount, TvmCell payload) public acceptOnlyOwner returns (address) {
		// Runtime function to deploy contract with prepared msg body for constructor call.
		tvm.deploy(contr, addr, gram_amount, payload);

		return addr;
	}

	function sendAllMoney(address dest_addr) public acceptOnlyOwner {
		selfdestruct(dest_addr);
	}
}