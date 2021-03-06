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
@private\n\
def generateRandomDna(_str: bytes32) -> uint256:\n\
    #write the function's code here\
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
def generateRandomDna(_str: bytes32) -> uint256:\n\
    rand: uint256\n\
    rand = convert(sha3(_str), 'uint256')\n\
    return rand % self.dnaModulos\
",
    ABI: '[{"name": "__init__", "outputs": [], "inputs": [], "constant": false, "payable": false, "type": "constructor"}, {"name": "viperDNADigits", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 543}, {"name": "dnaModulos", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 573}, {"name": "Viper__name", "outputs": [{"type": "bytes32", "name": "out"}], "inputs": [{"type": "int128", "name": "arg0"}], "constant": true, "payable": false, "type": "function", "gas": 898}, {"name": "Viper__dna", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "int128", "name": "arg0"}], "constant": true, "payable": false, "type": "function", "gas": 922}]'
}

export default code;