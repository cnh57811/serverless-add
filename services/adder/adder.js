const isRequestValid = require('./validator')

exports.add = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2))
    const value1 = Number(event.pathParameters.value1)
    const value2 = Number(event.pathParameters.value2)
    const validString = isRequestValid(value1, value2);

    // fail
    if (validString != null) {
        return {
            statusCode: 400,
            body: JSON.stringify(validString)
        }
    }

    // success
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                value1: value1,
                value2: value2,
                sum: value1 + value2
            })
    };
};
