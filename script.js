// variable that will hold the url of the server
const url = `http://localhost:8088/food` /*(this url is the food-api from ../c10-fetching-data/api/database.json*/;

// Happens before fetch 
console.log("before the fetch");

// Loops through data and prints it to console
const printData = (allData) => {
    allData.forEach(data => {
            console.log(data);
    });
};

// Creates html for data
const dataFactory = data => `<section>${data.name}</section>`;

// renders data HTML to the DOM
const addDataToDom = dataHTML =>{
    const container = document.querySelector("#container");
    container.innerHTML += dataHTML;
}

// Fetch data from url
fetch(url)
    // Then do something with it
    .then(response /* taco */ => response.json())/*Take response and convert/parse it to json */
    // get access to json data
    .then(jsonData /* holds data of json (taco) */=> {
        /* // Will console log value of data variable
        printData(jsonData); */
        jsonData.forEach(data => {
            const dataHTML = dataFactory(data);
            addDataToDom(dataHTML);
        });

        // Happens inside then, which will run after fetch is done.
        console.log("Really after the fetch???");
    });

    // console logs while fetch is fetching data. That's why this shows up before data
    console.log("After the fetch???");