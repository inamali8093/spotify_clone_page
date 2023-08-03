const playBtn = document.querySelector('#play')
const progressBar = document.getElementById('myProgressBar')
const audioElement = new Audio('songs/1.mp3')
const gif = document.getElementById('gif')
// audioElement.play()

//adding eventlistner to play button
playBtn.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
   {
     audioElement.play()
    gif.style.opacity = '1'
    playBtn.classList.remove('fa-circle-play')
    playBtn.classList.add('fa-circle-pause')
   }
else {
    audioElement.pause()
    gif.style.opacity = '0'
    playBtn.classList.remove('fa-circle-pause')
    playBtn.classList.add('fa-circle-play')
}

})


//making progerss bar to active
audioElement.addEventListener('timeupdate',()=>{
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    progressBar.value = progress
})


// making change the duration of song as per the progress bar
progressBar.addEventListener('change',()=>{
    progress = parseInt(progressBar.value)
    audioElement.currentTime = (progress*audioElement.duration)/100
})