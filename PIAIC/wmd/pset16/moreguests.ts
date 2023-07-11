let guestList: string[] = ["Irfan Khan", "Sarah Ahmed", "Parveen Rehman"];

const guestWhoCantMakeIt = guestList[1];
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);

guestList[1] = "Abdul Rafay";

const newGuests = ["Mujtuba Hashmi", "Sufyan Ali", "Masoom Bacha"];

guestList.unshift(newGuests[0]);
guestList.splice(Math.ceil(guestList.length / 2), 0, newGuests[1]);
guestList.push(newGuests[2]);

console.log("\nGreat news! We found a bigger dinner table!\n");

for (let i = 0; i < guestList.length; i++) {
  const guest = guestList[i];
  console.log(`Dear ${guest}, you are invited to a dinner at my place.`);
  console.log("I would be honored to have your presence.\n");
}