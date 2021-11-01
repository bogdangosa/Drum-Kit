const Keys = document.getElementsByClassName("key");
const KeysText = document.getElementsByTagName("kbd");

for(let i=0;i<Keys.length;i++){
    Keys[i].addEventListener('click',()=>{
        let keyValue = KeysText[i].textContent;
        const audio = document.querySelector(`audio[data-key="${keyValue.charCodeAt(0)}"]`);
        Sound(audio,Keys[i]);
    })
}


document.addEventListener('keydown',(e)=>{
    console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.key.toUpperCase().charCodeAt(0)}"]`);
    const Key = document.querySelector(`.key[data-key="${e.key.toUpperCase().charCodeAt(0)}"]`);
    Sound(audio,Key);;
})

const Sound = (audio,Key) =>{
    if(!audio)return;
    audio.currentTime=0;
    audio.play();
    Key.classList.add("playing");
    setTimeout(()=>{
        Key.classList.remove("playing");
    },500);   
}