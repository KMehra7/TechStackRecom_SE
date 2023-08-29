# SampleTechStack

### The codes of both Client and Server side are present in this one repo making it a Monorepo. 

### Client Side Code:
Upon running the command 'npx create-react-app client' to create a new React app the following folder structure is created:

![image](https://github.com/KMehra7/TechStackRecom_SE/assets/8588601/1c532b6e-4507-40bc-ba96-19d1644418d7)

The file which we use to make most of the changes in for this sample project is the App.js file.
To test if your app is running properly in your local use the command 'npm start'. 

Create a .env.local file and inside it add the following line: REACT_APP_BACKEND_URL=http://localhost:5000/api
This is to link the Client side and Server side code together. This variable is called in the App.js file.

### Server Side Code:
Create a folder called 'server'. Open it in the Terminal and type 'npm init'. This creates a package.json file.
Run the following command: npm i express mongoose dotenv

express: Used to create a server.
mongoose: Used to work with MongoDB database
dotenv: Used to load environment variables.

Add the main file called 'server.js' inside the server folder.
Create a .env file and add the url for MongoDB connection. It should look like this: MONGODB_URI=yourconnectionstring

Use the command 'npm run dev' to check if your NodeJS application is running properly or not.
Created folders Activity, Routes and Models which were needed for this sample project. 
Folder structure should look like : 
![image](https://github.com/KMehra7/TechStackRecom_SE/assets/8588601/b78a16db-c88b-4f9c-a57b-1e14eb731000)

Create a yarn.lock file in order to build the application when deploying it on Render.com

### Deployment
Used Render.com to deploy both the client side and server side. 
https://dashboard.render.com/#

Build command for client side is: npm run build.
To publish it is: build

Build command for server side is: yarn
To publish is: npm run start


### Tutorial
You can visit the following link for the tutorial to create a full stack application using MERN:
https://bootcamp.uxdesign.cc/lets-build-and-deploy-a-full-stack-mern-web-application-765ba138aee2


