// Crie uma função com dois argumentos, que retorna a subtração deles.
//functio é um bloco de codigo que pode ser chamado
function nomeDaFuncao ( argumento1 , argumento2){
    return argumento1-argumento2;
}
//ou
var nomeDaFuncao = function(argumento1, argumento2){
    return argumento1-argumento2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando "5" ao resultado retornado da função.
 var nomeDaVariavel = nomeDaFuncao(50,5) +5
// Qual o valor atualizado dessa variável?
50
// Declare uma nova variável, sem valor.
 var roberta;
/*
Crie uma função que adicione um valor à variável criada acima, e retorne a seguinte mensagem:
    "O novo valor da minha variável agora é VALOR."
    (onde VALOR é o novo valor da variável).
*/

roberta = 15;
function chamaRoberta(){
    roberta  = 15
    console.log("Novo valor da minha variavel é " + roberta);
}

// Invoque a função criada acima.
 chamaRoberta()
// Qual o retorno da função? (Use comentários de bloco).


/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando "2" ao resultado da multiplicação.
*/
function mult(argumento1, argumento2, argumento3){
    //if (condicao de verdade){codigo}
    // sinal de pipe || é igual = ou 
    if(argumento1 == undefined && argumento2 == undefined && argumento3 == undefined){
        console.log = ( "Preencha todos os valores corretamente" )
    }
    return argumento1 * argumento2 * argumento3 + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.


// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).


// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.


// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).


/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne entrou no if.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano "false".
6. E ainda, se nenhuma das condições acima forem atendidas, retorne "null".
*/

function tres (x , y , z){
    if(x && !y && !z){
        console.log ("Entrou no primeiro")
    }

    else if (x, y && !z){
        console.log("Entrou na segunda opção");
        console.log (x + y);
    }

    else if(x,y,z){
        console.log("Entrou na terceira condição");
        console.log( (x+y)/z)
    }
    else if (x == undefined && y == undefined && z == undefined){
        console.log("Entrou na quarta condição"); 
        console.log(false)
    }
    else{
        console.log(null)
    }
}














// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.