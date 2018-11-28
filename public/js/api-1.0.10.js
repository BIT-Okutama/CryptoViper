const API_URL =  'https://api.vyper.online/'
const COMPILE_ENDPOINT = 'compile/'
const EXAMPLE_URL = 'https://raw.githubusercontent.com/ethereum/vyper/master/examples/'

var API = (function(API, $, undefined) {
  
  API.editor = null
  API.abiEditor = null
  API.lllEditor = null
  
  API.params = {
    'source': ""
  }
  
  API.setCompileToUnknown = function() {
    $('#abiResult').html('<i class="fa fa-question-circle" aria-hidden="true"></i>')
    $('#lllResult').html('<i class="fa fa-question-circle" aria-hidden="true"></i>')
  }
  
  API.load = function() {
    $('#result').empty();
    this.params['source'] = this.editor.getValue();
    this.setCompileToUnknown();
    
    $.ajax({
      url: API_URL + COMPILE_ENDPOINT,
      method: 'POST',
      cache: false,
      dataType: 'json',
      data: this.params,
      success: function(data) {
        $('#abiCompact').html(data.result.json)
      },
      fail: function() {
        $('#result').html("Mah.")
      }
    })
  };
  
  API.init = function() {
    console.log("API initialized.")
    
    this.editor = ace.edit("editor");
    this.editor.setTheme("ace/theme/crimson_editor");
    this.editor.getSession().setMode("ace/mode/vyper"); 
  }
  
  return API;

}(API || {}, jQuery));