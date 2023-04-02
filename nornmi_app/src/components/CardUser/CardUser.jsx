import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Img from "./Nornmi-2.png";

const CardUser = ({data}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image={Img}
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {data.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {data.phone}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    );
}

export default CardUser;