import Keycloak from 'keycloak-js';

export const authenticate = (callback: () => void): void => {
    if (!import.meta.env.VITE_MOCK && !import.meta.env.VITE_FAKE_TOKEN && !(window as any).token) {
        const keycloak = new Keycloak({
            url: import.meta.env.VITE_KEYCLOAK_BASE_URL,
            realm: import.meta.env.VITE_KEYCLOAK_REALM || 'erpjs',
            clientId: 'erpjs',
            flow: 'implicit',
        } as any);
        keycloak
            .init({})
            .then(function (authenticated) {
                console.log(authenticated ? 'authenticated' : 'not authenticated');
                if (!authenticated) {
                    keycloak.login({
                        redirectUri: import.meta.env.VITE_URL,
                    });
                } else {
                    const { token } = keycloak;
                    if (token) {
                        (window as any).token = token;
                        if (callback) { callback(); }
                    }
                }
            })
            .catch(function (f) {
                // eslint-disable-next-line no-console
                console.error('Keycloak login failed', f);
            });
    }
};
