function fetchContacts() {
    fetch(rootPath + "controller/get-contacts/").then(function (response) {
        return response.json();
    }).then(function (data) {
        displayOutput(data);
        console.log(data);
    })
}

function displayOutput(data) {
    output = `<table class="contacts-table>`;

    for (a in data) {
        console.log(data[a].firstname + " " + data[a].lastname);
        output += `
            <tr>
                <td><img src="${rootPath}controller/uploads/${data[a].avatar}"></td>
                <td><h5>${data[a].firstname}</h5></td>
                <td><h5>${data[a].lastname}</h5></td>
            </tr>
        `
    }
    output += `</table>`;
    document.getElementById("table").innerHTML = output;
}