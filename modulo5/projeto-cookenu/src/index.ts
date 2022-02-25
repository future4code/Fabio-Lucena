import { app } from './app';
import login from './endpoints/login';
import signUp from './endpoints/singUp';

app.post('/signup', signUp);

app.post('/login', login)