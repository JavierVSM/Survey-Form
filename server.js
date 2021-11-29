const express = require( 'express' );
const bodyParser = require( 'body-parser' );

const app = express();

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.use (bodyParser.urlencoded({extended:true}) )

app.get("/", function (req, response){
    response.render('index');
});

app.post ("/process", function (request, response){
    const name=request.body.name;
    const local=request.body.local;
    const language=request.body.language;
    const comments=request.body.comments;
    const result = {
        name,
        local,
        language,
        comments
    };
    response.render('result', {result});
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});