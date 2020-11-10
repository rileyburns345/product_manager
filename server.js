const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


require('./server/routes/product.route')(app)
require('./server/config/mongoose.config');





app.listen(port, () => console.log(`listening on port ${8000}`))