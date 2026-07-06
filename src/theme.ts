import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#eff3f8",
      paper: "#ffffff",
    },
    primary: {
      main: "#155e75",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#0f172a",
    },
    text: {
      primary: "#0f172a",
      secondary: "#475569",
    },
    divider: "#e2e8f0",
  },
  typography: {
    fontFamily: ["Inter", "Segoe UI", "sans-serif"].join(","),
    h4: {
      fontWeight: 700,
      fontSize: "2rem",
      "@media (max-width:600px)":{

        fontSize:"1.5rem"
    },
      lineHeight: 1.15,
    },
    h5: {
      fontWeight: 700,
      fontSize: "1.25rem",
      "@media (max-width:600px)":{

        fontSize:"1.1rem"
    }
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 14,
        },
      },
    },
    MuiButton: {
    styleOverrides: {
        root: {
            "@media (max-width:600px)": {

                fontSize: ".9rem",

                padding: "8px 14px",

                minHeight: 38,
            },
            borderRadius: 14,
            height: 42,
            fontWeight: 600
        }
    }
},
    MuiTextField: {
    defaultProps: {
        size: "small",
        variant: "outlined",
    },
    styleOverrides: {
        root: {
            background: "#fff",

            "& .MuiOutlinedInput-root": {
                borderRadius: 14,
            }
        }
    }
},
    MuiToggleButton:{
    styleOverrides:{
        root:{
            borderRadius: 14,
            border:0,
            padding:"10px 18px",
            fontWeight:600,
            color:"#64748b",

            "&.Mui-selected":{
                background:"#155e75",
                color:"#fff"
            },

            "&.Mui-selected:hover":{
                background:"#134e61"
            }
        }
    }
}
},
});
