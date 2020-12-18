function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var resut = document.getElementById('res')
    var fano= document.getElementById('tano')

    if(fano.value.length == 0 || fano.value >ano){

        window.alert('[ERRO] verifique os dados e tente novamente.')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero ='Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','Img/menino1.png')
                document.body.style.background =('black')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'Img/adolescenteho.png')
                document.body.style.background = ('green')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'Img/home.png')
                document.body.style.background =('blue')
            }else{
                //idoso
                img.setAttribute('src', 'Img/idoso.png')
                document.body.style.background =('yellow')
                
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','Img/menina.png')
                document.body.style.background = ('pink')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'Img/adolescente-mu.png')
                document.body.style.background =('#37263A')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'Img/mulher.png')
                document.body.style.background =('#A37F82')
            }else{
                //idoso
                img.setAttribute('src', 'Img/idosa.png')
                document.body.style.background = ('#988D96')
            }
        }
        resut.style.textAlign = 'center'
        resut.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resut.appendChild(img)
    }
    
    
}