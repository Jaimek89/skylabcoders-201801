//### isArray

function isArray(a){
    if(typeof a=='object'){
        return true
    }else{
        return false
    }
}
isArray('skylab')

/******************************************/

//### joinElements

function joinElements(a){
    return a.toString()
}
joinElements(['John','George','Ringo','Paul'])

/******************************************/

//### array_Clone

function array_Clone(a){
    return a.slice(0)
}
console.log(array_Clone([1, 2, 4, 0]))
console.log(array_Clone([1, 2, [4, 0]]))

/******************************************/

//### findDifferences

function findDifferences(a,b){

findDifferences([1, 2, 3], [100, 2, 1, 10])

/******************************************/

//### Sum and Product

function sumAndProduct(a){
    var sum = 0;
    var mult = 1;
    a.forEach(function(n) {
        sum += n;
        mult *= n;
    });
    return [sum,mult]
}
console.log(sumAndProduct([1,2,3]))

/******************************************/

//### addItems

function addItems(a){
    var item = prompt ('Introduce what you want that the array shows up:');
    a.push(item);
    return a;
}
console.log(addItems([]));

/******************************************/

//### generateArrayLength

function array_range(a,b){
    var array = [];
    var long = new Array(b);
    console.log(long)
        for(var i=a;i<=long.length;i++){
            array.push(i)
        }
    return array;
}
console.log(array_range(1, 4)); 
console.log(array_range(-6, 4));

/******************************************/

//### last

function last(a,n){
    var b = a.reverse();
    if(n==undefined){
        var n = 1
    }
    return b.splice(0,n);

};
console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6));

/******************************************/

//### sortItems

function sortItems(a){
    return a.sort()
};
console.log(sortItems([ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]))

/******************************************/

//### getRandom

function getRandom(a){
    var b = a.length
    return a[Math.floor(Math.random() * (b-0)+1)];
}
console.log(getRandom([a,b,c,d,e])

/******************************************/

//### findDuplicates

/******************************************/

//### mergeArrays

/******************************************/

//### separateEven

/******************************************/

//### mostFrequentItem

/******************************************/

//### moveElement

/******************************************/

//### swapCase

/******************************************/

//### Print elements array

/******************************************/

//### array_filled (string)

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