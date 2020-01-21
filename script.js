// variable that will hold the url of the server
const url = `http://localhost:8088/food` /*(this url is the food-api from ../c10-fetching-data/api/database.json*/;

// Happens before fetch 
console.log("before the fetch");

// Fetch data from url
fetch(url)
    // Then do something with it
    .then(response /* taco */ => response.json())/*Take response and convert/parse it to json */
    // get access to json data
    .then(data /* holds data of json (taco) */=> {
        // Will console log value of data variable
        console.log(data);
        // Happens after fetch because it's runs in order of the fetch's rules
        console.log("Really after the fetch???");
    });

    // console logs while fetch is fetching data. That's why this shows up before data
    console.log("After the fetch???");