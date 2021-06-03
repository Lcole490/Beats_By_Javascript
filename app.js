

class DrumKit{
    constructor(){
        this.pads = document.querySelectorAll('.pad');
        this.playBtn = document.querySelector('.play')
        this.kickAudio = document.querySelector('.kick-sound');
        this.snareAudio = document.querySelector('.snare-sound');
        this.hihatAudio = document.querySelector('.hihat-sound');

        this.index= 0; // Monitors the status of the track, or progression point of the track

        this.bpm = 150;
    }

    activePad(){
        this.classList.toggle('active');
    }

    repeat(){               // Method to repeat steps of the track 
        let step = this.index % 8;
        console.log(`Step ${step}, Index ${this.index}`);

        // loop over the pads
        const activeBars = document.querySelectorAll(`.b${step}`);
        activeBars.forEach(bar =>{
            bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;

            // This checks if pads are active. If they are, the sound would play for that pad.
            if(bar.classList.contains('active')){
                // Check each sound to correspond them with correct pad class (kick, snare, hihat, etc)

                if(bar.classList.contains("kick-pad")){
                    this.kickAudio.play();
                }
                if(bar.classList.contains("snare-pad")){
                    this.snareAudio.play();
                }
                if(bar.classList.contains("hihat-pad")){
                    this.hihatAudio.play();
                }
            }
        });
        this.index++;
       
        console.log(activeBars);


    }

    start(){            // Method to set the interval at which the step would increment. in this case a step is added every second

        const interval = (60/this.bpm) * 1000;
        setInterval(()=> {

            this.repeat();
        }, interval);
    }
}



const drumKit = new DrumKit();


drumKit.pads.forEach(pad => {
    pad.addEventListener('click', drumKit.activePad);
    pad.addEventListener('animationend', function(){
        this.style.animation= "";
    });
});


drumKit.playBtn.addEventListener("click", ()=> {
    drumKit.start();
});