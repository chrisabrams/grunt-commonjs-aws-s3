grunt-commonjs-aws-s3
=====================

Grunt module that generates Amazon Web Service policy and signature for S3 into a CommonJS module.

## Getting Started

    npm install grunt-commonjs-aws-s3

Declare where the generated file will be going:

    's3-generate': {
      options: {
        destination: '/lib/s3.js'
      }
    }

Then either add the following to your environment variables or in Grunt:

Environment variables:

- AWS_KEY
- AWS_SECRET
- AWS_BUCKET

Extra grunt options if not using environment variables: 

    's3-generate': {
      options: {
        key: '',
        secret: '',
        bucket: ''
      }
    }

## Other information
This module is intended as an example; there are some settings that might need to be changed (so please fork this project). By default this module saves an object into a bucket for 10 years.
