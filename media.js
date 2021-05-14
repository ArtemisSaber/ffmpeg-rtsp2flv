import NodeMediaServer from 'node-media-server'
import {mediaServerConfig} from './config.js'
const config = mediaServerConfig

var nms = new NodeMediaServer(config)

nms.run()
