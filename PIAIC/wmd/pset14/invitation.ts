const guestList: string[] = ["Irfan Khan", "Ali Sohail", "Parveen Rehman"];

for (let i = 0; i < guestList.length; i++) {
  const guest = guestList[i];
  console.log(`Dear ${guest}, you are invited to a dinner at my place.`);
  console.log("I would be honored to have your presence.\n");
}