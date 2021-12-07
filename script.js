

for(let i = 1;  i <= 10; i++) {

//     var name = prompt('Введите имя');
// var ages = +prompt('введите возраст');

do{
  var names = prompt('Введите имя')
}while(!isNaN(names))

do{
  var ages = +prompt('введите возраст');
}while(isNaN(ages))



const pust = {}

pust.amout = {
about: `пользователь: ${i}`,
name: `имя: ${names}`,
age:  `возраст: ${ages}`,
   
}
for(const key in pust) {
    for(newKey in pust[key]) {
        console.log(pust[key][newKey]);
    }
    }
}


    
  