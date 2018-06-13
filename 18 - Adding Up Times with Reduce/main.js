const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
const seconds = timeNodes
            .map(node => node.dataset.time)
            .map(timeCode => {
                const[mins,secs] = timeCode.split(':').map(parseFloat);
                return (mins*60) + secs;
            })
            .reduce((total, seconds) => total + seconds);
            

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft/3600);
secondsLeft = secondsLeft % 3600;
const mins = Math.floor(secondsLeft/60);
const secs = secondsLeft % 60;

const duration = `${hours}:${mins}:${secs}`;
console.log(duration);

/*
const videoList = document.querySelectorAll('.videos li');
const videoObjTable = [];

function createObj(video){  
    
    let videoObj = {    
        title: video.innerText,
        id: video.dataset.bracketsId,
        duration: video.dataset.time,
    } 
}        

videoList.forEach(video => {
    videoObjTable.push(createObj(video));
});
*/

    
