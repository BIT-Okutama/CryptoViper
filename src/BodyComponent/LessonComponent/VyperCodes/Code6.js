var code = {
    code: 
    "
        #CryptoViper, a smart contract for our CryptoViper game.

        viperDNADigits: public(uint256)
        
        Viper: public({ 
            name: bytes32, 
            dna: uint256 
        }[10])
        
        @public 
        def constructor(): 
    ",
    ABI: ""
}

export default code;