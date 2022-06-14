import express from 'express';

const app = express();
const port = 3001;

app.use(express.json());  //quiero que use json
app.use((req, res, next) => { // las respuestas van a tener estas caracteristicas
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.post('/auth', (req, res) => {
  const body = req.body;
  const session = (body.email === 'kasu@burger.com');
  if (session) {
    res.status(200).json({
        token: 'entraste'
    });
  } else {
    res.status(400).send({ error: 'errorcito' });
  }
});

app.listen(port, () =>{
    console.log('mi backend funca');
});
