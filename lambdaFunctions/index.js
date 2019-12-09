exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};

// 'use strict';

// // console.log('Function Prep');
// // const doc = require('dynamodb-doc');
// const AWS = require('aws-sdk');
// AWS.config.update({region: 'us-west-2'});
// const dynamo = new AWS.DynamoDB();

// exports.handler = (event, context, callback) => {

//     const done = (err, res) => callback(null, {
//         statusCode: err ? '400' : '200',
//         body: err ? err.message : res,
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });
    
//     // const params = {
//     //   "httpMethod":"POST",
//     //   "body":{
//     //       "TableName":"UserNotes",
//     //       "Item":{"statusid":"123", "text":"My status"}
//     //   }
//     // }

//     switch (event.httpMethod) {
//         case 'DELETE':
//             dynamo.deleteItem(event.body, done);
//             break;
//         case 'HEAD':
//             dynamo.getItem(event.body, done);
//             break;
//         case 'GET':
//             if (event.queryStringParameters !== undefined) {
//                 dynamo.scan({ TableName: event.queryStringParameters.TableName }, done);
//             }
//             else {
//                 dynamo.getItem(event.body, done);
//             }
//             break;
//         case 'POST':
//             dynamo.putItem(event.body, done);
//             break;
//         case 'PUT':
//             dynamo.putItem(event.body, done);
//             break;
//         default:
//             done(new Error(`Unsupported method "${event.httpMethod}"`));
//     }
// };
