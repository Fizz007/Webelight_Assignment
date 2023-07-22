const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.json())
const productRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/cartRoutes')
const orderRoutes = require('./routes/orderRoutes')
app.use('/products', productRoutes)
app.use('/cart', cartRoutes)
app.use('/order', orderRoutes)

require("./config/connectDB");
const PORT = 5400;
app.listen(PORT, () => console.log(`server is running on ${PORT}`));