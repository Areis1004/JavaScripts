var employeeList = [{
    name: "Mayank",
    age: 20,
    designation: "Developer"
}, {
    name: "Anshul",
    age: 20,
    designation: "Manager"
}, {
    name: "Ankit",
    age: 30,
    designation: "Clerk"
}]

employeeList.unshift({
    name: "Aniket",
    age: 30,
    designation: "Owner"
})

employeeList.pop()

console.log(employeeList)