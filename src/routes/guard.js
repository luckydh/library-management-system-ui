import auth from '@/libs/Auth'

function requireAuth(to, from, next) {
    if(auth.authenticated() == true) next();
    else next('/login');
}

export default requireAuth;
