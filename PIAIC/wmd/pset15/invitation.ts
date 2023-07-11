let guestList: string[] = ["Irfan Khan", "Abdul Rafay", "Parveen Rehman"];

const guestWhoCantMakeIt = guestList[1];
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.\n`);

guestList[1] = "Sarah Ahmed";

for (let i = 0; i < guestList.length; i++) {
  const guest = guestList[i];
  console.log(`Dear ${guest}, you are invited to a dinner at my place.`);
  console.log("I would be honored to have your presence.\n");
}