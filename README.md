# CasparCG remaining time on StreamDeck Button Bitfocus Companion
Just a quick NodeJS script that can display the time remaining of the playing clip of CasparCG on a StreamDeck Button. More made as a proof of concept than to actualy use in production (although feel free to try it).

## Installation

Clone this repository, make sure NodeJS is installed (tested on V14.6.1) and install the dependencies with `npm install`

## Setup

Change the values to the desired one in the `index.js`

```
const oscPort = 6251                //Port used for receiving OSC messages from CasparCG
const companionIP = '192.168.1.130' //IP where Bitfocus Companion is running
const companionHTTPPort = 8888      //HTTP Port used by Bitfocus Companion
const companionPage = 1             //Page that data needs to be send to
const companionButton = 11          //Button where remaining time should be shown
```

Within the CasparCG configuration file make sure to add an OSC client with the port set in the `index.js` and set the `<address>` to the IP where the script is running. 
```
<osc>
    <predefined-clients>
      <predefined-client>
        <address>192.168.1.130</address>
        <port>6251</port>
      </predefined-client>
    </predefined-clients>
  </osc>
```

In Bitfocus Companion set the button that you are sending to as regular button and format the text to your desire (font size 14pt seems to work best).

## Starting script

After everything is setup you can start the script with `npm start`



