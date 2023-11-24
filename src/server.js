const express = require("express");
const cors = require('cors');
const userRouter = require('./modules/user/user.route.js');
const authRouter = require('./modules/auth/auth.route.js');
const categoryRouter = require('./modules/category/category.route.js');
const goalRouter = require('./modules/goal/goal.route.js');
const bearerToken = require('express-bearer-token');
const app = express();

app.use(express.json());
app.use(cors());
app.use(bearerToken());

app.use('/user', userRouter);
app.use('/auth', authRouter);
app.use('/category', categoryRouter);
app.use('/goal', goalRouter);

app.get('/health', (_, res) => {
  return res.send('sistema operacional!');
});

const PORT = 8080;

app.listen(PORT, async () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});
