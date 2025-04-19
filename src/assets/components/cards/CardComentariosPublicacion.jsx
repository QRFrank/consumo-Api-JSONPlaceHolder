import  React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useFetch from '../../data/useFetch';
import { Container } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Chip } from '@mui/material';
import { Avatar } from '@mui/material';


export function CardComentariosPublicacion({idComentario}) {

    const { data } = useFetch(`https://jsonplaceholder.typicode.com/posts/${idComentario}/comments`);
    


    if (!idComentario) {
        return null;
      }
  return (
    <Container maxWidth={false} sx={{ marginTop: 2 }} >
        <Typography gutterBottom variant="h5" component="div">
            COMENTARIOS
          </Typography>
        <Box
      sx={{
        width: '100%',
        display: 'flex-column',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap: 2,
      }}
    >
        
      {data?.map((card, index) => (
        
        <Card key={card.id || index} elevation={0} sx={{ minWidth: 350 , mb:4,}}>
            <Divider>
                <Chip avatar={<Avatar ><Typography fontSize={15} fontWeight="bold">{card.email.charAt(0).toUpperCase()}</Typography></Avatar>} label={
                    <Typography variant="body2" color="text.secondary" fontSize={20}>   
                    {card.email}
                  </Typography>
                } size="medium" />
            </Divider>
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div" >
                {card.name.toUpperCase()}
              </Typography>
              <br/>
              <Typography variant="h5" component="div" color="#e0e2ee">
                {card.body}
              </Typography>
            </CardContent>
        </Card>
      ))}
    </Box>
    </Container>
  );
}


