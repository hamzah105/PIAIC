let guestList: string[] = ["Mujtuba Hashmi", "Irfan Khan", "Sufyan Ali", "Sarah Ahmed", "Masoom Bacha"];

const guestWhoCantMakeIt = guestList.shift();
console.log(`${guestWhoCantMakeIt}, I'm sorry, but the new dinner table won't arrive in time. I can only invite two people for dinner.`);

while (guestList.length > 2) {
  const removedGuest = guestList.pop();
  console.log(`${removedGuest}, I'm sorry, but I can't invite you to dinner this time.`);
}

console.log();

for (let i = 0; i < guestList.length; i++) {
  const guest = guestList[i];
  console.log(`Dear ${guest}, you're still invited to a dinner at my place.`);
}

guestList = [];

console.log(`\nAfter removing the last two names, the guest list is: [${guestList}].`);