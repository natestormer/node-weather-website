const request = require("request")

const geocode = (address, callback) => {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoibnN0b3JtZXIiLCJhIjoiY2syeG54bWxwMDJnMTNjcnduOXVrcTEzdSJ9.2n8Dmd8daswUjh88YIocrA"
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${MAPBOX_TOKEN}&limit=1`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined)
    } else if (body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined)
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      })
    }
  })
}

module.exports = geocode
