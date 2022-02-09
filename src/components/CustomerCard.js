import React from 'react'
import { useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import ModalConfirm from './ModalConfirm'
import Toasty from './Toasty'


const CustomerCard = ({
    id,
    name,
    lastname,
    email,
    avatar,
    onRemoveCustomer,
}) => {

    const [openModal, setOpenModal] = React.useState(false)

    const [openToasty, setOpenToasty] = useState({
        open: false,
        message: '',
        severity: '',
    })

    const handleToggleOpenModal = () => {
        setOpenModal(!openModal)
    }

    const handleConfirmModal = (id) => {
        onRemoveCustomer(id)
        handleToggleOpenModal()
        setOpenToasty({
            open: true,
            severity: 'success',
            message: 'Cliente excluído com sucesso!'
        })
    }

    const handleRemoveCustomer = () => {
        handleToggleOpenModal()
        
    }
    
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
            
                <CardHeader
                    avatar={
                        <Avatar aria-label="Avatar" src={avatar}>
                            {name.substr(0,1)}
                        </Avatar>
                    }
                
                    title={`${name} ${lastname}`}
                    subheader={email}
                />            
                
                <CardActions disableSpacing>
                    <IconButton aria-label="Editar Cadastro">
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="Remover Cadastro" onClick={handleRemoveCustomer}>
                        <DeleteIcon />
                    </IconButton>            
                </CardActions>
            
            </Card>

            <ModalConfirm 
                open={openModal}
                onClose={handleToggleOpenModal}
                onConfirm={ () => handleConfirmModal(id) }
                title='Deseja realmente excluir este cliente?'
                message={`${name} ${lastname}`}
            />

            <Toasty 
                open={openToasty.open} 
                severity={openToasty.severity} 
                message={openToasty.message}
                onClose={() => setOpenToasty(false)}
            />
        </>
   )
}

export default CustomerCard
