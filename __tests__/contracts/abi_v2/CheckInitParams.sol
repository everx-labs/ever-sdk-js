pragma solidity >=0.6.0;
pragma AbiHeader time;
pragma AbiHeader expire;

contract CheckPublicVariables {
    /*
     *  Storage
     */
    address static addressVariable;
    uint static uintVariable;
    bool static booleanVariable;
    bytes static bytesVariable;

    address zeroAddress;

    constructor() public {
        tvm.accept();
        zeroAddress = address.makeAddrStd(0, 0);
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

    function sendAllMoney(address dest_addr) public checkOwnerAndAccept {
        selfdestruct(dest_addr);
    }

}
