const { response } = require("express");
const express = require("express");
const app = express();
const https = require("https"); 
const bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({extended: true}));




app.get("/", function(req,res){

    res.sendFile(__dirname + "/index.html"); 
  console.log("Post request recieved.");



//     const url =" https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey;

//     https.get(url, function(response){
//         console.log(response.statusCode);


//     response.on("data", function(data) {

//         const weatherData = JSON.parse(data)
//         const temp = weatherData.main.temp
//         console.log(temp);
//         const weatherDiscription = weatherData.weather[0].description
//         const icon = weatherData.weather[0].icon
//         const imageURL = "http://openweathermap.org/img/wn/10d@2x.png" 

        
         
//         res.write("<h1>Thre temperature in London is " + temp + " degree farenheits.</h1>");
//         res.write("<p>The weather is currently " + weatherDiscription + "<p>");
//         res.write("<img src=" + imageURL + ">");
//         res.send()
//     })   
// })
    
});

app.post("/", function(req, res){

    const query = req.body.cityName;
const apiKey = "fc1080c08724ae5a3f342c4ddbf3144f";

    const url =" https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey;

    https.get(url, function(response){
        console.log(response.statusCode);


    response.on("data", function(data) {

        const weatherData = JSON.parse(data)
        const temp = weatherData.main.temp
        console.log(temp);
        const weatherDiscription = weatherData.weather[0].description
        const icon = weatherData.weather[0].icon
        const imageURL = "http://openweathermap.org/img/wn/10d@2x.png" 

        
         
        res.write("<h1>Thre temperature in " +query+ " is " + temp + " kelvin.</h1>");
        res.write("<p>The weather is currently " + weatherDiscription + "<p>");
        res.write("<img src=" + imageURL + ">");
        res.send();
    });   
});

});


app.listen(3000, function(){
    console.log("Server is running on port 3000.");
})
 