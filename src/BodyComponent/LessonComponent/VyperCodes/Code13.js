var code = {
    initialCode:
    "\
#CryptoViper, a smart contract for our CryptoViper game.\n\n\
\
viperDNADigits: public(uint256)\n\
dnaModulos: public(uint256)\n\
#write the new variable here\n\n\
\
Viper: public({\n\
    name: bytes32,\n\
    dna: uint256\n\
}[10]) #change this list to map\n\n\
\
@public\n\
def __init__():\n\
    self.viperDNADigits = 16\n\
    self.dnaModulos = 10 ** self.viperDNADigits\n\
    #initialize the new variable here to 0\n\n\
\
@private\n\
def createViper(_name: bytes32, _dna: uint256):\n\
    #increase the new variable here by 1\n\
    self.Viper[0] = { name: _name, dna: _dna } #change the index to the new variable\n\n\
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
    correctCode: 
    "\
#CryptoViper, a smart contract for our CryptoViper game.\n\n\
\
viperDNADigits: public(uint256)\n\
dnaModulos: public(uint256)\n\
numberOfVipers: public(uint256)\n\n\
\
Viper: public({\n\
    name: bytes32,\n\
    dna: uint256\n\
}[10])\n\n\
\
@public\n\
def __init__():\n\
    self.viperDNADigits = 16\n\
    self.dnaModulos = 10 ** self.viperDNADigits\n\
    self.numberOfVipers = 0\n\n\
\
@private\n\
def createViper(_name: bytes32, _dna: uint256):\n\
    self.numberOfVipers = self.numberOfVipers + 1\n\
    self.Viper[self.numberOfVipers] = { name: _name, dna: _dna }\n\n\
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
    ABI: '[{"name": "__init__", "outputs": [], "inputs": [], "constant": false, "payable": false, "type": "constructor"}, {"name": "createRandomZombie", "outputs": [], "inputs": [{"type": "bytes32", "name": "_name"}], "constant": false, "payable": false, "type": "function", "gas": 109834}, {"name": "viperDNADigits", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 573}, {"name": "dnaModulos", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 603}, {"name": "numberOfVipers", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 633}, {"name": "Viper__name", "outputs": [{"type": "bytes32", "name": "out"}], "inputs": [{"type": "int128", "name": "arg0"}], "constant": true, "payable": false, "type": "function", "gas": 958}, {"name": "Viper__dna", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "int128", "name": "arg0"}], "constant": true, "payable": false, "type": "function", "gas": 982}]'
}

export default code;