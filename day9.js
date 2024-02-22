a= "Hello Js"

console.log(a)

let person={
    name:"Raj",
    age:23,
    gender: "Male"

}

console.log(person)


c=BigInt(1221342534654756876867)

console.log(typeof(c))


function greet(){

    console.log('i am normal function')
}

greet()

function hello(name){

    console.log("hello " + name)
}

hello(243)

function hello(name){

    console.log("hello " + name)
}

hello("Sagar")

let addition= function(a,b){
    return a+b
}

console.log(addition(12,34))

let substract= (a,b) => a-b;
console.log(substract(50,30))



function multiply(a,b){
    return a*b;
}

function average (a,b){
    let avg=(multiply(a,b))/2

    console.log("average by multiply= "+avg)
}

average(5,10)

function Employee(id, name, salary){

    this.id=id
    this.name=name
    this.salary=salary
}

let e1=new Employee(1, 'raj', 25000)
let e2=new Employee(2, 'ravi', 35000)
let e3=new Employee(3, 'puja', 45000)
let e4=new Employee(4, 'neha', 55000)

console.log(e1)
console.log(e2)
console.log(e3)
console.log(e4)