import { Server } from 'node-osc';
import secondsToTimestamp from 'seconds-to-timestamp';
import fetch from 'node-fetch';


const oscPort = 6251 //Port used for receiving OSC messages from CasparCG
const companionIP = '192.168.1.130' //IP where Bitfocus Companion is running
const companionHTTPPort = 8888 //HTTP Port used by Bitfocus Companion
const companionPage = 1 //Page that data needs to be send to
const companionButton = 11 //Button where remaining time should be shown


var oscServer = new Server(oscPort, '0.0.0.0', () => {
  console.log('OSC Server is listening');
});


oscServer.on('bundle', function (bundle) {
  bundle.elements.forEach((element, i) => {
    if ((`${element}`).includes('time')){
        let str = `${element}`
        let arr = str.split(',')
        let time_elapsed = arr[1]
        let time_total = arr[2]
        let time_remaining = parseFloat(time_total).toFixed(0) - parseFloat(time_elapsed).toFixed(0)
        let time_formated = secondsToTimestamp(time_remaining)
        
        async function sendMessage(){
            const response = await fetch('http://' + companionIP + ':' + companionHTTPPort + '/style/bank/' + companionPage + '/' + companionButton + '/?text=' + `${time_formated}`);
        }
   
        sendMessage()
       

       

   
        
    }
  
  });
  
});