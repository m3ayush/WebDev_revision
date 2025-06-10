const logDiv=document.getElementById("log");
const stateDiv=document.getElementById("state");
const startBtn= document.getElementById("startbtn");
const stopBtn= document.getElementById("stopbtn");
startBtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handledown);
    document.addEventListener("keyup",handleup);
    startBtn.disabled=true;
    stopBtn.disabled=false;
})
stopBtn.addEventListener("click",()=>{
    document.removeEventListener("keydown",handledown);
    document.removeEventListener("keyup",handleup);
    logDiv.textContent="";
    stateDiv.textContent="";
    startBtn.disabled=false;
    stopBtn.disabled=true;
})

function handledown(e){
    logDiv.textContent=`Key ${e.key} pressed down`;
    stateDiv.textContent=`Key is down`;
}
function handleup(e){
    logDiv.textContent=`Key ${e.key} pressed Up`;
    stateDiv.textContent=`Key is Up`;
}