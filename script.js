
let songIndex = 0
let audio = new Audio('songs/1.mp3')
const masterPlay = document.getElementById('play')
const previousBtn = document.getElementById('previous')
const nextBtn = document.getElementById('next')
const songItem = Array.from(document.getElementsByClassName('songItem'))
const songInfo = document.querySelector('.songinfo')
const playBtn = Array.from(document.getElementsByClassName('songItemPlay'))
const progressBar = document.getElementById('myProgressBar')
const gif =Array.from(document.querySelectorAll('.gif'))
const masterSongName = document.getElementById('masterSongName')



// song-list
const songArray = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg",duration:"03:50"},
    {songName: "All Eyes On Me - 2PAC", filePath: "songs/2.mp3", coverPath: "covers/2.jpg",duration:"02:43"},
    {songName: "Amplifier - Imran Khan", filePath: "songs/3.mp3", coverPath: "covers/3.jpg",duration:"03:52"},
    {songName: "Ascension - Tevvez", filePath: "songs/4.mp3", coverPath: "covers/4.jpg",duration:"03:24"},
    {songName: "Aap ki Kashish", filePath: "songs/5.mp3", coverPath: "covers/5.jpg",duration:"03:44"},
    {songName: "Darkseid-Alan Walker", filePath: "songs/6.mp3", coverPath: "covers/6.jpg",duration:"03:31"},
    {songName: "Laree Choote", filePath: "songs/7.mp3", coverPath: "covers/7.jpg",duration:"04:00"},
    {songName: "What is Love - David Guetta", filePath: "songs/8.mp3", coverPath: "covers/8.jpg",duration:"02:17"},
    {songName: "Castle of Glass", filePath: "songs/9.mp3", coverPath: "covers/9.jpg",duration:"04:49"},
    {songName: "Bring Me The Horizon", filePath: "songs/10.mp3", coverPath: "covers/10.jpg",duration:"03:17"},
    {songName: "Alive - Sia", filePath: "songs/11.mp3", coverPath: "covers/1.jpg",duration:"04:30"},
    {songName: "Ya Ali", filePath: "songs/12.mp3", coverPath: "covers/2.jpg",duration:"05:13"},
    {songName: "Electrnomia - NCS", filePath: "songs/13.mp3", coverPath: "covers/3.jpg",duration:"03:18"},
    {songName: "Die For You", filePath: "songs/14.mp3", coverPath: "covers/4.jpg",duration:"03:38"},
    {songName: "Killers from the Northside - Kordhell", filePath: "songs/15.mp3", coverPath: "covers/5.jpg",duration:"02:45"},
    {songName: "MoonDeity - NEON BLADE", filePath: "songs/16.mp3", coverPath: "covers/6.jpg",duration:"04:26"},
    {songName: "Murder in my Mind - Kordhell", filePath: "songs/17.mp3", coverPath: "covers/7.jpg",duration:"02:25"},
    {songName: "FUARKSTYLE - Tevvez", filePath: "songs/18.mp3", coverPath: "covers/8.jpg",duration:"02:53"},
    {songName: "In The End - Linkin Park", filePath: "songs/19.mp3", coverPath: "covers/9.jpg",duration:"03:38"},
    {songName: "My Baby Love", filePath: "songs/20.mp3", coverPath: "covers/10.jpg",duration:"02:30"},
]

// adding covers img,song name,duration and filepath scriptically
songItem.forEach((element,i)=>{
     element.getElementsByTagName('img')[0].src = songArray[i].coverPath
     element.getElementsByClassName('songName')[0].innerText = songArray[i].songName
     element.getElementsByClassName('timestamp')[0].innerText = songArray[i].duration
})


// function for play and pause the song
const playSong = ()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.play()
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif[20].style.opacity = '1'
        masterSongName.innerText = songArray[songIndex].songName;
    }
    else{
        audio.pause()
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif[20].style.opacity = '0'

    }
}


//adding event handler to the masterplay button
masterPlay.addEventListener('click',()=>{
    playSong()
})


// updating seekbar
audio.addEventListener('timeupdate',()=>{
   let progress = ((audio.currentTime/audio.duration)*100)
   progressBar.value = progress
})

// updating song durstion as per the seekbar
progressBar.addEventListener('change',()=>{
    let progrss =progressBar.value
    audio.currentTime = ((progrss*audio.duration)/100)
})


// make play a song at a time
 const stopAllPlay = ()=>{
    playBtn.forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })         
 }


// adding event handler to the play button on song
playBtn.forEach((element) => {
    element.addEventListener('click',(e)=>{
       
       
        if(element.classList.contains('fa-circle-play')){
            songIndex = parseInt(e.target.id)
            audio.src = `songs/${songIndex+1}.mp3`
            audio.play() 
            gif[20].style.opacity = '1' 
            masterPlay.classList.remove('fa-circle-play')
            masterPlay.classList.add('fa-circle-pause')
            stopAllPlay()
            e.target.classList.remove('fa-circle-play')
            e.target.classList.add('fa-circle-pause')
            masterSongName.innerText = songArray[songIndex].songName;
        
        }
        else{
            audio.pause()
            masterPlay.classList.remove('fa-circle-pause')
            gif[20].style.opacity = '0'
            masterPlay.classList.add('fa-circle-play')
            e.target.classList.remove('fa-circle-pause')
            e.target.classList.add('fa-circle-play')
           
        }
        
    })
});


// adding event handler on previous button
previousBtn.addEventListener('click',()=>{
    if(songIndex===0){
        songIndex =0
    }
   else {
    songIndex = songIndex-1
}
audio.src = `songs/${songIndex+1}.mp3`;
masterSongName.innerText = songArray[songIndex].songName;
audio.play();
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');
//console.log(playBtn[songIndex]);



})


// adding event handler on next button
nextBtn.addEventListener('click',()=>{
    if(songIndex===20){
        songIndex =0
    }
   else songIndex = songIndex+1

audio.src = `songs/${songIndex+1}.mp3`;
masterSongName.innerText = songArray[songIndex].songName;
audio.play();
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause'); 
})  


