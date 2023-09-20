self.addEventListener("install", (e) => {
  console.log("service wroker has been installed");
});

self.addEventListener("activate", (evt) => {
  console.log("service worker has been activated");
});

self.addEventListener("fetch", (evt) => {});
