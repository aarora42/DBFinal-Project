import albumService, {findAllAlbums} from "./album-service"
const {Link, useHistory} = window.ReactRouterDOM;
const { useState, useEffect } = React;


const AlbumList = () => {
    const history = useHistory()
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        findAllAlbums()
    }, [])
    const findAllAlbums = () =>
        albumService.findAllAlbums()
            .then(albums => setAlbums(albums))
    const updateAlbum = (id, newAlbum) =>
        albumService.updateAlbum(id, newAlbum)
            .then(() => history.back())


    return(
        <div>
            <h2>Album List</h2>
            <button className="btn btn-primary" onClick={() => history.push("/albums/new")}>
                Add Album
            </button>
            <ul className="list-group">
                    {
                        albums.map(album =>
                            <li className="list-group-item" key={album.id}>
                                <Link to={`/albums/${album.id}/`}>
                                    {album.title}
                                </Link>
                            </li>)
                    }
            </ul>
        </div>
    )
}

export default AlbumList;