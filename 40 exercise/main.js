function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three fuctions with diffrent value and creating three varaibles
var album1 = make_album("Hamza", "album title 1");
var album2 = make_album("Rafia", "album title 2");
var album3 = make_album("Maryam", "album title 3", 10);
//  print vlaues of our objects creating my function
console.log(album1);
console.log(album2);
console.log(album3);
