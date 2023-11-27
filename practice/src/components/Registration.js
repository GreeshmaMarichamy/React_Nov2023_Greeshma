import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link as RouterLink } from 'react-router-dom';

export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const myStyle={
    backgroundImage: "url(https://img.freepik.com/free-vector/hand-drawn-christmas-toys-background_23-2148758008.jpg)",
    height:"100%",
    width:"100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position:"absolute",
    
};
  return (
    <div style={myStyle}>
       <Typography align="center" variant="h3" sx={{fontWeight:900,fontFamily:"Roboto"}}>
                Toy<b style={{color:"#f06292"}}>Store</b>
            </Typography>
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          backgroundColor:"white",
          alignItems: "center",
        }}
      >
       <Typography component="h1" variant="h4" color="#c51162">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="Confirm password"
            label="Confirm Password"
            type="Confirm password"
            id="Confirm password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            component={RouterLink} to="/m"
          >
            Register
          </Button>
         
        </Box>
      </Box>
    </Container>
    </div>
  );
}