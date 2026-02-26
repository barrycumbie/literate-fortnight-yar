import 'dotenv/config';
import express from 'express'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


// middlewares aka endpoints aka 'get to slash' {http verb} to slash {you name ur endpoint}
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'projects.html'));

})

// READ - Get all projects 
app.get('/api/projects', async (req, res) => {
  try {
    const db = client.db('jayce');
    const collection = db.collection('projects');

    const records = await collection.find({}).toArray();
    
    res.json(records);
  } catch (error) {
    console.error('Error reading attendance:', error);
    res.status(500).json({ error: 'Failed to get attendance records' });
  }
});

// Endpoint to populate MongoDB with starter data
app.get('/api/populate-projects', async (req, res) => {
  try {
    const db = client.db('jayce');
    const collection = db.collection('projects');

    const starterData = [
      {
        "title": "Project Bravo - Game",
        "description": "A browser-based game built with JavaScript and Bootstrap. Play and enjoy!",
        "image": "img/game-thumb.png",
        "codeUrl": "https://github.com/Jcalvert22/project-bravo",
        "appUrl": "https://jcalvert22.github.io/project-bravo/index.html"
      },
      {
        "title": "Project Charlie - Game Organizer",
        "description": "An organizer app for managing and tracking games, built with modern web technologies.",
        "image": "img/charlie-thumb.png",
        "codeUrl": "https://github.com/Jcalvert22/project-charlie",
        "appUrl": "https://jcalvert22.github.io/group-project-charlie/"
      },
      {
        "title": "Project Delta",
        "description": "A web application for Project Delta. (Add a short description here)",
        "image": "img/delta-thumb.png",
        "codeUrl": "https://github.com/Jcalvert22/project-delta",
        "appUrl": "https://jcalvert22.github.io/project-delta/"
      }
    ];

    const result = await collection.insertMany(starterData);
    res.status(200).json({ message: 'Projects populated successfully', insertedCount: result.insertedCount });
  } catch (error) {
    console.error('Error populating projects:', error);
    res.status(500).json({ error: 'Failed to populate projects' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})