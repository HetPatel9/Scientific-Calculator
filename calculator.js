let buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener('click', function () {
        let text = button.innerText;
        // console.log(text);
        dif(text);
    });
})
let screenText = "";
//  document.querySelector('input').value;
// screenText=document.getElementById('#input').innerHTML="good game";

let calculationString = [];
function dif(string) {
    console.log(string);
    switch (string) {

        case '1':
            calculationString.push(1);
            screenText += 1;
            break;
        case '2':
            calculationString.push(2);
            screenText += 2;
            break;
        case '3':
            calculationString.push(3);
            screenText += 3;
            break;
        case '4':
            calculationString.push(4);
            screenText += 4;
            break;
        case '5':
            calculationString.push(5);
            screenText += 5;
            break;
        case '6':
            calculationString.push(6);
            screenText += 6;
            break;
        case '7':
            calculationString.push(7);
            screenText += 7;
            break;
        case '8':
            calculationString.push(8);
            screenText += 8;
            break;
        case '9':
            calculationString.push(9);
            screenText += 9;
            break;
        case '0':
            calculationString.push(0);
            screenText += 0;
            break;
        case '+':
            calculationString.push('+');
            screenText += "+";
            break;
        case '-':
            calculationString.push('-');
            screenText += "-";
            break;
        case 'X':
            calculationString.push('*');
            screenText += "*";
            break;
        case '/':
            calculationString.push('/');
            screenText += "/";
            break;
        case 'mod':
            calculationString.push('%');
            screenText += "%";
            break;
        case '(':
            calculationString.push("(");
            screenText += "(";
            break;
        case 'e':
            calculationString.push("Math.E");
            screenText += "e";
            break;
        case ')':
            calculationString.push(")");
            screenText += ")";
            break;
        case 'log':
            calculationString.push("Math.log10(");
            screenText += "log(";
            break;
        case 'ln':
            calculationString.push("Math.log(");
            screenText += "ln(";
            break;
        case '.':
            calculationString.push(".");
            screenText += ".";
            break;
        case '|x|':
            calculationString.push("Math.abs(");
            screenText += "abs(";
            break;
        case 'n!':
            let factAns = fact(calculationString[calculationString.length - 1]);
            calculationString.pop();
            calculationString.push(factAns);
            screenText += "!";
            break;
        case 'X2':
            calculationString.push(calculationString[calculationString.length - 1] * calculationString.pop());
            screenText += "^2";
            break;
        case '=':
            // let ans = calculation(calculationString);
            let ans = calculation(calculationString);
            calculationString = [];
            calculationString.push(ans.toString());
            screenText = ans.toString();
            console.log(calculationString);
            break;
        case 'C':
            calculationString = [];
            screenText = "";
            break;
        case '1/x':
            calculationString.push("1/");
            screenText += "1/";
            break;
        case 'Xy':
            calculationString.push('**');
            screenText += "^";
            break;
        case '√x':
            calculationString.push('Math.sqrt(');
            screenText += "√(";
            break;
        case 'π':
            calculationString.push('Math.PI');
            screenText += "π";
            break;
         case 'exp':
            calculationString.push('*10**');
            screenText += "E";
            break;
        case '10x':
            calculationString.push('10**');
            screenText += "10^";
            break;
        case 'back':
            console.log(screenText,"0");
            console.log(calculationString,"0");
            if (calculationString[0] == "Error") {
                calculationString = [];
                screenText = "";
            }
            else {
                if(calculationString.length == screenText.length){
                    console.log("if in ")
                    calculationString.pop();
                    let b = screenText.slice(0, screenText.length - 1);
                    screenText = b;
                }
                else {
                    console.log("elase in")
                    screenText.length > calculationString.length ? screenText = screenText.slice(0, screenText.length - 1) : calculationString.pop()
                }
            }
            console.log(screenText,"1");
            console.log(calculationString,"1");
            break;
        default:
            console.log("error");
            break;

    }
    document.querySelector('input').value = screenText;
}
function calculation(query) {
    console.log(query.join(""));
    let equation = query.join("");
    calculationString == [];
    try {
        let result = eval(equation);

        if (isNaN(result)) {
            return "Error";
        }
        return result;
    }
    catch (err) {
        console.log("msg:" + err.msg);
        return "Error";
    }
}

function fact(n) {
    let ans = 1;
    if (n == 0) {
        return 1;
    }
    else if (n > 0) {
        for (let i = 1; i <= n; i++) {
            ans = i * ans;
        }
    }
    else {
        ans = "error";
    }
    return ans;
}