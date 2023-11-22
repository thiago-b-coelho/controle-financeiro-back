const express = require("express");
const cors = require('cors');
const userRouter = require('./modules/user/user.route.js');
const authRouter = require('./modules/auth/auth.route.js');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/user', userRouter);
app.use('/auth', authRouter);

app.get('/health', (_, res) => {
  return res.send('sistema operacional!');
});

const PORT = 8080;

app.listen(PORT, async () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});
