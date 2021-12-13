const {Link, useHistory} = window.ReactRouterDOM;
import artistService, {findAllArtists} from "./artist-service"
const { useState, useEffect } = React;


const ArtistList = () => {
    const history = useHistory()
    const [artists, setArtists] = useState([])
    useEffect(() => {
        findAllArtists()
    }, [])
    const findAllArtists = () =>
        artistService.findAllArtists()
            .then(artists => setArtists(artists))
    const updateArtist = (idArtist, newArtist) =>
        artistService.updateArtist(idArtist, newArtist)
            .then(() => history.back())


    return(
        <div>
            <h2>Artist List</h2>
            <button className="btn btn-primary" onClick={() => history.push("/artists/new")}>
                Add Artist
            </button>
            <ul className="list-group">
                    {
                        artists.map(artist =>
                            <li className="list-group-item" key={artist.idArtist}>
                                <Link to={`/artists/${artist.idArtist}`}>
                                    {artist.firstName},
                                    {artist.lastName},
                                    {artist.username}
                                </Link>
                            </li>)
                    }
            </ul>
        </div>
    )
}

export default ArtistList;