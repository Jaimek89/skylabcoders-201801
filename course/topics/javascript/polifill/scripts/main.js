//Shuffle function
/**********************************+*/

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        console.log(j)
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a
}
//shuffle(['a', 'b'])