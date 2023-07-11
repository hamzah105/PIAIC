function show_magicians(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}
function make_great(magicians: string[]): string[] {
  let modifiedMagicians: string[] = [];

  for (let i = 0; i < magicians.length; i++) {
    modifiedMagicians.push(`the Great ${magicians[i]}`);
  }
  return modifiedMagicians;
}
let magicians = ['Larry Houdini', 'David Copperfield', 'Pen Jillette', 'Teller'];
let modifiedMagicians = make_great([...magicians]);

show_magicians(magicians);
console.log('---');
show_magicians(modifiedMagicians);