import React from 'react'
import {useDataLayerValue} from '../../js/DataLayer'
import Header from '../Header/Header'
import './Body.css'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {MoreHoriz} from '@material-ui/icons';
import SongRow from '../SongRow/SongRow';


function Body({spotify}) {

    const [
        {
            discover_weekly
        }, dispatch
    ] = useDataLayerValue()


    return (
        <div className='body'>
            <Header spotify={spotify}/>
            <div className="body-info">
                <img src={
                        discover_weekly ?. images[0].url
                    }
                    alt=""/>

                <div className="body-info-text">
                    <strong>PLAYLIST</strong>
                    <h2>discover 
                                                            weekly</h2>

                    <p>{
                        discover_weekly ?. description
                    }</p>


                </div>

            </div>
            <div className="body-songs">


                <div className="body-icons">
                    <PlayCircleFilledIcon className='Shuffle-btn'/>
                    <FavoriteIcon fontSize='large'/>
                    <MoreHoriz/>
                </div>

                {
                    discover_weekly ?. tracks.items.map((item) => (
                      <SongRow  track={item.track} />
                    ))

                }
            </div>


        </div>

    )
}

export default Body
