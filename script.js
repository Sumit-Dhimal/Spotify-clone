console.log("Hello world");

//initialzie variables
let songIndex = 0;
let audioElement = new Audio('songs/2.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName:"All Blue", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"All Blue", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"All Blue", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"All Blue", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"All Blue", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"All Blue", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"All Blue", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"All Blue", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"All Blue", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"}
]


//audioElement.play();

//Handle play/pause clicks
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-solid", "fa-circle-play", "fa-2xl"); // use comma for multiple class
        masterPlay.classList.add("fa-solid", "fa-circle-pause", "fa-2xl");
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-solid", "fa-circle-pause", "fa-2xl");
        masterPlay.classList.add("fa-solid", "fa-circle-play", "fa-2xl");
    }
})

// listen to events
myProgressBar.addEventListener('timeupdate', ()=> {
    console.log('timeupdate');
})
