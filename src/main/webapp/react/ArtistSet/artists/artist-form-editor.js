import artistService, {updateArtist} from "./artist-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const ArtistFormEditor = () => {
        const {idArtist} = useParams()
        const [artist, setArtist] = useState({})
        useEffect(() => {
                if(idArtist !== "new") {
                        findArtistById(idArtist)
                }
        }, []);
        const createArtist = (artist) =>
            artistService.createArtist(artist)
                .then(() => history.back())

        const findArtistById = (idArtist) =>
            artistService.findArtistById(idArtist)
                .then(artist => setArtist(artist))
        const deleteArtist = (idArtist) =>
                artistService.deleteArtist(idArtist)
                .then(() => history.back())

        return (
        <div>
            <h2>Artist Editor</h2>
                <label>Id: {artist.idArtist}</label>
                {/*<input value={artist.idArtist}/>*/}
                <br/>
                <label>First Name: {artist.firstName}</label>
                {/*<input                onChange={(e) =>*/}
                {/*    setArtist(artist =>*/}
                {/*        ({...artist, firstName: e.target.value}))}*/}
                {/*                       value={artist.firstName}/>*/}
                                       <br/>
                <label>Last Name: {artist.lastName}</label>
                {/*<input  onChange={(e) =>*/}
                {/*    setArtist(artist =>*/}
                {/*        ({...artist, lastName: e.target.value}))}*/}
                {/*         value={artist.lastName}/>*/}
                         <br/>
                <label>Username: {artist.username}</label>
                {/*<input        onChange={(e) =>*/}
                {/*    setArtist(artist =>*/}
                {/*        ({...artist, username: e.target.value}))}*/}
                {/*              value={artist.username}/>*/}
                              <br/>
                <label>Password: </label>
                <input    onChange={(e) =>
                    setArtist(artist =>
                        ({...artist, password: e.target.value}))}
                          value={artist.password}/><br/>
                <button className="btn btn-warning"
                        onClick={() => {
                                history.back()}}>
                        Cancel</button>
                <button  className="btn btn-danger"
                         onClick={() => deleteArtist(artist.idArtist)}>
                        Delete
                </button>
            <button className="btn btn-primary"
                onClick={() => updateArtist(artist.idArtist, artist)}>
                Save
            </button>

            <button className="btn btn-success"
                    onClick={() => createArtist(artist)}>
                        Create
                </button>

        </div>
    )
}

export default ArtistFormEditor