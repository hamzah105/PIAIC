const placesToVisit: string[] = ["Torrento", "Dubai", "Moscow", "Cairo", "Sydney"];

console.log("Original Order:");
console.log(placesToVisit);

console.log("\nAlphabetical Order (without modifying the original list):");
console.log([...placesToVisit].sort());

console.log("\nStill in Original Order:");
console.log(placesToVisit);

console.log("\nReverse Alphabetical Order (without modifying the original list):");
console.log([...placesToVisit].sort().reverse());
console.log("\nStill in Original Order:");
console.log(placesToVisit);

console.log("\nReversed Order:");
console.log(placesToVisit.reverse());

console.log("\nReversed Order Again:");
console.log(placesToVisit.reverse());

console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit.sort());

console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit.sort().reverse());