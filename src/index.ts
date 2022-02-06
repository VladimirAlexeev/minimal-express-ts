import express from 'express';
import bodyParser from 'body-parser';
import { usersList } from './usersList';

const app = express();
const PORT = 9000;

//middleware
app.use(bodyParser.json());

app.get("/", (_req, res) => {
    return res.send(usersList);
});

app.post("/delete-user", (req, res) => {
    const id: number = req.body.id;

    for(let i = 0; i < usersList.length; i++) {
        if(usersList[i].id === id) {
            return res.send(usersList.splice(i, 1));
        }
    }

    return res.send("Failed to delete user!");
});

app.listen(PORT);

console.log(`[app]: Is running on http://localhost:${PORT}`);