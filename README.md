# Powered by Funder Badge

An embeddable widget for websites to advertise they are crowdfunding. Collects marketing data and funnels traffic towards the company's angel fundraising page.

### Awesome Features
- ✅  Simple `<script async>` tag embed onto websites
- ✅  Universal compatibility on all websites thanks to `UMD+AMD build`
- ✅  Typescript for reliable production builds & self-documentation
- ✅  Pre-configured VSCode tooling for amazing developer experience
- ✅  ReactJS for modern delightful UI/UX

### Coming Soon
- ✨  Low package size with `webpack tree-shaking`
- ✨  Integration with Google Analytics & Segment.io
- ✨  Customizeable triggers & display
- ✨  API versioning

### Roadmap
- 🎖  Installable `npm` module for server side rendering
- 🎖  Bypass most adblockers with `custom domains` & `server side rendering`
- 🎖  Compatible with `FLoC` (Federated Learning of Cohorts, Google's upcoming replacement for cookies)

### Nevermind
- ✨ <s>Non-intrusive & high performance thanks to `web workers`. Barely touches the main JS thread.</s> nevermind, the juice ain't worth the squeeze due to XSS security protections. [See closed PR.](https://github.com/kangzeroo/powered-by-funder/pull/1#issue-678462557)

## Setup

### Development

To run in watch mode for development, three separate terminal commands are required. This is to avoid the hassle of killing processes using `kill <PID>` since running all 3 commands in the same `npm script` would require running them in the background.

```
$ npm run dev-1
$ npm run dev-2
$ npm run dev-3
```

The build process is comprised of 2 steps + 1 for development.
1. The first step runs `tsc` which compiles typescript down to ES5 Javascript in asyncronously loaded AMD.
2. The second step runs `webpack` which compiles the AMD into UMD so that it works on all browsers.
3. The third step runs `express` which serves an HTML page at `localhost:8888` for us to see live changes to the widget as we code.

### Production
0. Make sure all your dev terminal processes have been paused
1. `$ npm run build`
2. Upload `dist/funder.js` to any file system, such as AWS S3 or GCP Storage
3. Copy the script file link into the `<script>` tag of the target web page

To see what production looks like, you can use `demo/remote.html`. Simply open the html file in your browser. Be sure to update the `<script>` tag src to point to your uploaded prod script.


## Fixes Required

1. `$ npm run dev-3` does not hot-reload the local page when changes are made. Add [liveroad package](https://dev.to/rajeshroyal/how-to-live-reload-node-js-server-along-with-hot-reloading-2im0)
2. Fix absolute imports so that we don't have to have weird `../../relativeImports`