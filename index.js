//Functions
// function calc(num1,num2){
//     let sum = num1+num2
//     let sub = num1-num2

//     return(console.log(sum,sub))
// }
// let a=parseInt(prompt("Enter No.1"))
// let b=parseInt(prompt("Enter No.2"))

// calc(a,b)

function name1(firstname,sports){
    let fullname = firstname + '' +sports

    return(console.log( "I am" , firstname, "I Love" , sports))
}
name1("Hamna", "cricket" )

function hyp(a,b){
       let c = Math.pow(a,2) + Math.pow(b,2)
       return(console.log(c))
}
hyp(5,5)