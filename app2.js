const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<style> table, th, td {border: 1px solid black;border-collapse: collapse;}</style><table><tr><th>Locations</th><th>Hours to be spent</th><th>Expenses</th></tr><tr><td>Visakhapatnam</td><td>10</td><td>10,000</td></tr><tr><td>Mumbai</td><td>48</td><td>20,000</td></tr><tr><td>Goa</td><td>72</td><td>30,000</td></tr><tr><td>Kochin</td><td>72</td><td>40,000</td></tr></table>')
      res.write('Content \n')
      res.write('More content \n')
      res.write('Hello World')    
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})