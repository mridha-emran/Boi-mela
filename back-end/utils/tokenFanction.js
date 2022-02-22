// Create Token and saving in cookie

const tokenFanction = (user, statusCode, res) => {
  const token = user.createToken();

  // options for cookie
  const options = {
    expires: new Date(
      Date.now() + 1 * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = tokenFanction;