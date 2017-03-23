'use strict'
const television = {
  type: 'plasma',
  resolution: '180px',
  power: '700 watts',
  powerButton: 'on',
  volume: 0,
  channel: 1,
  // Turn the power on and off
  powerSwitch: function () {
    // television.powerButton = !television.powerButton
    if (television.powerButton === 'on') {
      television.powerButton = 'off'
    } else {
      television.powerButton = 'on'
    }
  },
  // Increase or decrease the volume
  volumeUp: function () {
    television.volume += 1
    return television.volume
  },
  volumeDown: function () {
    if (television.volume > 0) {
      television.volume -= 1
      return television.volume
    } else {
      return 'muted'
    }
  },
  // goToChannel: function (input) {
  //   television.channel = input
  // },
  channelUp: function () {
    television.channel += 1
    return television.channel
  },
  channelDown: function () {
    television.channel -= 1
    return television.channel
  }
}

// module.exports = {
//   sync: (value) => value,
//   async: (value, cb) => setTimeout(() => cb(null, value), 0),
//   promise: (value) => Promise.resolve(value)
// }
