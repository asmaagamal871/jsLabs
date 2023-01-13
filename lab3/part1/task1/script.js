userName="admin";
password="421$$";

enteredUserName=prompt("Enter Username")
enteredPassword=prompt("Enter password")

if(enteredUserName!==userName && enteredPassword!==password){
    ret=confirm("please re-enter your data");
    if(ret){
        window.location.reload();
    }
    else{
        document.write("You have entered wrong data :(")
    }
}
else if(enteredUserName!==userName){
    ret=confirm("rong username");
    if(ret){
        window.location.reload();
    }
    else{
        document.write("You have entered wrong username :(")
    }
}
else if(enteredPassword!==password){
    ret=confirm("rong passworod");
    if(ret){
        window.location.reload();
    }
    else{
        document.write("You have entered wrong password :(")
    }
}
if(enteredUserName===userName && enteredPassword===password){
    alert("Welcome login success")
}