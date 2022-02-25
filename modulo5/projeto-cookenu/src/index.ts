import { app } from './app';
import login from './endpoints/login';
import ownProfile from './endpoints/ownProfile';
import signUp from './endpoints/singUp';

app.post('/signup', signUp);

app.post('/login', login)

app.get('/user/profile', ownProfile)