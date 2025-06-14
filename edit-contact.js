var id = getId();                                       // Call the function to get the ID from the URL
console.log("The ID is: " + id);                     // Log the ID to the console


//we create a fuction for editing contacts using the id from the API
function getId() {
    var url = window.location.href;                     // Get the current URL from the window that is currently open
    var pos = url.search("=");                          // Search for the position of the "=" character in the URL
    var id = url.slice(pos + 1);                        // Extract the substring starting from the position after "=" to get the ID
    return id;                                          // Return the extracted ID

}