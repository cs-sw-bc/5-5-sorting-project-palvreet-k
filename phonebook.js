let phoneBook = [
    { name: "Jasmine", phone: "4165559999", city: "Detroit" },
    { name: "Dan", phone: "6475551234", city: "Calgary" },
    { name: "Cory", phone: "9051112222", city: "Caledonia" },
    { name: "Wilmer", phone: "4378887777", city: "Wilmington" },
    { name: "Alicia", phone: "2895553344", city: "Hamilton" },
    { name: "Marcus", phone: "7805556677", city: "Edmonton" },
    { name: "Tanya", phone: "6135558899", city: "Ottawa" },
    { name: "Leo", phone: "2045551122", city: "Winnipeg" },
    { name: "Sabrina", phone: "9025557788", city: "Halifax" },
    { name: "Derek", phone: "5195554433", city: "London" },
    { name: "Monica", phone: "7055559900", city: "Sudbury" },
    { name: "Ethan", phone: "4035552211", city: "Red Deer" },
    { name: "Priya", phone: "2365554455", city: "Vancouver" },
    { name: "Luis", phone: "2505556678", city: "Kelowna" },
    { name: "Chloe", phone: "5145558890", city: "Montreal" },
    { name: "Brandon", phone: "4385551239", city: "Laval" },
    { name: "Nina", phone: "3065557789", city: "Regina" },
    { name: "Omar", phone: "8675553345", city: "Yellowknife" },
    { name: "Hailey", phone: "3655559988", city: "Brampton" },
    { name: "Victor", phone: "5875557766", city: "Lethbridge" },
    { name: "Grace", phone: "4505551123", city: "Longueuil" },
    { name: "Trevor", phone: "2895556670", city: "Oakville" },
    { name: "Isabella", phone: "7785554411", city: "Victoria" },
    { name: "Noah", phone: "5065553322", city: "Fredericton" },
    { name: "Layla", phone: "7095558891", city: "St. John's" },
    { name: "Caleb", phone: "8075552244", city: "Thunder Bay" },
    { name: "Zara", phone: "3435556655", city: "Kingston" }
];

// ADD ENTRY

function addEntry(book, entry) {
    let i
    if (book.length == 0) { // empty array
        book[0] = entry;
        return;
    }
    for (i = 0; i < book.length; i++) { // loop until i is equal to length of array
    }
    book[i] = entry // add entry at value of length of array(i.e. next empty index)
}
// addEntry(phoneBook, {name: "Reet", phone: "5555555555", city: "Toronto"});
// console.log(phoneBook);

// UPDATE ENTRY

function updateEntry(book, name, newData) {
    for (let i = 0; i < book.length; i++) { //loop through all entries
        if (book[i].name == name) { // if an entry's name matches the name provided, replace it with newEntry Data
            book[i] = newData;
        }
    }
}

// updateEntry(phoneBook, "Noah", {name: "No", phone: "5555555555", city: "Toronto"});
// console.log(phoneBook);

// DELETE ENTRY

function deleteEntry(book, name) {
    for (let i = 0; i < book.length; i++) { //loop through all entries
        if (book[i].name == name) {// if name matches
            for (let j = i; j < book.length; j++) //start from this entry to the end of array, shift all entries to left
                book[i] = book[i + 1];
        }
        book.length = book.length - 1; // decrease length by 1(will only work correctly if only 1 match)
        break; // stop looping once match found considering there is only one match
    }
}
// console.log(phoneBook.length);
// deleteEntry(phoneBook, "Cory");
// console.log(phoneBook);
// console.log(phoneBook.length);

// Part A — Bubble Sort by Name (Ascending)

function bubbleSortByName(book) {
    let temp;
    for (let j = 0; j < book.length - 1; j++) {  // Outer loop: number of passes
        for (let i = 0; i < book.length - 1 - j; i++) { // Inner loop: number of comparisons in each pass
            if (book[i].name > book[i + 1].name) { // if name is greater than name of next entry, we swap using temp
                temp = book[i];
                book[i] = book[i + 1];
                book[i + 1] = temp;
            }
        }
    }
}

// bubbleSortByName(phoneBook);
// console.log(phoneBook);

// Part B — Selection Sort by Phone (Ascending)

function selectionSortByPhone(book) {
    let temp;
    for (let j = 0; j < book.length - 1; j++) { // Number of passes 
        let minIndex = j;
        for (let i = 1 + j; i < book.length; i++) { // start comparing at 1+ j i.e. if its Pass 2 : j =1 ; i = 1+1 =2 , we start comparing at index 2
            if (Number(book[i].phone) < Number(book[minIndex].phone)) { // Compare phone number
                minIndex = i; // update minIndex is we found another phone number that is less than current min
            }
        }
        if (minIndex !== j) { // swap if minimum phone number was found that was not equal to current j pass position phone number
            temp = book[j];
            book[j] = book[minIndex];
            book[minIndex] = temp;
        }
    }

}

// selectionSortByPhone(phoneBook);
// console.log(phoneBook);

// Part C — Merge Sort by Name

function mergeSortByName(book) {
    if (book.length <= 1) { // book is empty or only one entry
        return book;
    }
    let middle = Math.floor(book.length / 2); // Find the middle element, then start breaking into left and right arrays 
    let left = book.slice(0, middle);
    let right = book.slice(middle);
    return merge(mergeSortByName(left), mergeSortByName(right));
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i].name < right[j].name) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }
    return result;
}

let sorted = mergeSortByName(phoneBook);
console.log(sorted);
// Which algorithm was easiest to implement?
// Bubble sort was easiest as each time we are just comparing two adjacent element and swapping and then repeating this until all sorted
// Which one was hardest to understand?
// Merge sort was hardest codewise (its okay to understand it on paper)
// Which sorting algorithms modify the original array?
// Bubble and Selection as it sorts the elements by swapping positions
// Which algorithm returns a new array?
// Merge as it breaks the array into new arrays and then merges again
// What is the main structural difference between merge sort and the other two?
// As mentioned above, merge sort breaks the array into new arrays and then merges again returning a new array
//while other two are sorting the original arrays by swapping the positions
