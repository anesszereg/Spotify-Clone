import React from 'react'
import './Footer.css'
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import ShuffleOutlinedIcon from '@material-ui/icons/ShuffleOutlined';
import {Grid,Slider} from '@material-ui/core'
import { PlaylistPlay } from '@material-ui/icons';
import { VolumeDown } from '@material-ui/icons';
import { useDataLayerValue } from '../../js/DataLayer';




function Footer() {

    const [  {  artists,albums } , dispatch] = useDataLayerValue()
  return (
    <div className='footer'>
        <div className="footer-left">
        <img className='footer-album' src={albums?.items[0].images[0].url} alt="" />
        <div className="footer-info">
            <h5>{albums?.items[0].name}</h5>
            {artists?.name}
        </div>
        </div>
        <div className="footer-center">
            <ShuffleOutlinedIcon className='footer-green' />
            <SkipPreviousOutlinedIcon className='footer-icon'/>
            <PlayCircleOutlineOutlinedIcon className='' fontSize='large'/>
            <SkipNextOutlinedIcon className='footer-green' />
            <RepeatOutlinedIcon className='footer-green'/>
        </div>
        <div className="footer-right">
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlay />
                </Grid>
                <Grid item>
                    <VolumeDown />
                </Grid>
                <Grid item xs>
                    <Slider aria-labelledby="continuous-slider" />
                </Grid>
            </Grid>




            



        </div>
    </div>
  )
}

export default Footer