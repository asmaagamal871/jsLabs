// [1] Constructor functions
console.log("Constructor functions")
function Person1(fullName,money,sleepMood,healthRate){
    this.fullName=fullName;
    this.money=money;
    this.sleepMood=sleepMood;
    this.healthRate=healthRate;
    this.sleep=function(hours){
        if(hours === 7){
            this.sleepMood=="Happy";   
        }else if(hours < 7){
          this.sleepMood=="Tired";
        }else if(hours > 7){
          this.sleepMood=="Lazy";
        }
        return this.sleepMood; 
    };
    this.eat=function(meals){
        if(meals === 3){
          this.healthRate==100;
        }else if(meals === 2 ){
          this.healthRate==75;
        }else if(meals == 1){
          this.healthRate==50;
        }
    };
    this.buy=function(items){
          for (let i = 0; i < items; i++) {
               this.money -=10;
          }
          return this.money;
             
    };
}
let person1=new Person("Asmaa Gamal Eldin",7000,"Happy",90);

console.log(person1);
person1.sleep(9);
person1.eat(2);
person1.buy(5);
console.log(person1);
/////////////////////////////////////////////////////////////////////////////////////////////////////

// //[2]Using Classes
console.log("Classes");
class Person2{
    constructor(fullName,money,sleepMood,healthRate){
        this.fullName=fullName;
        this.money=money;
        this.sleepMood=sleepMood;
        this.healthRate=healthRate;
    }
    sleep=function(hours){
                if(hours === 7){
                    this.sleepMood=="Happy";   
                }else if(hours < 7){
                  this.sleepMood=="Tired";
                }else if(hours > 7){
                  this.sleepMood=="Lazy";
                }
                return this.sleepMood; 
    }
    eat=function(meals){
                if(meals === 3){
                  this.healthRate==100;
                }else if(meals === 2 ){
                  this.healthRate==75;
                }else if(meals == 1){
                  this.healthRate==50;
                }
     }
     buy=function(items){
                  for (let i = 0; i < items; i++) {
                       this.money -=10;
                  }
                  return this.money;
                     
    }
}
let person2=new Person2("Asmaa Gamal Eldin",7000,"Happy",90);

console.log(person2);
person2.sleep(9);
person2.eat(2);
person2.buy(5);
console.log(person2);
/////////////////////////////////////////////////////////////////////////////////////////////////////

//[3]Using Objects Linking to Other Objects (OLOO)
console.log("Objects Linking to Other Objects");
const Person3={
    init(fullName,money,sleepMood,healthRate){
        this.fullName=fullName;
        this.money=money;
        this.sleepMood=sleepMood;
        this.healthRate=healthRate;
        this.sleep=function(hours){
        if(hours === 7){
            this.sleepMood=="Happy";   
        }else if(hours < 7){
          this.sleepMood=="Tired";
        }else if(hours > 7){
          this.sleepMood=="Lazy";
        }
        return this.sleepMood; 
    }
        this.eat=function(meals){
         if (meals==3) {
         this.healthRate=100; 
         }
        else if(meals==2){
        this.healthRate=75;
         }
        else if(meals==1){
         this.healthRate=50;
        }
         return this.healthRate;
    }
        this.buy=function(items){
          for (let i = 0; i < items; i++) {
               this.money -=10;
          }
          return this.money;
             
    }
    }  
}

const person3=Object.create(Person);
Person3.init("Asmaa Gamal Eldin",7000,"Happy",90);
console.log(Person3.fullName);
console.log(Person3);
console.log(Person3.sleep(4));
console.log(Person3.buy(30));
console.log(Person3.eat(7));
///////////////////////////////////////////////////////////////////////////

//[4]Using Factory functions
console.log("factory function");
function Person(fullName,money,sleepMood,healthRate){
    return{
        fullName,
        money,
        sleepMood,
        healthRate,
    sleep(hours){
        if(hours === 7){
            this.sleepMood=="Happy";   
            }else if(hours < 7){
             this.sleepMood=="Tired";
            }else if(hours > 7){
             this.sleepMood=="Lazy";
            }
             return this.sleepMood; 
    },
    eat (meals){
            if (meals==3) {
            this.healthRate=100; 
            }
            else if(meals==2){
            this.healthRate=75;
            }
            else if(meals==1){
            this.healthRate=50;
            }
            return this.healthRate; 
    },
    buy(items){
        for (let i = 0; i < items; i++) {
            this.money -=10;
            }
            return this.money;      
    }
  }
}
const person4=Person("Asmaa Gamal Eldin",5000,"Happy",60);
  console.log(person4);
  console.log(person4.sleepMood);
  console.log(person4.healthRate);
  console.log(person4.fullName) ;
  console.log(person4.buy(20));
  console.log(person4.sleep(6));
  console.log(person4.eat(3));


