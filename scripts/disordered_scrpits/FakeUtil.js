import { faker } from '@faker-js/faker';

var randomName = faker.person.firstName(); // Generates a random name
var randomEmail = faker.internet.email(); // Generates a random email
var randomProduct = faker.commerce.productName(); // Generates a random product name
var randomCompany = faker.company.name(); // Will give back a random company name
var randomCreditCardIssuer = faker.finance.creditCardIssuer; // It's output is a random contact card containing many properties

// Iteration
// This code runs twenty times
// It produces each time different data
for (var i = 0; i < 20; i++) {
	console.log(randomName); // Outputs a random name
	console.log(randomEmail); // Outputs a random email
	console.log(randomProduct); // Outputs the random product name generated
	console.log(randomCompany); // Produces a random company name
	console.log(randomCreditCardIssuer); // Gives back a random card
	// console.log(faker.date.past()); // Generates a random past date
}