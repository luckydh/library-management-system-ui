import ls from './Storage'
import encryption from './Encryption'

let auth = {
    set: (payload) => {
        ls.set('library', payload.auth_token);
    },
    get: () => {
        let lib = ls.get('library')
        return `Bearer ${lib}`
    },
    authenticated: () => {
        let data = ls.get('library');
        if(data == undefined) return false;
        try {
            data = encryption.decryptObject(data);
            if(data != null) return true;
        } catch(e) {
            return false;
        }
        return false;
    },
    clear: () => {
        ls.clear()
    }
};

export default auth;