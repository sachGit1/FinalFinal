const express = require('express')
const env = require('dotenv')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors');
const user = require('./routes/User');
const provider = require('./routes/provider');
const product = require ('./routes/products')
const order = require('./routes/order')
const address = require('./routes/address');
const review  = require('./routes/review')

const CronJob = require('cron').CronJob;
const initialData = require('./routes/initialData')
const productModel = require('./models/product')

const app = express()

//Load environment variables (before CORS configuration)
env.config();

app.use(cors({
    origin: ['http://localhost:3000'], 
    methods: ['GET', 'PUT', 'POST','DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'], 
    credentials: true
}))


app.use(express.json())
app.use(cookieParser())

var originsWhitelist = [
    
    'http://localhost:3000'
 ];
 var corsOptions = {
     origin: function(origin, callback){
         var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
         callback(null, isWhitelisted);
     },
     credentials:true
  }
app.use(cors(corsOptions))

mongoose.connect(process.env.MONGODB_CONNECTION,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DataBase Connected")
})
const updateProduct = async() =>{
    const products = await productModel.find()
    for(let i = 0;i<products.length;i++){
        await productModel.findByIdAndUpdate(products[i]._id,{$set:{quantity:products[i].enteredQuantity}});
    }
}
new CronJob('0 0 * * *', async () => {
    await updateProduct()
  }, null, true, 'Asia/Colombo');

app.get('/',(req,res) =>{
    console.log("Server Is Running")
    }
)
app.use('/api/v1/user', user);
app.use('/api/v1/provider',provider)
app.use('/api/v1/product',product)
app.use('/api/v1/order',order)
app.use('/api/v1/address',address);
app.use('/api/v1/review',review);
app.use('/api/v1/initialData',initialData)

app.listen(process.env.PORT,()=>{
    console.log("Server is Running on port " + process.env.PORT)
})
