import React, { useState } from "react";
import {AppBar,Box,InputBase,Menu,MenuItem,styled,Toolbar,Typography,} from "@mui/material";
import {Facebook,Instagram,Menu as MenuIcon,Twitter,} from "@mui/icons-material/";
import { Stack} from "@mui/material";
import Button from '@mui/material/Button';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Homepage= () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
  });
  const SearchBox = styled(Box)({
    display: "flex",
    gap: 5,
  });
  const StyledBox=styled(Box)({
    height:300,
    width:"200%",
    cursor:"pointer",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center center",
    backgroundSize:"cover"
});
  const StyledBox1=styled(Box)({
    height:"222px",
    width:"660px",
    cursor:"pointer",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center center",
    backgroundSize:"cover"
});
const StyledTypography=styled(Typography)({
    margin:"25% 50px 25% 50px",
    background:"white",
    opacity:"0.8"
})
const Socialbox=styled(Box)({
  display:"flex",
  gap:10,
  color:"white",
});
  const MenuItems = [
    { Name: "GAMES & PUZZLE", Link: "/" },
    { Name: "LEGO", Link: "#" },
    { Name: "PLUSH", Link: "#" },
    { Name: "BOOKS", Link: "#" },
    { Name: "ACTIVE PLAY & SPORTS", Link: "#" },
    { Name: "CART", Link: "#" },
  ];
  const [open, SetOpen] = useState(false);
  return (
    <div>
      <div>
    <AppBar sx={{ background: "#e57373" }} position={"static"}>
      <StyledToolbar>
     
       <p style={{fontSize:"20px",fontFamily:"Roboto"}}>ToyStore</p>
       
      
       <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
      
       <Typography >
            <PopupState variant="popover" popupId="demo-popup-menu" >
          {(popupState) => (
            <React.Fragment>
              <Button  {...bindTrigger(popupState)} style={{backgroundColor:"#e57373"}}>
                <p style={{color:"white"}}>GAMES & PUZZLES</p>
              </Button>
              <Menu {...bindMenu(popupState)}>
                <p style={{textAlign:"center"}}><b>CATEGORIES</b></p>
                <MenuItem onClick={popupState.close} style={{listStyleType:"none"}} component={RouterLink} to="/g">GAMES</MenuItem>
                <MenuItem onClick={popupState.close} style={{listStyleType:"none"}} component={RouterLink} to="/p">PUZZLES</MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
        </Typography>
            <Typography >
            <PopupState variant="popover" popupId="demo-popup-menu" >
          {(popupState) => (
            <React.Fragment>
              <Button  {...bindTrigger(popupState)} style={{backgroundColor:"#e57373"}}>
                <p style={{color:"white"}}>LEGO</p>
              </Button>
              <Menu {...bindMenu(popupState)}>
                <p style={{textAlign:"center"}}><b>CATEGORIES</b></p>
                <MenuItem onClick={popupState.close} component={RouterLink} to="/s">STAR WARS</MenuItem>
                <MenuItem onClick={popupState.close}>CITY</MenuItem>
                <MenuItem onClick={popupState.close}>FRIENDS</MenuItem>
                <MenuItem onClick={popupState.close}>DUPLO</MenuItem>
                <MenuItem onClick={popupState.close}>TECHNIC</MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
        </Typography>
            <Typography >
            <PopupState variant="popover" popupId="demo-popup-menu" >
          {(popupState) => (
            <React.Fragment>
              <Button  {...bindTrigger(popupState)} style={{backgroundColor:"#e57373"}}>
                <p style={{color:"white"}}>PLUSH</p>
              </Button>
              <Menu {...bindMenu(popupState)}>
              <p style={{textAlign:"center"}}><b>CATEGORIES</b></p>
                <MenuItem onClick={popupState.close} component={RouterLink} to="/un">UNIQUE</MenuItem>
                <MenuItem onClick={popupState.close}>ANIMALS & BIRDS</MenuItem>
                <MenuItem onClick={popupState.close}>FANTASY</MenuItem>
                <MenuItem onClick={popupState.close}>GIANT PLUSH</MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
        </Typography>
            <Typography >
            <PopupState variant="popover" popupId="demo-popup-menu" >
          {(popupState) => (
            <React.Fragment>
              <Button  {...bindTrigger(popupState)} style={{backgroundColor:"#e57373"}}>
                <p style={{color:"white"}}>BOOKS</p>
              </Button>
              <Menu {...bindMenu(popupState)}>
              <p style={{textAlign:"center"}}><b>CATEGORIES</b></p>
                <MenuItem onClick={popupState.close} component={RouterLink} to="/pic">PICTURE BOOKS</MenuItem>
                <MenuItem onClick={popupState.close}>BOARD BOOKS</MenuItem>
                <MenuItem onClick={popupState.close}>CHAPTER BOOKS</MenuItem>
                <MenuItem onClick={popupState.close}>JOURNALS & DIARIES</MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
        </Typography>
            <Typography >
            <PopupState variant="popover" popupId="demo-popup-menu" >
          {(popupState) => (
            <React.Fragment>
              <Button  {...bindTrigger(popupState)} style={{backgroundColor:"#e57373"}}>
                <p style={{color:"white"}}>ACTIVE PLAY & SPORTS</p>
              </Button>
              <Menu {...bindMenu(popupState)}>
              <p style={{textAlign:"center"}}><b>CATEGORIES</b></p>
                <MenuItem onClick={popupState.close} component={RouterLink} to="/act">SPORTS,BALLS & GAMES</MenuItem>
                <MenuItem onClick={popupState.close}>RIDE ON</MenuItem>
                <MenuItem onClick={popupState.close}>FRISBEES & FLYERS</MenuItem>
                <MenuItem onClick={popupState.close}>TENTS,TUNNELS,TRAMPOLINES & SWINGS</MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
        </Typography>
 <Typography >
            <PopupState variant="popover" popupId="demo-popup-menu" >
          {(popupState) => (
            <React.Fragment>
              <Button  {...bindTrigger(popupState)} style={{backgroundColor:"#e57373"}}component={RouterLink} to="/cart" >
                <p style={{color:"white"}}>CART</p>
              </Button>
            </React.Fragment>
          )}
        </PopupState>
        </Typography>
          
        </MenuBox>

        <SearchBox>
          <InputBase placeholder="Search ..." sx={{ color: "white" }} />
          <MenuIcon
            sx={{
              color: "white",
              display: { xs: "block", sm: "block", md: "none" },
            }}
            onClick={() => SetOpen(!open)}
          />
        </SearchBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => SetOpen(!open)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box sx={{ width: 350, height: "90vh" }}>
          {MenuItems.map((item) => (
            <MenuItem
              sx={{
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              {item.Name}
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </AppBar>
    </div>
    
    <div>
    <Box>
            <Typography align="center" variant="h2" sx={{fontWeight:900,fontFamily:"Roboto"}}>
                Toy<b style={{color:"#f06292"}}>Store</b>
            </Typography>
    
        <Box 
        sx={{
            backgroundImage:'url(https://cdn.shoplightspeed.com/shops/605879/themes/12945/v/840889/assets/primary-hero.jpg?20231103132046)',
            backgroundRepeat:"no-repeat",
            backgroundColor:"black",
            backgroundPosition:"center",
            backgroundSize:"cover",
            height:500,
            width:{xs:500,sm:700,md:900,lg:1330,xl:1000},
        }}>
            </Box>
        </Box>
    </div>
    <div>
     <Box >
     <h2>Shop by</h2>
     <h1 style={{fontFamily:"sans-serif"}}>CATEGORIES</h1>
     <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
         <StyledBox1 sx={{backgroundImage:"url(https://shumee.in/cdn/shop/files/ActivePlayToys.MOB.png?v=1685012209)"}} component={RouterLink} to="/act"><StyledTypography align="center" variant="h4"></StyledTypography></StyledBox1>
         <StyledBox1 sx={{backgroundImage:"url(https://shumee.in/cdn/shop/files/LearningToys.MOB.png?v=1685012208)"}} component={RouterLink} to="/pic"><StyledTypography align="center" variant="h4"></StyledTypography></StyledBox1>
      </Stack>
      <br></br>
      <Stack  direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
         <StyledBox1 sx={{backgroundImage:"url(https://shumee.in/cdn/shop/files/PretendPlayToys.MOB.png?v=1685012208)"}} ><StyledTypography align="center" variant="h4"></StyledTypography></StyledBox1>
         <StyledBox1 sx={{backgroundImage:"url(https://shumee.in/cdn/shop/files/Puzzles_CardsGames.MOB.png?v=1685012209)"}} component={RouterLink} to="/g"><StyledTypography align="center" variant="h4"></StyledTypography></StyledBox1>
         
     </Stack>
     <br></br>
     <br></br>
     <br></br>
     <h2>Shop by</h2>
     <h1 style={{fontFamily:"sans-serif"}}>BRANDS</h1>
     <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
         <StyledBox1 sx={{backgroundImage:"url(https://cdn.shoplightspeed.com/shops/605879/themes/12945/v/54995/assets/brand-1.png?20201006135919)"}}><StyledTypography align="center" variant="h4"></StyledTypography></StyledBox1>
         <StyledBox1 sx={{backgroundImage:"url(https://cdn.shoplightspeed.com/shops/605879/themes/12945/v/54995/assets/brand-2.png?20201006135919)"}}><StyledTypography align="center" variant="h4"></StyledTypography></StyledBox1>
         <StyledBox1 sx={{backgroundImage:"url(https://cdn.shoplightspeed.com/shops/605879/themes/12945/v/54995/assets/brand-3.png?20201006135919)"}}><StyledTypography align="center" variant="h4"></StyledTypography></StyledBox1>
         <StyledBox1 sx={{backgroundImage:"url(https://cdn.shoplightspeed.com/shops/605879/themes/12945/v/54995/assets/brand-4.png?20201006135919)"}}><StyledTypography align="center" variant="h4"></StyledTypography></StyledBox1>
         <StyledBox1 sx={{backgroundImage:"url(https://cdn.shoplightspeed.com/shops/605879/themes/12945/v/54995/assets/brand-5.png?20201006135919)"}}><StyledTypography align="center" variant="h4"></StyledTypography></StyledBox1>
     </Stack>
     <br></br>
     <br></br>
     <br></br>
     <h2>HOT SELLERS!!</h2>
     <h1 style={{fontFamily:"sans-serif"}}>HOLIDAY FAVORITES</h1>
     <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 286 ,width:286}} image="https://cdn.shoplightspeed.com/shops/605879/files/56106742/400x400x2/thin-air-brands-whack-attack-space-moles.jpg" />
         <CardContent>
           <p>WHACK ATTACK MOLES</p>
         </CardContent>
         <CardActions>
         <Button>ADD TO CART</Button>
         <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 286 ,width:286 }} image="https://cdn.shoplightspeed.com/shops/605879/files/59060031/400x400x2/thames-kosmos-hydraulic-boxing-bots.jpg" />
         <CardContent>
         <p>HYDRAULIC BOXING BOTS</p>
         </CardContent>
         <CardActions>
         <Button>ADD TO CART</Button>
         <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 286 ,width:286}} image="https://cdn.shoplightspeed.com/shops/605879/files/45063019/400x400x2/mindware-art-chitect.jpg" />
         <CardContent>
         <p>ART-CHITECT</p>
         </CardContent>
         <CardActions>
         <Button>ADD TO CART</Button>
         <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{height: 286 ,width:286}} image="https://cdn.shoplightspeed.com/shops/605879/files/54256417/400x400x2/tonies-tonies-starter-set.jpg" />
         <CardContent>
         <p>TONIES STARTER SET</p>
         </CardContent>
         <CardActions>
         <Button>ADD TO CART</Button>
         <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{height: 286 ,width:286}} image="https://cdn.shoplightspeed.com/shops/605879/files/58158792/400x400x2/rainbow-loom-rainbow-loom-beadmoji-deluxe.jpg" />
         <CardContent>
         <p>RAINBOW LOOM BEADMOJI DELUXE</p>
         </CardContent>
         <CardActions>
         <Button>ADD TO CART</Button>
         <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
         </CardActions>
      </Card>
      
    </Stack>
    <br></br>
 </Box>
 </div>
 <div>
 <Box sx={{background:"#e57373",height:"300px"}}>
            <Stack direction={{xs:"row",md:"row"}}p={7} fontSize={"25px"} fontFamily={"Apple Color Emoji"}>
                <Box flex={1}>
                    <h3>CATEGORIES</h3>
                    <Typography color={"white"} align={"center"}>
                        Magic Car
                    </Typography>
                    <Typography color={"white"} align={"center"}>
                        Guns
                    </Typography>
                    <Typography color={"white"} align={"center"}>
                        Doll Houses
                    </Typography>
                </Box>
                <Box flex={0}>
                    <h3>COMPANY</h3>
                    <Typography color={"white"} align={"center"}>
                        <Button style={{color:"white"}}  component={RouterLink} to="/abt">About Us</Button>
                    </Typography>
                    
                    <Typography color={"white"} align={"center"}>
                        <Button style={{color:"white"}}  component={RouterLink} to="/con">Contact Us</Button>
                    </Typography>
                    <Typography color={"white"} align={"center"}>
                        Data Safety
                    </Typography>
                </Box>
                <Box flex={1}>
                    <h3>USEFUL LINKS</h3>
                    <Typography color={"white"} variant={"body2"} align={"center"}>
                        Privacy Policy
                    </Typography>
                    <Typography color={"white"} variant={"body2"} align={"center"}>
                        Return & Cancellation Policy
                    </Typography>
                    <Typography color={"white"} variant={"body2"} align={"center"}>
                        Shipping Policy
                    </Typography>
                    <Typography color={"white"} variant={"body2"} align={"center"}>
                        Terma&Conditions
                    </Typography>
                </Box>
                <Box>
                    <h3 flex={0}>FOLLOW US</h3>
                    <Socialbox>
                 <Facebook/>
                 <Instagram/>
                 <Twitter/>
                 </Socialbox>
                </Box>
            </Stack>
        </Box>
 </div>
 </div>
  );
};

export default Homepage;