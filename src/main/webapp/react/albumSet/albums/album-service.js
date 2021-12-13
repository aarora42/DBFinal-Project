
const ALBUMS_URL = "http://localhost:8080/api/albums"



export const findAllAlbums = () =>
    fetch(ALBUMS_URL)
        .then(response => response.json())



export const findAlbumById = (id) =>
    fetch(`${ALBUMS_URL}/${id}`)
        .then(response => response.json())



export const deleteAlbum = (id) =>
    fetch(`${ALBUMS_URL}/delete/${id}`, {
        method: "DELETE"
    })



export const createAlbum = (album) =>
    fetch(`${ALBUMS_URL}/create/${album.title}/${album.artist}`, {
        method: 'POST',
        body: JSON.stringify(album),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export const updateAlbum = (id, album) =>
    fetch(`${ALBUMS_URL}/update/${id}/${album.title}`, {
        method: 'PUT',
        body: JSON.stringify(album),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: export all functions as the API to this service
export default {
    findAllAlbums,
    findAlbumById,
    deleteAlbum,
    createAlbum,
    updateAlbum
}
