import ffmpeg from 'fluent-ffmpeg'

import {inputs,outputs} from './config.js'

inputs.forEach((e,i)=>{
    ffmpeg().input(e).output(outputs[i]).addOptions([
        '-f flv',
        '-vcodec h264',
        '-acodec copy',
        '-s 960*540',
        '-preset fast'
    ]).on('start', (cmd) => {
        console.log('ffmpeg command: ', cmd)
    }).on('error', (err, stdout, stderr) => {
        console.log(`error instance: ffmpeg instace${i}`)
        console.log('error: ' + err.message)
        console.log('stdout: ' + stdout)
        console.log('stderr: ' + stderr)
    }).on('end', function () {
        console.log('完成 ')
    }).run()}
)

