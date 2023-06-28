const logsValidator = (request, respone, next) => {
  if (
    request.body.hasOwnProperty("captainName") &&
    request.body.hasOwnProperty("title") &&
    request.body.hasOwnProperty("post") &&
    request.body.hasOwnProperty("mistakesWereMadeToday") &&
    request.body.hasOwnProperty("title") &&
    request.body.hasOwnProperty("post") &&
    request.body.hasOwnProperty("daysSinceLastCrisis")
  ) {
    next();
  } else {
    return response
      .status(404)
      .json({ error: "Log must contain a capitanName and title" });
  }
};

module.exports = { logsValidator };
