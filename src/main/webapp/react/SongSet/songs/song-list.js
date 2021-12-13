const {Link, useHistory} = window.ReactRouterDOM;
import songService, {findAllSongs} from "./song-service"
const { useState, useEffect } = React;


const SongList = () => {
    const history = useHistory()
    const [songs, setSongs] = useState([])
    useEffect(() => {
        findAllSongs()
    }, [])
    const findAllSongs = () =>
        songService.findAllSongs()
            .then(songs => setSongs(songs))
    const updateSong = (idSongs, newSong) =>
        songService.updateSong(idSongs, newSong)
            .then(() => history.back())


    return(
        <div>
            <h2>Song List</h2>
            <button className="btn btn-primary" onClick={() => history.push("/songs/new")}>
                Add Song
            </button>
            <ul className="list-group">
                    {
                        songs.map(song =>
                            <li className="list-group-item" key={song.idSongs}>
                                <Link to={`/songs/${song.idSongs}`}>
                                    {song.title},
                                    {song.genre},
                                    {song.album}
                                </Link>
                            </li>)
                    }
            </ul>
        </div>
    )
}

export default SongList;