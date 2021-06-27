# Powered by Funder Badge

An embeddable widget for websites to advertise they are crowdfunding. Collects marketing data and funnels traffic towards the company's angel fundraising page.

### Awesome Features
- ✅  Simple `<script async>` tag embed onto websites
- ✅  Universal compatibility on all websites thanks to `UMD+AMD build`
- ✅  Typescript for reliable production builds & self-documentation
- ✅  Pre-configured VSCode tooling for amazing developer experience
- ✅  ReactJS for modern delightful UI/UX

### Coming Soon
- ✨  Non-intrusive & high performance thanks to `web workers`. Barely touches the main JS thread.
- ✨  Low package size with `webpack tree-shaking`
- ✨  Integration with Google Analytics & Segment.io
- ✨  Customizeable triggers & display
- ✨  API versioning

### Roadmap
- 🎖  Installable `npm` module for server side rendering
- 🎖  Bypass most adblockers with `custom domains` & `server side rendering`
- 🎖  Compatible with `FLoC` (Federated Learning of Cohorts, Google's upcoming replacement for cookies)

## Setup

### Development

To run in watch mode for development, three separate terminal commands are required. This is to avoid the hassle of killing processes using `kill <PID>` since running all 3 commands in the same `npm script` would require running them in the background.

```
$ npm run dev-tsc
$ npm run dev-webpack
$ npm run dev-express
```

The build process is comprised of 2 steps. The first is compiling typescript down to ES5 Javascript in syncronously loaded CommonJS. The second step is compiling the CommonJS into asyncronously loaded UMD for embedding as a `<script>` tag onto websites as a widget.

### Production
1. `$ npm run build`
2. Upload `dist/funder.js` to any file system, such as AWS S3 or GCP Storage
3. Copy the script file link into the `<script>` tag of the target web page