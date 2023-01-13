fname=prompt("enter your first name","ahmed");
lname=prompt("enter your last name","mohamed");
age=prompt("enter your age","18");
let msg="confirm your information";
if(confirm(msg)==true&&(fname!=null&&lname!=null&&age!=null)){
document.write("welcome "+fname+" "+lname+" you are "+age+ " years old");
}else
{
    window.location.reload();
}