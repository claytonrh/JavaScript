let lista = [1, 2, 5];
let listaIncluir = [3, 4];

for(let i = 0; i < listaIncluir.length; i++) { //enquanto i for menor que o tamanho total da lista que neste caso é 2
    for (let j = 0; j < lista.length; j++) {
    // irá percorrer a lista incluir e para cada elemento da lista incluir ele irá percorrer os elementos da lista principal
    //EX: o primeiro elemento da listaIncluir é 3, e ele irá percorrer por cada elemento da lista principal e depois com o 4.
      if(lista[j] >= listaIncluir[i]) { // se o valor referente a posição (index) do elemento J for maior que o index do elemento I
            lista.splice(j, 0, listaIncluir[i]); //na lista principal, irá pegar a posição J, não irá excluri nada representado pelo 0....
                                                 //...que seria a posição da lista que vc gostaria de incluir o valor contido em lista incluir do index I 
            j++; //aqui como foi adicionado um novo elemento na listaIncluir é necessário pular um intem para não sobrepor  
        }
    }
}                                      
// console.log(lista); 
{

// com Spread Operator
// const listaResult = [1, 2, ...listaIncluir, 5]; //os 3 pontinhos chama-se spread operator
// console.log(listaResult);
}
{
// sem Spread Operator    
let arr = ['a', 'b', 'c'];
let arr2 = arr;
arr2.push('d');
console.log(`Arr = ${arr}`);
console.log(`Arr2 = ${arr2}`);
// nesse modelo tem um problema porque todas as alterações feitas no arr2 refletem no arr
// para solucionar esse problema é necessário adicionar o Spread Operator no código
}
{
// com Spread Operator    
let arrr = ['a', 'b', 'c'];
let arrr2 = [...arrr];
arrr2.push('d');
console.log(`Arr = ${arrr}`);
console.log(`Arr2 = ${arrr2}`);
}


