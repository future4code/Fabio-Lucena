import { app } from './app';
import getUsers from './endpoints/getUsers';
import login from './endpoints/login';
import ownProfile from './endpoints/ownProfile';
import signUp from './endpoints/singUp';

app.post('/signup', signUp);

app.post('/login', login)

app.get('/user/profile', ownProfile)

app.get('/user/:id', getUsers)