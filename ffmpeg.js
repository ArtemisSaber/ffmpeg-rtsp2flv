import ffmpeg from 'fluent-ffmpeg'

import {inputs,outputs} from './config.js'

let inputCount = inputs.length
let outputCount = outputs.length

let executionCount = Math.min(inputCount,outputCount)

for(let i =0;i<executionCount;i++){
    ffmpeg().input(inputs[i]).output(outputs[i]).addOptions([
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
    }).run()
}

