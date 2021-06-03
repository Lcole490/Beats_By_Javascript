

class DrumKit{
    constructor(){
        this.pads = document.querySelectorAll('.pad');
        this.kickAudio = document.querySelector('.kick-sound');
        this.snareAudio = document.querySelector('.snare-sound');
        this.hihatAudio = document.querySelector('.hihat-sound');

        this.index= 0; // Monitors the status of the track, or progression point of the track
    }

    repeat(){
        let step = this.index % 8;
        console.log(step);
        this.index++;
    }

    start(){
        setInterval(()=> {

            this.repeat();
        }, 1000);
    }
}



const drumKit = new DrumKit();

drumKit.start();