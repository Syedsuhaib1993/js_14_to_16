// <<<<<<<<<<<<<<<<<<JS assingment 14 to 16>>>>>>>>>>>>>>>>>>>
// 1. Declare an empty array using JS literal notation to store
// student names in future.

var std_name = []

// 2. Declare an empty array using JS object notation to store
// student names in future.

var std_name = new Array();
console.log(std_name)

// 3. Declare and initialize a strings array.
var str = ["ali", "faizan", "bilal","hammad"];




// 4. Declare and initialize a numbers array.

var num = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array.

var booleanArray = [true, false, true];

// 6. Declare and initialize a mixed array.

var mixArray = ["haseeb", 23, true, "developer"];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

var qualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phil.",
  "PhD",
];
console.log(qualifications)


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
var nAme = ['Ali','Hammad','Haris']
var score = [450,380,440]
console.log(nAme[0] + ': ' + score[0] +' Percentage: '+ score[0]/500*100 + "%")
console.log(nAme[1] + ': ' + score[1] +' Percentage: '+ score[1]/500*100 + "%")
console.log(nAme[2] + ': ' + score[2] +' Percentage: '+ score[2]/500*100 + "%")




// 9. Initialize an array with color names. Display the array
// elements in your browser.

var color = ['Red','Yellow','Blue','purple']
console.log(color)

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
 var add_color_start = prompt('Add a color in the start')
 color.unshift(add_color_start)
 console.log(color)

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

var add_color_end = prompt('Add a color in the start')
color.push(add_color_end)
console.log(color)

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

var add_2color_start = ['pink','orange']
color= add_2color_start.concat(color) 
console.log(color)

// d. Delete the first color in the array. Display the updated
// array in your browser.

color.shift()
console.log(color)
// e. Delete the last color in the array. Display the updated
// array in your browser.

color.pop()
console.log(color)

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
var  add_index_color =prompt('Enter index of color adding')
add_index_color = parseInt(add_index_color)
var new_color =prompt("add new color")
color.splice(add_index_color,0,new_color)
console.log(color)

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

var  del_index_color =prompt('Enter index of color deleting')
del_index_color = parseInt(del_index_color)
var count =prompt("enter count delete color")
color.splice(del_index_color,count)
console.log(color)







// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
var my_score = [12,23,21,24,56,1,78,98,54,32,56,2,4,6]
my_score.sort()
console.log(my_score)





// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

var city =['karachi','multan','islamabad','faislabad','sukkar']
var selectedCities = city.slice(0,3)
console.log(selectedCities)





// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ['This','is','my','cat']
var arr = arr.join(' ')
console.log(arr)


// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

var fruits = []
fruits.push('mango')
fruits.push('banana')
fruits.push('apple')
console.log(fruits)


// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

var item = []
item.unshift('burger')
item.unshift('pizza')
item.unshift('sandwich')
item.unshift('ice cream')
console.log(item)




// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

var mobile = [ 'Apple','Samsung', 'Motorola', 'Nokia', 'Sony' , 'Haier']
    document.write('<select>');

    for (var i = 0; i < mobile.length; i++) {
        document.write('<option value="' + mobile[i] + '">' + mobile[i] + '</option>');
    }

    document.write('</select>');