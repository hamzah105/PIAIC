let current_users = ['Hamza', 'Raza', 'Ali', 'Saad', 'sameed'];
let new_users = ['Iqbal', 'Naveed', 'Imran', 'Tahir', 'Shehryar'];
for (let i = 0; i < new_users.length; i++) {
  let newUserLowercase = new_users[i].toLowerCase();
  if (current_users.indexOf(newUserLowercase)) {
    console.log(`Sorry, the username '${new_users[i]}' is already taken. Please enter a new username.`);
  } else {
    console.log(`Congratulations! The username '${new_users[i]}' is available.`);
  }
}