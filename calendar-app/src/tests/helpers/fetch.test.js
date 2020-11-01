import { fetchConToken, fetchSinToken } from '../../helpers/fetch';

describe('Pruebas en el helper Fetch', () => {

    let token = '';

    test('fetchSinToken debe de funcionar', async () => {
        const resp = await fetchSinToken('auth', {email: 'misael@mail.com', password: '123456'}, 'POST');

        expect(resp instanceof Response).toBe(true);

        const body = await resp.json();
        
        expect(body.ok).toBe(true);  
        token = body.token;
    });

    test('fetchConToken debe de funcionar', async () => {        
        localStorage.setItem('token', token);
        const resp = await fetchConToken('events/5f950a1904db313a44781474', {}, 'DELETE');
        const body = await resp.json();

        expect(body.msg).toBe('No existe un evento con el id: 5f950a1904db313a44781474');
    });
});