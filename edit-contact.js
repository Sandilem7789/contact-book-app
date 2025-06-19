var id = getId();                                                               // Call the function to get the ID from the URL

//an event listener for the homelink button
document.getElementById("homeLink").addEventListener("click", homeLink);        // never put brackets after the function name in an event listener

//an event listener for the edit button
document.getElementById("editContact").addEventListener("click", editContact);  // Add a click event listener to the edit contact button

//submiting the form after the contact has been edited
document.getElementById("submitForm").addEventListener("click", submitForm);    // Add a click event listener to the submit button

//we create a fuction for editing contacts using the id from the API
function getId() {
    var url = window.location.href;                                             // Get the current URL from the window that is currently open
    var pos = url.search("=");                                                  // Search for the position of the "=" character in the URL
    var id = url.slice(pos + 1);                                                // Extract the substring starting from the position after "=" to get the ID
    return id;                                                                  // Return the extracted ID

}

//we create a function to get the contact data from the API
function getContact() {
    let urlString = "controller/get-contacts/?id="                              // Define the base URL for the API endpoint to get contact data

    fetch(rootPath + urlString + id)                                            // Make a GET request to the API endpoint with the contact ID
        .then(function (response) {
            return response.json();                                             // Parse the JSON response
        })
        .then(function (data) {
            displayOutput(data);                                                // Call the function to display the contact data
        });
}

function homeLink() {
    window.open("index.html", "_self");                                         // Redirect to the home page when the home link is clicked
}

//function for displaying out the contact data
function displayOutput(data) {
   
    let avatarImg = `<img src="${rootPath}controller/uploads/${data[0].avatar}" width="200" alt="Avatar">`          // Create an HTML string for the avatar image using the data from the contact   
    document.getElementById("avatarImage").innerHTML = avatarImg;                                                   // Set the avatar image in the HTML
    
    document.getElementById("firstname").value = data[0].firstname;                                                 // Set the first name input field with the contact's first name
    document.getElementById("lastname").value = data[0].lastname;                                                   // Set the last name input field with the contact's last name
    document.getElementById("email").value = data[0].email;                                                         // Set the email input field with the contact's email
    document.getElementById("mobile").value = data[0].mobile;                                                       // Set the phone input field with the contact's phone number
}

//editContact, function for editing the contact
function editContact() {
    document.getElementById("firstname").readOnly = false;                      // Make the first name input field editable
    document.getElementById("lastname").readOnly = false;                       // Make the last name input field editable
    document.getElementById("email").readOnly = false;                          // Make the email
    document.getElementById("mobile").readOnly = false;                         // Make the phone input field editable
    document.getElementById("avatarLabel").hidden = false;                      // Show the avatar label
    document.getElementById("avatar").hidden = false;                           // Show the avatar input field
    document.getElementById("submitForm").hidden = false;                       // Show the submit button
}

// submitForm the submit button after the contact has been edited and button is visible

function submitForm(e) {
    e.preventDefault();                                                         // Prevent the default form submission behavior

    const form = new FormData(document.querySelector("#editForm"));             // Create a FormData object from the form with id "editForm"
    form.append('apiKey', apiKey);                                              // Append the contact ID to the FormData object  
    form.append('id', id);                                                      // Append the API key to the FormData object

    //now we need to send the data to the API using a POST request
    fetch(rootPath + "controller/edit-contact/", {
        method: 'POST',                                                         // Set the request method to POST
        headers: {'Accept': 'application/json, *.*'},                           // Set the Accept header to application/json
        body: form                                                              // Set the body of the request to the FormData object
    })
    .then(function (response) {
        return response.text();                                                 // Parse the response as text
    })
    .then(function (data) {
        if(data == "1"){
            alert("Contact updated successfully!");                             // If the response is "1", show a success alert
            homeLink();                                                         // Redirect to the home page
        }
        else {
            alert("Error updating contact: " + data);                            // If the response is not "1", show an error alert with the response data
            homeLink();                                                          // Redirect to the home page
        }
    })
}
