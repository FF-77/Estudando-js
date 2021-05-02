function aplicando_cor(cor){
    var elemento_1 = document.getElementById('colorindo').style.color = cor;
}

function ocultando_texto(){
    var elemento_2 = document.getElementById('texto_1').style.display = 'none';
}

function mostrando_texto() {
    var elemento_3 = document.getElementById('texto_1').style.display = 'block';
}

function oculta_mostra_texto(){

    var elemento_4 = document.getElementById('texto_1').style.display;

    if(elemento_4 == 'none')
        document.getElementById('texto_1').style.display = 'block';
    else
        document.getElementById('texto_1').style.display = 'none';
}
