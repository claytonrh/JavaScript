console.log('Javascript carregado');

function validaCPF(cpf) {
    // console.log(cpf.length);
    if(cpf.length !=11) {
    return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);

        var soma = 0;
        for(var i = 10; i > 1; i --) {
            soma += numeros.charAt(10 - i) * i;
        }  

            // resto da divisão de soma por 11 é menor que 2? se for retorne 0, senão 11 - resto da divisão de soma por 11...
            var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);            
            
            
            //validação do primeiro digito
            if (resultado != digitos.charAt(0)) {
                return false;
            }        

            // resetar variavel soma
            soma = 0;
            numeros = cpf.substring(0, 10);

            for(var k = 11; k > 1; k--) {
                soma += numeros.charAt(11 - k) * k;
            }

            resultado = soma % 11 < 2 ? 0 : 11 -(soma % 11);   

              // validação do segundo dígito
            if (resultado != digitos.charAt(1)) {
              return false;
            }    
    return true;
  }
}


function validacao () {
    console.log ('Iniciando validação CPF');  
    document.getElementById('success').style.display = "none";
    document.getElementById('error').style.display = "none";

    var cpf = document.getElementById('cpf_digitado').value; 
    // estou fazendo o JStentando ler o elemento que tenha o ID 'cpf digitado'
    
    var resultadoDavalidacao = validaCPF(cpf);

    if (resultadoDavalidacao == true) { 
        // em JS se você sabe que o valor armazenado da variavel e booleano (false/true) não é necessário fazer == true
        document.getElementById('success').style.display='block';    
    } else { document.getElementById('error').style.display='block';    
}
    
}