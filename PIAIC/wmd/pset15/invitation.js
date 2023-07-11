var guestList = ["Irfan Khan", "Abdul Rafay", "Parveen Rehman"];
var guestWhoCantMakeIt = guestList[1];
console.log("".concat(guestWhoCantMakeIt, " can't make it to the dinner.\n"));
guestList[1] = "Sarah Ahmed";
for (var i = 0; i < guestList.length; i++) {
    var guest = guestList[i];
    console.log("Dear ".concat(guest, ", you are invited to a dinner at my place."));
    console.log("I would be honored to have your presence.\n");
}
