# Hatkid Website Front End
This repository holds the front end for Hatkid's website. It shows whether or not HatKid is live and displays an image based on what he is streaming.

Due to the simplicity of this project, it does not utilize a front end framework, but it makes use of Parcel.js for bundling. Presently it is hosted on [surge](https://surge.sh), a CDN for static sites.

The project runs in tandem with a simple Express.js API, located [here](https://github.com/ryuyandev/twitch-api).

## Usage

1. Run `npm install` to install necessary packages
2. Run `npm run dev` to develop locally
3. Run `npm run build` to create dist files for deployment
4. Run `npm run deploy` to deploy to surge.sh