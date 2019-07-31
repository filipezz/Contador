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
        if (inter<=0){
            inter=1
        }
        if(i<f){
            //Contagem crescente
            for(c = i; c <=f; c+=inter){
            box2.innerHTML = box2.innerHTML + ` ${c}`
        }
        
        }else {
            //Contagem regressiva
            for(c = i; c >=f; c+=inter){
                box2.innerHTML = box2.innerHTML + ` ${c}`
        }
    }
}
}  