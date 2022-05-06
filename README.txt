#To Do App
To Do App is a web application programmed with react and typescript, 
which contains a server side and a client side.

-------------------------------------------------------------------------------
-------------------------------------------------------------------------------

#Run the App
To run the app, the server must be started first and then the client. 

cd .\server\
npm run server

cd .\client\
npm start

server will be run on http://localhost:8000/
client will be run on http://localhost:3000/

-------------------------------------------------------------------------------
-------------------------------------------------------------------------------

#Client
The client side consists of a todotable that forms the framework of the project. 

-------------------------------------------------------------------------------

#TodoTable
The todo table contains an input bar and a todo display.

#InputBar
The InputBar contains a text field to enter a Todo, an add button to confirm the 
entry and a clear button to delete all Todos with the status done.

#TodoDisplay
All todos are shown in the TodoDisplay

#Todo
A Todo consists of a text area in which the Todo description is displayed and a 
control area in which there are two buttons. One button changes the status and one 
button deletes the Todo.

-------------------------------------------------------------------------------
-------------------------------------------------------------------------------

#Server
The server side contains a NodeJS api backend that connects to a MongoDB database. 




