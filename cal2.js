let buttons = document.querySelectorAll(".btn");
// console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', function () {
        let text = button.innerText;
        // console.log(text);
        buttonFunctionality(text);
    });
})
// var sArray = [];
let screen = [];
function buttonFunctionality(btnTxt) {
    console.log(btnTxt);
    switch (btnTxt) {
        case '1':
            screen.push(1);
            break;
        case '2':
            screen.push(2);
            break;
        case '3':
            screen.push(3);
            break;
        case '4':
            screen.push(4);
            break;
        case '5':
            screen.push(5);
            break;
        case '6':
            screen.push(6);
            break;
        case '7':
            screen.push(7);
            break;
        case '8':
            screen.push(8);
            break;
        case '9':
            screen.push(9);
            break;
        case '0':
            screen.push(0);
            break;
        case '.':
            screen.push('.');
            break;
        case '+':
            screen.push('+');
            break;
        case '-':
            screen.push('-');
            break;
        case '/':
            screen.push('/');
            break;
        case 'mod':
            screen.push('%');
            break;
        case 'X':
            screen.push('*');
            break;
        case 'C':
            screen = [];
            break;
        case 'back':
            screen.pop();
            break;
        case 'exp':
            screen.push('E');
            break;
        case '|x|':
            screen.push("abs(");
            break;
        case 'π':
            screen.push('π');
            break;
        case 'e':
            screen.push('e');
            break;
        case 'X2':
            screen.push('^2');
            break;
        case '1/x':
            screen.push('1/');
            break;
        case 'exp':
            screen.push('E');
            break;
        case '√x':
            screen.push('√(');
            break;
        case '(':
            screen.push('(');
            break;
        case ')':
            screen.push(')');
            break;
        case 'n!':
            screen.push('!');
            break;
        case 'Xy':
            screen.push('^');
            break;
        case '10x':
            screen.push('10^');
            break;
        case 'log':
            screen.push('log(');
            break;
        case 'ln':
            screen.push('ln');
            break;
        case '=':
            let ans = calculation(screen);
            screen = [];
            screen.push(ans);
            break;
        default:
            // screen.push(1);
            console.log("error");
            break;
    }
    console.log(screen);
    console.log(screen.join(''));
    let screenText = screen.join('');
    document.querySelector('input').value = screen.join('');
}
let sArray = [];
let calArray = [];
function calculation(temp) {
    sArray = temp;
    console.log('the sArray is: ', sArray);
    for (let i = 0; i < sArray.length; i++) {
        switch (sArray[i]) {
            case '^':
                calArray[i] = '**';
                break;
            case '^2':
                calArray[i] = '**2';
                break;
            case '!':
                console.log(i);
                let num = factNum(i);
                let ans = fact(num);
                calArray.push(ans);
                console.log(calArray);
                break;
            case '10^':
                calArray[i] = '10**';
                break;
            case '1/':
                calArray[i] = '1/';
                break;
            default:
                calArray[i] = sArray[i];
                break;
        }
    }
    return eval(calArray.join(''));
}
function factNum(index) {
    console.log('in factNum');
    let num = [];
    if (sArray[index - 1] != ')') {
        for (let i = index - 1; i >= 0; i--) {
            if (!isNaN(sArray[i])) {
                num.unshift(sArray[i]);
                calArray.pop();
            }
            else {
                break;
            }
        }
    }
    else{
        
    }

    return num.join('');
}
function fact(n) {
    console.log('in fact');
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
    console.log('the factorial of num is:' + ans);
    return ans;
}

