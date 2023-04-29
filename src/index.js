const { app } = require('@azure/functions');

app.http('httpTrigger1', {
    methods: ['POST', 'GET'],
    handler: async (request, context) => {
        context.log('Http function was triggered.');
        const body = 'Azure Functions with Javascript'
        return { body };
    }
});
