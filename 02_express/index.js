import 'dotenv/config';
import express from "express";
import logger from './logger.js';
import morgan from 'morgan';

const app = express();
const port = process.env.PORT || 3000;

let teadata = [];
let nextId = 0;

app.use(express.json());

const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
}));
app.listen(port, () => {
  console.log(`server started at ${port}`);
});

app.get("/teas", (req, res) => {
  res.status(200).send(teadata);
});

app.get("/teas/:id", (req, res) => {
  const tea = teadata.find(t => t.id === parseInt(req.params.id))
  if (!tea) {
    res.status(404).send("tea not found");
  }
  res.status(200).send(tea);
});

app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: nextId++, name, price };
  teadata.push(newTea);
  res.status(201).send(newTea);
});

app.put("/teas/:id", (req, res) => {
  const tea = teadata.find(t => t.id === parseInt(req.params.id))
  if (!tea) {
    res.status(404).send("tea not found");
  }

  const { name, price } = req.body
  tea.name = name
  tea.price = price

  res.status(200).send(tea);
});

app.delete('/teas/:id', (req, res) => {
  const index = teadata.findIndex(t => t.id === parseInt(req.params.id))
  if (index === -1) {
    return res.status(404).send("tea not found")
  }
  teadata.splice(index, 1)
  return res.status(204).send("deleted")
})