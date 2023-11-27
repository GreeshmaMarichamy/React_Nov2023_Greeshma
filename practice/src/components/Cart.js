import React,{useState} from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Cart(){
   const bull = (
      <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
      >
        •
      </Box>
    );
    const[count,setCount]=useState(0);
    function increment(){
        var val=count;
        setCount(++val);
    }
    function decrement(){
        var valu=count;
        setCount(--valu);
    }
    return(
    <div >
      <h2>CART</h2>
      <Card sx={{ minWidth: 275 , textAlign:"left"}}>
      <CardContent style={{display:"flex"}}>
        <div>
        <Typography><img src="https://cdn.shoplightspeed.com/shops/605879/files/59060031/400x400x2/thames-kosmos-hydraulic-boxing-bots.jpg" width="150px" height="150px"></img>
        </Typography>
        </div>
        <div style={{marginLeft:"80%"}}>
        <Button onClick={increment} style={{textAlign:"right"}}>+</Button>
        <h2 style={{textAlign:"right"}}>{count}</h2>
        <Button onClick={decrement} style={{textAlign:"right"}}>-</Button>
        </div>
      </CardContent>
    </Card>
      <Card sx={{ minWidth: 275 , textAlign:"left"}}>
      <CardContent style={{display:"flex"}}>
        <div>
        <Typography><img src="https://cdn.shoplightspeed.com/shops/605879/files/59060031/400x400x2/thames-kosmos-hydraulic-boxing-bots.jpg" width="150px" height="150px"></img>
        </Typography>
        </div>
        <div style={{marginLeft:"80%"}}>
        <Button onClick={increment} style={{textAlign:"right"}}>+</Button>
        <h2 style={{textAlign:"right"}}>{count}</h2>
        <Button onClick={decrement} style={{textAlign:"right"}}>-</Button>
        </div>
      </CardContent>
    </Card>
      <Card sx={{ minWidth: 275 , textAlign:"left"}}>
      <CardContent style={{display:"flex"}}>
        <div>
        <Typography><img src="https://cdn.shoplightspeed.com/shops/605879/files/59060031/400x400x2/thames-kosmos-hydraulic-boxing-bots.jpg" width="150px" height="150px"></img>
        </Typography>
        </div>
        <div style={{marginLeft:"80%"}}>
        <Button onClick={increment} style={{textAlign:"right"}}>+</Button>
        <h2 style={{textAlign:"right"}}>{count}</h2>
        <Button onClick={decrement} style={{textAlign:"right"}}>-</Button>
        </div>
      </CardContent>
    </Card>
    </div>
    );
}
export default Cart;
