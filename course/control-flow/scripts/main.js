//larger_integer

//Write a JavaScript program that accept two integers and display the larger.

var a = 10
var b = 5
if(a>b){console.log(a)}else{console.log(b)}

//Solución con ternarios

function largest_number(num1,num2){
    return (num1 >= num2) ? num1:num2;
}

//sign_product

//Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.

function sign_product(a,b,c){
    if(a*b*c>0){
        alert('+')
    }else{
        alert('-')
    }
}
sign_product(3,-7,2)

//Sample numbers : 3, -7, 2 
//Output : The sign is -

//sort_numbers

//Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.

function sort_numbers(a,b,c){
    var arr = []
    if(a>b && a>c){
        arr.push(a)
        if(b>c){
            arr.push(b)
            arr.push(c)
        }else{
            arr.push(c)
            arr.push(b)
        }
    }else if(b>a && b>c){
        arr.push(b)
        if(a>c){
            arr.push(a)
            arr.push(c)
        }else{
            arr.push(c)
            arr.push(a)
        }
    }else if(c>a && c>b){
        arr.push(c)
        if(a>b){
            arr.push(a)
            arr.push(b)
        }else{
            arr.push(b)
            arr.push(a)
        }
    }    

    console.log(arr)
}
sort_numbers(0,-1,4)

//Sample numbers : 0, -1, 4 
//Output : 4, 0, -1

//largest_number

//Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.

function largest_number(a,b,c,d,e){

var result1, result2, result3, result4

if(a>b){result1=a}else{result1=b}
if(result1>c){result2=result1}else{result2=c}
if(result2>d){result3=result2}else{result3=d}
if(result3>e){result4=result3}else{result4=e}

return result4
}
largest_number(-5, -2, -6, 0, -1)

//Sample numbers : -5, -2, -6, 0, -1 
//Output : 0

//odd_or_even

//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

function odd_or_even(){
var num = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    for(var i=0;i<=num.length-1;i++){
        if(num[i]%2===0){console.log(num[i]+' is even')
        }else{console.log(num[i]+' is odd')}
    }
}
odd_or_even()

//Sample Output : 
//"0 is even" 
//"1 is odd" 
//"2 is even"

//FizzBuzz

//Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

function FizzBuzz(){
var count = 1
    while(count<=100){
        if(count%3===0 && count%5===0){console.log('FizzBuzz')
        }else if(count%5===0){console.log('Buzz')
        }else if(count%3===0){console.log('Fizz')
        }else{console.log(count)}
        count++
    }   
}
FizzBuzz()

//contruct_pattern

//Write a JavaScript program to construct the following pattern, using a nested for loop. Go to the editor

function contruct_pattern(){
    var art = ''
    for(var i=0;i<=5;i++){
        art = '*' + art;
        console.log(art)
    }
}
contruct_pattern()

//*  
//* *  
//* * *  
//* * * *  
//* * * * *

//under_1000

//Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

function under_1000 (){
    var count = 0
    for(var i=0;i<=1000;i++){
        if(i%3===0 || i%5===0){
            count += i
        }
    }
    console.log(count)
}
under_1000()