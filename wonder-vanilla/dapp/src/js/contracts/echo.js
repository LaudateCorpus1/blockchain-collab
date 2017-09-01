const echoContract = {
    
    // contracts/echo.sol -> https://remix.ethereum.org or terminal solc --bin

    interface: //abi
        [{'constant':false,'inputs':[{'name':'instr','type':'string'}],'name':'echoString','outputs':[{'name':'','type':'address'},{'name':'','type':'bytes32'},{'name':'','type':'string'}],'payable':false,'type':'function'}],

    bytecodeData: //0x...
        '0x606060405234610000575b61023f806100196000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630d7e2fce1461003e575b610000565b3461000057610093600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061015e565b604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200180602001828103825283818151815260200191508051906020019080838360008314610122575b805182526020831115610122576020820191506020810190506020830392506100fe565b505050905090810190601f16801561014e5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b600060006020604051908101604052806000815250600060003091506002866000604051602001526040518082805190602001908083835b602083106101b95780518252602082019150602081019050602083039250610196565b6001836020036101000a0380198251168184511680821785525050505050509050019150506020604051808303816000866161da5a03f1156100005750506040518051905090508181879450945094505b505091939092505600a165627a7a72305820dd1c2d27e38f707acaa7eb0d0668ac7689fd839c0b24dd4236b0d4791666b5d50029'
    
};
    
export default echoContract;