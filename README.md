# Aplicación de consumo de API de Publicaciones y Comentarios con React.js

Esta aplicación web utiliza **React.js** para consumir la API de **JSONPlaceholder** y mostrar publicaciones y comentarios. La aplicación incluye funcionalidades como paginación, filtrado por usuario, búsqueda de publicaciones y reutilización de componentes para mejorar la modularidad y mantenibilidad del código.

## Funcionalidades

### Página Principal
- Lista paginada de publicaciones obtenidas de la API JSONPlaceholder.
- Controles de navegación para ir a la página anterior y siguiente.
- Campo de búsqueda para filtrar publicaciones por título o contenido.

### Detalles de Publicación
- Permite al usuario hacer clic en una publicación para ver sus detalles en una sub-ruta.
- Muestra los comentarios asociados a la publicación seleccionada.

### Reutilización de Componentes
- Componentes reutilizables para la lista de publicaciones, los detalles de la publicación y los comentarios.
- Uso de props para pasar datos entre componentes de manera eficiente.

## Requisitos Previos
Antes de comenzar, asegúrate de tener instalado lo siguiente:
- **Node.js** (versión 14 o superior)
- **npm**

## Instalación y Configuración

Sigue estos pasos para instalar y ejecutar la aplicación localmente:

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   
2. **Instalar dependencias** 
   Ejecuta el siguiente comando para instalar las dependencias del proyecto:
   ```bash
    npm install

3. **Iniciar el servidor de desarrollo**
Inicia la aplicación en modo de desarrollo:
    ```bash
    npm run dev

4. **Abrir en el navegador**
Abre tu navegador y ve a la URL:
    ```bash
    http://localhost:"Numero de Puerto"

## Despliegue
Para generar una versión optimizada para producción:

1. **Construir la aplicación**
    ```bash
    npm run preview

2. **Previsualizar la aplicación**
    ```bash
    npm run build

3. **Desplegar en un servidor **
Sube los archivos generados en la carpeta dist a tu servidor o servicio de hosting.

Estructura del Proyecto
    
    src/
    ├── assets/
    │   ├── components/       # Componentes reutilizables
    │   ├── pages/            # Páginas principales de la aplicación
    │   ├── data/           # Llamado al Fecht API
    ├── App.jsx               # Componente principal
    ├── main.jsx              # Punto de entrada

## Tecnologías Utilizadas
- React.js: Biblioteca para construir interfaces de usuario.
- Vite: Herramienta de construcción rápida para proyectos de React.
- Material-UI: Biblioteca de componentes para el diseño de la interfaz.
- JSONPlaceholder: API de prueba para obtener datos de publicaciones y comentarios.