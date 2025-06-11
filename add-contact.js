let submitFormButton = document.getElementById("submitContact");              // Get the submit button element
let homeLinkButton = document.getElementById("homeLink");                  // Get the home link button element

submitFormButton.addEventListener("click", submitForm);                    // Add a click event listener to the submit button
homeLinkButton.addEventListener("click", homeLink);                        // Add a click event listener to the home link button


function submitForm(e) {
    e.preventDefault();                                                    // Prevent the default submit behavior

    const form = new FormData(document.querySelector('#editForm'));        // Get the form data
    form.append('apiKey', apiKey);                                         // Append (adding additional data to the forma data) the API key to the form data

    fetch(rootPath + 'controller/insert-contact/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, *.*'                               // Set the Accept header to application/json
        },
        body: form
    }).then(function (response){
        return response.text();                                             // Parse the response as text
    }).then(function (data) {
        if (data == "1") {
            alert("Contact added successfully!");                           // If the response is "1", alert success
            homeLink();                                                     // Redirect to the home page
        }else {
            alert("Error adding contact: " + data);                        // Otherwise, alert the error message
            homeLink();                                                     // Redirect to the home page
        }
    })
}

/**
 * Redirects the user to the home page by opening "index.html" in the current browser tab.
 */
function homeLink() {
    window.open("index.html", "_self");                                     // Redirect to the home page
}