var code = {
    code: 
    "
        #CryptoViper, a smart contract for our CryptoViper game.

        viperDNADigits: public(uint256)
        dnaModulos: public(uint256)
        
        Viper: public({ 
            name: bytes32, 
            dna: uint256 
        }[10])
        
        @public 
        def constructor(): 
            self.viperDNADigits = 16
            self.dnaModulos = 10 ** self.viperDNADigits
    ",
    ABI: '[{"name": "constructor", "outputs": [], "inputs": [], "constant": false, "payable": false, "type": "function", "gas": 71251}, {"name": "viperDNADigits", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 513}, {"name": "dnaModulos", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 543}, {"name": "Viper__name", "outputs": [{"type": "bytes32", "name": "out"}], "inputs": [{"type": "int128", "name": "arg0"}], "constant": true, "payable": false, "type": "function", "gas": 868}, {"name": "Viper__dna", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "int128", "name": "arg0"}], "constant": true, "payable": false, "type": "function", "gas": 892}]'
}

export default code;