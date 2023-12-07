/*
building a server without express

1. we want to build a req.url wich will give us acess to our user url in our local host

2. write. conditional for our "ptofile data"

3. use our .end() method to stop the server

4. use JSON.stringify method to turn js values onto JSON strings

5. create a listen port (4000)

METHODS

METHODS used and Definitions 

  * The Content-Type header is technically optional,
   but then you are leaving it up to the browser to essentially guess what type of content you are returning. 

 1.writeHead() (Added in v1.. 0) property is an inbuilt property of the 'http' module which sends a response header to the request. 
 The status code is a 3-digit HTTP status code,
 like 404. The last argument, headers, are the response headers.

 2.write() method is an inbuilt application programming interface of
  fs module which is used to specify the position in a file to begin writing at a buffer to write,
  as well as which part of the buffer to write out to the file.


 3. end() function is used to end the response process.
  This method actually comes from the Node core, specifically the response. end() method of HTTP

*/

const http = require("http");
const port = process.env.port || 4000;

// Here we will use .createserver method to accpet our request and response
http
  // The Create server method creates a server on your computer
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    // ADD ROUTES

    const url = req.url;

    if (url === "/profile") {

      res.write("<h1> Welcome to your Profile! </h1>");
      res.write("<h1> You are amazing! </h1>");
      res.write("<h1> You are 22 years old </h1>");
      res.end();

    } else if (url === "/job") {
      //SEND JSON EXAMPLE

      const work = {
        address: {
          street: "Red ventures",
          city: "Charlotte NC",
        },
      };
    // res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(work));
      res.end();
    } else {
      res.write("<h1>HELLO Cohort 14! Lets keep pushing we got this! </h1>");
      res.end();
    }
  })
  .listen(port, () => {
    console.log(`Server listening on port ${port}...`);
  });