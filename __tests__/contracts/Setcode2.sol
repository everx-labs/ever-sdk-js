pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract Setcode {
    modifier onlyOwner {
        require(msg.pubkey() == tvm.pubkey(), 100);
        tvm.accept();
        _;
    }

    function main(TvmCell newcode) public pure returns (uint) {
        tvm.accept();
        tvm.setcode(newcode);
        return 0;
    }
    
    function getNewVersion() public pure returns (uint) {
        tvm.accept();
        return 2;
    }

    function sendAllMoney(address payable dest_addr) public onlyOwner {
        selfdestruct(dest_addr);
    }

}