let circle = document.querySelector(".casino");
        circle.onclick = function(){
            angle = Math.random()*1000;
            time = Math.floor(Math.random()*5);
            this.style.transition = `${time+2}s`;
            this.style.transform = `rotate(${angle+700}rad)`;
            console.log('time: ',time, "angle : ", angle)
        }