var guestList = ["Irfan Khan", "Ali Sohail", "Parveen Rehman"]; // List of guests
for (var i = 0; i < guestList.length; i++) {
    var guest = guestList[i];
    console.log("Dear ".concat(guest, ", you are invited to a dinner at my place."));
    console.log("I would be honored to have your presence.\n");
}
