function getJWT() {
    return localStorage.getItem('jwt');
}

function fetchWithAuth(url, options = {}) {
    const jwt = getJWT();
    const headers = new Headers(options.headers || {});

    if (jwt) {
        headers.append('Authorization', `Bearer ${jwt}`);
    }

    // return fetch(url, Object.assign({}, options, { headers: headers }));
    return fetch(url, { ...options, headers: headers });
    // return fetch(url, { ...options, headers });
}

// // 使用自定义的fetchWithAuth函数
// fetchWithAuth('https://yourapi.com/protected/resource')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));
