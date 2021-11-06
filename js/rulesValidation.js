export let rulesList={
    required:function(value) {return !!value || 'Required.'},
    numCharacter: function(value,num) {return (value || '').length <= num || `Max ${num} characters`},
    email:function(value){
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
    }
}