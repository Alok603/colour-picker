




const btn1=document.getElementById('mybutton')
const btn2=document.getElementById('mybutton2')
let clr=document.querySelector('.rgbs')
let cpy=document.querySelector('p')
let rgb1="000"
let rgb2="#fff"

const hexvalue=()=>{
    let hurr="0123456789abcdef"
    let color="#"
    for(let i=0;i<6;i++){
        
        color=color+hurr[Math.floor(Math.random()*16)]
    }
    return color

}

const handleButton1=()=>{
    rgb1=hexvalue()
    console.log(rgb1)
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2}`
    btn1.innerHTML=rgb1
    clr.innerHTML=` background-image:linear-gradient(to right,${rgb1},${rgb2})`
}
const handleButton2=()=>{
     rgb2=hexvalue()
    console.log(rgb2)
    btn2.innerHTML=rgb2
    clr.innerHTML=` background-image:linear-gradient(to right,${rgb1},${rgb2}`
    clr.innerHTML=` background-image:linear-gradient(to right,${rgb1},${rgb2})`
    
}

cpy.addEventListener('click',()=>{
    navigator.clipboard.writeText(clr.innerText)
    alert("copied to clipboard")
})




btn1.addEventListener('click',handleButton1)
btn2.addEventListener('click',handleButton2)