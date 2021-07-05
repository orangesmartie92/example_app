# Requirements

## Backend
- python 3.6 or higher
- pipenv

## Frontend
- npm or yarn


# Setup

## Backend

To install all necessary libraries in the virtual environment
```
pipenv shell
pipenv install
```

## Frontend

To install all necessary libraries for the frontend,
run: 
```
cd client
yarn
```
or
```
cd client
npm install
```



# Development

In development mode, there should be two servers running. The backend (using flask) and the frontend (using react);

## Flask Backend
- will run on http://localhost:5000
  
```
pipenv shell
export FLASK_APP=app
export FLASK_ENV=development
flask run
```

## React Frontend
- will run on http://localhost:3000
- requests are made to http://localhost:5000 by adding a proxy property on `client/package.json`
```
cd client
yarn start
```
or
```
cd client
npm start
```

# Production

In production mode, the flask backend should serve the static build files generated from the client. 
* Note: you may shutoff the frontend server if you don't need it (ctrl + c).

The client build files are located under `client/build`

To build the client files:

```
cd client
yarn build
```
or
```
cd client
npm run build
```

