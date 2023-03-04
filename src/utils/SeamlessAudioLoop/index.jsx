import { useEffect } from 'react';

const SeamlesAudioLoop = ({sound}) => {
    const myAudio = new Audio(sound, { preload: true })
    let x = true
    myAudio.ontimeupdate = function () {
        const t = myAudio.currentTime / myAudio.duration
        if (t > 0.825 && t < 0.9 && x) {
            x = false
            myAudio2.currentTime = 0;
            myAudio2.play();
        }
        if (t > 0.9) {
            x = true
        }
    };
    const myAudio2 = new Audio(sound, { preload: true });
    myAudio2.ontimeupdate = function () {
        const t = myAudio2.currentTime / myAudio2.duration
        if (t > 0.825 && t < 0.9 && x) {
            x = false
            myAudio.currentTime = 0;
            myAudio.play();
        }
        if (t > 0.9) {
            x = true
        }
    };

    useEffect(() => {
        myAudio.play();
    }, [])
    useEffect(() => () => {
        myAudio.pause();
        myAudio2.pause();
    }, [])
}

export default SeamlesAudioLoop;
