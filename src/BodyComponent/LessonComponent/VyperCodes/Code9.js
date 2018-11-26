var code = {
    code: 
    " \
        #CryptoViper, a smart contract for our CryptoViper game. \
        \
        viperDNADigits: public(uint256) \
        dnaModulos: public(uint256) \
        \
        Viper: public(&#123; \
            name: bytes32, \
            dna: uint256 \
        &#125;[10]) \
        \
        @public \
        def __init__(): \
            self.viperDNADigits = 16 \
            self.dnaModulos = 10 ** self.viperDNADigits \
        \
        @private \
        def createViper(_name: bytes32, _dna: uint256): \
            self.Viper[0] = &#123; name: _name, dna: _dna &#125; \
    ",
    ABI: '[{"name": "__init__", "outputs": [], "inputs": [], "constant": false, "payable": false, "type": "constructor"}, {"name": "createViper", "outputs": [], "inputs": [{"type": "bytes32", "name": "_name"}, {"type": "uint256", "name": "_dna"}], "constant": false, "payable": false, "type": "function", "gas": 70539}, {"name": "viperDNADigits", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 513}, {"name": "dnaModulos", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 543}, {"name": "Viper__name", "outputs": [{"type": "bytes32", "name": "out"}], "inputs": [{"type": "int128", "name": "arg0"}], "constant": true, "payable": false, "type": "function", "gas": 868}, {"name": "Viper__dna", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "int128", "name": "arg0"}], "constant": true, "payable": false, "type": "function", "gas": 892}]'
}

export default code;