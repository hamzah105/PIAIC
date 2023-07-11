function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    console.log("- Bread");
    for (var i = 0; i < items.length; i++) {
        console.log("- ".concat(items[i]));
    }
    console.log("- Bread\n");
}
make_sandwich('Bread', 'Shami Kabab');
make_sandwich('Luttace', 'CHatni', 'Tomato');
make_sandwich('Bread', 'Jelly', 'Banana');
