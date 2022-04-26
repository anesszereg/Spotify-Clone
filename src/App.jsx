import './App.css'
import {getTokenFromUrl} from './js/Spotify.js'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import {useEffect} from 'react'
import React from 'react'
import {useState} from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import {useDataLayerValue} from './js/DataLayer'


const spotify = new SpotifyWebApi()


function App() { // const [token, setToken] = useState(null)
    const [
        {
            user,
            token,
            episodes,
            playlists,
            discover_weekly,
            featured_playlists,


        }, dispatch
    ] = useDataLayerValue()

    // Run code based on a given condition
    useEffect(() => { // code...
        const hash = getTokenFromUrl()
        window.location.hash = ''
        const _token = hash.access_token
        if (_token) {

            dispatch({type: 'SET_TOKEN', token: _token})


            spotify.setAccessToken(_token)

            spotify.getMe().then(user => {
                console.log('👼🏻', user)

                dispatch({type: 'SET_USER', user: user})
            })



            spotify.getUserPlaylists().then((playlist) => {
                console.log('😍', playlist)

                dispatch({type: 'SET_PLAYLISTS', playlist: playlist})
            }
            )

            spotify.getPlaylist('6O2H4rVQgmaJnTf4koAyNb').then((response) => {
                
                console.log('🎸', response)
                dispatch({type: 'SET_DISCOVER_WEEKLY', discover_weekly: response})
            }
            )

            spotify.getEpisode('06NI8SVjYQTN9leuABqM9X').then((episode) => {
                console.log('🙄😪', episode)
                dispatch({type: 'SET_EPISODE', episode: episode})
            }   )

        //    spotify.getEpisodes('3tB5r23nAdNPd9mzxWBrjv').then((episodes) => {
        //         console.log('🙄', episodes)
        //         dispatch({type: 'SET_EPISODES', episodes: episodes})}
        //         )

                spotify.getMyDevices().then((devices) => {
                    console.log('🧶', devices)
                    dispatch({type: 'SET_DEVICES', devices: devices})}
                    )

            // spotify.getTracks(
            //     'spotify:playlist:37i9dQZF1DXcBWIGoYBM5M,spotify:playlist:37i9dQZF1DXcBWIGoYBM5M,spotify:playlist:37i9dQZF1DXcBWIGoYBM5M'
            //  ).then((featured_playlists) => {
            //     console.log('🎆', featured_playlists)
            //     dispatch({type: 'SET_FEATURED_PLAYLISTS', featured_playlists: featured_playlists})
            // }
            // )




            // get artists
            // spotify.getMyTopArtists().then((artists) => {




            spotify.getArtists("2CIMQHirSU0MQqyYHq0eOx").then ((artists)=> {
                 console.log('🎃', artists)
                 dispatch({type: 'SET_ARTISTS', artists: artists})
             }
             )




            // getartistalbums 





            spotify.getArtistAlbums('6qqNVTkY8uBg9cP3Jd7DAH', {limit: 50, offset: 0}).then((albums) => {
                console.log('🎎', albums)
                dispatch({type: 'SET_ALBUMS', albums: albums})  
            }
            )

            // spotify.getAudioAnalysisForTrack('0eGsygTp906u18L0Oimnem').then((response) => {
            //     console.log('🐱‍🚀', response)
            //     dispatch({type: 'SET_TRACK_DURATION', track_duration: response})
            // }
            // )
            // spotify.getMyCurrentPlayingTrack().then(response => {
            //     console.log('🎸', response)
            //     dispatch({type: 'SET_CURRENT_PLAYING', current_playing: response})
            // }
            // )
            
        }
        
        
    }, [])


    return (
        <div className="App">
            {
            token ? (
                <Home spotify={spotify} />) : (
                <Login/>)
        } </div>
    )
}

export default App
