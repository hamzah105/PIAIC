var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Torrento", "Dubai", "Moscow", "Cairo", "Sydney"];
console.log("Original Order:");
console.log(placesToVisit);
console.log("\nAlphabetical Order (without modifying the original list):");
console.log(__spreadArray([], placesToVisit, true).sort());
console.log("\nStill in Original Order:");
console.log(placesToVisit);
console.log("\nReverse Alphabetical Order (without modifying the original list):");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
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
