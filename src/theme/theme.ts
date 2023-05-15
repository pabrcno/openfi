import { createTheme } from "@mui/material/styles";

enum Colors {
  LightGray = "#F7F7F7",
  MediumGray = "#C4C4C4",
  DarkGray = "#565656",
  Charcoal = "#2D2D2D",
  Black = "#000000",
  Blue = "#375871",
  Green = "#37AA71",
  Accent = "#FF994C",
}

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.Charcoal,
      light: Colors.DarkGray,
      dark: Colors.Black,
    },
    secondary: {
      main: Colors.Blue,
      light: Colors.Green,
    },
    background: {
      default: Colors.LightGray,
      paper: "#FFFFFF",
    },
    divider: Colors.MediumGray,
    text: {
      primary: Colors.DarkGray,
      secondary: Colors.Charcoal,
      disabled: Colors.MediumGray,
    },
    action: {
      active: Colors.Accent,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 500,
      fontSize: "2rem",
      lineHeight: 1.167,
    },
    h2: {
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: 1.235,
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.333,
    },
    h4: {
      fontWeight: 500,
      fontSize: "1.125rem",
      lineHeight: 1.444,
    },
    h5: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.714,
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.43,
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.33,
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "0.75rem",
      lineHeight: 1.33,
    },
    caption: {
      fontWeight: 400,
      fontSize: "0.625rem",
      lineHeight: 1.4,
    },
    overline: {
      fontWeight: 500,
      fontSize: "0.625rem",
      lineHeight: 2.167,
      textTransform: "uppercase",
    },
    button: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      textTransform: "uppercase",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 4,
        },
        containedPrimary: {
          backgroundColor: Colors.Charcoal,
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: Colors.Charcoal,
            opacity: 0.9,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: 16,
          "& .MuiInputBase-root": {
            borderColor: Colors.MediumGray,
          },
          "& .MuiInputLabel-root": {
            color: Colors.DarkGray,
          },
          "& .MuiInputBase-input": {
            color: Colors.DarkGray,
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom: 16,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: Colors.Charcoal,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          justifyContent: "space-between",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          color: "#fff",
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          "&:not(:last-child)": {
            marginRight: 20,
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: Colors.Charcoal,
          color: "#fff",
          minWidth: 200,
        },
      },
    },
  },
});

export { theme, Colors };
