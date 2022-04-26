import React from 'react'
import './SongRow.css'

function SongRow({track}) {

    const {
        id,
        name,
        album,
        artists,
        duration_ms,
        uri
    } = track


  return (
    <div className="songRow">
        <img className='songRow-albums ' src={track.album.images[0].url} alt=""/>
        <div className="songRow-info">
            <h1>{track.name}</h1>

            <p>{artists.map((artist,index) => 
            <p key={index}>{artist.name}</p>).join(', ')}
             {track.album.name}</p>

             </div>
   
    


    </div>
  )
}

export default SongRow