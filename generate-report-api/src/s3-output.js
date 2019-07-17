const AWS = require('aws-sdk');
const uuidv4 = require('uuid/v4');

class S3Output {

  constructor (bucketName) {
    this._reportBuffer = '';
    this._bucketName = bucketName
  }

  append( str ) {
    this._reportBuffer = this._reportBuffer.concat(str);
  }

  async writeBufferToS3() {
    let s3 = new AWS.S3();

    console.log("Bucketname=" + this._bucketName);
    console.log("Before S3 putObject - report size=" + this._reportBuffer.length);
    const filename = uuidv4() + '.csv';

    const response = await s3.putObject({
      Bucket: this._bucketName,
      Key: filename,
      ContentType: 'text/csv',
      Body: Buffer.from(this._reportBuffer, 'ascii')
    }).promise();

    console.log("After S3 putObject");

    return filename;
  }

  async close() {
    const result = await this.writeBufferToS3();

    console.log("result=" + result);

    return result;
  }
}

module.exports = S3Output;