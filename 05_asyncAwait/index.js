// Async Await 

// const syaRahul = function (){
//     console.log('Hi Rahul')
// }

// setTimeout(syaRahul, 1000);

const startBtn = document.getElementById ('startBtn');
const stopBtn = document.getElementById('stopBtn');


const randomColor = ()=>{
    const hex = '0123456789ABCDEF';
    let color ='#';
    for (let i=0; i<6 ; i++)   {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}
randomColor();
let intervelId;
function startColoreChanging(){
    intervelId =  setInterval(()=>{
        document.body.style.backgroundColor= randomColor()
    },1000)
}

startBtn.addEventListener('click',() => {
    startColoreChanging()
})
stopBtn.addEventListener('click',() => {
    console.log("click");
    clearInterval(intervelId);
})


// const colorChanger = {
//   intervalId: null,

//   getRandomColor() {
//     const hex = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += hex[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   },

//   startColorChanging() {
//     this.intervalId = setInterval(() => {
//       document.body.style.backgroundColor = this.getRandomColor();
//     }, 1000);
//   },

//   stopColorChanging() {
//     clearInterval(this.intervalId);
//   },

//   initialize() {
//     const startBtn = document.getElementById('startBtn');
//     const stopBtn = document.getElementById('stopBtn');

//     startBtn.addEventListener('click', () => {
//       this.startColorChanging();
//     });

//     stopBtn.addEventListener('click', () => {
//       this.stopColorChanging();
//     });
//   },
// };

// colorChanger.initialize();
