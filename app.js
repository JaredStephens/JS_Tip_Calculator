function calcTip() {
	// DECLARATIONS
	const bill = document.getElementById("price").value;
	const tip = document.getElementById("tipForm").value;
	// STRINGS INTO NUMBERS
	const billAmountNumber = parseFloat(bill);
	const tipAmountNumber = parseFloat(tip);
	// GRAB BUTTON ELEMENT
	const total = document.getElementById("display");
	//MULTIPLY
	const totalAmount = tipAmountNumber * billAmountNumber;
	//OUTPUT
	total.innerHTML = "You should tip $" + totalAmount.toFixed(2);
	return false; // prevents browser default behavior, ie. submiting form
}
