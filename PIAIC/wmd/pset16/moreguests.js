var guestList = ["Irfan Khan", "Sarah Ahmed", "Parveen Rehman"];
var guestWhoCantMakeIt = guestList[1];
console.log("".concat(guestWhoCantMakeIt, " can't make it to the dinner."));
guestList[1] = "Abdul Rafay";
var newGuests = ["Mujtuba Hashmi", "Sufyan Ali", "Masoom Bacha"];
guestList.unshift(newGuests[0]);
guestList.splice(Math.ceil(guestList.length / 2), 0, newGuests[1]);
guestList.push(newGuests[2]);
console.log("\nGreat news! We found a bigger dinner table!\n");
for (var i = 0; i < guestList.length; i++) {
    var guest = guestList[i];
    console.log("Dear ".concat(guest, ", you are invited to a dinner at my place."));
    console.log("I would be honored to have your presence.\n");
}
