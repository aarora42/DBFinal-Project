
const SONGS_URL = "http://localhost:8080/api/songs"



export const findAllSongs = () =>
    fetch(SONGS_URL)
        .then(response => response.json())



export const findSongById = (idSongs) =>
    fetch(`${SONGS_URL}/${idSongs}`)
        .then(response => response.json())



export const deleteSong = (idSongs) =>
    fetch(`${SONGS_URL}/delete/${idSongs}`, {
        method: "DELETE"
    })



export const createSong = (song) =>
    fetch(`${SONGS_URL}/create/${song.title}/${song.genre}/${song.album}`, {
        method: 'POST',
        body: JSON.stringify(song),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export const updateSong = (idSongs, song) =>
    fetch(`${SONGS_URL}/update/${idSongs}/${song.genre}`, {
        method: 'PUT',
        body: JSON.stringify(song),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: export all functions as the API to this service
export default {
    findAllSongs,
    findSongById,
    deleteSong,
    createSong,
    updateSong
}
