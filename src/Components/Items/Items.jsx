import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import './Items.css'

function Item({title, icon}) {
    return (
        <div className='ItemContainer'>
            <div className='Item-icon'>


                {icon } 
                {title} 
                </div>


        </div>
    )
}

export default Item
