import { app } from './app';
import signUp from './endpoints/singUp';

app.post('/signup', signUp)