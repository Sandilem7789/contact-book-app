var id = getId();                                       // Call the function to get the ID from the URL
console.log("The ID is: " + id);                        // Log the ID to the console

//an event listener for the homelink button
document.getElementById("homeLink").addEventListener("click", homeLink);


//we create a fuction for editing contacts using the id from the API
function getId() {
    var url = window.location.href;                     // Get the current URL from the window that is currently open
    var pos = url.search("=");                          // Search for the position of the "=" character in the URL
    var id = url.slice(pos + 1);                        // Extract the substring starting from the position after "=" to get the ID
    return id;                                          // Return the extracted ID

}

//we create a function to get the contact data from the API
function getContact() {
    let urlString = "controller/get-contacts/?id"      // Define the base URL for the API endpoint to get contact data

    fetch(rootPath + urlString + id)                   // Make a GET request to the API endpoint with the contact ID
        .then(function (response) {
            return response.json();                    // Parse the JSON response
        })
        .then(function (data) {
            console.log(data);                         // Log the data to the console
            //displayContactData(data);                  // Call the function to display the contact data
        });
}

function homeLink() {
    window.open("index.html", "_self");                // Redirect to the home page when the home link is clicked
}