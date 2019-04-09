const path = require('path')
const fs = require('fs')

const streamers = fs.readFileSync(path.join(__dirname, 'Twitch Streamers.txt'), { encoding: 'utf-8' }).split('\r\n')

let file = `! Title: TwitchThot Cosmetic Filter\n! Homepage: https://github.com/KararTY/twitchthot-filter\n! Last modified: ${new Date().toUTCString()}\n! Expires: 7 days\n`

// REGEXP instead?
file += streamers.map(name => `static-cdn.jtvnw.net/previews-ttv/live_user_${name.toLowerCase()}-*x*.*$image,third-party\ntwitch.tv##img[alt="${name}"]`).join('\n')

fs.writeFileSync(path.join(__dirname, 'output', 'filters.txt'), file)

console.log('Done.')
