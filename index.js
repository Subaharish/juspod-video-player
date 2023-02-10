const video = document.querySelector(".video")
const videoSource = document.querySelector("#video-source")
const firstVideoBtn = document.querySelector(".first-btn")
const secondVideoBtn = document.querySelector(".second-btn")
const juspodBtn = document.querySelector(".juspod-btn")
const linkBtn = document.querySelector(".link-btn")
const backBtn = document.querySelector(".back-btn")
const restartBtn = document.querySelector(".restart-btn")
const skipBtn = document.querySelector(".skip-btn")
const btmBtn = document.querySelector(".btm-btn")
const img = document.querySelector(".initial-img")

video.style.display ='none'
firstVideoBtn.style.display='none'
secondVideoBtn.style.display='none'
btmBtn.style.display='none'

img.addEventListener('click',()=>{
    video.style.display= 'block';
    img.style.display ='none';
    video.play();
    btmBtn.style.display='flex'
})

video.load();

video.onloadedmetadata= function(){
    console.log('metadata loaded')
    let EndTime = this.duration
    console.log(EndTime)
    
    video.ontimeupdate = function() {
        
        let currTime = video.currentTime;
        console.log(currTime);
        console.log(Math.floor(currTime));
        let skipTime, replayTime;
        
        for (let i = 0; i < EndTime; i++) {

            if ( currTime <= 58){
                console.log("1");
                replayTime=0;
                skipTime = 58;
            }
            else if( currTime > 58 && currTime < 94 ){
                console.log("2");
                replayTime= 63;
                skipTime = 94;
            }else if( 99 < currTime){
                skipBtn.style.display = 'none'
                console.log("3");
                replayTime= 99;
                skipTime = currTime;
            }
            
            if (Math.floor(currTime) === 55){
                juspodBtn.classList.add('blink');
                setTimeout(() => {
                    juspodBtn.classList.remove('blink');
                }, 3000);
            }
            else if (Math.floor(currTime) === 91){
                juspodBtn.classList.add('blink');
                setTimeout(() => {
                    juspodBtn.classList.remove('blink');
                }, 3000);
            }
            else if (Math.floor(currTime) === 132){
                juspodBtn.classList.add('blink');
                setTimeout(() => {
                    juspodBtn.classList.remove('blink');
                }, 3000);
            }


            else if (  Math.round(currTime) === 58 ){
                juspodBtn.classList.remove('blink');
                video.pause();
                console.log('Button pair 1');
                firstVideoBtn.style.display='flex'
                secondVideoBtn.style.display ='flex';
            }
            else if (  Math.floor(currTime) === 94 ){
                juspodBtn.classList.remove('blink');
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
            firstVideoBtn.classList.add('bounce');
            setTimeout(() => {
                firstVideoBtn.classList.remove('bounce');
                firstVideoBtn.style.display='none';
                secondVideoBtn.style.display ='none';
                video.currentTime = 63;
                // video.load();
                video.play();
            }, 1000);
        })

        secondVideoBtn.addEventListener('click', ()=>{
            secondVideoBtn.classList.add('bounce');
            setTimeout(()=>{
                firstVideoBtn.style.display='none';
                secondVideoBtn.style.display ='none';
                video.currentTime = 99;
                // video.load();
                video.play();
            },1000);
        })

        restartBtn.addEventListener('click', ()=>{
            video.currentTime = 0;
            video.play();
        })

        skipBtn.addEventListener('click', ()=>{
            video.currentTime = skipTime;
            video.play();
        })

        backBtn.addEventListener('click', ()=>{
            video.currentTime = replayTime;
            video.play();
        })
        
    }
}