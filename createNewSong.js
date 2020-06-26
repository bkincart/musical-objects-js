const createNewSong = (providedTitle, providedCharacters, providedLength) => {
  return {
    title: providedTitle,
    characters: providedCharacters,
    length: providedLength,
  }
}

export default createNewSong
