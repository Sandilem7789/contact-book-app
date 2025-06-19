let refresh = document.getElementById("refresh");
let addContactButton = document.getElementById("addContact");

addContactButton.addEventListener("click", addContact);                // Add a click event listener to the add contact button

refresh.addEventListener("click", function() {
    fetchContacts();
    console.log("Contacts refreshed!");
});


/**
 * Fetches the list of contacts from the server and displays the output.
 * Makes a GET request to the 'get-contacts' endpoint, parses the JSON response,
 * and passes the data to the displayOutput function. Also logs the data to the console.
 */
function fetchContacts() {
    fetch(rootPath + "controller/get-contacts/").then(function (response) {
        return response.json();
    }).then(function (data) {
        displayOutput(data);
        //console.log(data);
    })
}

/**
 * Displays a table of contact data in the HTML element with id "table".
 *
 * @param {Array<Object>} data - An array of contact objects to display. Each object should have
 *   the properties: `firstname` (string), `lastname` (string), and `avatar` (string, image filename).
 */
function displayOutput(data) {
    output = `<table class="contacts-table">`;

    for (a in data) {
        console.log(data[a].firstname + " " + data[a].lastname);
        output += `
            <tr onclick="editContact(${data[a].id})">
                <td><img src="${rootPath}controller/uploads/${data[a].avatar}"></td>
                <td><h5>${data[a].firstname}</h5></td>
                <td><h5>${data[a].lastname}</h5></td>
            </tr>
        `
    }
    output += `</table>`;
    document.getElementById("table").innerHTML = output;
}

function addContact() {
    window.open("add-contact.html", "_self");                                   // Redirect to the add contact page
}

// this function is for editing contacts
function editContact(id) {
    window.open("edit-contact.html?id=" + id, "_self");                         // Redirect to the edit contact page with the contact ID
}