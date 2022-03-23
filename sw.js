self.addEventListener("install", function(e){
    console.log("Service Worker - Installing", e);
});

self.addEventListener("active", function (e){
    console.log("Service Worker - Activation", e);
});

self.addEventListener("fetch", function (e){
    console.log("Service Worker - Fetching something", e);
});