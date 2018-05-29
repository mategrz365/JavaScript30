    let date = new Date();       
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let secondHand = document.querySelector('.second-hand');
    let minuteHand = document.querySelector('.min-hand');
    let hourHand = document.querySelector('.hour-hand');

    let FindHour = function(){
        let hour = date.getHours(); 
        if (hour>=12) hour = hour - 12;
        return hour;
    } 
    
    let RotateAngleSeconds = function(){
        return 'rotate('+ seconds * 6 + 'deg' + ')';
    }
    
    let RotateAngleHour = function(){
        return 'rotate('+ FindHour() * 6 + 'deg' + ')';
    }
    
    let RotateAngleMinutes = function(){
        return 'rotate('+ minutes * 30 + 'deg' + ')';
    }

    function setCurrentTime() {             
            secondHand.style.webkitTransform = RotateAngleSeconds();
            hourHand.style.webkitTransform = RotateAngleHour();
            minuteHand.style.webkitTransform = RotateAngleMinutes();
    };
           
    setInterval(setCurrentTime, 1000);


