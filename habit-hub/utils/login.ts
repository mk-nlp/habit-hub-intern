const axios = require('axios').default;

export async function LoginUser (email: string, password: string) {
    const requestBody = {
        email: email,
        password: password
    }

    axios.post('/api/login', requestBody, {
        headers: {
            'Content-Type': 'application/json',
            origin: 'http://localhost:3000',
            host: 'http://localhost:3000'
        }
    
    })
        .then((response: any) => {
           
        })
        .catch((error:any) => {
            
        });
}

