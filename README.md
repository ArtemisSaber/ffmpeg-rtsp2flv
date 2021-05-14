# ffmpeg-rtsp2flv
This is a simple example of converting rtsp stream to rtmp and http flv using node media server and ffmpeg

## Requirements
Native ffmpeg, this can be checked by running ffmpeg -version in CLI

## Usage
Run media server `node media.js`  
Run ffmpeg convert script `node ffmpeg.js`

## For server use
Use pm2 to run those two scripts

## Configuration
To adjust ffmpeg configs edit `ffmpeg.js`  
To specify input/outputs edit `config.js` with corresponding inputs and outputs section
