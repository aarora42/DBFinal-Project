const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineSongEditor = ({song, deleteSong, updateSong}) => {
    const [songCopy, setSongCopy] = useState(song)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={songCopy.title}
                            onChange={(e)=>setSongCopy(songCopy => ({...songCopy, title: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={songCopy.genre}
                            onChange={(e)=>setSongCopy(songCopy => ({...songCopy, genre: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={songCopy.album}
                            onChange={(e)=>setSongCopy(songCopy => ({...songCopy, album: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/songs/${songCopy.idSongs}/songs`}>
                            Songs
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateSong(songCopy.idSongs, songCopy.genre)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteSong(song.idSongs)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/songs/${songCopy.idSongs}`}>
                            {songCopy.title}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/songs/${songCopy.idSongs}`}>
                            {songCopy.genre}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/songs/${songCopy.idSongs}`}>
                            {songCopy.album}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/songs/${songCopy.idSongs}/songs`}>
                            Songs
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default InlineSongEditor;