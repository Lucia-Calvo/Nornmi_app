import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardUser = ({data}) => {
    const onAddProduct = () => {
        console.log("add")
    }

    return (
        <Card sx={{ width: 400, height:850,}}>
        <CardActionArea>
            <CardMedia
            component="img"
            image={data.Img}
            alt="vitamins"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {data.Product}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {data.Description}
            </Typography>
            <Typography variant="h6" sx={{paddingTop:1}}>
                ${data.Price}
            </Typography>
            <button>Add to Cart</button>
            </CardContent>
        </CardActionArea>
        </Card>
    );
}

export default CardUser;