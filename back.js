const playPauseBtn = document.getElementById('play-pause');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const range = document.getElementById('range');
const songTitleElement = document.querySelector('.m-name h3');
const musicImg = document.getElementById('music-img');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

const songs = [
    {
        img: 'download (1).jpeg',
        title: 'Snow Falls',
        src: 'WhatsApp Audio 2024-11-25 at 11.02.03_1279ff70.mp3',
    },
    {
        title: 'The Perfect Girl',
        src: 'perfect girl.mp3',
        img: '♡.jpeg',
    },
    {
        title: 'Soft Core',
        src: 'softcore.mp3',
        img: 'iskelet.jpeg',
    },
    {
        title: 'My Eyes',
        src: 'my eyes.mp3',
        img: 'download (3).jpeg',
    },
    {
        title: 'Ecstacy',
        src: 'estacy.mp3',
        img: 'Great Ben 10 As Kocarius.jpeg',
    },
    {
        title: 'Bot Memory',
        src: 'bot memory.mp3',
        img: 'bot.webp',
    },
    {
        title: 'Sleep Walker',
        src: 'sleep walker.mp3',
        img: 'Sukuna Ryomen.jpeg',
    },
    {
        title: 'Money Trees',
        src: 'money tress.mp3',
        img: 'robain.jpeg',
    },
    {
        title: 'Superman',
        src: 'superman.mp3',
        img: 'super image.jpeg',
    },
    {
        title: 'The last soul Down',
        src: 'soul.mp3',
        img: 'download (4).jpeg',
    }
];

let currentSongIndex = 0;
let isPlaying = false;
let audio = new Audio();

function loadSong(songIndex) {
    const song = songs[songIndex];
    songTitleElement.textContent = song.title;
    musicImg.src = song.img; // Update the image
    audio.src = song.src; // Update the audio source
}

loadSong(currentSongIndex);

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        play.style.display = 'block';
        pause.style.display = 'none';
    } else {
        audio.play();
        play.style.display = 'none';
        pause.style.display = 'block';
    }
    isPlaying = !isPlaying;
});

audio.addEventListener('timeupdate', () => {
    const rangePercent = (audio.currentTime / audio.duration) * 100;
    range.value = rangePercent;
});

range.addEventListener('input', () => {
    const seekTime = (range.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    if (isPlaying) {
        audio.play();
    }
});

prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    if (isPlaying) {
        audio.play();
    }
});

audio.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
});

