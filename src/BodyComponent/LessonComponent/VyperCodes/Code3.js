var code = {
    initialCode: 
    "\
#Overwrite this comment with the correct name and description\n\n\
\
#declare the variable here\
",
    correctCode: 
    "\
#CryptoViper, a smart contract for our CryptoViper game.\n\n\
\
viperDNADigits: public(uint256)\
",
    ABI: '[{"name": "viperDNADigits", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 483}]'
}

export default code;