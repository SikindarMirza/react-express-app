const express = require('express');

const app = express();

app.get('/api/customers', (req,res) => {
    const customers = [
        {id: 1, firstName: 'Dan', lastName: 'Abramov'},
        {id: 2, firstName: 'Ryan', lastName: 'FLorence'},
        {id: 3, firstName: 'Sophie', lastName: 'Albert'}
    ];
    res.json(customers);
});
const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));