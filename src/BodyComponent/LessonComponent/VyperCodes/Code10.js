var code = {
    initialCode:
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
        #create your function here \
    ",
    correctCode: 
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
    ",
    ABI: ""
}

export default code;