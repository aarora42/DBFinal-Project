import albumService, {updateAlbum} from "./album-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const AlbumFormEditor = () => {
        const {id} = useParams()
        const [album, setAlbum] = useState({})
        useEffect(() => {
                if(id !== "new") {
                        findAlbumById(id)
                }
        }, []);
        const createAlbum = (album) =>
            albumService.createAlbum(album)
                .then(() => history.back())

        const findAlbumById = (id) =>
            albumService.findAlbumById(id)
                .then(album => setAlbum(album))
        const deleteAlbum = (id) =>
                albumService.deleteAlbum(id)
                .then(() => history.back())

        return (
        <div>
            <h2>Album Editor</h2>
            <p>Instructions: <br/>
            Create: enter Album title and ID of desired artist then hit 'create' <br/>
            Update: enter new Album title (this site only supports changing album title) then hit 'save' <br/>
            Delete: simply press delete
            </p>
                <label>Id: {album.id}</label>
                {/*<input value={album.id}/>*/}
                <br/>
                <label>Title: </label>
                <input                onChange={(e) =>
                    setAlbum(album =>
                        ({...album, title: e.target.value}))}
                                      value={album.title}
                                      />
                                       <br/>
            <label>Artist:</label>
            <input                onChange={(e) =>
                setAlbum(album =>
                    ({...album, artist: e.target.value}))}
                                  value={album.artist}/>
                                  <br/>
                <button className="btn btn-warning"
                        onClick={() => {
                                history.back()}}>
                        Cancel</button>
                <button  className="btn btn-danger"
                         onClick={() => deleteAlbum(album.id)}>
                        Delete
                </button>
            <button className="btn btn-primary"
                onClick={() => updateAlbum(album.id, album)}>
                Save
            </button>

            <button className="btn btn-success"
                    onClick={() => createAlbum(album)}>
                        Create
                </button>

        </div>
    )
}

export default AlbumFormEditor