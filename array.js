// Array -- Hold multiple values at same time

// ["Mobile", "Laptop", "Tablet", 5000, 25, 588]

// ["a", "b", "Hello"]

// [2, 4, 5, 6]

// create
// variable_name = [values]

// let arr = [1, 2, 3, 4];

// access
// position = [0 1 2 3]

// access
// array_name[position / index]

// arr[0]

// modify
// array_name[position] = new value

// arr[0] = 10;



// Array Methods:

// push, pop, shift, unshift, splice, slice, reverse, sort

// push ---> enter new value into array -- place it into last
// let a = [1, 2, 3, 4, 5];

// variable || function.method ---> koi variable ke function in pachh
// a.push(700);

// use case --- enter new products into existing products list

// pop ---> remove last value into array
// let b = [10, 20, 30, 40];

// b.pop();

// use case --- remove last product you add into your list

// let product =['mobile','teb','leptop']

// product.push('charger');

// product.pop()
// console.log(product);


// shift -- remove first value into Array
// let c = [30, 40, 50, 60];
// c.shift();

// use case --- remove old producat automatic after sometimes

// unshift -- add value into array -- first
// let d = [52, 35, 65, 85];
// d.unshift(20);

// use case --- add a value into top of that data you receive



// splice - remove value into array -- specific position and
// specific number of values

// into () - first index(position), how many value you want to remove
let e = [50, 60, 30, 40, 10];
e.splice(3, 2);

// e.splice(3, 0, 50, 100)

// use case --- select msg and remove multiple msg at on click


// slice - copy values from array -- specific position and
// specific number of values

// new variable = array_name.slice(start index, end index)
// start index -- include into copy
// end index -- not include into copy
let f = [100, 50, 25, 0];

// let new_f = f.slice(1, 3);

// use case --- copy specific data and save it into new variable


// reverse -- reverse value of array
let g = [25, 30, 35, 40, 85];
// g.reverse();

// use case --- show latest update first into your fronted


// sort -- set into ascending order
// let h = [50, 20, 80, 10, 40];
// h.sort();

// let h = [11, 62, 3, 4, 25];
// let sr = h.sort(function(a, b){
//     return a - b; // ascending order
// })


// Q1. push()

let tasks = ['Wake up', 'Brush teeth'];

tasks.push('Buy milk');

console.log(tasks);



 // Q2. pop()

 let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop();
console.log(notifications);

 // Q3. shift()


  let customers = ['Customer1', 'Customer2', 'Customer3'];

  customers.shift();
console.log(customers);


   // Q4. unshift()

   let playlist = ['sharart', 'arbi ghode'];
   playlist.unshift('yadav brand2');
    console.log(playlist);
    

   
    // Q5. splice()
      let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
      students.splice(1, 1, 'John', 'Sara');
    console.log(students);
    

    
    // Q6. splice()

    let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
    menu.splice(1, 2);
    console.log(menu);
    
    
    // Q7. slice()
     let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let weekend = days.slice(5, 7);
    console.log(days);
    
    
    // Q8. reverse()
    // Reverse the order of levels in a game.
    let levels = ['Easy', 'Medium', 'Hard'];
    levels.reverse();
    console.log(levels);
    


    // Q9. sort()
    // Sort the scores in ascending order.
    let scores = [45, 12, 78, 34, 89];
    scores.sort((a, b) => a - b);
    console.log(scores);
    



    // Q10. sort() with numbers
    // Sort the prices from lowest to highest.
    let prices = [199, 49, 999, 299, 149];
    prices.sort((a, b) => a - b);
    console.log(prices);
    


    // Q11. slice() vs splice()
    // From the array, create a new array of the first 3 items WITHOUT changing the original array.
    let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
    let firstThree = products.slice(0, 3);
    console.log(firstThree);
    



    // Q12. splice() complex
    // In the array below:
    // 1. Remove 'Blue'
    // 2. Add 'Purple' and 'Orange' at the same position
    let colors = ['Red', 'Green', 'Blue', 'Yellow'];
    colors.splice(2, 1, 'Purple', 'Orange');
    console.log(colors);
    

    // Q13. reverse() + push()
    // Reverse the array and then add 'Final Step' at the end.
    let steps = ['Step 1', 'Step 2', 'Step 3'];
    steps.reverse();
    steps.push('Final Step');
    console.log(steps);
    

    // Q14. sort() strings
    // Sort names alphabetically, ignoring case sensitivity.
    let names = ['alice', 'Bob', 'charlie', 'David'];
    names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    console.log(names);
    


    // Q15. Combination Question
    // You are managing a movie watchlist:
    // 1. Add 'Inception'
    // 2. Remove the first movie
    // 3. Sort the list alphabetically
    let movies = ['Avatar', 'Titanic', 'Gladiator'];
    movies.push('Inception');
    movies.shift();
    movies.sort();
    console.log(movies);
    

    // Q16. splice() return value
    // What does the splice method return in this case?
    let nums1 = [1, 2, 3, 4];
    nums1.splice(1, 2);
    let removed = nums1.splice(1, 2);
    console.log(nums1);
    console.log(removed);
    
    




    // Q17. slice() immutability check
    // After executing slice, does the original array change?
    let nums2 = [10, 20, 30, 40];
    let result = nums2.slice(1, 3);
    console.log(nums2);
    console.log(result);
    
    

    // Q19. reverse() mutation
    // After reversing, what happens to the original array reference?
    let letters = ['a', 'b', 'c'];
    let reversedLetters = letters.reverse();
    console.log(reversedLetters);
    

    // Q21. splice() edge case
    // What happens if deleteCount is 0?
    let arr = ['x', 'y', 'z'];
    arr.splice(1, 0, 'new');
    console.log(arr);
    



    // Q23. slice() negative index
    // What elements are returned?
    let values = [100, 200, 300, 400, 500];
    let sliced = values.slice(-3, -1);
    console.log(sliced);
    



    // Q24. splice() vs slice() decision
    // Which method would you use if you want to:
    // a) Update the original array
    // b) Keep the original array unchanged
    //     a) Update original array → splice()

    // b) Keep original unchanged → slice()



    // Q25. Chained methods (brain teaser)
    // What is the final value of arr?
    let arr2 = [1, 2, 3];
    arr2.push(arr2.shift());
    console.log(aar2);
    
