const request = require("request")

const forecast = (long, lat, callback) => {
  const token = "e7608c71896a71e71a325360366bf630"
  const url = `https://api.darksky.net/forecast/${token}/${lat},${long}`
  request({ url, json: true }, (error, { body }) => {
    const { error: responseError } = body
    if (error) {
      callback("Unable to connect to weather service!", undefined)
    } else if (responseError) {
      console.log(responseError)
      callback("Unable to find location", undefined)
    } else {
      const {
        currently: { temperature, precipProbability },
      } = body
      callback(
        undefined,
        ` ${body.daily.data[0].summary} 
          It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain
        `
      )
    }
  })
}

module.exports = forecast
