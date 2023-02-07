const video = document.querySelector(".video")
const videoSource = document.querySelector("#video-source")
const firstVideoBtn = document.querySelector(".first-btn")
const secondVideoBtn = document.querySelector(".second-btn")
const linkBtn = document.querySelector(".link-btn")
const img = document.querySelector(".initial-img")

video.style.display ='none'
firstVideoBtn.style.display='none'
secondVideoBtn.style.display='none'

img.addEventListener('click',()=>{
    video.style.display= 'block';
    img.style.display ='none';
    video.play();
})


video.load();

video.onloadedmetadata= function(){
    console.log('metadata loaded')
    let EndTime = this.duration
    console.log(EndTime)
    
    video.ontimeupdate = function() {
        
        let currTime = video.currentTime
        console.log(currTime)
        console.log(Math.floor(currTime))
        
        for (let i = 0; i < EndTime; i++) {
            
            if (  Math.floor(currTime) === 57 ){
                video.pause();
                console.log('Button pair 1');
                firstVideoBtn.style.display='flex'
                secondVideoBtn.style.display ='flex';
            }
            else if (  Math.floor(currTime) === 90 ){
                video.pause();
                console.log('Button pair 2');
                firstVideoBtn.style.display='flex'
                secondVideoBtn.style.display ='flex';
            }
            else{
                firstVideoBtn.style.display='none'
                secondVideoBtn.style.display='none'
            }
        }

        firstVideoBtn.addEventListener('click', ()=>{
            firstVideoBtn.style.display='none';
            secondVideoBtn.style.display ='none';
            video.currentTime = 60;
            // video.load();
            video.play();
        })

        secondVideoBtn.addEventListener('click', ()=>{
            firstVideoBtn.style.display='none';
            secondVideoBtn.style.display ='none';
            video.currentTime = 93;
            // video.load();
            video.play();
        })
    }
}