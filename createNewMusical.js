const createNewMusical = (title, composer, numberOfTonys) => {
  return {
    title: title,
    composer: composer,
    numberOfTonys: numberOfTonys,
    songs: [],
    addSong(song) {
      this.songs.push(song)
    },
  }
}

const createNewCharacter = (name) => {
  return {
    name,
  }
}

// export default createNewMusical

export { createNewMusical, createNewCharacter }
