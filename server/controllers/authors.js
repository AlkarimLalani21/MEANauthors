const Author = require("../models/author.js")

module.exports = {

    index: function (req, res) {
        Author.find()
            .then(authors => {
                let response = {
                    authors: authors,
                    message: authors.length ? 'Author found' : 'No Authors found'
                }
                console.log('Get method controller level');
                res.json(response)
            })
            .catch(err => {
                res.json(err)
            })
    },

    create: function (req, res) {
        console.log(req.body)
        let author = new Author ()
        author.name = req.body.name;
        author.quotes = req.body.quotes;
        author.save()
            .then(author => {
                res.json(author)
            })
            .catch(err => {
                      bad=[];
                      // adjust the code below as needed to create a flash message with the tag and content you would like
                      for (var key in err.errors) {
                          bad.push(err.errors[key].message);
                      }
                      res.json(bad);
            })
    },
    show: function(req,res){
        Author.findOne({_id: req.params.id})
        .then(author=>{
            res.json(author);
        })
        .catch(err => {
            bad=[];
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for (var key in err.errors) {
                bad.push(err.errors[key].message);
            }
            res.json(bad);
        })
    },

    update: function (req, res) {
        Author.findOne({ _id: req.params.id })
            .then(author => {
              author.name = req.body.name;
              author.quotes = req.body.quotes;
                return author.save()
  
            })
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                bad=[];
                // adjust the code below as needed to create a flash message with the tag and content you would like
                for (var key in err.errors) {
                    bad.push(err.errors[key].message);
                }
                res.json(bad);
            })
    },
    delete: function (req, res) {
        console.log('DELETE ');
        Author.remove({ _id: req.params.id })
            .then(author => {
                res.json(author)
            })
            .catch(err => res.json(err));
    }
  
}  