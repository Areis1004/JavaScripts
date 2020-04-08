var userSalaries = [10, 20, 30, 40, 50, 60, 70, 80];

//userSalaries.splice(2, 2, 100, 200)

var index = userSalaries.indexOf(50)

userSalaries.splice(index, 1)

console.log(userSalaries)