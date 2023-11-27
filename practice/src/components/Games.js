import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Stack} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function MediaCard() {
  let bla="black";
  const[color,setColor]=useState(bla);
  const[cnt,setCnt]=useState(0);
  const transformationHandler=()=>{
    let value=cnt;
    setCnt(++value);
    if(cnt===3)
    {
      if(color===bla)
      setColor("pink");
      else
      setColor(bla);
      setCnt(0);
    }
  };
  return (
    <div >
      <h1>GAMES</h1>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card>
         <CardMedia sx={{ height: 350,width:350 }} image="https://cdn.shoplightspeed.com/shops/605879/files/27617277/600x600x1/image.jpg" />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>BOARD GAMES</Button>
         </CardActions>
      </Card>
      <Card>
         <CardMedia sx={{ height: 350,width:350 }} image="https://cdn.shoplightspeed.com/shops/605879/files/27617276/600x600x1/image.jpg" />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>CARD GAMES</Button>
         </CardActions>
      </Card>
      <Card>
         <CardMedia sx={{ height: 350,width:350 }} image="https://cdn.shoplightspeed.com/shops/605879/files/3066964/600x600x1/image.jpg" />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>CLASSIC GAMES</Button>
         </CardActions>
      </Card>
      <Card>
         <CardMedia sx={{ height: 350,width:350 }} image="https://cdn.shoplightspeed.com/shops/605879/files/27617287/600x600x1/image.jpg" />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>DICE & TILE GAMES</Button>
         </CardActions>
      </Card>
      
    </Stack>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card>
         <CardMedia sx={{ height: 350,width:350 }} image="https://cdn.shoplightspeed.com/shops/605879/files/3067089/600x600x1/image.jpg" />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>PRESCHOOL GAMES</Button>
         </CardActions>
      </Card>
      <Card>
         <CardMedia sx={{ height: 350,width:350 }} image="https://cdn.shoplightspeed.com/shops/605879/files/27617291/600x600x1/image.jpg" />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>D & D</Button>
         </CardActions>
      </Card>
      <Card>
         <CardMedia sx={{ height: 350,width:350 }} image="https://cdn.shoplightspeed.com/shops/605879/files/3067347/600x600x1/image.jpg" />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>SINGLE PLAYER LOGIC GAMES</Button>
         </CardActions>
      </Card>
      <Card>
         <CardMedia sx={{ height: 350,width:350 }} image="https://cdn.shoplightspeed.com/shops/605879/files/24992172/600x600x1/image.jpg" />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>PARTY GAMES</Button>
         </CardActions>
      </Card>
      
    </Stack>
     
    </div>
  );
}