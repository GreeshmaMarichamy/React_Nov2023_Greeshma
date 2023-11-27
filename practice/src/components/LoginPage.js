import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link as RouterLink } from 'react-router-dom';

export default function LoginPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const Background ={
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: "url(https://img.freepik.com/free-vector/hand-drawn-christmas-toys-background_23-2148758008.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  
  
  return (
    <div style={Background}>
      <br></br>
     <Typography align="center" variant="h3" sx={{fontWeight:900,fontFamily:"Roboto"}}>
                Toy<b style={{color:"#f06292"}}>Store</b>
            </Typography>
    <Container component="main" maxWidth="xs">
      {/*<h1 style={{fontFamily:"roboto"}}>The Toy Store</h1>
      <img src="https://images-platform.99static.com//qJ3u8FABhDvDacTrJfkMzHvVFCM=/378x266:1622x1510/fit-in/500x500/99designs-contests-attachments/138/138432/attachment_138432570" height="100" width="100" position="center"></img>*/}
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
          <Grid item xs textAlign={"left"}>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          {/*<FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
      />*/}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            component={RouterLink} to="/m"
            
          >
            Sign In
          </Button>
          <p>-----------------------OR-----------------------</p>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Continue with Google
          </Button>
            <Grid item textAlign={"center"}>
              <Link href="#" variant="body2" component={RouterLink} to="/registration">
                {"New to ToyStore? Register"}
              </Link>
            </Grid>
        </Box>
      </Box>
    </Container>
    </div>
  );
}