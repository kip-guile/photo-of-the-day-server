### NASA photo of the day (server)

- Built to persist saved photos from NASA photo of the day API

### Features

- Data persisted using a NoSQL database (MONGODB)

### Endpoints

- Add a new photo [POST]
  URL: /api/photos

```
"url": "url",
"title": "title",
"explanation": "explanation"
"date": "date"
```

- Delete a photo [DELETE]
  URL: /api/photos/:date

- Get all photos [GET]
  URL: /api/photos

### Environment variables

create a .env file that includes

- PORT - The port the server will run on
- DATABASE_URL - The MONGODB database url

#### npm scripts

To get the server running locally:

- clone this repo
- npm install to install required dependencies
- npm run start to start the local server
