const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'eu-west-1' });

async function sendEmail(toAddress, filename) {

  var eParams = {
    Destination: {
        ToAddresses: [toAddress]
    },
    Message: {
        Body: {
            Text: {
                Data: "Hey! What is up?" + filename
            }
        },
        Subject: {
            Data: "Email Subject!!!"
        }
    },
    Source: "mr.jim@gmail.com"
  };

  console.log("sending email");

  const response = await ses.sendEmail(eParams);

  console.log(response);
}

module.exports = sendEmail;
