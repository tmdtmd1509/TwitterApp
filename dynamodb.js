var AWS = require('aws-sdk')
​
AWS.config.update({
    region: 'us-west-2',
    endpoint: "http://dynamodb.us-westt-2.amazonaws.com"
})