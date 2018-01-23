//###1 isArray

function isArray(a) {
    if (typeof a == 'object') {
        return true
    } else {
        return false
    }
}
isArray('skylab')

/******************************************/

//###2 joinElements

function joinElements(a) {
    return a.toString()
}
joinElements(['John', 'George', 'Ringo', 'Paul'])

/******************************************/

//###3 array_Clone

function array_Clone(a) {
    return a.slice(0)
}
console.log(array_Clone([1, 2, 4, 0]))
console.log(array_Clone([1, 2, [4, 0]]))

/******************************************/

//###4 findDifferences

function findDifferences(a, b) { }

findDifferences([1, 2, 3], [100, 2, 1, 10])

/******************************************/

//###5 Sum and Product

function sumAndProduct(a) {
    var sum = 0;
    var mult = 1;
    a.forEach(function (n) {
        sum += n;
        mult *= n;
    });
    return [sum, mult]
}
console.log(sumAndProduct([1, 2, 3]))

/******************************************/

//###6 addItems

function addItems(a) {
    var item = prompt('Introduce what you want that the array shows up:');
    a.push(item);
    return a;
}
console.log(addItems([]));

/******************************************/

//###7 generateArrayLength

function array_range(a, b) {
    var array = [];
    var long = new Array(b);
    console.log(long)
    for (var i = a; i <= long.length; i++) {
        array.push(i)
    }
    return array;
}
console.log(array_range(1, 4));
console.log(array_range(-6, 4));

/******************************************/

//###8 last

function last(a, n) {
    var b = a.reverse();
    if (n == undefined) {
        var n = 1
    }
    return b.splice(0, n);

};
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));

/******************************************/

//###9 sortItems

function sortItems(a) {
    return a.sort()
};
console.log(sortItems([3, 8, 7, 6, 5, -4, 3, 2, 1]))

/******************************************/

//###10 getRandom

function getRandom(a) {
    var b = a.length
    return a[Math.floor(Math.random() * (b - 0) + 1)];
}
console.log(getRandom([a, b, c, d, e])

/******************************************/

//###11 findDuplicates

/******************************************/

//###12 mergeArrays

//Write a JavaScript function to merge two arrays and removes all duplicates elements.

/*Test data :
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));
[3, 2, 30, 1]*/

function mergeArray(arr1, arr2) {
    var arr3 = [];
    arr1 = arr1.concat(arr2);
    for (var i = 0; i < arr1.length; i++) {
        if (arr3.indexOf(arr1[i]) === -1);
            arr3.push(arr1[i]);
        }
        return arr3;
}
mergeArray([1, 2, 3], [2, 30, 1])

/******************************************/

//###13 separateEven

//Write a JavaScript program which accept a number as input and insert dashes(-) between each two even numbers.
//For example if you accept 025468 the output should be 0 - 254 - 6 - 8.

function separateEven(num) {
    var str = num.toString();
    var result = [str[0]];
    for (var x = 1; x < str.length; x++) {
        ((str[x - 1] % 2 === 0) && (str[x] % 2 === 0)) ? result.push('-', str[x]) : result.push(str[x]);
    }
    console.log(result.join(''));
}
separateEven(025468)

/******************************************/

###14 mostFrequentItem

/******************************************/

///###15 moveElement

/******************************************/

//###16 swapCase

/******************************************/

//###17 Print elements array

/******************************************/

//###18 array_filled (string)

/******************************************/

//### Sum squares

/******************************************/

//### removeDuplicate

/******************************************/

//### showChoices

/******************************************/

//### showLeapYears

/******************************************/

//### shuffleArray

/******************************************/

//### binarySearch

/******************************************/

//### sumPositions

/******************************************/

//### generateArraySteps

/******************************************/

//### flattenArray

/******************************************/

//### unionArray

/******************************************/

//### removeFalsy

/******************************************/

//### first

/******************************************/

//### sortObjectsTitle

/******************************************/

//### findPairSum

/******************************************/

//### validValues

/******************************************/

//### longestCommon

/******************************************/

//### fillArray

/******************************************/

//### removeElement

/******************************************/

//### findArrayWithElement

/******************************************/

//### emptyArray

/******************************************/

//### getNthLargest

/******************************************/

//### array_filled (numeric)

/******************************************/

//### filterFalsy