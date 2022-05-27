import { useQuery } from '@apollo/client';
import { Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Paper,
    Typography 
} from '@mui/material';

import { TAKE_PRODUCTS } from '../../api';

interface queryData {
    id: number,
    name: string,
    imgUrl: string,
    price: number
}

const ShoppingPage = () => {
    const { error, loading, data } = useQuery(TAKE_PRODUCTS);

    return (
        <Paper elevation={3} sx={{ width: '70%', margin: 'auto', minHeight: '24em', display: 'flex', flexWrap: 'wrap', padding: '12px' }}>
            {loading ? (
                <p>Loading</p>
            ) : error ? (
                <p>Opps, we have a problems!</p>
            ) : (            
                <Grid container spacing={3}>
                    {data.products.map((products: queryData) =>  (
                    <Grid item xs={12} sm={4} key={products.id}>
                        <Card>
                            <CardMedia
                                sx={{ height: 200 }}
                                image={products.imgUrl}
                            />
                            <CardContent>
                                <Typography color="primary" variant="h5">
                                {products.name}
                                </Typography>
                                <Typography color="textSecondary" variant="subtitle2">
                                {products.price}$
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Buy</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    ))}
            </Grid>
            )}
        </Paper>
    )
};

export default ShoppingPage;
