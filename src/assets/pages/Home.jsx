import { Container } from "@mui/material"
import Footer from "../components/footer/Footer"
import useFetch from "../data/useFetch"

useFetch

function Home() {
    return (
        <div>
            <Container sx={{ marginTop: 2 , minHeight: "100vh"}} maxWidth={false}>
                <h1>Bienvenido a la API de JSONPlaceholder</h1>
                <p>Esta es una API de ejemplo para practicar el consumo de datos.</p>
                <p>Utiliza las rutas en la parte superior para navegar por las diferentes secciones.</p>
                <p>¡Disfruta explorando!</p>
                </Container>
            <Footer/>
        </div>
    )
}

export default Home