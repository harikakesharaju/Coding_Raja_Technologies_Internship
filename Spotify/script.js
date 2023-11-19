console.log("hello")
const songs=[
    { name:"heeriye",path:"songs/1.mp3",cover:"covers/cover.jpg"},
    { name:"chiru chiru",path:"songs/2.mp3",cover:"covers/cover2.jpeg"},
    { name:"chuttesei",path:"songs/3.mp3",cover:"covers/cover.jpg"},
    { name:"nenu nuvvantu",path:"songs/4.mp3",cover:"covers/cover.jpg"},
    { name:"panchadara bomma",path:"songs/5.mp3",cover:"covers/cover2.jpeg"}

]
let index=0;



const audioele=new Audio('songs/1.mp3')
const play=document.getElementById('play')
const progress=document.getElementById('progressbar')
const gif=document.getElementById("gif")
const songitem=Array.from(document.getElementsByClassName('songItem'))
const songplay=Array.from(document.getElementsByClassName('songplay'))
const cursong=document.getElementsByClassName('cursong')

cursong.innerText="heeriye";
songitem.forEach((element ,i)=> {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].cover;
    element.getElementsByClassName('name')[0].innerText=songs[i].name;
});

play.addEventListener("click",()=>{
    if(audioele.paused || audioele.currentTime<=0){
        audioele.play()
        play.classList.remove('fa-circle-play')
        play.classList.add('fa-circle-pause')
        gif.style.opacity=1
    }
    else{
        audioele.pause()
        play.classList.remove('fa-circle-pause')
        play.classList.add('fa-circle-play')
        gif.style.opacity=0
    }
})

audioele.addEventListener('timeupdate',()=>{
    let progressval=parseInt((audioele.currentTime/audioele.duration)*100)
    progress.value=progressval
    console.log(progressval)
})

progress.addEventListener('change',()=>{
    audioele.currentTime=(progress.value*audioele.duration)/100
})

const makeallplay=()=>{
    songplay.forEach((ele)=>{  console.log("here")
        ele.classList.remove('fa-circle-pause')
        ele.classList.add('fa-circle-play')
    })
}

songplay.forEach((ele)=>{
    ele.addEventListener('click',(e)=>{
        makeallplay()
        index=parseInt(e.target.id)
        cursong.innerText=songs[index].name
        console.log(cursong.innerText)
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioele.src = `songs/${index+1}.mp3`
        audioele.currentTime=0
        audioele.play()
        play.classList.remove('fa-circle-play')
        play.classList.add('fa-circle-pause')
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(index>=5){
        index=0
    }
    else{
        index+=1
    }
    audioele.src = `songs/${index+1}.mp3`
    cursong.innerText=songs[index].name
    console.log(cursong.innerText)
    audioele.currentTime=0
    audioele.play()
    play.classList.remove('fa-circle-play')
    play.classList.add('fa-circle-pause')
})

document.getElementById('back').addEventListener('click',()=>{
    if(index<=0){
        index=5
    }
    else{
        index-=1
    }
    audioele.src = `songs/${index+1}.mp3`
    cursong.innerText=songs[index].name
    console.log(cursong.innerText)
    audioele.currentTime=0
    audioele.play()
    play.classList.remove('fa-circle-play')
    play.classList.add('fa-circle-pause')
})
