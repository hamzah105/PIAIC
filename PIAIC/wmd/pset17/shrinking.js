var guestList = ["Mujtuba Hashmi", "Irfan Khan", "Sufyan Ali", "Sarah Ahmed", "Masoom Bacha"];
var guestWhoCantMakeIt = guestList.shift();
console.log("".concat(guestWhoCantMakeIt, ", I'm sorry, but the new dinner table won't arrive in time. I can only invite two people for dinner."));
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("".concat(removedGuest, ", I'm sorry, but I can't invite you to dinner this time."));
}
console.log();
for (var i = 0; i < guestList.length; i++) {
    var guest = guestList[i];
    console.log("Dear ".concat(guest, ", you're still invited to a dinner at my place."));
}
guestList = [];
console.log("\nAfter removing the last two names, the guest list is: [".concat(guestList, "]."));
