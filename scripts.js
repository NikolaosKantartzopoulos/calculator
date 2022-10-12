//----------------------------------------
//    DOM
//----------------------------------------
const my_main_dom = document.getElementById("my_main");
const my_screen_dom = document.getElementById("my_screen");
const my_buffer_dom = document.getElementById("bufferScreen");
const clear_button = document.getElementById("ctrl_1");
const del_button = document.getElementById("ctrl_2");
my_buffer_dom.textContent = "...";
my_screen_dom.textContent = 0;

//----------------------------------------
//    CALCULATOR
//----------------------------------------
let firstOperand = null;
let secondOperand = null;
let operation = "";
let operationLoaded = false;

function calculate(firstOperand, secondOperand, operation) {
	console.log("*************Calculate enter*************");
	console.log(`${firstOperand} ${operation} ${secondOperand} = `);
	if (operation === null) return;
	if (secondOperand === 0 && operation == "div") {
		console.log("You can not divide by 0 dummy!");
		clear_screen();
		return null;
	}
	my_screen_dom.textContent = "";
	switch (operation) {
		case "add":
			return Number(firstOperand) + Number(secondOperand);
		case "sub":
			return Number(firstOperand) - Number(secondOperand);
		case "mul":
			return Number(firstOperand) * Number(secondOperand);
		case "div":
			return Number(firstOperand) / Number(secondOperand);
		default:
			return null;
	}
}
function selectOperation(pressedKey) {
	console.log(`First Operand loaded: ${firstOperand}`);
	switch (pressedKey) {
		case "+":
			console.log("Selected ADD");
			return "add";
		case "-":
			console.log("Selected SUB");
			return "sub";
		case "*":
			console.log("Selected MUL");
			return "mul";
		case "/":
			console.log("Selected DIV");
			return "div";
	}
}

//----------------------------------------
//    FUNCTIONS
//----------------------------------------
function clear_screen() {
	firstOperand = 0;
	secondOperand = null;
	operation = "";
	operationLoaded = false;
	my_buffer_dom.textContent = "...";
	my_screen_dom.textContent = 0;
}
function pop_character() {
	my_screen_dom.textContent = my_screen_dom.textContent.slice(0, -1);
}

function log_button(e) {
	if (my_screen_dom.textContent.length >= 11) {
		my_screen_dom.textContent = "***ERROR***";
	} else if (/\+|\-|\*|\//gi.test(e.key)) {
		if (!operationLoaded) {
			my_buffer_dom.textContent = my_screen_dom.textContent;
			firstOperand = my_buffer_dom.textContent;
			my_screen_dom.textContent = "";
			secondOperand = null;
			operation = selectOperation(e.key);
			operationLoaded = true;
		} else {
			if (my_screen_dom.textContent == "") {
				operation = selectOperation(e.key);
				return;
			}
			secondOperand = my_screen_dom.textContent;
			my_buffer_dom.textContent = calculate(
				firstOperand,
				secondOperand,
				operation
			);
			operation = selectOperation(e.key);
			firstOperand = my_buffer_dom.textContent;
		}
	} else if (e.key == "Backspace" || e.key == "Delete") {
		pop_character();
	} else if (e.key == "c" || e.key == "C") {
		clear_screen();
	} else if (e.key == "Enter") {
		if (my_screen_dom.textContent == "") {
			return null;
		}
		if (operationLoaded) {
			secondOperand = my_screen_dom.textContent;
			my_buffer_dom.textContent = calculate(
				firstOperand,
				secondOperand,
				operation
			);
			firstOperand = my_buffer_dom.textContent;
			secondOperand = null;
		}
	} else if (/\d|\./gi.test(e.key)) {
		if (my_screen_dom.textContent[0] == "0") {
			my_screen_dom.textContent = "";
		}
		my_screen_dom.textContent += e.key;
	}
}

//----------------------------------------
//    UI
//----------------------------------------
function create_clickable_menu(arr) {
	for (let i = 0; i < arr.length; i++) {
		let button_id = 0;
		let logged_value = "";
		button_id = `but-${i + 1}`;

		logged_value = arr[i];

		document.getElementById(button_id).addEventListener("click", () => {
			if (button_id == "but-15") {
				parse_screen(my_screen_dom.textContent);
			} else {
				my_screen_dom.textContent += logged_value;
				if (my_screen_dom.textContent.length >= 11) {
					my_screen_dom.textContent = "***ERROR***";
				}
			}
		});
	}
}
window.addEventListener("keydown", log_button);
clear_button.addEventListener("click", clear_screen);
del_button.addEventListener("click", pop_character);
create_clickable_menu([
	"7",
	"8",
	"9",
	"/",
	"4",
	"5",
	"6",
	"*",
	"1",
	"2",
	"3",
	"-",
	".",
	"0",
	"=",
	"+",
]);

//----------------------------------------
//    Visual
//----------------------------------------
my_main_dom.style.width = `${my_main_dom.offsetHeight * 0.67}px`;
