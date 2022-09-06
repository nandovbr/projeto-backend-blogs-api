const bodyParser = require('body-parser');
require('dotenv').config();
const app = require('./api');
const errorMiddleware = require('./middlewares/errorMidleware');

const loginRoute = require('./routes/loginRoute');
const userRoute = require('./routes/userRoute');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(bodyParser.json());

app.use('/login', loginRoute);
app.use('/user', userRoute);

app.use(errorMiddleware);
app.listen(port, () => console.log('ouvindo porta', port));
