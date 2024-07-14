import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

export default function () {
    const initGoogleAuth = () => {
        GoogleAuth.initialize({
            clientId: '824874175174-a8f9k0sl1rg8tqc84dn6dscjf4njmscm.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
            grantOfflineAccess: true,
        });
    }

    return{
        initGoogleAuth
    }
}