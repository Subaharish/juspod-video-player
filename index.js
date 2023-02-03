const video = document.querySelector(".video")
const videoSource = document.querySelector("#video-source")
const backBtn = document.querySelector(".back-btn")
const firstVideoBtn = document.querySelector(".first-btn")
const secondVideoBtn = document.querySelector(".second-btn")
const thirdVideoBtn = document.querySelector(".third-btn")
const forthVideoBtn = document.querySelector(".forth-btn")
const linkBtn = document.querySelector(".link-btn")

firstVideoBtn.style.display='none'
secondVideoBtn.style.display='none'
thirdVideoBtn.style.display='none'
forthVideoBtn.style.display='none'
backBtn.style.display='none'

video.load();

video.onloadedmetadata= function(){

    console.log('metadata loaded')
    let EndTime = this.duration
    console.log(EndTime)
    
    video.ontimeupdate = function() {
        
        let currTime = video.currentTime
        console.log(currTime)
        console.log(Math.ceil(currTime))
        
        for (let i = 0; i < EndTime; i++) {
            
            if (  Math.ceil(currTime) === 31 ){
                video.pause();
                console.log('Button pair 1');
                firstVideoBtn.style.display='flex'
                secondVideoBtn.style.display ='flex';
            }
            else if (  Math.ceil(currTime) === 91 ){
                video.pause();
                console.log('Button pair 2');
                backBtn.style.display='block';
                thirdVideoBtn.style.display='flex'
                forthVideoBtn.style.display ='flex';
            }
            else if (  Math.ceil(currTime) === 137 ){
                video.pause();
                console.log('Button pair 2');
                backBtn.style.display='block';
                thirdVideoBtn.style.display='flex'
                forthVideoBtn.style.display ='flex';
            }
            else if (  Math.ceil(currTime) === 178 ){
                video.pause();
                console.log('Button pair 2');
                backBtn.style.display='block';
                thirdVideoBtn.style.display='flex'
                forthVideoBtn.style.display ='flex';
            }
            else{
                firstVideoBtn.style.display='none'
                secondVideoBtn.style.display='none'
                thirdVideoBtn.style.display='none'
                forthVideoBtn.style.display='none'
                backBtn.style.display='none'
            }
        }

        backBtn.addEventListener('click',()=>{
            thirdVideoBtn.style.display='none';
            forthVideoBtn.style.display ='none';
            firstVideoBtn.style.display='flex';
            secondVideoBtn.style.display ='flex';
        })

        firstVideoBtn.addEventListener('click', ()=>{
            firstVideoBtn.style.display='none';
            secondVideoBtn.style.display ='none';
            backBtn.style.display = 'none';
            video.currentTime = 35;
            // video.load();
            video.play();
        })

        secondVideoBtn.addEventListener('click', ()=>{
            firstVideoBtn.style.display='none';
            secondVideoBtn.style.display ='none';
            backBtn.style.display = 'none';
            video.currentTime = 95;
            // video.load();
            video.play();
        })

        thirdVideoBtn.addEventListener('click', ()=>{
            thirdVideoBtn.style.display='none';
            forthVideoBtn.style.display ='none';
            backBtn.style.display = 'none';
            video.currentTime = 141;
            videoSource.setAttribute( 'src', 'assets/Juspod - Copy.mp4')
            // video.load();
            video.play();
        })

        forthVideoBtn.addEventListener('click', ()=>{
            thirdVideoBtn.style.display='none';
            forthVideoBtn.style.display ='none';
            backBtn.style.display = 'none';
            videoSource.setAttribute( 'src', 'assets/Juspod - Copy.mp4')
            video.currentTime = 182;
            // video.load();
            video.play();
        })

    }
}


// firstVideoBtn.addEventListener('click', () => {
//     // video.pause();
//     // videoSource.setAttribute( 'src', 'assets/video-two.mp4')
//     // video.play();
//     video.currentTime = 35;
//     video.load();
//     video.play();
// })

// secondVideoBtn.addEventListener('click', () => {
//     video.pause();
//     videoSource.setAttribute( 'src', 'assets/video-three.mp4')
//     video.load();
//     video.play();
// })