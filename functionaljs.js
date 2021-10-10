// function add(a ,b){
//     return a+b;
// }
// const result=add(2,9,8)

// console.log(result)
//arraw function
// const myfunction=()=>console.log("hellow js")
// myfunction();
//classes

class user{
    //static methods/static properties
    static #actions=['mohamud','deek']
//     age=14;
// //  getage(){
//      return this. age;
//  }
#name;
#age;
constructor(name, age){
    this.#name=name;
    this.#age=age;


}
static show_privilage(){
    return this.#actions;   
}
get age(){
    return this.#age;
}
set nameka(name){
    this.#name=name;
 

}
gerUserinfo(){
    return `magaca  ${this.#name} da'da  ${this.#age}`
}

 }
// const student=new user('mohamud farah',40)
// // student.nameka="fahad"
// // // student.name=90;
// // let myarday=student.age;


// console.log(myarday)

let myaction=user.show_privilage();
console.log(myaction)