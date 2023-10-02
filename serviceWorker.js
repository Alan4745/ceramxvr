const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/js/script.js",
  "/js/aframe_logic.js",
  "/assets/vr.png",
  "/assets/Start_prueba.png",
  "/assets/Start.png",
  "/assets/snow.png",
  "/assets/sky.png",
  "/assets/Settings.png",
  "/assets/retagulo.png",
  "/assets/rectangle_white.png",
  "/assets/Rain.png",
  "/assets/play.png",
  "/assets/pause.png",
  "/assets/menos.png",
  "/assets/mas.png",
  "/assets/logo_64x64.png",
  "/assets/logo.png",
  "/assets/Insects.png",
  "/assets/icon_logo.png",
  "/assets/icon_512x512.png",
  "/assets/icon_144x144.png",
  "/assets/glare.png",
  "/assets/fullscreen.png",
  "/assets/exit.png",
  "/assets/Debris.png",
  "/assets/ceramx.png",
  "/assets/bg.jpg",
  "/assets/BACK.png",
  "/assets/About.png",
  "/assets/videos/ceramx_window_treatment.mp4",
  "/assets/audios/Main_Menu.mp3",
  "/assets/audios/audios_backgroud_music/Debris_Scene_Background_Music.mp3",
  "/assets/audios/audios_backgroud_music/Glare_Scene_Background_Music.mp3",
  "/assets/audios/audios_backgroud_music/Insects_Scene_Background_Music.mp3",
  "/assets/audios/audios_backgroud_music/Rain_Scene_Background_Music.mp3",
  "/assets/audios/audios_backgroud_music/Snow_Scene_Background_Music.mp3",
  "/assets/audios/audios_voiceovers/Debris_Post.mp3",
  "/assets/audios/audios_voiceovers/Glare_Post.mp3",
  "/assets/audios/audios_voiceovers/Insects_Post.mp3",
  "/assets/audios/audios_voiceovers/Rain_Post.mp3",
  "/assets/audios/audios_voiceovers/Snow_Post.mp3",
  "/assets/images/about.png",
  "/assets/images/cargador.png",
  "/assets/images/exit.png",
  "/assets/images/logo.png",
  "/assets/images/settings.png",
  "/assets/images/test3.png",
  "/assets/share_safari.png",
  "/assets/encode/encode_debris/debris.m3u8",
  "/assets/encode/encode_snow/snow.m3u8",
  "/assets/encode/encode_glare/glare.m3u8",
  "/assets/encode/encode_insects/insects.m3u8",
  "/assets/encode/encode_rain/rain.m3u8",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
