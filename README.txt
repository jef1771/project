RUNNING THE SERVER FROM COMMAND LINE:

With Node already installed on your machine, download all files.

cd through command prompt, until you've reached the project directory which should look 
similar to this: C:\your\local\path\website\project

from there, run the command "node index.js"
this will run the express server on local port 8000

Then open your web browser of choice and type "localhost:8000" to view the web page

To exit the express server, return to the command prompt and press "ctrl + c"




INSTALLING MONGODB PACKAGE FOR NODE:

run command "npm install mongodb" from the command line.


RUNNING MONGODB:

Once you've installed mongodb, cd to the bin directory within the mongodb directory you've downloaded
This directory path should look simlar to this: "C:\Program Files\MongoDB\Server\3.2\bin"

Once there, run the command "mongod", this will start the mongo database.

Now, open a new command prompt and cd back to the bin directory. Then run the command "mongo" to open
the mongo shell to issue commands if you please.



INSTALLING BODY-PARSER MIDDLEWARE FOR NODE:

body-parser will allow parsing data entered into the html page so that it can be used in the js files and
translated to a database.

run the command "npm install body-parser" to install the middleware