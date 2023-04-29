
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

//Import Material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

//Import component count
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';

const ItemDetail = ({data}) => {
    const [count, setCount] = useState(0);

    const [buy, setBuy] = useState(false)

    const navigate = useNavigate();

    const onAdd = () => {
        setBuy(true);
    };

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <h3>Detalle de {data.Product}</h3>
            <Card sx={{ width: 400, height:850 }}>
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
                </CardContent>
            </CardActionArea>
        </Card>
        {buy ? <div>
                    <button onClick={() => {navigate('/shop')}}>Continue Shopping</button>
                    <button onClick={() => {navigate('/cart')}}>Go to Shopping Cart</button>
                </div>
        : <ItemQuantitySelector count={count} setCount={setCount} onAdd={onAdd}/>}
        </div>
        
    )
}

export default ItemDetail;