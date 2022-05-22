import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../redux/slice';

export default function MediaCard({product}) {
    const dispatch =  useDispatch();

    const handleAdd = (product) => {
        dispatch(add(product));
    };

  return (
    <Card sx={{ maxWidth: 345, boxShadow:23, borderRadius:'12px' }}>
      <Box
        component="img"
        src={product.image}
        alt="green iguana"
        sx={{ width:'100%', height:360,p:1 }}
      />
      <CardContent sx={{ background:'#f6f6f6',height:220 }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ textDecoration:'none' }}>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ height:'150px', overflow:'hidden', textDecoration:'none' }}>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ bgcolor:'#fff !important', zIndex:2, position:'relative' }}>
        <Button size="small" sx={{ textDecoration:'none' }}>Buy now</Button>
        <Button size="small" onClick={handleAdd} sx={{ textDecoration:'none' }}>Add TO Cart</Button>
      </CardActions>
    </Card>
    
  );
}



// <Link to={`/product/${product.id}`} style={{ textDecoration:'none' }}>
