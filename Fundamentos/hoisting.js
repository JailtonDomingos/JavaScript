console.log('testeVAR')
function testeVAR(){
    console.log('a: ', a)
    var a = 2
    console.log('a: ', a)
}

testeVAR() 

console.log('testeLET') //LET da erro pois não acontece o hoisting
function testeLET(){
    console.log('a: ', a)
    let a = 2
    console.log('a: ', a)
}

testeLET() 