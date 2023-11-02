import Login from '@/components/Login/index'
import Layout from '@/components/Layout/index'
import Company from '@/components/Company/index'
import AccountHead from '@/components/AccountHead/index'
import Users from '@/components/User/index'
import Books from '@/components/Books'
import Author from '@/components/Author/index'
import Book from '@/components/Book/index'
import Publisher from '@/components/Publisher/index'

import AuthGuard from './guard'

let routes = [{
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { title: 'Login' },
    },{
        path: '/',
        name: 'Layout',
        component: Layout,
        beforeEnter: AuthGuard,
        meta: { title: 'Dashboard' },
        children: [{
            path: '/users',
            name: 'Users',
            component: Users,
            meta: {title: 'Users'}
        }, {
            path: '/books',
            name: 'Books',
            component: Books,
            meta: {title: 'Books'}
        }, {
            path: '/company',
            name: 'Company',
            component: Company,
            meta: {title: 'Company'}
        }, {
            path: '/account-head',
            name: 'Account Head',
            component: AccountHead,
            meta: {title: 'Account Head'}
        }, {
            path: '/book',
            name: 'Book',
            component: Book,
            meta: {title: 'Book'}
        }, {
            path: '/author',
            name: 'Author',
            component: Author,
            meta: {title: 'Author'}
        }, {
            path: '/publisher',
            name: 'Publisher',
            component: Publisher,
            meta: {title: 'Publisher'}
        }]
    }
       
];

export default routes