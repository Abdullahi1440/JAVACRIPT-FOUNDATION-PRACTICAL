// const colors=['red','blue','green','brow','yellow']
// let [r,bl,gr, ...rest]=colors
// console.log(rest)

// let employees={
//     Goobta:"Sool",
//     firstname:'mohamud Gellle',
//  phone:0907393505,
//  dep:"HRM",

// };
// let{firstname:name,phone,dep,Goobta}=employees;
// console.log(Goobta)

// // console.log(firstname)

//array methods:for each.map .filter, find.reduce
let     employees=[
    {
        name:'Ali Daahir',gender:'male',dep:'HR',salary:900

    },


    {
        name:'mohamud',gender:'male',dep:'HR',salary:908

    },
    {
        name:'Axmed',gender:'male',dep:'cs',salary:700

    },
    
    {
        name:'Axmed',gender:'male',dep:'cs',salary:800

    },
    
    {
        name:'Axmed',gender:'male',dep:'cs',salary:800

    },
    


]
employees.forEach(function(emp){
    console.log(emp.salary)
})
// employees.forEach(function(emp){
//     console.log(emp.dep)
// }


// )
// employees.filter(function(emp,index){
// console.log(emp.salary<900) 
 
// }


// 
// )