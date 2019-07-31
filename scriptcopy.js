function contar() {
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var intervalo = document.querySelector('input#intervalo')
    var box2 = document.querySelector('div#box2')

    

    if (inicio.value.length == 0 || fim.value.length == 0 || intervalo.value.length == 0){
        alert('[ERRO] Faltam dados')
    } else {
        box2.innerHTML = 'Contando:'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var inter = Number(intervalo.value)
        var vetor = [i]
        

        if (inter<=0){
            inter=1
        }
        
        
        for(let c=0 ; vetor[vetor.length-1] + inter <= f;c++ ){  //enquanto ultimo valor do array for menor que o Fim
            
            
            var somar = vetor[vetor.length-1] + inter // soma o ultimo valor do array com o intervalo
            
            vetor.push(somar)
            
           
            
           
            
        }
        box2.innerHTML = vetor
        
    }
}