var age;
do {
  age = Number(prompt("Enter your age"));
  if(age>0){
  if (age > 0 && age <= 10) {
    alert("you are child kotii kotii ");
  } else {
    if (age > 10 && age <= 18) {
      alert(" Teenager ");
    } else {
      if (age > 18 && age <= 50) {
        alert(" Grown up ");
      } else {
        if (age > 50) {
          alert(" Old ");
        }
      }
    }
  }
}
else
{alert("please enter your age")}
} while (age != "" && age != null);
