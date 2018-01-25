

// text('something').wrap('$').wrap('[',']').wrap('{','}').wrap('<','>').wrap('#')
// output => #<{[$something$]}>#

//DIDAC

function text(source) {
    function wrap(arg1, arg2) {
        if (arg2 === undefined) {
            arg2 = arg1;
        }

        source = arg1 + source + arg2;

        return this
    };

    function toString() {
        return source;
    }

    return {
        wrap: wrap,
        toString: toString
    };
}

console.log(text('Jaime').wrap('7').wrap('¿', '?').toString())

//ALEX

function text(str) {
    return {
        wrap: function wrap(a, b) {
            str = b ? a + str + b : a + str + a;
            return this;
        },

        toString: function () {
            return str;
        }
    };
}

console.log(text('Jaime').wrap('7').wrap('¿', '?').toString())

//MANU

function wrap(text, before, after) {
    return (before || '') + text + (after || before || '');
}

function text(_text) {
    return {
        wrap: function (before, after) {
            return text(wrap(_text, before, after));
        },
        toString: function () {
            return _text;
        }
    };
}

//Loop Alejandra

function loop(arr, callback, i) {
    i = i || 0;

    if (i < arr.length) {
        callback(arr[i]);

        loop(arr, callback, ++i);
    }
}

function addSymbol(el) {
    console.log(el + '$');
}

console.log(loop([1, 2, 3], addSymbol));
console.log(loop([1, 2, 3], addSymbol));