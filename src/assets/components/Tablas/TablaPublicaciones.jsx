import React from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useFetch from "../../data/useFetch";
import Box from "@mui/system/Box";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";

export function TablaPublicaciones({ setIdComentario }) {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/posts");

  const columns = [
    {
      name: "id",
      label: "ID",
      options: {
        setCellProps: () => ({
          style: {
            Width: "30px",
          },
        }), 
        display: false,
        searchable: true,
      },
    },
    {
      name: "title",
      label: "TITULO",
      options: {
        searchable: true,
        setCellProps: () => ({
          style: {
            maxWidth: "130px",
            whiteSpace: "normal",
            overflow: "hidden",
            textOverflow: "ellipsis",
          },
        }), 
      },
    },
    {
      name: "body",
      label: "CONTENIDO",
      options: {
        searchable: true,
        setCellProps: () => ({
          style: {
            maxWidth: "300px",
            whiteSpace: "normal",
            wordWrap: "break-word",
            overflow: "hidden",
            textOverflow: "ellipsis",
          },
        }), 
      },
    },
  ];

  const options = {
    download: false,
    filter: false,
    print: false,
    selectableRows: "none",
    responsive: "standard",
    tableBodyMaxHeight: "900px", 
    tableBodyHeight: "auto",
    onRowClick: (rowData) => {
      const selectedId = rowData[0];
      setIdComentario(selectedId);
    },
    // rowsPerPage: 5,
    // rowsPerPageOptions: [5, 10, 20],
    viewColumns: true,
  };

  const getMuiTheme = () =>
    createTheme({
      components: {
        MuiTable: {
          styleOverrides: {
            root: {
              background: "#3c6d79",
            },
          },
        },
        MuiToolbar: {
          styleOverrides: {
            regular: {
              background: "#3c6d79",
            },
          },
        },
        MuiTableCell: {
          styleOverrides: {
            root: {
              backgroundColor: "#3c6d79",
              color: "#e0e2ee",
              
            },
            head: {
              backgroundColor: "#3c6d79",
              color: "#e0e2ee",
            },
            body: {
              backgroundColor: "#3c6d79",
              color: "#e0e2ee",
              fontSize: "17px", 
              "&:hover": {
              backgroundColor: "rgba(224, 155, 88,0.5)", 
              color: "#000000", 
              cursor: "pointer", 
              },
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              boxShadow: "none", 
            },
          },
        },
      },
      palette: {
        text: {
          primary: "#ffffff",
          secondary: "rgb(255, 255, 255)",
        },
        background: {
          paper: "rgba(224, 155, 88,0.5)",
        },
      },
    });

  return (
    <Container maxWidth={false}>
      <Box sx={{ mt: 3, mb: 3, boxShadow: 0 }}>
        <ThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title={
              <Typography variant="h4" component="h2" color="#f9ae65">
                Lista de Publicaciones
              </Typography>
            }
            data={data || []} 
            columns={columns}
            options={options}
          />
        </ThemeProvider>
      </Box>
    </Container>
  );
}
