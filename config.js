export let inputs = [
    'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov',
    'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov',
    'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov',
    'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov'
]

export let outputs = [
    'rtmp://127.0.0.1:8556/live/stream0',
    'rtmp://127.0.0.1:8556/live/stream1',
    'rtmp://127.0.0.1:8556/live/stream2',
    'rtmp://127.0.0.1:8556/live/stream3'
]

export let mediaServerConfig = {
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