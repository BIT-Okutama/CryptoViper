var code = {
    initialCode: 
    "\
#Overwrite this comment with the correct name and description\n\n\
\
viperDNADigits: public(uint256)\n\n\
\
#declare you struct here\
",
    correctCode: 
    "\
#CryptoViper, a smart contract for our CryptoViper game.\n\n\
\
viperDNADigits: public(uint256)\n\n\
\
Viper: public({\n\
    name: bytes32,\n\
    dna: uint256\n\
})\
",
    ABI: '[{"name": "viperDNADigits", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 483}, {"name": "Viper__name", "outputs": [{"type": "bytes32", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 591}, {"name": "Viper__dna", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 615}]'
}

export default code;