import * as React from "react";
import Typography from "@mui/material/Typography";
export default function Contact()
{
    return(
        <div>
             <Typography align="center" variant="h3" sx={{fontWeight:900,fontFamily:"Roboto"}}>
                Toy<b style={{color:"#f06292"}}>Store</b>
            </Typography>
            <h2>Contact Us</h2>

<p>We are an extremely customer centric organization and our primary goal is to ensure that every Toycra customer has a wonderful experience while using our products. Any feedback, be it a compliment or a complaint, is much appreciated. Please feel free to get in touch with us and we will get back to you immediately!</p>

<h5>Contact Us at :</h5>
<p>Call / Whatsapp - 09638993429<br></br>
Email - Toystore@gmail.com</p>
        </div>
    );
}