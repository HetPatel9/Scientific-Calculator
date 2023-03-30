let buttons = document.querySelectorAll(".btn");
// console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', function () {
        let text = button.innerText;
        console.log(text);
        buttonFunctionality(text);
    });
})
let flag = {
    func: false,
    trigoBox: false,
    trigoFunc: true,
    isDegree: false,
}
let screen = [];
let memory = '';
let hCounter = -1;
function buttonFunctionality(btnTxt) {
    const trigoBox = document.querySelector('.trigonometry');
    const trigoFunc = document.querySelector('.rg1');
    const inverseTrigoFunc = document.querySelector('.rg2');
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
            hCounter = -1;
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
        case '+/-':
            let change = [];
            for (let i = screen.length - 1; i > -1; i--) {
                if (isNaN(screen[i])) {
                    break;
                }
                else {
                    change.unshift(screen[i]);
                    screen.pop();
                }
            }
            let num = eval(change.join(''));
            screen.push(num * -1);
            break;

        case 'Ceil':
            let ceil = Math.ceil(eval(screen.join('')));
            screen = [];
            screen.push(ceil);
            break;
        case 'Floor':
            let floor = Math.floor(eval(screen.join('')));
            screen = [];
            screen.push(floor);
            break;
        case 'Round':
            let round = Math.round(eval(screen.join('')));
            screen = [];
            screen.push(round);
            break;
        case 'ln':
            screen.push('ln(');
            break;
        case 'RAD':
            flag.isDegree = true;
            document.querySelector('.DtoR').innerHTML = 'DEG';
            break;
        case 'DEG':
            flag.isDegree = false;
            document.querySelector('.DtoR').innerHTML = 'RAD';
            break;
        case 'sin':
            screen.push('sin(');
            break;
        case 'cos':
            screen.push('cos(');
            break;
        case 'tan':
            screen.push('tan(');
            break;
        case 'sinh':
            screen.push('sinh(');
            break;
        case 'cosh':
            screen.push('cosh(');
            break;
        case 'tanh':
            screen.push('tanh(');
            break;
        case 'sin-1':
            screen.push('sin-1(');
            break;
        case 'cos-1':
            screen.push('cos-1(');
            break;
        case 'tan-1':
            screen.push('tan-1(');
            break;
        case 'sinh-1':
            screen.push('sinh-1(');
            break;
        case 'cosh-1':
            screen.push('cosh-1(');
            break;
        case 'tanh-1':
            screen.push('tanh-1(');
            break;
        case 'Function':
            const row1 = document.querySelector('.rg3');
            if (flag.func == false) {
                row1.style.display = 'flex';
                flag.func = true;
            }
            else {
                row1.style.display = 'none';
                flag.func = false;
            }
            break;
        case 'Trigonometry':
            console.log('trigoclicked')
            if (flag.trigoBox == false) {
                trigoBox.style.display = 'flex';
                trigoFunc.style.display = 'flex';
                inverseTrigoFunc.style.display = 'none';
                console.log('trigoclicked inside if')
                flag.trigoBox = true;
            }
            else {
                console.log('trigoclicked inside else')
                trigoBox.style.display = 'none';
                trigoFunc.style.display = 'none';
                inverseTrigoFunc.style.display = 'none';
                flag.trigoBox = false;
            }
            break;
        case 'Inv':
            if (flag.trigoFunc == true) {
                inverseTrigoFunc.style.display = 'flex';
                trigoFunc.style.display = 'none';
                flag.trigoFunc = false;
            }
            else {
                console.log('inside inverse trigo else');
                inverseTrigoFunc.style.display = 'none';
                trigoFunc.style.display = 'flex';
                flag.trigoFunc = true;
            }
            break;
        case 'Sci.Notation':
            let tempAns = eval(screen.join('')).toExponential();
            screen = [];
            screen.push(tempAns);
            break;
        case '=':
            let ans = calculation(screen);
            screen = [];
            screen.push(ans);
            console.log("screen array " + screen);
            break;
        case 'MC':
            memory = 0;
            screen = [];
            console.log('memory value is :' + memory);
            break;
        case 'MS':
            memory = eval(screen.join(''));
            if (isNaN(memory)) {
                memory = 0;
            }
            console.log('memory value is :' + memory);
            break;
        case 'M+':
            memory += eval(screen.join(''));
            console.log('memory value is :' + memory);
            break;
        case 'M-':
            memory -= eval(screen.join(''));
            console.log('memory value is :' + memory);
            break;
        case 'MR':
            // screen = [];
            screen.push(memory);
            console.log('memory value is :' + memory);
            break;
        case 'H+':

            // historyFunc('+');
            // Workes when array is full (length is 5)
            console.log(hCounter);
            screen = [];
            hCounter++;
            if (hCounter == history.length) { hCounter = 0; }
            screen.push(history[hCounter]);
            if (hCounter == history.length - 1) { hCounter = -1; }
            console.log(history);
            console.log(hCounter);
            break;
        case 'H-':


            // historyFunc('-');
            // Workes when array is full (length is 5)
            console.log(hCounter);
            screen = [];
            hCounter--;
            if (hCounter == -2) { hCounter++; }
            if (hCounter == -1) { hCounter = history.length - 1;}
            console.log(history);
            screen.push(history[hCounter]);
            console.log(hCounter);
            break;
        default:
            console.log("under working button");
            break;
    }
    // console.log(screen);
    // console.log(screen.join(''));
    // let screenText = screen.join('');
    document.querySelector('input').value = screen.join('');
}

function historyFunc(sign) {
    console.log(history);
    if (sign == '+') {
        console.log("H+ pressed");
        hCounter++;
        if (hCounter == history.length) { hCounter = 0; }
    }
    else {
        console.log('H- is pressed');
        hCounter--;
        if (hCounter == -1) { hCounter = history.length - 1; }
    }
    screen = [];
    screen.push(history[hCounter]);
}

let sArray = [];
let calArray = [];
let history = [];
function calculation(temp) {
    sArray = temp;
    // console.log('the sArray is: ', sArray);
    for (let i = 0; i < sArray.length; i++) {
        // console.log(sArray);
        // console.log(calArray);
        switch (sArray[i]) {
            case '^':
                calArray.push('**');
                break;
            case '^2':
                calArray.push('**2');
                break;
            case 'e':
                calArray.push('Math.E');
                break;
            case 'π':
                calArray.push('Math.PI');
                break;
            case 'abs(':
                calArray.push('Math.abs(');
                break;
            case '!':
                // console.log(i);
                let num = factNum(i);
                let ans = fact(num);
                calArray.push(ans);
                console.log(calArray);
                break;
            case '10^':
                calArray.push('10**');
                break;
            case 'E':
                calArray.push('*10**');
                break;
            case '1/':
                calArray.push('1/');
                break;
            case 'log(':
                calArray.push('Math.log10(');
                break;
            case 'ln(':
                calArray.push('Math.log(');
                break;
            case '√(':
                calArray.push('Math.sqrt(');
                break;
            case '∛(':
                calArray.push('Math.cbrt(');
                break;
            case 'sin(':
                calArray.push(flag.isDegree == false ? `Math.sin(` : `Math.sin(Math.PI/180*`);
                break;
            case 'cos(':
                calArray.push(flag.isDegree == false ? `Math.cos(` : `Math.cos(Math.PI/180*`);
                break;
            case 'tan(':
                calArray.push(flag.isDegree == false ? `Math.tan(` : `Math.tan(Math.PI/180*`);
                break;
            case 'sinh(':
                calArray.push(flag.isDegree == false ? `Math.sinh(` : `Math.sinh(Math.PI/180*`);
                break;
            case 'cosh(':
                calArray.push(flag.isDegree == false ? `Math.cosh(` : `Math.cosh(Math.PI/180*`);
                break;
            case 'tanh(':
                calArray.push(flag.isDegree == false ? `Math.tanh(` : `Math.tanh(Math.PI/180*`);
                break;
            case 'sin-1(':
                calArray.push('Math.asin(');
                break;
            case 'cos-1(':
                calArray.push('Math.acos(');
                break;
            case 'tan-1(':
                calArray.push('Math.atan(');
                break;
            case 'sinh-1(':
                calArray.push('Math.asinh(');
                break;
            case 'cosh-1(':
                calArray.push('Math.acosh(');
                break;
            case 'tanh-1(':
                calArray.push('Math.atanh(');
                break;
            default:
                calArray.push(sArray[i]);
                break;
        }
    }
    console.log(calArray);
    try {
        // history.push(calArray.join(''));
        let ans = eval(calArray.join(''));
        if (history.length < 5) {
            history.unshift(ans);
        }
        else {
            history.pop();
            history.unshift(ans);
        }
        // Do i need to add condition to display error if ans is NaN ?
        return ans;
    }
    catch {
        console.log("ERROR in eval of calArray");
        return "Error";
    }
    finally {
        console.log("calArray " + calArray);
        calArray = [];
        console.log("calArray " + calArray);
    }

}
function factNum(index) {
    console.log('in factNum');
    let num = [];
    if (isNaN(sArray[index - 1]) && sArray[index - 1] != ')') {
        return new Error('ERror');
    }
    else if (sArray[index - 1] != ')') {
        for (let i = index - 1; i >= 0; i--) {
            if (!isNaN(sArray[i])) {
                num.unshift(sArray[i]);
                // console.log(num);
                calArray.pop();
                // console.log(calArray);
            }
            else {
                break;
            }
        }
        return num.join('');
    }
    else {
        let temp = [];
        for (let i = index - 1; i >= 0; i--) {
            if (sArray[i] == '(') {
                // console.log('matched');
                temp.unshift(sArray[i]);

                calArray.pop();
                break;
            }
            else {
                // console.log('not matched');
                temp.unshift(sArray[i]);
                calArray.pop();
            }
        }
        //     console.log(temp , calArray);
        //    console.log(eval(temp.join('')));

        return eval(temp.join(''));
    }
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