var code = {
    code: 
    "
        #CryptoViper, a smart contract for our CryptoViper game.

        viperDNADigits: public(uint256)

        Viper: public({ 
            name: bytes32, 
            dna: uint256 
        })
    ",
    ABI: '[{"name": "viperDNADigits", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 483}, {"name": "Viper__name", "outputs": [{"type": "bytes32", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 591}, {"name": "Viper__dna", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 615}]'
}

export default code;