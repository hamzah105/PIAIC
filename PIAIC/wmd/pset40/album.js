function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album('Atif Aslam', 'album1');
var album2 = make_album('Coke Studio', 'album2', 10);
var album3 = make_album('Mitraz', 'abum3', 15);
console.log(album1);
console.log(album2);
console.log(album3);
