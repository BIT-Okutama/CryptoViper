var code = {
    initialCode:
    "\
#CryptoViper, a smart contract for our CryptoViper game.\n\n\
\
viperDNADigits: public(uint256)\n\
dnaModulos: public(uint256)\n\n\
\
Viper: public({\n\
    name: bytes32,\n\
    dna: uint256\n\
}[10])\n\n\
\
@public\n\
def __init__():\n\
    self.viperDNADigits = 16\n\
    self.dnaModulos = 10 ** self.viperDNADigits\n\n\
\
@private\n\
def createViper(_name: bytes32, _dna: uint256):\n\
    self.Viper[0] = { name: _name, dna: _dna }\n\n\
\
#create your function here\
",
    correctCode: 
    "\
#CryptoViper, a smart contract for our CryptoViper game.\n\n\
\
viperDNADigits: public(uint256)\n\
dnaModulos: public(uint256)\n\n\
\
Viper: public({\n\
    name: bytes32,\n\
    dna: uint256\n\
}[10])\n\n\
\
@public\n\
def __init__():\n\
    self.viperDNADigits = 16\n\
    self.dnaModulos = 10 ** self.viperDNADigits\n\n\
\
@private\n\
def createViper(_name: bytes32, _dna: uint256):\n\
    self.Viper[0] = { name: _name, dna: _dna }\n\n\
\
@private\n\
def generateRandomDna(_str: bytes32) -> uint256:\
",
    ABI: "unexpected EOF while parsing (, line 22)"
}

export default code;