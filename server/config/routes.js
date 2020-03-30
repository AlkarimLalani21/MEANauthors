const author = require("../controllers/authors.js");

module.exports = function(app){
    app.get('/api/homepage',(req,res)=>{
        author.index(req,res);
    })
    app.post('/api/homepage/new',(req,res)=>{
        author.create(req,res);
    })
    app.get('/api/homepage/update/:id',(req,res)=>{
        author.show(req,res);
    })
    app.put('/api/homepage/:id',(req,res)=>{
        console.log(req.body)
        author.update(req,res);
    })
    app.delete('/api/homepage/:id',(req,res)=>{
        author.delete(req,res);
    })
}