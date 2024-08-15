function even1(num) {
    switch (num % 2) {
        case 0:
            return (" the num is even");
            break;

        default:
            return ("the num is odd")
            break;
    }
}
console.log(even1(8));

function pos2(num) {
    switch (num >= 0) {
        case true:
            return (" the num is positive");
            break;

        default:
            return ("the num is negative")
            break;
    }
}
console.log(pos2(-8));

function day3(num) {
    switch (num) {
        case 1:
            return (" the day is sunday");
            break;

        case 2:
            return (" the day is monday");
            break;

        case 3:
            return (" the day is tuesday");
            break;

        case 4:
            return (" the day is wednesday");
            break;

        case 5:
            return (" the day is thursday");
            break;

        case 6:
            return (" the day is friday");
            break;

        case 7:
            return (" the day is saturday");
            break;

        default:
            return ("please enter another number")
            break;
    }
}
console.log(day3(9));

function month4(num) {
    switch (num) {
        case 1:
            return (" january");
            break;

        case 2:
            return ("february");
            break;

        case 3:
            return (" march");
            break;

        case 4:
            return ("april");
            break;

        case 5:
            return (" may");
            break;

        case 6:
            return ("june");
            break;

        case 7:
            return ("july");
            break;
        case 8:
            return ("july");
            break;
        case 9:
            return ("august");
            break;
        case 10:
            return ("october");
            break;
        case 11:
            return ("november");
            break;
        case 12:
            return ("december");
            break;
        default:
            return ("please enter another number")
            break;
    }
}

console.log(month4(9));


function vow5(letter) {
    switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return (" the letter is a vowel");
            break;

        default:
            return ("the letter is a consonant")
            break;
    }
}
console.log(vow5('e'));

function grade6(num) {
    switch (num <= 20) {
        case true:
            return (" d");
            break;
        case false:
            {
                switch (num <= 55) {
                    case true:
                        return "c"
                        break;

                    case false:
                        switch (num <= 70) {
                            case true:
                                return "b"
                                break;

                            case false:
                                switch (num <= 90) {
                                    case true:
                                        return "a";
                                        break;

                                    default:
                                        return ("a+")
                                        break;
                                }
                                break;
                        }
                        break;
                }
            }
            break;
    }
}


console.log(grade6(97));



function calc7(num1, num2, act) {
    switch (act) {
        case 1:
            return num1 + num2;
            break;
        case 2:
            return num1 - num2;
            break;
        case 3:
            return num1 / num2;
            break;
        case 4:
            return num1 * num2;
            break;
        default:
            return "error"
            break;
    }
}
console.log(calc7(6, 4, 2));
