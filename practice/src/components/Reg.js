import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link as RouterLink } from 'react-router-dom';

import { useState } from 'react';
import axios from 'axios';
export default function Reg(){
  const[name,setName]=useState("");
  // const[email,setEmail]=useState("");
  // const[pass,setPass]=useState("");
  // const[cpass,setCpass]=useState("");
  
  
    const postinfo=()=>{
      axios.post('http://localhost:3004/register',{"name":name})
     
  }
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
          onChange={(e)=>setName(e.target.value)}
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
  
 {/*} return(    <div>
    
      <div className='regbody'>
      <div className='container'>
        <div className='contain'>
          <div className='header'>
          <h1 id='head'>Regist<span>er.!</span></h1>
          </div>
          <form>
          <label for="name"><h1>Name</h1></label>
          <TextField sx={{marginTop:'5px',width:'100%',backgroundColor:"white"}}id="name" label="Name" variant="outlined" onChange={(e)=>setName(e.target.value)}/>
          
          <label for="email"><h1>Email</h1></label>
          <TextField sx={{marginTop:'5px',width:'100%',backgroundColor:"white"}}id="email" type='email' label="Email" variant="outlined"  />
          <label for="password"><h1>Password</h1></label>
          <TextField sx={{marginTop:'5px',width:'100%',backgroundColor:"white"}}id="password" type='password' label="Password" variant="outlined"  />
          <label for="conformpassword"><h1>Conform Password</h1></label>
          <TextField sx={{marginTop:'5px',width:'100%',backgroundColor:"white"}}id="conformpassword" label="Conform Password" variant="outlined" type='password'  />
          <div className='register'>
          <p>Already Have Account? <Link to='/re'>Login!!</Link></p>
          <Button
          id="regis"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={postinfo} 
            component={RouterLink} to="/m"
          >
            Register
          </Button>
         
           
          </div>
          </form>
        </div>
        <div>
          
        </div>
      </div>
      </div>
      
 </div>

 );*/}
      
}