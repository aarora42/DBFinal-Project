import songService, {updateSong} from "./song-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const SongFormEditor = () => {
        const {idSongs} = useParams()
        const [song, setSong] = useState({})
        useEffect(() => {
                if(idSongs !== "new") {
                        findSongById(idSongs)
                }
        }, []);
        const createSong = (song) =>
            songService.createSong(song)
                .then(() => history.back())

        const findSongById = (idSongs) =>
            songService.findSongById(idSongs)
                .then(song => setSong(song))
        const deleteSong = (idSongs) =>
                songService.deleteSong(idSongs)
                .then(() => history.back())

        return (
        <div>
            <h2>Song Editor</h2>
            <label>Id: {song.idSongs}</label> <br/>
                <label>Title: {song.title}</label>
                {/*<input                onChange={(e) =>*/}
                {/*    setSong(song =>*/}
                {/*        ({...song, title: e.target.value}))}*/}
                {/*                       value={song.title}/>*/}
                                       <br/>
                <label>Genre </label>
                <input  onChange={(e) =>
                    setSong(song =>
                        ({...song, genre: e.target.value}))}
                         value={song.genre}/><br/>
                <label>Album: {song.album}</label>
                {/*<input        onChange={(e) =>*/}
                {/*    setSong(song =>*/}
                {/*        ({...song, album: e.target.value}))}*/}
                {/*              value={song.album}/>*/}
                              <br/>
                <button className="btn btn-warning"
                        onClick={() => {
                                history.back()}}>
                        Cancel</button>
                <button  className="btn btn-danger"
                         onClick={() => deleteSong(song.idSongs)}>
                        Delete
                </button>
            <button className="btn btn-primary"
                onClick={() => updateSong(song.idSongs, song)}>
                Save
            </button>

            <button className="btn btn-success"
                    onClick={() => createSong(song)}>
                        Create
                </button>

        </div>
    )
}

export default SongFormEditor