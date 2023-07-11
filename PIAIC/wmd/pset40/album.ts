function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
  let album = {
    artist: artist,
    title: title
  };
  if (tracks) {
    album.tracks = tracks;
  }
  return album;
}
let album1 = make_album('Atif Aslam', 'album1');
let album2 = make_album('Coke Studio', 'album2', 10);
let album3 = make_album('Mitraz', 'abum3', 15);
console.log(album1);
console.log(album2);
console.log(album3);