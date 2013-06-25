module.exports = function(options) {
  
  var AWS_KEY    = process.env.AWS_KEY || options.key,
      AWS_SECRET = process.env.AWS_SECRECT || options.secret,
      AWS_BUCKET = process.env.AWS_BUCKET || options.bucket,
      crypto     = require("crypto"),
      moment     = require("moment");

  var signature = function(policy) {
    return crypto.createHmac("sha1", AWS_SECRET).update(policy).digest("base64");
  };

  var policy = function() {

    var s3Policy = {
      expiration: moment.utc().add('years', 10).format('YYYY-MM-DDTHH:mm:ss\\Z'),
      conditions: [
        {
          bucket: AWS_BUCKET
        }, {
          acl: "public-read"
        },
        { success_action_status: '201' },
        ["starts-with", "$key", ""]
        //["starts-with", "$Content-Type", ""]
      ]
    };

    return new Buffer(JSON.stringify(s3Policy)).toString("base64");
  };

  var p = policy(),
      s = signature(p);

  return {
    signature: s,
    policy: p,
    key: AWS_KEY,
    bucket: AWS_BUCKET
  };
}
