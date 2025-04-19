import { Box, Container, Grid, TableFooter } from '@mui/material'
import Button from '@mui/material/Button';

import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Link from '@mui/material/Link';



function Footer() {
  return (
    <div>
        <Container  maxWidth={false} sx={{ marginTop: 2 }} >
            <Box sx={{ height: 70, width:"100%" , flexGrow: 1}} >
                <Grid container spacing={2} columns={16} justifyContent={"center"} alignItems="center" sx={{ height: '100%' }}>
                    <Grid size={8} paddingRight={2} paddingLeft={2} >
                        <p>© 2023 - Todos los derechos reservados</p>
                        <p>Desarrollado por: Franklin QR</p>
                    </Grid >
                    <Grid size={8} paddingRight={4} paddingLeft={4} >
                        <Button  href="#outlined-buttons">
                            <GitHubIcon sx={{ fontSize: 40 }} />
                        </Button>
                        <Button  href="#outlined-buttons">
                        <FacebookIcon sx={{ fontSize: 40 }}/>
                        </Button>
                        <Button  href="#outlined-buttons">
                        <AlternateEmailIcon sx={{ fontSize: 40 }}/>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </div>
  )
}

export default Footer