const jwtAuthorization = (request, response, next) => {
    const requestHeader = request.headers["authorization"];
    if (requestHeader === undefined) {
      response.status(401);
      response.send("Jwt Token is not defined");
    } else {
      let jwtToken = requestHeader.split(" ")[1];
      jwt.verify(jwtToken, process.env.JWT_SECRET , async (error, payload) => {
        if (error) {
          response.status(401);
          response.send("Invalid JWT Token");
        } else {
          request.username = payload.username;
          // request.user_id = payload.user_id;
          request.email = payload.email;
          console.log(payload);
          next();
        }
      });
    }
  };

module.exports = {jwtAuthorization}