let sales:number = 123_456_55
let course:string = "Typescript"
let isPublish: boolean = true;

let any; // Typescrit assing it any type if we havent provide any value



let numbers:number[]=[1,2,3,4]
let numbers2:any[]=[1,2,3,'4'] // Is throwing error of the string, we can assing any


function render(document){
    console.log(document);
}


// Tuples
let user:[number, string]=[1,"Rishi"]

function calculateTax(amount:number, year:number = 2024):number{
    if(year < 2025){
        return amount*1.2;
    }
    return amount*1.30
}

// In typescript we cant add object after its declartion

// let employee = {id:1}
// employee.name = 'Mosh';

let employee:{
   readonly id:number,
    name:string,
    dept?:string,
    retire:(date:Date)=>void
} ={
    id:1, 
    name:"Rishi", 
    retire:(date:Date)=>{
    console.log(date);
    
}}


// Aliases
// Above code we can write as

type Employee = {
    readonly id:number,
    name:string,
    dept?:string,
    retire:(date:Date)=>void
}


let employee2:Employee ={
    id: 2,
    name: "Raj",
    retire: function (date: Date): void {
       console.log(date);
       ;
    }
}

// Union types

function kgToLbs(weight: number | string):number{
    // Narrowing
    if(typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight)*2.2;
}
kgToLbs(10);
kgToLbs('20kg')

// Intersection types
type Draggable={
    drag:()=>void
}

type Resizeable = {
    resize:()=>void
}

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
    drag() {
        
    },
    resize:()=>{}
}

// Literal types, limit the value (exact, specific)
type Quantity = 50 | 100;
let quantity:Quantity = 50;
type Metric ='cm'|'inch';

// Nullable types
function greet(name:string | null | undefined){
    if(name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}

greet(undefined);

// Optional Chaining

type Customer = {
    birtday?: Date
}

function getCustomer(id:number): Customer| null | undefined{
    return id===0 ? null : {birtday : new Date()}
}

let customer = getCustomer(0)
// if(custmer !== undefined && customer != null)
console.log(customer?.birtday?.getFullYear());

// Optiona element access opertors, like if(customer != null && customer != undefiend)
// customer?.[0]

// Optinal call
// let log(a):void => console.log('hi')
let log:any = null
log?('a');
