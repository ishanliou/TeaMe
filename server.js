const
express = require('express'),
app = express(),
mongoose = require('mongoose'),
logger = require('morgan'),
bodyParser = require('body-parser'),
TeaMe = require('./models/TeaMe'),
teaCtrl = require('./controllers/tea')

mongoose.connect('mongodb://localhost/teas', function(err){
    console.log(err || "Connece to MongoDB")
})

//middleare
app.use(logger('dev'))
app.use(bodyParser.json())


// routes
app.get('/', function(req, res){
    res.json({message:"The root route created!"})
})


app.get('/teas', teaCtrl.index)

app.post('/teas', teaCtrl.create)

app.get('/teas/:id', teaCtrl.show)  

app.patch('/teas/:id', teaCtrl.edit)

app.delete('/teas/:id', teaCtrl.delete)


app.listen(3000, function(err){
    console.log(err || "Server running on 3000")
})