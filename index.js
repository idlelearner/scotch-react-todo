const express = require('express')
const path = require('path')
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000
const app = express()

var todo = []

app.use(bodyParser.urlencoded({
    extended: true
}));

// serve static assets normally
app.use(express.static(__dirname + '/public'))

// Handles all routes so you do not get a not found error
// app.get('*', function (request, response){
//     response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// })
app.use(bodyParser.json());


app.post('/todo', function (request, response){
    console.log(request.body)
    v = {'id' : todo.length+1, 'text' : request.body.text}
    todo.push(v)
    console.log(todo)
    response.send(v)
})

app.get('/todo', function (request, response){
    //todo.push({id : todo.length+1, 'text' : request.body.text})
    console.log(todo)
    response.send(todo)
})

app.delete('/todo/(:id)', function (request, response){
    todo.splice(request.body.id-1, 1);
    //console.log(todo)
    response.send("OK")
})

// app.post('/quotes', (req, res) => {
//     db.collection('quotes').save(req.body, (err, result) => {
//       if (err) return console.log(err)
  
//       console.log('saved to database')
//       res.redirect('/')
//     })
//   })

app.listen(port)
console.log("server started on port " + port)
