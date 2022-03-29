const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
var newRequest = require("request");
var municipalities = require("./Helper");
app.use(express.json(app));

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/favicon.ico", (req, res) => res.send("Hello World!"));
app.post("/weather", (req, res) => {
  newRequest(
    `https://api.openweathermap.org/data/2.5/weather?q=Lahore&appid=0f7c8b20f4669c9b103c7b80a2ec1e78`,
    function (error, response, body) {
      if (!error) {
        console.log("body is", body);
        var data = JSON.parse(body);
        res.send({ success: true, data: data });
        console.log("data is", data);
      } else
        (error) => {
          console.log("error is ", error);
        };
    }
  );
});
app.post("/spain", (req, res) => {
  let input = req.body.userInput;
  console.log("req is", req.body.userInput);
  if (req.body.userInput) {
    const temp = municipalities.filter((item) => item.name.includes(input));
    console.log("temp i s", temp);
    temp.length
      ? res.send(temp[0])
      : res.send({ success: false, message: "No Data found" });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port} !`));
