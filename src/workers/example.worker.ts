export default {};
addEventListener("message", (event) =>
  console.log("Worker received:", event.data)
);
postMessage("ping from webworker");
