let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey = checkApiKey();

function checkApiKey() {
    if (!localStorage.getItem("apiKey")) {
        console.log("API Key not found in localStorage. Redirecting to enter API key page.");
        
        window.open("enter-api-key.html", "_self")
    }
    return localStorage.getItem("apiKey");
}