var current_users = ['Hamza', 'Raza', 'Ali', 'Saad', 'sameed'];
var new_users = ['Iqbal', 'Naveed', 'Imran', 'Tahir', 'Shehryar'];
for (var i = 0; i < new_users.length; i++) {
    var newUserLowercase = new_users[i].toLowerCase();
    if (current_users.indexOf(newUserLowercase)) {
        console.log("Sorry, the username '".concat(new_users[i], "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_users[i], "' is available."));
    }
}
