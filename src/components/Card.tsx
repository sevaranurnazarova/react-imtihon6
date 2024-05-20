import { Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from "@mui/material"

const CardProduct = ({item}) => {

    return (
        <Card className="ml-4" sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={item.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">price: {item.price}</Button>
                <Rating name="read-only" value={item.rate} readOnly />
            </CardActions>
        </Card>
    )
}

export default CardProduct;
