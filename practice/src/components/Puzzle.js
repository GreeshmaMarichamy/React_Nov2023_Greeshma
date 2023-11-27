import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Stack} from "@mui/material";

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
      <h1>PUZZLES</h1>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card>
         <CardMedia sx={{ height: 350,width:350 }} image="https://cdn.shoplightspeed.com/shops/605879/files/27639505/600x600x1/image.jpg" />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>SEASONAL PUZZLES</Button>
         </CardActions>
      </Card>
      <Card>
         <CardMedia sx={{ height: 350,width:350 }} image="https://cdn.shoplightspeed.com/shops/605879/files/19316970/600x600x1/image.jpg" />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>TEEN & ADULT;1000-1500 PIECES</Button>
         </CardActions>
      </Card>
      <Card>
         <CardMedia sx={{ height: 350,width:350 }} image="https://cdn.shoplightspeed.com/shops/605879/files/19319046/600x600x1/image.jpg" />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>AGES 12+;500-999 PIECES</Button>
         </CardActions>
      </Card>
      <Card>
         <CardMedia sx={{ height: 350,width:350 }} image="https://cdn.shoplightspeed.com/shops/605879/files/19321134/600x600x1/image.jpg" />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>BRAIN PUZZLES</Button>
         </CardActions>
      </Card>
      
    </Stack>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card>
         <CardMedia sx={{ height: 350,width:350 }} image="https://cdn.shoplightspeed.com/shops/605879/files/3677669/600x600x1/image.jpg" />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>3D PUZZLES & PUZZLE ACCESSORIES</Button>
         </CardActions>
      </Card>
      <Card>
         <CardMedia sx={{ height: 350,width:350 }} image="https://cdn.shoplightspeed.com/shops/605879/files/19316552/600x600x1/image.jpg" />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>AGES 7-12;200-499 PIECES</Button>
         </CardActions>
      </Card>
      <Card>
         <CardMedia sx={{ height: 350,width:350 }} image="https://cdn.shoplightspeed.com/shops/605879/files/19314907/600x600x1/image.jpg" />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>AGES 5-7;51-150 PIECES</Button>
         </CardActions>
      </Card>
      <Card>
         <CardMedia sx={{ height: 350,width:350 }} image="https://cdn.shoplightspeed.com/shops/605879/files/19314481/600x600x1/image.jpg" />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>AGES 3-5;13-50 PIECES</Button>
         </CardActions>
      </Card>
      
    </Stack>
     
    </div>
  );
}