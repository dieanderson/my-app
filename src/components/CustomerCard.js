import React, { useState } from 'react'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

import CardActions from '@mui/material/CardActions'

import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'

//import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import useStyles from '../partials/Header/Header.style'



const CustomerCard = ({
    name,
    lastname,
    email,
    avatar,
}) => {
    const classes = useStyles()

    return (
        <Card sx={{ maxWidth: 345 }}>
        
        <CardHeader
            avatar={
            <Avatar aria-label="recipe" src={avatar}>
                C
            </Avatar>
            }
        
            title={`${name} ${lastname}`}
            subheader={email}
        />
        
        
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
            <ShareIcon />
            </IconButton>
        
        </CardActions>
        
        </Card>
  )
}

export default CustomerCard
