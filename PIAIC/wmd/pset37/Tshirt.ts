function make_shirt(size: string = 'Large', message: string = 'I love TypeScript') {
  console.log(`A ${size}-sized shirt will be made with the message: "${message}".`);
}

make_shirt();

make_shirt('Medium');

make_shirt('Small', 'Hello, World!');