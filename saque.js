const notas = [200, 100, 50, 20, 10, 5, 2]

function sacar(valor){

    if(isNaN(valor)) throw new Error('Coloque um valor válido. (Ex: 120)')

    var index = 0
    while(index < notas.length && notas[index] > valor){
        index++
    }

    if(index >= notas.length){
        throw new Error('Não é possivel sacar este valor no caixa eletronico.')
    }

    for(var i = index; i < notas.length; i++){
        var restante = valor - notas[i]

        if(restante === 0){

            return [notas[i]]

        } else {

            for(var j = i; j < notas.length; j++){
                var saqueRestante = sacar(restante)
    
                if(saqueRestante.length > 0){
                    saqueRestante.unshift(notas[i])
                    return saqueRestante
                }
            }
        }
    }
}
//teste
function teste(valor){
    var resultado = sacar(valor).toString()
    console.log('Cédulas sacadas: ' + resultado)
}

teste(109)