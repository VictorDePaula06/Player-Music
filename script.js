
//Playlist

let musicas = [
  {titulo:'Senhor do tempo', artista:"Charlie Brown Jr", src:"./music/Senhor Do Tempo.mp3",img:"./imgs/senhor do tempo.jpg", artistaLink:"https://open.spotify.com/artist/1on7ZQ2pvgeQF4vmIA09x5"},
  {titulo:'keep moving', artista:"The Jungle", src:"./music/keep moving.mp3",img:"./imgs/the jungle.jpg", artistaLink:"https://open.spotify.com/artist/59oA5WbbQvomJz2BuRG071"},
  {titulo:'Listen', artista:"Beyoncé", src:"./music/Listen.mp3",img:"./imgs/Beyoncé.jpg", artistaLink:"https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"},
  {titulo:'Home', artista:"Ocean Alley", src:"./music/home.mp3",img:"./imgs/ocean alley.jpg", artistaLink:"https://open.spotify.com/artist/18lpwfiys4GtdHWNUu9qQr"},
  {titulo:'No Angels', artista:"The Blue Stones", src:"./music/No Angels.mp3",img:"./imgs/tBStones.jpg", artistaLink:"https://open.spotify.com/artist/5VPCIIfZPK8KPsgz4jmOEC"},
  {titulo:'Sacrifice', artista:"The Weeknd", src:"./music/Sacrifice.mp3",img:"./imgs/theWeeknd.jpeg", artistaLink:"https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ?si=BbPvx0ewSx-HG1CDjHc4KA"},
  {titulo:'Champanhe e Água Benta', artista:"Charlie Brown Jr", src:"./music/Champanhe E Água Benta.mp3",img:"./imgs/Champanhe.jpg", artistaLink:"https://open.spotify.com/artist/1on7ZQ2pvgeQF4vmIA09x5"}
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
        indexMusica = 6;
    }
    renderizarMusica(indexMusica);
    musica.play()
    button_play.style.display = "none"
    button_pause.style.display = "inline"
    
});

// Botão para avançar a próxima Música
button_proxMusica.addEventListener("click", () => {
   indexMusica ++
   if(indexMusica > 6){
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
        nomeArtista.innerHTML = `<a href="${musicas[index].artistaLink}" target="_blank">${musicas[index].artista}</a>`;
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


