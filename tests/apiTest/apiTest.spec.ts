import { test, expect } from '@playwright/test';

test.describe('Reqres API CRUD Operations', () => {

    // 1. GET Request
    test('GET - Fetch Single User', async ({ request }) => {
        const response = await request.get('https://reqres.in/api/users/2');

        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body.data.id).toBe(2);
        console.log('GET Response:', body);
    });

    // 2. POST Request (Create New User)
    test('POST - Create New User', async ({ request }) => {
        const response = await request.post('https://reqres.in/api/users', {
            data: {
                name: 'Imran',
                job: 'QA Automation Engineer'
            }
        });

        expect(response.status()).toBe(201); // 201 Created
        const body = await response.json();
        expect(body.name).toBe('Imran');
        expect(body).toHaveProperty('id');
        console.log('POST Response:', body);
    });

    // 3. PUT Request (Full Update)
    test('PUT - Update Entire User', async ({ request }) => {
        const response = await request.put('https://reqres.in/api/users/2', {
            data: {
                name: 'Imran',
                job: 'Senior QA Lead'
            }
        });

        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body.job).toBe('Senior QA Lead');
        console.log('PUT Response:', body);
    });

    // 4. PATCH Request (Partial Update)
    test('PATCH - Partial Update User Field', async ({ request }) => {
        const response = await request.patch('https://reqres.in/api/users/2', {
            data: {
                job: 'SDET' // Only 1 Field Update
            }
        });

        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body.job).toBe('SDET');
        console.log('PATCH Response:', body);
    });

    // 5. DELETE Request (Remove User)
    test('DELETE - Delete User', async ({ request }) => {
        const response = await request.delete('https://reqres.in/api/users/2');

        expect(response.status()).toBe(204); // 204 No Content
        console.log('DELETE Status:', response.status());
    });

});