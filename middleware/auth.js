const jwtAuthorization = (request, response, next) => {
    const requestHeader = request.headers["authorization"];
    if (requestHeader === undefined) {
      response.status(401);
      response.send("Invalid JWT Token");
    } else {
      let jwtToken = requestHeader.split(" ")[1];
      jwt.verify(jwtToken, "Vaishnavi", async (error, payload) => {
        if (error) {
          response.status(401);
          response.send("Invalid JWT Token");
        } else {
          request.username = payload.username;
          request.user_id = payload.user_id;
          request.name = payload.name;
          console.log(payload);
          next();
        }
      });
    }
  };

module.exports = {jwtAuthorization}