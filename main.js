// ___________________________________________________________________
//ЗАДАЧА1
// var stroka = 'Привет! Как дела?',
// glas = ["а","е","и","о","у","","э","ю","я"],
// result = "";


//   for(var i=0;i < stroka.length;i++){
//     if(glas.indexOf(stroka[i].toLowerCase()) !== -1){
//       result = result + stroka[i]
//     }
  
//   }

// console.log(result);

// ___________________________________________________________________
//ЗАДАЧА2
// var users = [
//   {
//       name: "Алексей",
//       salary: 500
//   },
//   {
//       name: "Виктор",
//       salary: 1300
//   },
//   {
//       name: "Иван",
//       salary: 1500
//   }
//   ];
  
//   function raschet(array){
//     var newUsers = [];
//     for(var i=0;i<array.length;i++){
//       var user = array[i];
//       if(user.salary>1000){
//         newUsers.push(user);
//       }
//     }
//     return newUsers;
//   }

//   var result = raschet(users);

//   console.log(result);

// ___________________________________________________________________
//ЗАДАЧА3
// var stroka = '/users/download/index.html';

// function proverkaHtml(stroka){
//   if(stroka.slice(-4) === 'html'){
//     return true;
//   }else{
//     return false;
//   }
// }

// console.log(proverkaHtml(stroka));
// ___________________________________________________________________
//ЗАДАЧА4
var massiv = [3, 13, 74, 14, 66, 15, 22, 4],
newMassiv = [];

function check(chislo){
  var ostatok = chislo%2
  if (ostatok !== 1) {
    return true;
  }else{
    return false;
  }
}

for (var i = 0; i < massiv.length; i++) {
  var element = massiv[i];
  if(check(element)){
    newMassiv.push(element);
  }
}
console.log(newMassiv);