import * as React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Stack} from "@mui/material";
import Button from '@mui/material/Button';

export default function Picture(){
    return(
        <div>
        <h1>PICTURE BOOKS</h1>
<Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 286 ,width:286}} image="https://cdn.shoplightspeed.com/shops/605879/files/50589847/400x400x2/itty-bitty-kitty-corn-hb-hale.jpg" />
         <CardContent>
           <p>ITTY BITTY KITTY-CORN HB HALE</p>
         </CardContent>
         <CardActions>
         <Button>ADD TO CART</Button>
         <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 286 ,width:286 }} image="https://cdn.shoplightspeed.com/shops/605879/files/46027641/400x400x2/compendium-good-night-monster-gift-set.jpg" />
         <CardContent>
         <p>GOOD NIGHT MONSTER GIFT SET</p>
         </CardContent>
         <CardActions>
         <Button>ADD TO CART</Button>
         <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 286 ,width:286}} image="https://cdn.shoplightspeed.com/shops/605879/files/38029680/400x400x2/simon-and-schuster-not-all-princesses-dress-in-pin.jpg" />
         <CardContent>
         <p>NOT ALL PRINCESSES DRESS IN PINK</p>
         </CardContent>
         <CardActions>
         <Button>ADD TO CART</Button>
         <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{height: 286 ,width:286}} image="https://cdn.shoplightspeed.com/shops/605879/files/34361046/400x400x2/barefoot-books-ready-set-go.jpg" />
         <CardContent>
         <p>READY, SET, GO!</p>
         </CardContent>
         <CardActions>
         <Button>ADD TO CART</Button>
         <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{height: 286 ,width:286}} image="https://cdn.shoplightspeed.com/shops/605879/files/35646638/400x400x2/orchard-books-wishes.jpg" />
         <CardContent>
         <p>WISHES</p>
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
