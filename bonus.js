const http = require('http')    //Pull in a useful node package
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port
const server =
    http.createServer(            //Creates the response loop
        (req, res) => {               //Anonymous function to handle the request
            console.log("Request recieved")
            // console.log(req.url)
            // Build a fake url so we can get the search parameters using a URL object
            fake_url = "https://fake.com/path" + req.url
            const url = new URL(fake_url)
            if (req.method === 'GET') {

                var jokes = ["Walmart has a lower acceptance rate than Harvard.","A football fan once dedicated his obit to insulting an NFL team","There is a technical name for the fear of long words","Hunting unicorns is legal in Michigan."," Someone actually paid $10,000 for invisible artwork."," There is an official ruling for how many Tootsie Pop licks it takes to get to the center."]
                let randomIndex = Math.floor(Math.random() * jokes.length)
                // Process the queries here
                res.statusCode = 200      //code for OK
                res.setHeader('Content-Type', 'text/plain')
                res.write("yours")
                res.write(jokes[randomIndex])
                console.log(randomIndex)
                console.log(jokes[randomIndex])
                res.end();

            } else {
                console.log("Status 404")
                res.statusCode = 404;
                res.end();
            }

        }
    )

server.listen(port, hostname, () => {   //Start the server
    console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})