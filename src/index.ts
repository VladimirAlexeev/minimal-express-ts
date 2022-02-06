import express from 'express';
import bodyParser from 'body-parser';
import { usersList } from './usersList';

// create an express application
const app = express();
const PORT = 9000;

// apply middleware to parse incoming requests as JSON
app.use(bodyParser.json());

// create route to handle HTTP GET request
app.get("/", (_req, res) => {
    return res.send(usersList);
});

// create route to handle HTTP POST request
app.post("/delete-user", (req, res) => {
    const id: number = req.body.id;

    for(let i = 0; i < usersList.length; i++) {
        if(usersList[i].id === id) {
            return res.send(usersList.splice(i, 1));
        }
    }

    return res.send("Failed to delete user!");
});

// create Node server at specified port
app.listen(PORT);

console.log(`[app]: Is running on http://localhost:${PORT}`);
