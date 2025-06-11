let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";

document.getElementById("submitApiKey").addEventListener("click", setAPiKey);

/**
 * Handles the API key submission event.
 * 
 * Prevents the default form submission, retrieves the API key from the input field,
 * sends it to the server for validation, and processes the response.
 * If the API key is valid, it is saved to localStorage and the user is redirected to the main page.
 * If invalid, an alert is shown to the user.
 *
 * @param {Event} e - The event object from the form submission.
 */
function setAPiKey(e) {
    
    e.preventDefault();

    apiKey = document.getElementById("apiKey").value;
    
    fetch(rootPath + "controller/api-key/?apiKey=" + apiKey).then(function (response) {
        return response.text();
    }).then(function (data) {
        if (data == "1") {
            localStorage.setItem("apiKey", apiKey);
            window.open("index.html", "_self");
        } else {
            alert(data + "Invalid API Key entered. Please try again.");
        }
    })
}