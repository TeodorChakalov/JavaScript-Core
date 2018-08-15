function playingMusicalTrack(input) {
    let nameOfTheTrack = input[0];
    let nameOfTheArtist = input[1];
    let duration = input[2];

    console.log(`Now Playing: ${nameOfTheArtist} - ${nameOfTheTrack} [${duration}]`);
}

playingMusicalTrack(['Number One', 'Nelly', '4:09']);