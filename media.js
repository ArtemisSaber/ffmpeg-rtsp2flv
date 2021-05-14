const NodeMediaServer = require('node-media-server');
const config = {
    rtmp: {
        port: 8556,
        chunk_size:60000,
        gop_cache: true,
        ping: 60,
        ping_timeout: 120
    },
    http: {
        port:8082,
        allow_origin: '*'
    }
}

var nms = new NodeMediaServer(config)

nms.run()
