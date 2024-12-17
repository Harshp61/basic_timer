const timer =  document.getElementById('root');
timer.style.fontSize = "200px";
timer.style.height = "100vh";
timer.style.display = "flex";
timer.style.justifyContent = "center";
timer.style.alignItems     = "center";
function timing(){
const timer =  document.getElementById('root');
const now = new Date();
const local_time = now.toLocaleTimeString();
timer.innerHTML = local_time;
}
setInterval(timing,1000);

