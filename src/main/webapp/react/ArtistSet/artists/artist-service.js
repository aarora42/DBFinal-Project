
const ARTISTS_URL = "http://localhost:8080/api/artists"



export const findAllArtists = () =>
    fetch(ARTISTS_URL)
        .then(response => response.json())



export const findArtistById = (idArtist) =>
    fetch(`${ARTISTS_URL}/${idArtist}`)
        .then(response => response.json())



export const deleteArtist = (idArtist) =>
    fetch(`${ARTISTS_URL}/delete/${idArtist}`, {
        method: "DELETE"
    })



export const createArtist = (artist) =>
    fetch(`${ARTISTS_URL}/create/${artist.firstName}/${artist.lastName}/${artist.username}/${artist.password}/fake@gmail.com/2001-12-02`, {
        method: 'POST',
        body: JSON.stringify(artist),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export const updateArtist = (idArtist, artist) =>
    fetch(`${ARTISTS_URL}/update/${idArtist}/${artist.password}`, {
        method: 'PUT',
        body: JSON.stringify(artist),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: export all functions as the API to this service
export default {
    findAllArtists,
    findArtistById,
    deleteArtist,
    createArtist,
    updateArtist
}
