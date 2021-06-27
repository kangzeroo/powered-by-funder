import React, { useEffect } from "react";

const buildWebWorkerFileSystemPath = (
  webWorkerRelativeRouteAfterBuild: string
): string => {
  //
  // note 1:
  // webWorkerRelativeRouteAfterBuild = "example.worker.js"
  // be aware that "webWorkerRelativeRouteAfterBuild" refers to the end location of the web-worker after running webpack
  // so while the web-worker may initially appear in `src/workers/*` before build, it ends up in the same directory level `dist/*` after build
  // its not ideal, but it works with the UMD script loading that we need
  //
  // note 2:
  // we have to use the urlEncodedSlash="%2F" because S3 & other file systems are flat and the / routing is just a name, not actual paths
  // thus they url encode "/"" into "%2F", so we also need to account for that
  // this is a gotcha because if we serve these files from an actual filesystem, then this buildWebWorkerFileSystemPath() function breaks as it uses real slashes
  // you must allow allow public read access to the web-worker file in S3/GCP, otherwise you'll need to attach the access token string in the url of the <script> import
  //
  console.log(window.location);
  const urlEncodedSlash = "%2F";
  const trimmedPath = window.location.pathname.split(urlEncodedSlash);
  const detrimmedPath = trimmedPath
    .slice(0, trimmedPath.length - 1)
    .join(urlEncodedSlash);
  const fullPath = `${window.location.origin}${detrimmedPath}%2F${webWorkerRelativeRouteAfterBuild}`;
  return fullPath;
};

const App = () => {
  useEffect(() => {
    (async () => {
      let url: string | URL;
      if (process.env.NODE_ENV === "production") {
        url = new URL(buildWebWorkerFileSystemPath("example.worker.js"));
        url = url.toString();
      } else {
        url = "./example.worker.js";
      }
      const worker = new Worker(url);
      worker.addEventListener("message", (event) => {
        console.log("main thread received: ", event.data);
      });
      worker.postMessage("ping from main thread");
    })();
  }, []);
  return <section>This is Powered by Funder</section>;
};

export default App;
