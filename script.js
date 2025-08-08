let demo = document.querySelectorAll('.song')
// queryselectorall returns an array of object
demo.forEach(function (songitem){
    songitem.addEventListener('click',playsong);
    songitem.addEventListener('dblclick',pausesong);   
});


const play1 = new Audio();
play1.src = "https://res.cloudinary.com/dcvkvcfza/video/upload/v1753664353/Dhoom_Machale_Sunidhi_Chauhan_128_Kbps_sthwcd.mp3";
const play2 = new Audio();
play2.src = "https://res.cloudinary.com/dcvkvcfza/video/upload/v1753664348/Letter_To_Her_-_DjPunjab.Com.Se_q3ptyi.mp3";
const play3 = new Audio();
play3.src = "https://res.cloudinary.com/dcvkvcfza/video/upload/v1753664349/Saiyaara_Reprise_Female_-_PaagalWorld.Com.Se_y1yzzs.mp3";
const play4 = new Audio();
play4.src = "https://res.cloudinary.com/dcvkvcfza/video/upload/v1753664347/Krishna_Teri_Ho_Gyi_Jaani_128_Kbps_swn4nm.mp3";
const play5 = new Audio();
play5.src = "https://res.cloudinary.com/dcvkvcfza/video/upload/v1753664346/Barbaad_-_PaagalWorld.Com.Se_azmzur.mp3";
const play6 = new Audio();
play6.src = "https://res.cloudinary.com/dcvkvcfza/video/upload/v1753664346/_Sunrise_-_Raag.Fm_ndyboi.mp3";
const play7 = new Audio();
play7.src = "https://res.cloudinary.com/dcvkvcfza/video/upload/v1753666290/Kya_-_Raag.Fm_zqo2dn.mp3";
const play8 = new Audio();
play8.src = "https://res.cloudinary.com/dcvkvcfza/video/upload/v1753666290/Hale_Dil_Murder_2_128_Kbps_zwlqev.mp3";
const play9 = new Audio();
play9.src = "https://res.cloudinary.com/dcvkvcfza/video/upload/v1753666290/Batana_Na_-_Raag.Fm_apypoo.mp3";

function playsong(){
    let songplay = this.innerHTML;
    console.log(songplay);
    
    switch (songplay) {
        case 'a': pausesong();play1.play();
            
            break;
        case 'b': pausesong();play2.play();
            
            break;
        case 'c':pausesong();play3.play();
            
            break;
        case 'd':pausesong();play4.play();
            
            break;
        case 'e':pausesong();play5.play();
            
            break;
        case 'f':pausesong();play6.play();
            
            break;
        case 'g':pausesong();play7.play();
            
            break;
        case 'h':pausesong();play8.play();
            
            break;
        case 'i':pausesong();play9.play();
            break;
    }
    
}

function pausesong(){
    play1.pause();
    play2.pause();
    play3.pause();
    play4.pause();
    play5.pause();
    play6.pause();
    play7.pause();
    play8.pause();
    play9.pause();
    
}

// For Player Bar Note :- Do style page h , ek basic dusara responsive 
// HTML par player section ko bhi enable krna ishke baad .... All the best

const songs = document.querySelectorAll(".song");
const playerBar = document.getElementById("playerBar");
const currentSong = document.getElementById("currentSong");

songs.forEach(song => {
    song.addEventListener("click", () => {
        const name = song.textContent.trim();
        currentSong.textContent = name;
        playerBar.classList.add("show");
    });
});

/*For BG Change */ 

const gradients = [
    "linear-gradient(135deg, #e60f41, #632b3d, #24373e)",
    "linear-gradient(135deg, #1e3c72, #2a5298)",
    "linear-gradient(135deg, #ff7e5f, #feb47b)",
    "linear-gradient(135deg, #00c6ff, #0072ff)",
    "linear-gradient(135deg, #fc466b, #3f5efb)",
    "linear-gradient(135deg, #8e2de2, #4a00e0)",
    "linear-gradient(135deg, #f7971e, #ffd200)",
    "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",      
  "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",        
  "linear-gradient(135deg, #1e130c, #9a8478)",                   
  "linear-gradient(135deg, #2b2e4a, #e84545)",                 
  "linear-gradient(135deg, #232526, #414345)",                 
  "linear-gradient(135deg, #200122, #6f0000)",                  
  "linear-gradient(135deg, #0d0d0d, #434343)",                   
  "linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)",        
  "linear-gradient(135deg, #000000, #434343)",                  
  "linear-gradient(135deg, #2c3e50, #4ca1af)",
  "linear-gradient(135deg, #110c29, #632b47, #24243e)",                   
  "linear-gradient(135deg, #110c29, #632b47, #24243e)",                   
  "linear-gradient(135deg, #110c29, #632b47, #24243e)",                   
  "linear-gradient(135deg, #110c29, #632b47, #24243e)",                   
  "linear-gradient(135deg, #110c29, #632b47, #24243e)",                   
  "linear-gradient(135deg, #110c29, #632b47, #24243e)",                   
  "linear-gradient(135deg, #110c29, #632b47, #24243e)",                   
  "linear-gradient(135deg, #110c29, #632b47, #24243e)",                   
  "linear-gradient(135deg, #110c29, #632b47, #24243e)",                   
  "linear-gradient(135deg, #110c29, #632b47, #24243e)",                   
  "linear-gradient(135deg, #110c29, #632b47, #24243e)",                   
  "linear-gradient(135deg, #110c29, #632b47, #24243e)",                   
  "linear-gradient(135deg, #110c29, #632b47, #24243e)",                   
  "linear-gradient(135deg, #110c29, #632b47, #24243e)",                   
  "linear-gradient(135deg, #110c29, #632b47, #24243e)",                   
  "linear-gradient(135deg, #110c29, #632b47, #24243e)",                   
  "linear-gradient(135deg, #110c29, #632b47, #24243e)",                   
  "linear-gradient(135deg, #110c29, #632b47, #24243e)",                   
  "linear-gradient(135deg, #110c29, #632b47, #24243e)",                   
  "linear-gradient(135deg, #110c29, #632b47, #24243e)",                   
];

  window.onload = () => {
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    document.body.style.background = randomGradient;
    document.body.style.backgroundAttachment = "fixed"; // Optional: keep it in place on scroll
    document.body.style.transition = "background 0.5s ease";
  };