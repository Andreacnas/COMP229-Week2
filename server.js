//Import third-party nodejs module Connect
const connect = require('connect');

//Instatiate app-server
const app = connect();

//custom middleware
function helloWorld(req,res,next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
}

//custom middleware
function byeWorld(req,res,next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Goodbye World');
}

//app middleware to connect application
app.use('/hello',helloWorld);
app.use('/bye',byeWorld);

//Run app
app.listen(3001);

console.log('Server running at http://locahost:3001');

//<<<<<<< HEAD
//diferente
//=======
//testtesttesttesttest
//>>>>>>> 91369b8951793f3bcb752a1ce249c59c4b511151
