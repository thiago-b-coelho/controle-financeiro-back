const express = require("express");
const userRoute = require('./modules/user/user.route.js');
const app = express();
app.use(express.json())

app.use('/user', userRoute)

app.get('/health', (_, res) => {
  return res.send('sistema operacional!');
});

const PORT = 8080
app.listen(PORT, async () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});
