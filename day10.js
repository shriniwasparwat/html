a= "hello js"

console.log(a)

function login(uname, pass){
    if(uname=="jbk" && pass == "123")
    {
        console.log("hello tka user")
    }

    else if(uname=="amit" && pass == "123")
    {
        console.log("hello tka user " + uname)
    }
    else{
        console.log("not tka user")
    }
}

login("jbk", 123)

login("amit", 123)

let fruits= ["mango", "grapes", "orange", "5", "apple"]

for(i=0; i<fruits.length; i++)
{
if (fruits[i]==5) {
   
    continue;
} 
else {
    console.log(fruits[i])
    
}
}

let city = [ "mumbai", "pune", "nagpur", "nashik"]

for(c in city)
{
    console.log(city[c])
}

let ipl=["csk", "mi","rcb","kkr"]
for(team of ipl){
    console.log(team)
}


day="mon"
switch(day)
{

    case "mon" : console.log("Hello today is  MONDAY")
    break;
    case "tue" : console.log("Hello today is  TUESDAY")
    break;
    case "wed" : console.log("Hello today is  WEDNESDAY")
    break;
    case "thu" : console.log("Hello today is  THURSDAY")
    break;
    case "fri" : console.log("Hello today is  FRIDAY")
    break;
    case "sat" : console.log("Hello today is  SATURDAY")
    break;
    case "sun" : console.log("Hello today is  SUNDAY")
    break;
    default: console.log("you have entered a wrong day")
    break;
}

for(i=0; i<6; i++)
{
    if (i<3) {
        continue;
    } else {
     console.log(i)   
    }
}