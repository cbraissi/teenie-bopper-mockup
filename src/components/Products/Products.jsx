import React from 'react';
import Grid from '@material-ui/core';

const products = [
    //{ id: , name: '', description: ''},
    { id: 1, name: 'The Kairi', description: 'monochrome on ya dome'},
    { id: 2, name: 'The Parisa', description: 'This persian likes silver'},
    //{ id: 3, name: 'The Eros', description: 'Hot and flamey'}
];

const Products = () => {
    <main>
        <Grid cointainer justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
}

export default Products;