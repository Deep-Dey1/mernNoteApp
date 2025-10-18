Step 1: Install Node.js from the node.js site. <br>
Step 2: Create 2 dirs inside the project as backend and frontend. <br>
Step 3: Goto the backend dir and install npm init -y. <br>
Step 4: Add the "type" : "module" in the package.json to use simple import and export in express and other modules. <br>
Step 5: In the backend use nom install express@4.18.2 to install express in the project. <br>
Step 6: Create a server.js file in the backend dir. <br>
Step 7: Run the server.js using node server.js <br>
Step 8: To run the server.js using npm run dev or nom run test or anything with npm run <br>
modify the package.json in the scripts <br>
by : "dev" : "node server.js" to run server.js as nom run dev. <br>
Step 9: Download nodemon in the same folder in which the package.json is present to make the browser responsive with the updates of the server.
download it using : npm install nodemon -D
<br>
Step 9: update the script of the package.json to run the server with nodemon insted of node 
update "dev" : "node server.js" with "dev" : "nodemon server.js"
Step 10: Make a production copy of the server which can be run using node insted of nodemon so that the development changes wont effect it.
add another script in the scripts as : "start" : "node server.js" now on running npm run start the production server starts.
<br>