import * as React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Stack} from "@mui/material";
import Button from '@mui/material/Button';

export default function Active(){
    return(
        <div>
        <h1>SPORTS,BALLS & GAMES</h1>
<Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 286 ,width:286}} image="https://cdn.shoplightspeed.com/shops/605879/files/59226882/400x400x2/watchitude-kids-soccer-goal.jpg" />
         <CardContent>
           <p>KIDS SOCCER GOAL</p>
         </CardContent>
         <CardActions>
         <Button>ADD TO CART</Button>
         <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 286 ,width:286 }} image="https://cdn.shoplightspeed.com/shops/605879/files/59222660/400x400x2/watchitude-kids-pickleball-set.jpg" />
         <CardContent>
         <p>KIDS PICKLEBALL SET</p>
         </CardContent>
         <CardActions>
         <Button>ADD TO CART</Button>
         <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 286 ,width:286}} image="https://cdn.shoplightspeed.com/shops/605879/files/59216628/400x400x2/watchitude-kids-indoor-basketball-set.jpg" />
         <CardContent>
         <p>KIDS INDOOR BASKETBALL SET</p>
         </CardContent>
         <CardActions>
         <Button>ADD TO CART</Button>
         <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{height: 286 ,width:286}} image="https://cdn.shoplightspeed.com/shops/605879/files/58358708/400x400x2/kidoozie-adjustable-junior-boxing-set.jpg" />
         <CardContent>
         <p>ADJUSTABLE JUNIOR BOXING SET</p>
         </CardContent>
         <CardActions>
         <Button>ADD TO CART</Button>
         <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{height: 286 ,width:286}} image="https://cdn.shoplightspeed.com/shops/605879/files/48012671/400x400x2/thin-air-brands-mini-play-golf-game.jpg" />
         <CardContent>
         <p>MINI PLAY GOLF GAME</p>
         </CardContent>
         <CardActions>
         <Button>ADD TO CART</Button>
         <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
         </CardActions>
      </Card>
      
    </Stack>
    </div>
    );
}