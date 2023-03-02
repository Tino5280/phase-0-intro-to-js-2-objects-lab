// Write your solution in this file!


const employee = {
    name: "P Sherman",
    streetAdress: "42 Wallaby Way Sydney"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = { ...employee, }
    newObj[key] = value
    return newObj

}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newObj = { ...employee[key]}
    delete newObj[key] 
    return newObj
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}