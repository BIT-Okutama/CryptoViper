var code = {
    code: 
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
    ",
    ABI: '[{"name": "__init__", "outputs": [], "inputs": [], "constant": false, "payable": false, "type": "constructor"}, {"name": "viperDNADigits", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 483}, {"name": "dnaModulos", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 513}, {"name": "Viper__name", "outputs": [{"type": "bytes32", "name": "out"}], "inputs": [{"type": "int128", "name": "arg0"}], "constant": true, "payable": false, "type": "function", "gas": 838}, {"name": "Viper__dna", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "int128", "name": "arg0"}], "constant": true, "payable": false, "type": "function", "gas": 862}]'
}

export default code;