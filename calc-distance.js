var geolib = require('geolib')

module.exports = calcDistance

function calcDistance (coordinates, point, streetAddress, nearestKiosk) {
  var distance = 0
  distance = geolib.getDistance(coordinates, point, 1, 3)
  console.log(nearestKiosk)
  if (distance < nearestKiosk.prevDistance || nearestKiosk.prevDistance === null) {
    nearestKiosk.prevDistance = distance
    nearestKiosk.streetAddress = streetAddress
    return
  } else {
    return
  }
}
