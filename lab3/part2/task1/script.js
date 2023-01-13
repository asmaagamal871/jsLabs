n=Number(prompt("enter number of entered values"));
const values =[];
var sum=0;
for(i=0;i<n;i++){
    val=Number(prompt("enter value "+ (i+1)));
    values[i]=val;
    
    sum+=val;
}
avrg=sum/values.length;
document.write("sum = "+sum);
document.write("<br>");
document.write("average = "+avrg);