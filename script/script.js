let customerIdBanned =true;
let viwer ="Dhuddu full course";
let reply;
let finace=true;

 if(customerIdBanned && finace){
   reply =`can learn ${viwer} both couse`
}
else if (customerIdBanned){
   reply ="sorry"
}
else {
   reply ="you cannot learn anything"
}
console.log(reply)