"use strict";
// function deepFreeze(object) {
// 	Object.keys(object).forEach((name) => {
// 		const prop = object[name]
// 		if (typeof prop == "object" && prop !== null) {
// 			deepFreeze(prop)
// 		}
// 	})

// 	return Object.freeze(object)
// }

// const complexUser = {
// 	name: "Bob",
// 	email: "bob@dicoding.com",
// 	preferences: {
// 		newsletter: true,
// 		notifications: "weekly",
// 		address: {
// 			city: "New York",
// 			zip: "10001",
// 		},
// 	},
// }

// deepFreeze(complexUser)

// Diabaikan
// complexUser.preferences.address.city = "Los Angeles"

// console.log(complexUser.preferences.address.city) // Output: 'New York'
// let employeeObject = Object.freeze([
// 	{ id: 1, roleOfJob: "Cleaning Service" },
// 	{ id: 2, roleOfJob: "Senior Backend" },
// 	{ id: 3, roleOfJob: "Researcher of Machine Learning" },
// ])

// const updatedEmployeeObject = employeeObject.map(employee => ({...employee,email: "teukureynaldi123@gmail.com",}));

// console.log(updatedEmployeeObject);
function immutability(){
	const dataEmployee = Object.freeze([
		{ id: 1, roleOfJob: "Cleaning Service" },
		{ id: 2, roleOfJob: "Senior Backend" },
		{ id: 3, roleOfJob: "Researcher of Machine Learning" },
	])
	const updateDataEmployee = dataEmployee.map(employee =>({...employee, email: "user@email.com"}));
	return console.log(updateDataEmployee);
}
immutability();