import React, { useState } from 'react'
import { TablaPublicaciones } from '../components/Tablas/TablaPublicaciones'
import { CardComentariosPublicacion } from '../components/cards/CardComentariosPublicacion'
import { CardDetallePublicacion } from '../components/cards/CardDetallePublicacion'
import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import Footer from '../components/footer/Footer'


function PaginaPrincipal() {
    const [idComentario, setIdComentario] = useState(null)
  return (
    <div>
        <Container maxWidth={false} sx={{ minHeight: "100vh"}}>
            <TablaPublicaciones setIdComentario={setIdComentario} />
            <Container sx={{ marginTop: 2 }} maxWidth={false} >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <CardDetallePublicacion idComentario={idComentario} />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <CardComentariosPublicacion idComentario={idComentario}/>
                    </Grid>
                </Grid>
            </Container>
        </Container>
        <Footer/>
    </div>
    
  )
}

export default PaginaPrincipal