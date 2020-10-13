pragma solidity >=0.5.0;
pragma AbiHeader v1;  

contract CheckPublicVariables {
    /*
     *  Storage
     */
    address public addressVariable;
    /*   uint8 public uint8Variable;
        uint16 public int16Variable;
        uint32 public uint32Variable;
        uint64 public uint64Variable;
        uint128 public uint128Variable;
        uint256 public uint256Variable;*/
    uint public uintVariable;
    bool public booleanVariable;
    bytes public bytesVariable;

    address zeroAddress;

    function tvm_make_address(int8 wid, uint256 addr) private pure returns (address payable) {}

    constructor() public {
        tvm.accept();
        zeroAddress = tvm_make_address(0, 0);
        if (addressVariable == zeroAddress) {
            addressVariable = zeroAddress;
        }
    }

    function getAddressVariable() public view returns (address) {
        return addressVariable;
    }

    function getUintVariable() public view returns (uint) {
        return uintVariable;
    }

    function getBooleanVariable() public view returns (bool) {
        return booleanVariable;
    }

    function getBytesVariable() public view returns (bytes) {
        return bytesVariable;
    }

    modifier checkOwnerAndAccept {
        require(msg.pubkey() == tvm.pubkey(), 100);
        tvm.accept();
        _;
    }

    function sendAllMoney(address payable dest_addr) public checkOwnerAndAccept {
        selfdestruct(dest_addr);
    }

}
