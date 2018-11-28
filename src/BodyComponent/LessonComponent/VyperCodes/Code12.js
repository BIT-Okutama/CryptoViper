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
    self.Viper[0] = &#123; name: _name, dna: _dna &#125;\n\n\
\
@private\n\
def generateRandomDna(_str: bytes32) -> uint256:\n\
    rand: uint256\n\
    rand = convert(sha3(_str), 'uint256')\n\
    return rand % self.dnaModulos\n\n\
\
#write the function here\
",
    correctCode: 
    " \
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
    self.Viper[0] = &#123; name: _name, dna: _dna &#125;\n\n\
\
@private\n\
def generateRandomDna(_str: bytes32) -> uint256:\n\
    rand: uint256\n\
    rand = convert(sha3(_str), 'uint256')\n\
    return rand % self.dnaModulos\n\n\
\
@public\n\
def createRandomZombie(_name: bytes32):\n\
    randDna: uint256\n\
    randDna = self.generateRandomDna(_name)\n\
    self.createViper(_name, randDna)\n\
",
    ABI: '[{"name": "__init__", "outputs": [], "inputs": [], "constant": false, "payable": false, "type": "constructor"}, {"name": "createRandomZombie", "outputs": [], "inputs": [{"type": "bytes32", "name": "_name"}], "constant": false, "payable": false, "type": "function", "gas": 73849}, {"name": "viperDNADigits", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 573}, {"name": "dnaModulos", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 603}, {"name": "Viper__name", "outputs": [{"type": "bytes32", "name": "out"}], "inputs": [{"type": "int128", "name": "arg0"}], "constant": true, "payable": false, "type": "function", "gas": 928}, {"name": "Viper__dna", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "int128", "name": "arg0"}], "constant": true, "payable": false, "type": "function", "gas": 952}]'
}

export default code