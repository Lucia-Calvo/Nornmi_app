
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import "./ItemDetail.css"

//Import Material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

//Import component count
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';
import { useCart } from '../../context/CartContext';

const ItemDetail = ({data}) => {
    const [count, setCount] = useState(0);

    const [buy, setBuy] = useState(false)

    const navigate = useNavigate();

    const {addToCart} = useCart();

    const onAdd = () => {
        let itemPurchase = {
            name:data.Product,
            price:data.Price,
            quantity: count
        }
        setBuy(true);
        addToCart(itemPurchase)
    };


    return (
        <div className='DetailContainer'>
            <div className='CountContainer'>
                <h3>Detail of {data.Product}</h3>
                {buy ? <div>
                        <button className='btnShop' onClick={() => {navigate('/shop')}}>Continue Shopping</button>
                        <button className='btnShop' onClick={() => {navigate('/cart')}}>Go to Cart</button>
                    </div>
                : <ItemQuantitySelector count={count} setCount={setCount} onAdd={onAdd}/>}
            </div>
            <div>
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
            </div>
        </div>
        
    )
}

export default ItemDetail;