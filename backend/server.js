import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let students = [];

app.post('/students', (req, res) => {
    students.push(req.body)
    res.json({
        message: `Student Added`
    })
})

app.get('/students', (req, res) => {
    res.json(students)
})

app.get('/', (req, res) => {
    res.send('Backend is Running motherfucker!!')
})

app.listen(PORT, () => {
    console.log(`Backend is running on http://localhost:${PORT}`);
})