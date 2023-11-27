import * as React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Stack} from "@mui/material";
import Button from '@mui/material/Button';

export default function Unique(){
    return(
        <div>
        <h1>UNIQUE</h1>
<Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 286 ,width:286}} image="https://cdn.shoplightspeed.com/shops/605879/files/45199140/400x400x2/sour-patch-kids-sour-patch-kids-pillow.jpg" />
         <CardContent>
           <p>SOUR PATCH KIDS PILLOW</p>
         </CardContent>
         <CardActions>
         <Button>ADD TO CART</Button>
         <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 286 ,width:286 }} image="https://cdn.shoplightspeed.com/shops/605879/files/44660394/400x400x2/squishable-plague-doctor-squishable.jpg" />
         <CardContent>
         <p>PLAGUE DOCTOR SQUISHABLE</p>
         </CardContent>
         <CardActions>
         <Button>ADD TO CART</Button>
         <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 286 ,width:286}} image="https://cdn.shoplightspeed.com/shops/605879/files/41506127/400x400x2/squishable-avocado-squishable.jpg" />
         <CardContent>
         <p>AVOCADO SQUISHABLE</p>
         </CardContent>
         <CardActions>
         <Button>ADD TO CART</Button>
         <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{height: 286 ,width:286}} image="https://cdn.shoplightspeed.com/shops/605879/files/47861141/400x400x2/squishable-gourmet-grilled-cheese-squishable.jpg" />
         <CardContent>
         <p>GOURMET GRILLED CHEESE SQUISHABLE</p>
         </CardContent>
         <CardActions>
         <Button>ADD TO CART</Button>
         <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{height: 286 ,width:286}} image="https://cdn.shoplightspeed.com/shops/605879/files/38388521/400x400x2/jelly-cat-fleury-sunflower.jpg" />
         <CardContent>
         <p>FLEURY SUNFLOWER</p>
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