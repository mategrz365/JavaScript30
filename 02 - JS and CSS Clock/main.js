   
    let secondHand = document.querySelector('.second-hand');
    let minuteHand = document.querySelector('.min-hand');
    let hourHand = document.querySelector('.hour-hand');

 function FindHour(hour){
        if (hour>=12) hour = hour - 12;
        return hour;
    } 
    
  function RotateAngleSeconds(seconds) {
      /*if (seconds == 0) seconds = 60;*/
        return 'rotate('+ seconds * 6 + 'deg' + ')';
    }
    
    function RotateAngleHour(hour) {
        return 'rotate('+ hour * 30 + 'deg' + ')';
    }
    
  function RotateAngleMinutes (minutes) {
        return 'rotate('+ minutes * 6 + 'deg' + ')';
    }

    function setCurrentTime() {  
         let date = new Date();       
         let seconds = date.getSeconds();
         let minutes = date.getMinutes();
         let hour = date.getHours(); 
         FindHour(hour);
          secondHand.style.webkitTransform = RotateAngleSeconds(seconds);
            hourHand.style.webkitTransform = RotateAngleHour(hour);
           minuteHand.style.webkitTransform = RotateAngleMinutes(minutes);
           console.log(hour);            
    };
           
    setInterval(setCurrentTime, 1000);


