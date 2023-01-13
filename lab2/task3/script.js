do{
time= Number(prompt("enter time"))
if(time>=0&&time<24)
{
    if(time==00){
        alert("time is: "+"12"+" AM")
    }
    else{
    if(time<=12){
        alert("time is: "+time+" AM")
    }
    else
    newTime=time-12;
    alert("time is: "+newTime+" PM")
}
}
}while(time != "" && time != null)