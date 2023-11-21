const express = require("express");

const app = express();
app.use(express.json());

app.get('/health', (_, res) => {
  return res.send('sistema operacional!');
});

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
