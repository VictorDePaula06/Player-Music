
//Playlist

let musicas = [
    {titulo:'No Angels', artista:"The Blue Stones", src:"./music/No Angels.mp3",img:"./imgs/tBStones.jpg"},
    {titulo:'Just Wanna Rock', artista:"Lil Uzi Vert", src:"./music/Just Wanna Rock.mp3",img:"./imgs/logo.jpg"},
    {titulo:'Sacrifice', artista:"The Weeknd", src:"./music/Sacrifice.mp3",img:"./imgs/theWeeknd.jpeg"},
    {titulo:'Me perdoa', artista:"Ferrugem e Iza", src:"./music/Me perdoa.mp3",img:"./imgs/me perdoa.jpeg"},
    {titulo:'Senhor do tempo', artista:"Charlie Brown Jr", src:"./music/Senhor Do Tempo.mp3",img:"./imgs/senhor do tempo.jpg"},
    {titulo:'Champanhe e Água Benta', artista:"Charlie Brown Jr", src:"./music/Champanhe E Água Benta.mp3",img:"./imgs/Champanhe.jpg"}

];


// variaveis

let musica = document.getElementById("music");
let indexMusica = 0;
let image = document.querySelector(".poster img")
let button_musicaAnterior = document.getElementsByClassName("btn")[0]
let button_play = document.getElementsByClassName("btn")[1];
let button_pause = document.getElementsByClassName("btn")[2];
let button_proxMusica = document.getElementsByClassName("btn")[3];
let inicio_musica = document.getElementsByClassName("inicio")[0]
let duracao_musica = document.getElementsByClassName("fim")[0];
let nomeMusica = document.getElementsByClassName("music")[0];
let nomeArtista = document.getElementsByClassName("cantor")[0];
let barraVolume = document.getElementById("barraVol");
let diaSemana = document.getElementsByClassName("diaSemana")[0];
let hora = document.getElementsByClassName("hora")[0];
let dataDia = document.getElementsByClassName("dataDia")[0];
let mes = document.getElementsByClassName("mes")[0];

// atualizar Dia e data


function tick(){

  let horaAtual = new Date();
  let d = horaAtual.getDay()
  let data = horaAtual.getDate()
  let meses = horaAtual.getMonth()

  


  switch(d){
      case 0 :
          diaSemana.innerHTML = "Domingo"
           break
      case 1 :
          diaSemana.innerHTML = "Segunda-Feira"
          break
      case 2 : 
          diaSemana.innerHTML = "Terça-Feira"  
          break
      case 3 :
          diaSemana.innerHTML = "Quarta-Feira"
          break
      case 4 :
          diaSemana.innerHTML = "Quinta-Feira"
          break
      case 5 :
          diaSemana.innerHTML = "Sexta-Feira"
          break
      case 6 :
          diaSemana.innerHTML = "Sábado"
          break  
  }
  
  dataDia.innerHTML = ", " + data + " de " ;
  
  switch(meses){
        case 0 :
          mes.innerHTML = "Janeiro"
        break  
        case 1 :
          mes.innerHTML = "Fevereiro"
        break 
        case 2 :
          mes.innerHTML = "Março"
        break  
        case 3 :
          mes.innerHTML = "Abril"
        break  
        case 4 :
          mes.innerHTML = "Maio"
        break  
        case 5 :
          mes.innerHTML = "Junho"
        break  
        case 6 :
          mes.innerHTML = "Julho"
        break  
        case 7 :
          mes.innerHTML = "Agosto"
        break  
        case 8 :
          mes.innerHTML = "Setembro"
        break  
        case 9 :
          mes.innerHTML = "Outubro"
        break  
        case 10 :
          mes.innerHTML = "Novembro"
        break  
        case 11 :
          mes.innerHTML = "Dezembro"
        break   
  }

  //atualizar Horário

  let hor = horaAtual.getHours()
  let min = horaAtual.getMinutes()

  if(min >= 10){
      hora.innerHTML = hor + ":" + min
  }else{
      hora.innerHTML = hor + ":" + "0" + min
  }

}

setInterval(tick,1000)



// eventos

musica.addEventListener('timeupdate',atualizar_barra);

// Botão para retroceder Música
button_musicaAnterior.addEventListener("click" , () => {
    indexMusica --
    if(indexMusica < 0){
        indexMusica = 5;
    }
    renderizarMusica(indexMusica);
    musica.play()
    button_play.style.display = "none"
    button_pause.style.display = "inline"
    
});

// Botão para avançar a próxima Música
button_proxMusica.addEventListener("click", () => {
   indexMusica ++
   if(indexMusica > 5){
    indexMusica = 0;
   }
   renderizarMusica(indexMusica);
   musica.play()
   button_play.style.display = "none"
   button_pause.style.display = "inline"

});


// funções


function renderizarMusica(index){
    musica.setAttribute("src", musicas[index].src);
    musica.addEventListener("loadeddata",() => {
        nomeMusica.innerHTML = musicas[index].titulo;
        nomeArtista.innerHTML = musicas[index].artista
        image.src = musicas[index].img
        duracao_musica.innerHTML = segundosParaMin(Math.floor(musica.duration))

    });

}


function play(){
    musica.play();
    button_play.style.display = "none"
    button_pause.style.display = "inline"
    duracao_musica.innerHTML = segundosParaMin(Math.floor(musica.duration))

}

function pause(){
    musica.pause();
    button_pause.style.display = "none"
    button_play.style.display = "inline"
 
}

function atualizar_barra(){
    let bar = document.getElementById("barra");
    let tempoDecorrido = document.getElementsByClassName("inicio")[0]
    bar.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + "%";
    tempoDecorrido.innerHTML = segundosParaMin(Math.floor(musica.currentTime));
    
}

function segundosParaMin(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = "0" + campoSegundos;  
    }
    return campoMinutos + ":" + campoSegundos;
}

function volume(){
    musica.volume = barraVolume.value
}


