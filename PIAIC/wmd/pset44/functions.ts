function make_sandwich(...items: string[]): void {
  console.log("Sandwich Summary:");
  console.log(`- Bread`);
  for (let i = 0; i < items.length; i++) {
    console.log(`- ${items[i]}`);
  }
  console.log(`- Bread\n`);
}
make_sandwich('Bread', 'Shami Kabab');
make_sandwich('Luttace', 'CHatni', 'Tomato');
make_sandwich('Bread', 'Jelly', 'Banana');