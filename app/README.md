# WebXR Proof of Concept 

Application in JavaScript to run an WebXR environment and session with Augmented Reality (AR), using WebXR, Three.js and WebGL tools.

## Installation

To install the current version of the project, clone this repository, and inside the directory '/app' execute the command:

```
npm install
```

## Usage

Once the requirements and dependencies are installed, run the following command inside the directory '/app':
```
npx vite
```

- This command will output in the terminal an URL like http://localhost:5173. 
- Open that URL to see your web application running WebXR in an augmented reality session.


### WebXR API usage on mobile iOS 

Currently, Apple has not yet finished introducing the WebXR API into Safari.
So it is necessary to download the WebXR Viewer app, which works as an alternative browser.

- Go to the Apple Store
- Download WebXR Viewer
- Go to the [Application Page](http://localhost:5173/)
- Click on "Start AR"
- Allow camera usage and check the AR experience



### WebXR API usage on mobile Android

- Access the Chrome browser
- Go to the [Application Page](http://localhost:5173/)
- Click on "Start AR"
- Allow camera usage and check the AR experience


### WebXR API usage on desktop


- Access Chrome or Firefox browser
- Install the WebXR API Emulator extension
- [Extension for Chrome](https://chrome.google.com/webstore/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje/related?hl=en)
- [Extension for Firefox](https://addons.mozilla.org/en-US/firefox/addon/webxr-api-emulator/)
- Enable WebXR API Emulator extension
- Go to the [Application Page](http://localhost:5173/)
- If it shows a message "AR not supported:
    - Go to the Developer Tools
    - Click on WebXR in the extended menu
    - Click the dropdown menu and select Samsung Galaxy S8+ (AR)
    - Reload page
- Click on "Start AR"
- Check the AR experience