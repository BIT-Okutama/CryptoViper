var code = {
    initialCode: 
    "\
#CryptoViper, a smart contract for our CryptoViper game.\n\n\
\
viperDNADigits: public(uint256)\n\
\
Viper: public({\n\n\
    name: bytes32,\n\
    dna: uint256\n\
}[10])\n\n\
\
#declare your function here\
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
}[10])\n\n\
\
@public\n\
def constructor():\
",
    ABI: "unexpected EOF while parsing (<unknown>, line 12)"
}

export default code;