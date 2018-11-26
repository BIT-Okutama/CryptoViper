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
        def __init__(): 
            self.viperDNADigits = 16
            self.dnaModulos = 10 ** self.viperDNADigits

        @public
        def createViper(_name: bytes32, _dna: uint256):
            self.Viper[0] = { name: _name, dna: _dna}

        @public
        def generateRandomDna(_str: bytes32) -> uint256:
    ",
    ABI: ""
}

export default code;