window.alert("Enter your name: ");
var Name=window.prompt();
window.addEventListener("DOMContenttLoaded",showTime());
function showTime() {
    let date =new Date();
    //console.log(date.setTime());
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    let session="AM";
    if (h == 12 ){
        session="PM";
    }
    if (h==0) {
        h= "12";
    }
    if (h>12) {
        h=h-12;
        session="PM";
    }
    // if (h == 12 ){
    //     session="PM";
    // }
    // if (h<10) {
    //     h="0"+h;        
    // }
    // if (m<10) {
    //     m="0"+m;
    // }
    // if (s<10) {
    //     s="0"+s;        
    // }

    h = h<10 ? ( h="0"+h):h;
    m = m<10 ? ( m="0"+m):m;
    s = s<10 ? ( s="0"+s):s;

    const time = `${h}:${m}:<small>${s}|${session}</small>`;
    //console.log(time);
    document.getElementById("display-clock").innerHTML= time;
    setTimeout(showTime, 1);

    //change body background

    let Bg;

    const userName= Name;
    const User =document.getElementById("user");
    if ( h<8 && h>4 && session ==="AM" ){
        Bg = `url(https://source.unsplash.com/mNGaaLeWEp0)`;
        User.innerHTML = `Good Morning, ${userName}`;  }
    else if( h<11 && h>8 &&  session === "AM"){
        Bg = `url(https://source.unsplash.com/nJ2YCCnVp6k)`;
        User.innerHTML = `Good Day, ${userName}`;
    }
    else if (h<6 &&  session==="PM"){
        Bg = `url(https://source.unsplash.com/-G3rw6Y02D0)`;
         User.innerHTML = `Good Afternoon, ${userName}`;;        
     }
    else{
        Bg = `url(https://source.unsplash.com/oc6fccnUVnA)`;
        User.innerHTML=`Good Night, ${userName}`;        
    } 
    
//insert body
const body=document.querySelector("body");
// console.log(body);
body.style.background =` ${Bg} center/cover`;

//focus part
document.querySelector(".focus-container input");
// console.log(c);
addEventListener("keypress",function (event) {
    if (event.key == "Enter") {
        const focus = this.document.querySelector(".focus-container input");
        document.querySelector(".focus-container").innerHTML=`<h2>Today : </h2><h1>${focus.value}</h1>`;        
    }
})
}

