let musicas  = [
    {titulo:'Get Lucky', artista:'Daft Punk ft Pharrell Williams',src:'musicas/Daft Punk - Get Lucky ft. Pharrell Williams.mp3', img:'imagens/daft.jpg'},
    {titulo:'Rock With You', artista:'Michael Jackson',src:'musicas/Michael Jackson - Rock With You.mp3', img:'imagens/Rock with you.jpg'},
    {titulo:'Treasure', artista:'Bruno Mars',src:'musicas/Bruno Mars - Treasure.mp3', img:'imagens/bruno2.jpg'},
    {titulo:'Lets Groove', artista:'Earth, Wind & Fire',src:'musicas/Earth, Wind & Fire - Lets Groove.mp3', img:'imagens/lets.jpg'},
    {titulo:'Blind Man', artista:'Xavier Omar',src:'musicas/Xavier Omar - Blind Man.mp3', img:'imagens/Blind man.jpg'}
];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

//Eventos

document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click',() => {
    indexMusica --;
    renderizarMusica(indexMusica);
});

document.querySelector('.proximas').addEventListener('click',() => {
    indexMusica ++;
    renderizarMusica(indexMusica);
});

//Funções

function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
    pausarMusica();
    tocarMusica();
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width =Math.floor(musica.currentTime / musica.duration * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}
function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos
    }
    return campoMinutos + ':' + campoSegundos;
}

