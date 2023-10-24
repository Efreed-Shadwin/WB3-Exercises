function displayMailingLabel(firstName, lastName, address, city, state, zip) {
    return firstName + " " + lastName + "\n" + address + "\n" + city + ", " + state + " " + zip;
}
console.log(displayMailingLabel("Daemeon", "Holland", "1234 Main St", "San Antonio", "TX", "78216"));
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(1, 2));

function displayReceipt(totalDue, amountPaid) {
    return "Total Due: $" + totalDue + "\nAmount Paid: $" + amountPaid + "\nChange Due: $" + (amountPaid - totalDue);
}
console.log(displayReceipt(10, 20));