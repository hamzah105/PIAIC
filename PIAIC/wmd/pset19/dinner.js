var guestList = ["Mujtuba Hashmi", "Irfan Khan", "Sufyan Ali", "Sarah Ahmed", "Masoom Bacha"];
console.log("Sorry, the new dinner table won't arrive in time. I can only invite two people for dinner.\n");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("".concat(removedGuest, ", I'm sorry, but I can't invite you to dinner this time."));
}
console.log();
for (var i = 0; i < guestList.length; i++) {
    var guest = guestList[i];
    console.log("Dear ".concat(guest, ", you're still invited to a dinner at my place."));
}
console.log("\nNumber of people invited to dinner: ".concat(guestList.length));
