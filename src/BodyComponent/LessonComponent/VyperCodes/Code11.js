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
        \
        @private \
        def generateRandomDna(_str: bytes32) -> uint256: \
            rand: uint256 \
            rand = convert(sha3(_str), 'uint256') \
            return rand % self.dnaModulos \
        \
        @public \
        def createRandomZombie(_name: bytes32): \
            randDna: uint256 \
            randDna = self.generateRandomDna(_name) \
            self.createViper(_name, randDna) \
    ",
    ABI: '[{"name": "__init__", "outputs": [], "inputs": [], "constant": false, "payable": false, "type": "constructor"}, {"name": "createViper", "outputs": [], "inputs": [{"type": "bytes32", "name": "_name"}, {"type": "uint256", "name": "_dna"}], "constant": false, "payable": false, "type": "function", "gas": 70539}, {"name": "generateRandomDna", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "bytes32", "name": "_str"}], "constant": false, "payable": false, "type": "function", "gas": 947}, {"name": "viperDNADigits", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 543}, {"name": "dnaModulos", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 573}, {"name": "Viper__name", "outputs": [{"type": "bytes32", "name": "out"}], "inputs": [{"type": "int128", "name": "arg0"}], "constant": true, "payable": false, "type": "function", "gas": 898}, {"name": "Viper__dna", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "int128", "name": "arg0"}], "constant": true, "payable": false, "type": "function", "gas": 922}]'
}

export default code;