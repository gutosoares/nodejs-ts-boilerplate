export const unlessPath = {
  path: [
    { url: '/api/v1/login', methods: ['POST'] },
    { url: '/api/v1/realties', methods: ['GET', 'POST', 'PATCH', 'DELETE'] },
    { url: '/api/v1/realties/update', methods: ['PATCH'] },
    { url: '/doc', methods: ['GET'] },
    { url: '/app', methods: ['GET', 'POST', 'PATCH', 'DELETE'] },
  ],
};
