import React from 'react';
import useFetch from '../../data/useFetch';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Container } from '@mui/material';
import { Box } from '@mui/material';
import { Divider } from '@mui/material';


export function CardDetallePublicacion({ idComentario }) {
  // Realiza la solicitud solo si idComentario tiene un valor
  const { data } = useFetch(
    idComentario ? `https://jsonplaceholder.typicode.com/posts/${idComentario}` : null
  );

  if (!idComentario) {
    return null; // No renderizar nada si no hay idComentario
  }

  if (!data) {
    return (
      <Typography variant="body2" color="text.secondary">
        Cargando detalles de la publicación...
      </Typography>
    ); // Mostrar un mensaje de carga mientras se obtienen los datos
  }

  return (
    <Container maxWidth={false} sx={{ marginTop: 2 }}>
      <Typography gutterBottom variant="h5" component="div" color="#ffff" sx={{ paddingLeft: 2 }}>
        PUBLICACION
      </Typography>
      <Box>
      <Card sx={{ maxWidth: '100%', textAlign: 'justify' }} elevation={0}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="#ffff">
              {data.title ? data.title.toUpperCase() : 'Sin título'}
            </Typography>
            <Divider textAlign="left">Contenido</Divider>
            <Typography variant="body2" component="div" color="#ffff" fontSize={20}>
              {data.body || 'Sin contenido'}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Box>
    </Container>
  );
}