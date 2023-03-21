const server = require('./api/server');
const port = 9000;

const User = require('./api/users/model')


// START YOUR SERVER HERE
server.get('/api/users', (req, res) => {
    User.find()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.status(500).json({
           message: "error getting users",
           err: err.message
        })
    });
 
  });







server.listen(port, () => {console.log(`API running on port ${port}`)})
