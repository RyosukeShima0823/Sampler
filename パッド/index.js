var musics = ['パフ.mp3','魔王魂  戦闘14.mp3','チーン1.mp3','「さあ、いくぞ！」.mp3','チリン.mp3','出題1.mp3'];
document.onkeydown = function (e){
	if(!e) e = window.event;
    if(e.keyCode > 48 && e.keyCode < 58){
        const music = new Audio(musics [e.keyCode - 49]);
        music.play();
    };
};