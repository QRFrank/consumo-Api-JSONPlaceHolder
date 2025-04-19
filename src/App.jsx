import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import PaginaPrincipal from "./assets/pages/PaginaPrincipal";
import PaginaSecoundaria from "./assets/pages/PaginaSecoundaria";
import Header from "./assets/components/header/Header";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';





const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#fab066',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#3c6d79',
      paper: '#3c6d79',
    },
    text: {
      primary: 'rgb(249, 174, 101)',
      secondary: 'rgb(255, 255, 255)',
    },
    divider: 'rgb(255, 255, 255)',
    
  },
});

function App() {

  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/paginaprincipal" element={<PaginaPrincipal/>}/>
          <Route path="/paginasecundaria" element={<PaginaSecoundaria/>}/>
        </Routes>
      
      
      </BrowserRouter>
    </ThemeProvider>
      
    </>
  )
}

export default App
