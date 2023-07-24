<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/png" href="/assets/ceramx.png" />
    <title>Ceramxvr</title>
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
    <script src="https://unpkg.com/aframe-event-set-component@^4.0.0/dist/aframe-event-set-component.min.js"></script>
    <link rel="stylesheet" href="style/style.css" />

    <script>
      AFRAME.registerComponent("event-snow", {
        init: function () {
          var scene1 = document.querySelector("#scene1");
          var scene2 = document.querySelector("#scene2");
          var camera1 = document.querySelector("#camera1");
          var video = document.querySelector("#testVideo");
          var hover2 = document.querySelector("#hover2");
          var menuPause = document.querySelector("#menuPause");
          var butonPaused = document.querySelector("#butonPaused");
          var cursor1 = document.querySelector("#cursor1");
          var ascene = document.querySelector("#ascene");
          var notificacion = document.querySelector("#notificacion");

          // var camerarotation = document.querySelector('#camerarotation')
          var audioMainMenu = document.querySelector("#audioMainMenu");

          var audioMainMenu = document.querySelector("#audioMainMenu");
          var audioBackgroud = document.querySelector("#audioBackgroud");
          var audioVoicer = document.querySelector("#audioVoicer");
          var controls =
            document.querySelector("a-camera").components["look-controls"];

          var el = this.el;
          el.addEventListener("click", function () {
            let controls =
              document.querySelector("a-camera").components["look-controls"];
            controls.pitchObject.rotation.x = 0;
            controls.yawObject.rotation.y = 0;

            var audioBackgroud1 = localStorage.getItem("audioBackgroud");
            var audioVoicer1 = localStorage.getItem("audioVoicer");
            var videoAudio1 = localStorage.getItem("videoAudio");

            audioMainMenu.pause();
            scene1.setAttribute("visible", "false");
            scene1.setAttribute("position", "0 15 0");
            scene2.setAttribute("rotation", "0 0 0");
            scene2.setAttribute("visible", "true");
            camera1.setAttribute("fov", "80");
            menuPause.setAttribute("position", "0 25 0");
            butonPaused.setAttribute("position", "0 -3 0");

            audioBackgroud.src =
              "./assets/audios/audios_backgroud_music/Snow_Scene_Background_Music.mp3";
            audioBackgroud.volume = 0 / 100;
            audioVoicer.src = "./assets/audios/audios_voiceovers/Snow_Post.mp3";
            audioVoicer.volume = 0 / 100;
            video.src = "./assets/videos/snow.mp4";
            video.volume = 50 / 100;
            video.play();
            audioBackgroud.play();
            audioVoicer.play();
          });
          el.addEventListener("mouseenter", function () {
            el.setAttribute("opacity", "0.25");
            // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 720; dur: 1500")
            cursor1.setAttribute("material", "color: #0061AF");
            console.log(ascene.getAttribute("cursor"));

            console.log(cursor1.getAttribute("visible"));
            if (cursor1.getAttribute("visible") == true) {
              notificacion.setAttribute("visible", "true");
            }
          });
          el.addEventListener("mouseleave", function () {
            el.setAttribute("opacity", "0");
            cursor1.setAttribute("material", "color: white");

            console.log(cursor1.getAttribute("visible"));
            if (cursor1.getAttribute("visible") == true) {
              notificacion.setAttribute("visible", "false");
            }

            // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 0; dur: 150")
          });
        },
      });

      AFRAME.registerComponent("event-debris", {
        init: function () {
          var scene1 = document.querySelector("#scene1");
          var scene2 = document.querySelector("#scene2");
          var video = document.querySelector("#testVideo");
          var camera1 = document.querySelector("#camera1");
          var hover1 = document.querySelector("#hover1");
          var menuPause = document.querySelector("#menuPause");
          var cursor1 = document.querySelector("#cursor1");
          var notificacion = document.querySelector("#notificacion");

          var butonPaused = document.querySelector("#butonPaused");
          // var camerarotation = document.querySelector('#camerarotation')

          var audioMainMenu = document.querySelector("#audioMainMenu");
          var audioBackgroud = document.querySelector("#audioBackgroud");
          var audioVoicer = document.querySelector("#audioVoicer");
          var el = this.el;
          el.addEventListener("click", function () {
            let controls =
              document.querySelector("a-camera").components["look-controls"];
            controls.pitchObject.rotation.x = 0;
            controls.yawObject.rotation.y = 0;

            var audioBackgroud1 = localStorage.getItem("audioBackgroud");
            var audioVoicer1 = localStorage.getItem("audioVoicer");
            var videoAudio1 = localStorage.getItem("videoAudio");

            scene1.setAttribute("visible", "false");
            scene1.setAttribute("position", "0 15 0");
            scene2.setAttribute("rotation", "0 0 0");
            scene2.setAttribute("visible", "true");
            camera1.setAttribute("fov", "80");
            menuPause.setAttribute("position", "0 25 0");
            butonPaused.setAttribute("position", "0 -3 0");
            audioMainMenu.pause();

            audioBackgroud.src =
              "./assets/audios/audios_backgroud_music/Debris_Scene_Background_Music.mp3";
            audioBackgroud.volume = 0 / 100;
            audioVoicer.src =
              "./assets/audios/audios_voiceovers/Debris_Post.mp3";
            audioVoicer.volume = 0 / 100;
            video.src = "./assets/videos/debris.mp4";
            video.volume = 50 / 100;
            video.play();
            audioBackgroud.play();
            audioVoicer.play();
          });
          el.addEventListener("mouseenter", function () {
            el.setAttribute("opacity", "0.25");
            // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 720; dur: 1500")
            cursor1.setAttribute("material", "color: #0061AF");
            console.log(ascene.getAttribute("cursor"));

            console.log(cursor1.getAttribute("visible"));
            if (cursor1.getAttribute("visible") == true) {
              notificacion.setAttribute("visible", "true");
            }
          });
          el.addEventListener("mouseleave", function () {
            el.setAttribute("opacity", "0");
            cursor1.setAttribute("material", "color: white");

            console.log(cursor1.getAttribute("visible"));
            if (cursor1.getAttribute("visible") == true) {
              notificacion.setAttribute("visible", "false");
            }

            // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 0; dur: 150")
          });
        },
      });

      AFRAME.registerComponent("event-rain", {
        init: function () {
          var scene1 = document.querySelector("#scene1");
          var scene2 = document.querySelector("#scene2");
          var video = document.querySelector("#testVideo");
          var camera1 = document.querySelector("#camera1");
          var hover3 = document.querySelector("#hover3");
          var menuPause = document.querySelector("#menuPause");
          // var cursor1 = document.querySelector('#cursor1');
          var butonPaused = document.querySelector("#butonPaused");
          // var camerarotation = document.querySelector('#camerarotation')
          var cursor1 = document.querySelector("#cursor1");
          var notificacion = document.querySelector("#notificacion");

          var audioMainMenu = document.querySelector("#audioMainMenu");
          var audioBackgroud = document.querySelector("#audioBackgroud");
          var audioVoicer = document.querySelector("#audioVoicer");

          var el = this.el;
          el.addEventListener("click", function () {
            let controls =
              document.querySelector("a-camera").components["look-controls"];
            controls.pitchObject.rotation.x = 0;
            controls.yawObject.rotation.y = 0;

            var audioBackgroud1 = localStorage.getItem("audioBackgroud");
            var audioVoicer1 = localStorage.getItem("audioVoicer");
            var videoAudio1 = localStorage.getItem("videoAudio");

            scene1.setAttribute("visible", "false");
            scene1.setAttribute("position", "0 15 0");
            scene2.setAttribute("rotation", "0 0 0");
            scene2.setAttribute("visible", "true");
            camera1.setAttribute("fov", "80");
            menuPause.setAttribute("position", "0 25 0");
            butonPaused.setAttribute("position", "0 -3 0");
            audioMainMenu.pause();

            audioBackgroud.src =
              "./assets/audios/audios_backgroud_music/Rain_Scene_Background_Music.mp3";
            audioBackgroud.volume = 0 / 100;
            audioVoicer.src = "./assets/audios/audios_voiceovers/Rain_Post.mp3";
            audioVoicer.volume = 0 / 100;
            video.src = "./assets/videos/rain.mp4";
            video.volume = 50 / 100;
            video.play();
            audioBackgroud.play();
            audioVoicer.play();
          });
          el.addEventListener("mouseenter", function () {
            el.setAttribute("opacity", "0.25");
            // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 720; dur: 1500")
            cursor1.setAttribute("material", "color: #0061AF");
            console.log(ascene.getAttribute("cursor"));

            console.log(cursor1.getAttribute("visible"));
            if (cursor1.getAttribute("visible") == true) {
              notificacion.setAttribute("visible", "true");
            }
          });
          el.addEventListener("mouseleave", function () {
            el.setAttribute("opacity", "0");
            cursor1.setAttribute("material", "color: white");

            console.log(cursor1.getAttribute("visible"));
            if (cursor1.getAttribute("visible") == true) {
              notificacion.setAttribute("visible", "false");
            }

            // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 0; dur: 150")
          });
        },
      });

      AFRAME.registerComponent("event-insects", {
        init: function () {
          var scene1 = document.querySelector("#scene1");
          var scene2 = document.querySelector("#scene2");
          var video = document.querySelector("#testVideo");
          var camera1 = document.querySelector("#camera1");
          var hover4 = document.querySelector("#hover4");
          var menuPause = document.querySelector("#menuPause");
          // var cursor1 = document.querySelector('#cursor1');
          var cursor1 = document.querySelector("#cursor1");
          var notificacion = document.querySelector("#notificacion");

          var butonPaused = document.querySelector("#butonPaused");
          // var camerarotation = document.querySelector('#camerarotation')
          var eventabout1 = document.querySelector("#eventabout1");

          var audioMainMenu = document.querySelector("#audioMainMenu");
          var audioBackgroud = document.querySelector("#audioBackgroud");
          var audioVoicer = document.querySelector("#audioVoicer");
          var el = this.el;

          el.addEventListener("click", function () {
            let controls =
              document.querySelector("a-camera").components["look-controls"];
            controls.pitchObject.rotation.x = 0;
            controls.yawObject.rotation.y = 0;

            var audioBackgroud1 = localStorage.getItem("audioBackgroud");
            var audioVoicer1 = localStorage.getItem("audioVoicer");
            var videoAudio1 = localStorage.getItem("videoAudio");

            audioMainMenu.pause();
            scene1.setAttribute("visible", "false");
            // scene1.setAttribute('rotation', "0 100 0")
            scene1.setAttribute("visible", "false");
            scene1.setAttribute("position", "0 15 0");
            scene2.setAttribute("rotation", "0 0 0");
            scene2.setAttribute("visible", "true");
            camera1.setAttribute("fov", "80");
            menuPause.setAttribute("position", "0 25 0");
            butonPaused.setAttribute("position", "0 -3 0");
            audioBackgroud.src =
              "./assets/audios/audios_backgroud_music/Insects_Scene_Background_Music.mp3";
            audioBackgroud.volume = 0 / 100;
            audioVoicer.src =
              "./assets/audios/audios_voiceovers/Insects_Post.mp3";
            audioVoicer.volume = 0 / 100;
            video.src = "./assets/videos/insects.mp4";
            video.volume = 50 / 100;
            video.play();
            audioBackgroud.play();
            audioVoicer.play();
          });
          el.addEventListener("mouseenter", function () {
            el.setAttribute("opacity", "0.25");
            // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 720; dur: 1500")
            cursor1.setAttribute("material", "color: #0061AF");
            console.log(ascene.getAttribute("cursor"));

            console.log(cursor1.getAttribute("visible"));
            if (cursor1.getAttribute("visible") == true) {
              notificacion.setAttribute("visible", "true");
            }
          });
          el.addEventListener("mouseleave", function () {
            el.setAttribute("opacity", "0");
            cursor1.setAttribute("material", "color: white");

            console.log(cursor1.getAttribute("visible"));
            if (cursor1.getAttribute("visible") == true) {
              notificacion.setAttribute("visible", "false");
            }

            // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 0; dur: 150")
          });
        },
      });

      AFRAME.registerComponent("event-glare", {
        init: function () {
          var mainMenu = document.querySelector("#mainMenu");
          var scene1 = document.querySelector("#scene1");
          var scene2 = document.querySelector("#scene2");
          var video = document.querySelector("#testVideo");
          var camera1 = document.querySelector("#camera1");
          var hover4 = document.querySelector("#hover4");
          var menuPause = document.querySelector("#menuPause");
          var cursor1 = document.querySelector("#cursor1");
          var notificacion = document.querySelector("#notificacion");

          var butonPaused = document.querySelector("#butonPaused");
          // var camerarotation = document.querySelector('#camerarotation')
          var eventabout1 = document.querySelector("#eventabout1");

          var el = this.el;
          el.addEventListener("click", function () {
            let controls =
              document.querySelector("a-camera").components["look-controls"];
            controls.pitchObject.rotation.x = 0;
            controls.yawObject.rotation.y = 0;

            var audioBackgroud1 = localStorage.getItem("audioBackgroud");
            var audioVoicer1 = localStorage.getItem("audioVoicer");
            var videoAudio1 = localStorage.getItem("videoAudio");

            audioMainMenu.pause();
            scene1.setAttribute("visible", "false");
            // scene1.setAttribute('rotation', "0 100 0")
            scene1.setAttribute("visible", "false");
            scene1.setAttribute("position", "0 15 0");
            scene2.setAttribute("rotation", "0 0 0");
            scene2.setAttribute("visible", "true");
            camera1.setAttribute("fov", "80");
            menuPause.setAttribute("position", "0 25 0");
            butonPaused.setAttribute("position", "0 -3 0");
            audioBackgroud.src =
              "./assets/audios/audios_backgroud_music/Glare_Scene_Background_Music.mp3";
            audioBackgroud.volume = 0 / 100;
            audioVoicer.src =
              "./assets/audios/audios_voiceovers/Glare_Post.mp3";
            audioVoicer.volume = 0 / 100;
            video.src = "./assets/videos/glare.mp4";
            video.volume = 50 / 100;
            video.play();
            audioBackgroud.play();
            audioVoicer.play();
          });
          el.addEventListener("mouseenter", function () {
            el.setAttribute("opacity", "0.25");
            // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 720; dur: 1500")
            cursor1.setAttribute("material", "color: #0061AF");
            console.log(ascene.getAttribute("cursor"));

            console.log(cursor1.getAttribute("visible"));
            if (cursor1.getAttribute("visible") == true) {
              notificacion.setAttribute("visible", "true");
            }
          });
          el.addEventListener("mouseleave", function () {
            el.setAttribute("opacity", "0");
            cursor1.setAttribute("material", "color: white");

            console.log(cursor1.getAttribute("visible"));
            if (cursor1.getAttribute("visible") == true) {
              notificacion.setAttribute("visible", "false");
            }

            // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 0; dur: 150")
          });
        },
      });

      AFRAME.registerComponent("event-pause", {
        init: function () {
          var scene1 = document.querySelector("#scene1");
          var scene2 = document.querySelector("#scene2");
          var video = document.querySelector("#testVideo");
          var camera1 = document.querySelector("#camera1");
          var menuPause = document.querySelector("#menuPause");
          var video1 = document.querySelector("#video1");
          // var cursor1 = document.querySelector('#cursor1');
          var cursor1 = document.querySelector("#cursor1");

          var audioBackgroud = document.querySelector("#audioBackgroud");
          var audioVoicer = document.querySelector("#audioVoicer");

          var el = this.el;
          el.addEventListener("click", function () {
            menuPause.setAttribute("visible", "true");
            video1.setAttribute("color", "#1A5DA9");
            menuPause.setAttribute("position", "0 0 0");
            audioBackgroud.pause();
            audioVoicer.pause();
            video.pause();
          });
          el.addEventListener("mouseenter", function () {
            console.log("lo estamos viendo");
            cursor1.setAttribute("material", "color: #0061AF");

            // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 720; dur: 1500")
          });
          el.addEventListener("mouseleave", function () {
            console.log("dejamos de verlo");
            cursor1.setAttribute("material", "color: white");

            // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 0; dur: 500")
          });
        },
      });

      AFRAME.registerComponent("event-continue", {
        init: function () {
          var scene1 = document.querySelector("#scene1");
          var scene2 = document.querySelector("#scene2");
          var video = document.querySelector("#testVideo");
          var camera1 = document.querySelector("#camera1");
          var menuPause = document.querySelector("#menuPause");
          var video1 = document.querySelector("#video1");
          // var cursor1 = document.querySelector('#cursor1');
          var cursor1 = document.querySelector("#cursor1");

          var butonPaused = document.querySelector("#butonPaused");
          var butonContinue = document.querySelector("#butonContinue");
          var buttonQuit = document.querySelector("#buttonQuit");
          // var camerarotation = document.querySelector('#camerarotation')
          var audioBackgroud = document.querySelector("#audioBackgroud");
          var audioVoicer = document.querySelector("#audioVoicer");

          var el = this.el;
          el.addEventListener("click", function () {
            menuPause.setAttribute("visible", "false");
            menuPause.setAttribute("position", "0 25 0");
            video1.setAttribute("color", "");
            butonPaused.setAttribute("position", "0 -3 0");
            audioBackgroud.play();
            audioVoicer.play();
            video.play();
          });
          el.addEventListener("mouseenter", function () {
            console.log("lo estamos viendo");
            // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 720; dur: 1500")
            butonContinue.setAttribute("opacity", "1.5");
            cursor1.setAttribute("material", "color: #0061AF");
          });
          el.addEventListener("mouseleave", function () {
            console.log("dejamos de verlo");
            // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 0; dur: 500")
            butonContinue.setAttribute("opacity", "0.5");
            cursor1.setAttribute("material", "color: white");
          });
        },
      });

      AFRAME.registerComponent("event-quit", {
        init: function () {
          var scene1 = document.querySelector("#scene1");
          var scene2 = document.querySelector("#scene2");
          var video = document.querySelector("#testVideo");
          var camera1 = document.querySelector("#camera1");
          var menuPause = document.querySelector("#menuPause");
          var video1 = document.querySelector("#video1");
          // var cursor1 = document.querySelector('#cursor1');
          var cursor1 = document.querySelector("#cursor1");

          var butonPaused = document.querySelector("#butonPaused");
          var buttonQuit = document.querySelector("#buttonQuit");
          var audioMainMenu = document.querySelector("#audioMainMenu");

          var el = this.el;
          el.addEventListener("click", function () {
            video.pause();
            menuPause.setAttribute("visible", "false");
            menuPause.setAttribute("position", "0 25 0");
            scene1.setAttribute("visible", "true");
            scene1.setAttribute("position", "0 0 0");
            video1.setAttribute("color", "");
            scene2.setAttribute("visible", "false");
            camera1.setAttribute("fov", "50");
            butonPaused.setAttribute("position", "0 25 0");
            // camerarotation.setAttribute('rotation', '0 0 0')
            audioMainMenu.src = "./assets/audios/Main_Menu.mp3";
            audioMainMenu.play();
          });
          el.addEventListener("mouseenter", function () {
            // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 720; dur: 1500")
            buttonQuit.setAttribute("opacity", "1.5");
            cursor1.setAttribute("material", "color: #0061AF");
          });
          el.addEventListener("mouseleave", function () {
            // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 0; dur: 1500")
            buttonQuit.setAttribute("opacity", "0.5");
            cursor1.setAttribute("material", "color: white");
          });
        },
      });

      AFRAME.registerComponent("event-about", {
        init: function () {
          var mainMenu = document.querySelector("#mainMenu");
          var aboutVideo = document.querySelector("#aboutVideo");
          var miVideo = document.querySelector("#videoabout");
          var cursor1 = document.querySelector("#cursor1");
          var notificacion = document.querySelector("#notificacion");

          var el = this.el;
          el.addEventListener("click", function () {
            mainMenu.setAttribute("position", "0 25 0");
            mainMenu.setAttribute("visible", "false");
            aboutVideo.setAttribute("visible", "true");
            aboutVideo.setAttribute("position", "0 0 -2");
            miVideo.pause();
            miVideo.currentTime = 0;
            console.log(el);
          });
          el.addEventListener("mouseenter", function () {
            el.setAttribute("opacity", "0.25");
            // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 720; dur: 1500")
            cursor1.setAttribute("material", "color: #0061AF");
            console.log(ascene.getAttribute("cursor"));

            console.log(cursor1.getAttribute("visible"));
            if (cursor1.getAttribute("visible") == true) {
              notificacion.setAttribute("visible", "true");
            }
          });
          el.addEventListener("mouseleave", function () {
            el.setAttribute("opacity", "0");
            cursor1.setAttribute("material", "color: white");

            console.log(cursor1.getAttribute("visible"));
            if (cursor1.getAttribute("visible") == true) {
              notificacion.setAttribute("visible", "false");
            }

            // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 0; dur: 150")
          });
        },
      });

      AFRAME.registerComponent("video-ended", {
        init: function () {
          var el = this.el;
          var miVideo = document.querySelector("#videoabout");
          var videoPause = true;
          var audioMainMenu = document.querySelector("#audioMainMenu");
          var playPause = document.querySelector("#playPause");

          // el.addEventListener("click", function () {
          //     audioMainMenu.pause()
          //     // miVideo.play();

          // });

          miVideo.addEventListener("ended", function () {
            // El video ha terminado de reproducirse
            audioMainMenu.play();

            console.log("El video ha terminado");
            // Aquí puedes realizar las acciones que desees al finalizar el video
          }); // var videoElement = this.el.components.material.material.map.image;

          // console.log(videoElement);

          // videoElement.onended = function () {
          //   var mensajeFinVideo = document.getElementById("mensajeFinVideo");
          //   mensajeFinVideo.setAttribute("visible", "true");
          // };
        },
      });

      AFRAME.registerComponent("mobile1", {
        init: function () {
          var cursor1 = document.querySelector("#cursor1");
          var ascene = document.querySelector("#ascene");
          var valueBack = document.querySelector("#valueBack");
          var valueVoice = document.querySelector("#valueVoice");
          var valueEffects = document.querySelector("#valueEffects");
          var entityCamera = document.querySelector("#entity_camera");

          if (
            localStorage.getItem("audioMainMenu") !== null ||
            localStorage.getItem("audioBackgroud") !== null ||
            localStorage.getItem("audioVoicer") !== null ||
            localStorage.getItem("videoAudio") !== null
          ) {
            console.log("verdadero");

            var audiomenu1 = localStorage.getItem("audioMainMenu");
            var audioBackgroud2 = localStorage.getItem("audioBackgroud");
            var audioVoicer3 = localStorage.getItem("audioVoicer");
            var videoAudio = localStorage.getItem("videoAudio");

            valueBack.setAttribute("value", `${audioBackgroud2}%`);
            valueEffects.setAttribute("value", `${videoAudio}%`);
            valueVoice.setAttribute("value", `${audioVoicer3}%`);
          } else {
            console.log("falso");

            localStorage.setItem("audioMainMenu", "40");
            localStorage.setItem("audioBackgroud", "20");
            localStorage.setItem("audioVoicer", "75");
            localStorage.setItem("videoAudio", "50");
            var audiomenu1 = localStorage.getItem("audioMainMenu");
            var audioBackgroud2 = localStorage.getItem("audioBackgroud");
            var audioVoicer3 = localStorage.getItem("audioVoicer");
            var videoAudio = localStorage.getItem("videoAudio");
            valueBack.setAttribute("value", `${audioBackgroud2}%`);
            valueEffects.setAttribute("value", `${videoAudio}%`);
            valueVoice.setAttribute("value", `${audioVoicer3}%`);
          }

          if (AFRAME.utils.device.isMobile() === false) {
            cursor1.setAttribute("visible", false);

            console.log("estamos en pc");
            console.log("verdadero");
          } else {
            var time = false;
            // ascene.removeAttribute("cursor");
            //     cursor1.removeAttribute("objects");
            //     cursor1.setAttribute("fuse", "true");
            //     cursor1.setAttribute("visible", "true");
            console.log("estamos en mobile");
            // entityCamera.setAttribute("position", "0 0.5 8");

            console.log("falso");

            setTimeout(() => {
              console.log("estamos dentro de 3 segundos");

              ascene.removeAttribute("cursor");
              cursor1.removeAttribute("objects");
              cursor1.setAttribute("fuse", "true");
              cursor1.setAttribute("visible", "true");
            }, 5000);
          }
        },
      });

      AFRAME.registerComponent("event-back", {
        init: function () {
          var el = this.el;
          var mainMenu = document.querySelector("#mainMenu");
          var aboutVideo = document.querySelector("#aboutVideo");
          var miVideo = document.querySelector("#videoabout");
          var audioMainMenu = document.querySelector("#audioMainMenu");
          var notificacion = document.querySelector("#notificacion");
          var cursor1 = document.querySelector("#cursor1");

          el.addEventListener("click", function () {
            mainMenu.setAttribute("position", "0 0 0");
            mainMenu.setAttribute("visible", "true");
            aboutVideo.setAttribute("visible", "false");
            aboutVideo.setAttribute("position", "0 25 -2");
            miVideo.pause();
            audioMainMenu.play();
            console.log(el);
          });

          el.addEventListener("mouseenter", function () {
            // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 720; dur: 1500")
            cursor1.setAttribute("material", "color: #0061AF");
            console.log(ascene.getAttribute("cursor"));

            console.log(cursor1.getAttribute("visible"));
            if (cursor1.getAttribute("visible") == true) {
              notificacion.setAttribute("visible", "true");
            }
          });
          el.addEventListener("mouseleave", function () {
            cursor1.setAttribute("material", "color: white");

            console.log(cursor1.getAttribute("visible"));
            if (cursor1.getAttribute("visible") == true) {
              notificacion.setAttribute("visible", "false");
            }

            // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 0; dur: 150")
          });
        },
      });

      // AFRAME.registerComponent("event-setting", {
      //     init: function () {
      //         el.addEventListener("click", function () {

      //         })
      //     }
      // })

      AFRAME.registerComponent("event-setting", {
        init: function () {
          var el = this.el;
          var mainMenu = document.querySelector("#mainMenu");
          var settings1 = document.querySelector("#settings1");
          var notificacion = document.querySelector("#notificacion");

          el.addEventListener("click", function () {
            mainMenu.setAttribute("position", "0 25 0");
            mainMenu.setAttribute("visible", "false");
            settings1.setAttribute("visible", "true");
            settings1.setAttribute("position", "0 0 -2");
          });

          el.addEventListener("mouseenter", function () {
            el.setAttribute("opacity", "0.25");
            // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 720; dur: 1500")
            cursor1.setAttribute("material", "color: #0061AF");
            console.log(ascene.getAttribute("cursor"));

            console.log(cursor1.getAttribute("visible"));
            if (cursor1.getAttribute("visible") == true) {
              notificacion.setAttribute("visible", "true");
            }
          });
          el.addEventListener("mouseleave", function () {
            el.setAttribute("opacity", "0");
            cursor1.setAttribute("material", "color: white");

            console.log(cursor1.getAttribute("visible"));
            if (cursor1.getAttribute("visible") == true) {
              notificacion.setAttribute("visible", "false");
            }

            // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 0; dur: 150")
          });
        },
      });

      AFRAME.registerComponent("event-play-pause", {
        init: function () {
          var el = this.el;
          var miVideo = document.querySelector("#videoabout");
          var playPause = document.querySelector("#playPause");
          var audioMainMenu = document.querySelector("#audioMainMenu");
          var cursor1 = document.querySelector("#cursor1");

          var videoPause = true;

          el.addEventListener("click", function () {
            if (videoPause) {
              miVideo.play();
              audioMainMenu.pause();
              playPause.setAttribute("src", "#pause");
              videoPause = false;
              console.log("pause");
            } else {
              miVideo.pause();
              playPause.setAttribute("src", "#play");

              videoPause = true;
              console.log("true");
            }
          });

          el.addEventListener("mouseenter", function () {
            // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 720; dur: 1500")

            // playPause.setAttribute('opacity', '')
            console.log("lo estamos biendo");
            playPause.setAttribute("opacity", "0.5");
            cursor1.setAttribute("material", "color: #0061AF");

            setTimeout(() => {
              playPause.setAttribute("opacity", "0.0");
            }, 5000);
          });

          el.addEventListener("mouseleave", function () {
            // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 0; dur: 1500")
            console.log("no lo estamos biendo");
            playPause.setAttribute("opacity", "0.3");
            cursor1.setAttribute("material", "color: #ffffff");

            setTimeout(() => {
              playPause.setAttribute("opacity", "0.0");
            }, 5000);
          });
        },
      });

      AFRAME.registerComponent("event-mas", {
        init: function () {
          var el = this.el;
          var valueBack = document.querySelector("#valueBack");
          var porcentaje = localStorage.getItem("audioBackgroud");
          var numero = parseInt(porcentaje);

          el.addEventListener("click", function () {
            var numero1 = localStorage.getItem("audioBackgroud");
            var numero2 = parseInt(numero1);
            // total = valueBack.value - 5
            console.log(numero2 * 100);
            if (numero2 !== 100) {
              numero2 += 5;
              localStorage.setItem("audioBackgroud", `${numero2}`);

              valueBack.setAttribute("value", numero2 + "%");
            }
            // valueBack. setAttribute('value', `${total}`)
          });
          el.addEventListener("mouseenter", function () {
            el.setAttribute("opacity", "1");
          });
          el.addEventListener("mouseleave", function () {
            el.setAttribute("opacity", "0.5");
          });
        },
      });

      AFRAME.registerComponent("event-menos", {
        init: function () {
          var el = this.el;
          let valueBack = document.querySelector("#valueBack");

          var porcentaje = localStorage.getItem("audioBackgroud");
          var numero = parseInt(porcentaje);
          var id = el.getAttribute("id");
          let total = 0;

          el.addEventListener("click", function () {
            var numero1 = localStorage.getItem("audioBackgroud");
            var numero2 = parseInt(numero1);
            // total = valueBack.value - 5
            console.log(numero2 * 100);

            if (numero2 !== 0) {
              numero2 -= 5;

              localStorage.setItem("audioBackgroud", `${numero2}`);

              valueBack.setAttribute("value", numero2 + "%");
            }

            // valueBack. setAttribute('value', `${total}`)
          });

          el.addEventListener("mouseenter", function () {
            el.setAttribute("opacity", "1");
          });
          el.addEventListener("mouseleave", function () {
            el.setAttribute("opacity", "0.5");
          });
        },
      });

      // este  del segund
      AFRAME.registerComponent("event-mas1", {
        init: function () {
          var el = this.el;
          var valueEffects = document.querySelector("#valueEffects");
          var porcentaje = localStorage.getItem("audioBackgroud");
          var numero = parseInt(porcentaje);

          el.addEventListener("click", function () {
            var numero1 = localStorage.getItem("videoAudio");
            var numero2 = parseInt(numero1);
            // total = valueBack.value - 5
            console.log(numero2 * 100);

            if (numero2 !== 100) {
              numero2 += 5;

              localStorage.setItem("videoAudio", `${numero2}`);

              valueEffects.setAttribute("value", numero2 + "%");
            }

            // valueBack. setAttribute('value', `${total}`)
          });

          el.addEventListener("mouseenter", function () {
            el.setAttribute("opacity", "1");
          });
          el.addEventListener("mouseleave", function () {
            el.setAttribute("opacity", "0.5");
          });
        },
      });

      AFRAME.registerComponent("event-menos1", {
        init: function () {
          var el = this.el;
          let valueEffects = document.querySelector("#valueEffects");

          var porcentaje = localStorage.getItem("audioBackgroud");
          var numero = parseInt(porcentaje);
          var id = el.getAttribute("id");
          let total = 0;

          el.addEventListener("click", function () {
            var numero1 = localStorage.getItem("videoAudio");
            var numero2 = parseInt(numero1);
            // total = valueBack.value - 5
            console.log(numero2 * 100);

            if (numero2 !== 0) {
              numero2 -= 5;

              localStorage.setItem("videoAudio", `${numero2}`);

              valueEffects.setAttribute("value", numero2 + "%");
            }

            // valueBack. setAttribute('value', `${total}`)
          });

          el.addEventListener("mouseenter", function () {
            el.setAttribute("opacity", "1");
          });
          el.addEventListener("mouseleave", function () {
            el.setAttribute("opacity", "0.5");
          });
        },
      });

      AFRAME.registerComponent("event-mas2", {
        init: function () {
          var el = this.el;
          var valueVoice = document.querySelector("#valueVoice");
          var porcentaje = localStorage.getItem("audioBackgroud");
          var numero = parseInt(porcentaje);

          el.addEventListener("click", function () {
            var numero1 = localStorage.getItem("audioVoicer");
            var numero2 = parseInt(numero1);
            // total = valueBack.value - 5
            console.log(numero2 * 100);

            if (numero2 !== 100) {
              numero2 += 5;

              localStorage.setItem("audioVoicer", `${numero2}`);

              valueVoice.setAttribute("value", numero2 + "%");
            }

            // valueBack. setAttribute('value', `${total}`)
          });

          el.addEventListener("mouseenter", function () {
            el.setAttribute("opacity", "1");
          });
          el.addEventListener("mouseleave", function () {
            el.setAttribute("opacity", "0.5");
          });
        },
      });

      AFRAME.registerComponent("event-menos2", {
        init: function () {
          var el = this.el;
          let valueVoice = document.querySelector("#valueVoice");

          var porcentaje = localStorage.getItem("audioBackgroud");
          var numero = parseInt(porcentaje);
          var id = el.getAttribute("id");
          let total = 0;

          el.addEventListener("click", function () {
            var numero1 = localStorage.getItem("audioVoicer");
            var numero2 = parseInt(numero1);
            // total = valueBack.value - 5
            console.log(numero2 * 100);

            if (numero2 !== 0) {
              numero2 -= 5;

              localStorage.setItem("audioVoicer", `${numero2}`);

              valueVoice.setAttribute("value", numero2 + "%");
            }

            // valueBack. setAttribute('value', `${total}`)
          });

          el.addEventListener("mouseenter", function () {
            el.setAttribute("opacity", "1");
          });
          el.addEventListener("mouseleave", function () {
            el.setAttribute("opacity", "0.5");
          });
        },
      });

      AFRAME.registerComponent("event-back1", {
        init: function () {
          var el = this.el;
          var mainMenu = document.querySelector("#mainMenu");
          var settings1 = document.querySelector("#settings1");
          var miVideo = document.querySelector("#videoabout");
          var audioMainMenu = document.querySelector("#audioMainMenu");

          el.addEventListener("click", function () {
            mainMenu.setAttribute("position", "0 0 0");
            mainMenu.setAttribute("visible", "true");
            settings1.setAttribute("visible", "false");
            settings1.setAttribute("position", "0 25 -2");
          });
        },
      });

      AFRAME.registerComponent("event-exit", {
        init: function () {
          var el = this.el;
          var mainMenu = document.querySelector("#mainMenu");
          var exitMenu = document.querySelector("#exitMenu");
          var cursor1 = document.querySelector("#cursor1");

          el.addEventListener("click", function () {
            mainMenu.setAttribute("position", "0 25 0");
            mainMenu.setAttribute("visible", "false");
            exitMenu.setAttribute("visible", "true");
            exitMenu.setAttribute("position", "0 0 -2");
          });

          el.addEventListener("mouseenter", function () {
            el.setAttribute("opacity", "0.3");
            cursor1.setAttribute("material", "color: #0061AF");
          });
          el.addEventListener("mouseleave", function () {
            el.setAttribute("opacity", "0.0");
            cursor1.setAttribute("material", "color: white");
          });
        },
      });

      AFRAME.registerComponent("event-back2", {
        init: function () {
          var el = this.el;

          var mainMenu = document.querySelector("#mainMenu");
          var exitMenu = document.querySelector("#exitMenu");

          el.addEventListener("click", function () {
            mainMenu.setAttribute("position", "0 0 0");
            mainMenu.setAttribute("visible", "true");
            exitMenu.setAttribute("visible", "false");
            exitMenu.setAttribute("position", "0 25 -5");
          });

          el.addEventListener("mouseenter", function () {
            el.setAttribute("opacity", "0.3");
          });
          el.addEventListener("mouseleave", function () {
            el.setAttribute("opacity", "0.0");
          });
        },
      });

      AFRAME.registerComponent("event-exit-app", {
        init: function () {
          var el = this.el;

          var mainMenu = document.querySelector("#mainMenu");
          var exitMenu = document.querySelector("#exitMenu");

          el.addEventListener("click", function () {
            console.log("estamos en cerrar app");
            cerrarPestana();
          });

          function cerrarPestana() {
            window.close();
          }

          el.addEventListener("mouseenter", function () {
            el.setAttribute("opacity", "0.3");
          });
          el.addEventListener("mouseleave", function () {
            el.setAttribute("opacity", "0.0");
          });
        },
      });

      AFRAME.registerComponent("event-start", {
        init: function () {
          var el = this.el;
          var video1 = document.querySelector("#video1");
          var scene1 = document.querySelector("#scene1");
          var scene2 = document.querySelector("#scene2");
          var video = document.querySelector("#testVideo");
          var camera1 = document.querySelector("#camera1");
          var hover4 = document.querySelector("#hover4");
          var menuPause = document.querySelector("#menuPause");
          // var cursor1 = document.querySelector('#cursor1');
          var cursor1 = document.querySelector("#cursor1");

          var butonPaused = document.querySelector("#butonPaused");
          // var camerarotation = document.querySelector('#camerarotation')
          var eventabout1 = document.querySelector("#eventabout1");
          var notificacion = document.querySelector("#notificacion");

          var audioMainMenu = document.querySelector("#audioMainMenu");
          var audioBackgroud = document.querySelector("#audioBackgroud");
          var audioVoicer = document.querySelector("#audioVoicer");
          var el = this.el;

          // video1.addEventListener('ended', console.log('video terminado'));

          el.addEventListener("click", function () {
            let controls =
              document.querySelector("a-camera").components["look-controls"];
            controls.pitchObject.rotation.x = 0;
            controls.yawObject.rotation.y = 0;

            var audioBackgroud1 = localStorage.getItem("audioBackgroud");
            var audioVoicer1 = localStorage.getItem("audioVoicer");
            var videoAudio1 = localStorage.getItem("videoAudio");

            audioMainMenu.pause();
            scene1.setAttribute("visible", "false");
            // scene1.setAttribute('rotation', "0 100 0")
            scene1.setAttribute("visible", "false");
            scene1.setAttribute("position", "0 15 0");
            scene2.setAttribute("rotation", "0 0 0");
            scene2.setAttribute("visible", "true");
            camera1.setAttribute("fov", "80");
            menuPause.setAttribute("position", "0 25 0");

            video1.setAttribute("event-videp-end", "");
            butonPaused.setAttribute("position", "0 -3 0");
            audioBackgroud.src =
              "./assets/audios/audios_backgroud_music/Snow_Scene_Background_Music.mp3";
            audioBackgroud.volume = 0 / 100;
            audioVoicer.src = "./assets/audios/audios_voiceovers/Snow_Post.mp3";
            audioVoicer.volume = 0 / 100;
            video.src = "./assets/videos/snow.mp4";
            video.volume = parseInt(videoAudio1) / 100;
            video.play();
            audioBackgroud.play();
            audioVoicer.play();
          });

          el.addEventListener("mouseenter", function () {
            el.setAttribute("opacity", "0.25");
            // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 720; dur: 1500")
            cursor1.setAttribute("material", "color: #0061AF");
            console.log(ascene.getAttribute("cursor"));

            console.log(cursor1.getAttribute("visible"));
            if (cursor1.getAttribute("visible") == true) {
              notificacion.setAttribute("visible", "true");
            }
          });
          el.addEventListener("mouseleave", function () {
            el.setAttribute("opacity", "0");
            cursor1.setAttribute("material", "color: white");

            console.log(cursor1.getAttribute("visible"));
            if (cursor1.getAttribute("visible") == true) {
              notificacion.setAttribute("visible", "false");
            }

            // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 0; dur: 150")
          });
        },
      });

      AFRAME.registerComponent("event-videp-end", {
        init: function () {
          var el = this.el;
          var video = document.querySelector("#testVideo");
          var audioMainMenu = document.querySelector("#audioMainMenu");
          var audioBackgroud = document.querySelector("#audioBackgroud");
          var audioVoicer = document.querySelector("#audioVoicer");
          var menuPause = document.querySelector("#menuPause");
          var video1 = document.querySelector("#video1");
          var notificacion = document.querySelector("#notificacion");

          var videoList = [
            "./assets/videos/debris.mp4",
            "./assets/videos/debris.mp4",
            "./assets/videos/rain.mp4",
            "./assets/videos/glare.mp4",
            "./assets/videos/insects.mp4",
          ]; // Lista de videos a reproducir en secuencia
          var audioBackgroudList = [
            "./assets/audios/audios_backgroud_music/Debris_Scene_Background_Music.mp3",
            "./assets/audios/audios_backgroud_music/Debris_Scene_Background_Music.mp3",
            "./assets/audios/audios_backgroud_music/Rain_Scene_Background_Music.mp3",
            "./assets/audios/audios_backgroud_music/Glare_Scene_Background_Music.mp3",
            "./assets/audios/audios_backgroud_music/Insects_Scene_Background_Music.mp3",
          ];

          var voiceoversList = [
            "./assets/audios/audios_voiceovers/Debris_Post.mp3",
            "./assets/audios/audios_voiceovers/Debris_Post.mp3",
            "./assets/audios/audios_voiceovers/Rain_Post.mp3",
            "./assets/audios/audios_voiceovers/Glare_Post.mp3",
            "./assets/audios/audios_voiceovers/Insects_Post.mp3",
          ];
          var currentVideoIndex = 0;
          var testVideo = document.querySelector("#testVideo");
          testVideo.addEventListener("ended", function () {
            // El video ha terminado de reproducirse

            console.log("El video ha terminado 3");
            playNextVideo();
            // Aquí puedes realizar las acciones que desees al finalizar el video
          }); // var videoElement = this.el.components.material.material.map.image;

          function playNextVideo() {
            console.log("video inicioado");
            currentVideoIndex++;
            if (currentVideoIndex < videoList.length) {
              console.log("estamos dentro del if");
              console.log(currentVideoIndex);
              video.src = videoList[currentVideoIndex];
              audioBackgroud.src = audioBackgroudList[currentVideoIndex];
              audioVoicer.src = voiceoversList[currentVideoIndex];
              audioBackgroud.play();
              audioVoicer.play();
              video.play();
            } else {
              console.log("estamos en el else");
              menuPause.setAttribute("visible", "true");
              menuPause.setAttribute("position", "0 0 0");
              video1.setAttribute("color", "#1A5DA9");

              // Se reproducieron todos los videos en secuencia
              // Puedes realizar alguna acción aquí o reiniciar la reproducción
              // currentVideoIndex = 0;
              // videoPlayer.src = videoList[currentVideoIndex];
              // videoPlayer.play();
            }
          }
        },
      });
    </script>
  </head>

  <body>
    <div id="screenStart" class="contenedor">
      <div class="carga">
        <div
          class="imagentext"
          style="
            text-align: center;
            display: flex;
            align-items: center;
            flex-direction: column;
            align-items: center;
            align-content: center;
          "
        >
          <img id="imagenLogo" src="assets/images/logo.png" />
          <div>
            <h3
              style="
                color: #5ea8fd;
                position: relative;
                font-size: 30px;
                font-family: Arial;
                font-weight: 300;
                margin-top: 10px;
              "
            >
              VIRTUAL REALITY EXPERIENCE
            </h3>
          </div>
        </div>

        <div id="contenedorBarra" style="width: 250px; height: 30">
          <div class="texto-contenedor">
            <div class="texto">Loading...</div>
          </div>

          <div id="barraContenedor" class="barra-contenedor">
            <div class="barra"></div>
          </div>
        </div>

        <div
          id="textStart"
          style="display: none; width: 250px; height: 30; text-align: center"
        >
          <h3
            style="
              color: white;
              font-size: 22px;
              margin-top: 5px;
              margin-bottom: 5px;
              text-align: center;
            "
          >
            TAP TO ENTER VEHICLE
          </h3>
        </div>
      </div>
    </div>

    <a-scene
      id="ascene"
      mobile1
      cursor="rayOrigin: mouse;"
      visible="true"
      loading-screen="dotsColor: #005DFA; backgroundColor: #0D1D2A; enabled: true;"
    >
      <a-assets>
        <video
          id="testVideo"
          preload="auto"
          loop="false"
          crossorigin="anonymous"
          src="/assets/videos/snow.mp4"
        ></video>
        <video
          id="videoabout"
          src="/assets/videos/ceramx_window_treatment.mp4"
          crossorigin="anonymous"
          preload="auto"
          width="160"
          height="90"
          loop="true"
        ></video>
        <audio
          id="audioMainMenu"
          loop
          crossorigin="anonymous"
          src="/assets/audios/Main_Menu.mp3"
        ></audio>
        <audio
          id="audioBackgroud"
          crossorigin="anonymous"
          src="/assets/audios/audios_backgroud_music/Snow_Scene_Background_Music.mp3"
        ></audio>
        <audio
          id="audioVoicer"
          crossorigin="anonymous"
          src="/assets/audios/audios_voiceovers/Snow_Post.mp3"
        ></audio>
        <img id="my-image" crossorigin="anonymous" src="/assets/bg.jpg" />
        <img id="my-id" crossorigin="anonymous" src="/assets/sky.png" />
        <img id="my-snow" crossorigin="anonymous" src="/assets/snow.png" />
        <img id="my-Debris" crossorigin="anonymous" src="/assets/Debris.png" />
        <img id="my-rain" crossorigin="anonymous" src="/assets/Rain.png" />
        <img id="my-glare" crossorigin="anonymous" src="/assets/Glare.png" />

        <img
          id="my-insects"
          crossorigin="anonymous"
          src="/assets/Insects.png"
        />
        <img
          id="my-Cardstart"
          crossorigin="anonymous"
          src="/assets/cardStart.png"
        />
        <img
          id="my-logo"
          crossorigin="anonymous"
          src="/assets/images/logo.png"
        />
        <img
          id="my-Settings"
          crossorigin="anonymous"
          src="/assets/Settings.png"
        />
        <img id="my-About" crossorigin="anonymous" src="/assets/About.png" />

        <!-- <img id="my-about" src="assets/images/about.png" /> -->
        <!-- <img id="my-settings" src="assets/images/settings.png"> -->
        <img
          id="my-exit"
          crossorigin="anonymous"
          src="/assets/images/exit.png"
        />
        <!-- <img id="play" src="assets/images/test3.png"> -->
        <img
          id="cargador"
          crossorigin="anonymous"
          src="/assets/images/cargador.png"
        />
        <img id="back" crossorigin="anonymous" src="/assets/BACK.png" />
        <img id="play" crossorigin="anonymous" src="/assets/play.png" />
        <img id="pause" crossorigin="anonymous" src="/assets/pause.png" />
        <img id="masicon" crossorigin="anonymous" src="/assets/mas.png" />
        <img id="menosicon" crossorigin="anonymous" src="/assets/menos.png" />
        <img id="start" crossorigin="anonymous" src="/assets/Start.png" />
      </a-assets>

      <a-entity id="entity_camera" position="0 1.5 8">
        <a-camera
          id="camera1"
          fov="50"
          reverse-mouse-drag="true"
          position="0 0 0"
          wasd-controls-enabled="false"
        >
          <a-cursor
            id="cursor1"
            material="color: white"
            scale="1.5 1.5 1.5"
            fuse="false"
            fuse-timeout="3000"
            objects="none"
          ></a-cursor>
          <a-entity id="notificacion" visible="false">
            <a-plane
              color="#000000"
              position="0  1 -3.1"
              height="0.5"
              width="1.5"
              opacity="0.5"
            ></a-plane>

            <a-text
              value="The scene will open in 3 seconds."
              width="2"
              align="center"
              position="0 1 -3"
            ></a-text>
          </a-entity>
        </a-camera>
      </a-entity>

      <a-entity id="scene1" visible="true" position="0 0 0">
        <!-- 
            <a-curvedimage src="#my-logo" height="3.0" radius="5.6" theta-length="72" rotation="0 100 0"
                scale="1 1 1"></a-curvedimage> -->

        <a-entity id="mainMenu" visible="true" position="0 0 0">
          <!-- curved principal -->
          <a-curvedimage
            height="2.5"
            radius="10"
            theta-length="30"
            rotation="0 165 0"
            scale="1 1 1"
            position="0 1.30 14"
            opacity="0.65"
            color="#000000"
          >
          </a-curvedimage>

          <!-- curved logo -->
          <a-curvedimage
            material="shader: flat; src: #my-logo"
            height="1.30"
            radius="9.9"
            theta-length="40"
            rotation="0 160 0"
            scale="0.2 0.2 0.2"
            position="0 2.25 6"
          >
          </a-curvedimage>

          <!-- curved Settings -->

          <a-curvedimage
            material="shader: flat; src: #my-Settings"
            height="1"
            radius="9.9"
            theta-length="20"
            rotation="0 157.5 0"
            scale="0.2 0.2 0.2"
            position="1.50 2.25 6.25"
          >
          </a-curvedimage>
          <a-curvedimage
            height="1.1"
            radius="9.9"
            theta-length="20"
            rotation="0 157.5 0"
            scale="0.2 0.2 0.2"
            color="#FFFFFF"
            opacity="0"
            position="1.47 2.24 6.30"
            event-setting
          >
          </a-curvedimage>

          <!--end curved Settings -->

          <!-- curved About -->

          <a-curvedimage
            material="shader: flat; src: #my-About"
            height="1"
            radius="9.9"
            theta-length="20"
            rotation="0 180 0"
            scale="0.2 0.2 0.2"
            position="-1.5 2.25 6.25"
          >
          </a-curvedimage>
          <a-curvedimage
            height="1"
            radius="9.9"
            theta-length="20"
            rotation="0 180 0"
            scale="0.2 0.2 0.2"
            position="-1.47 2.25 6.30"
            color="#FFFFFF"
            opacity="0"
            event-about
          >
          </a-curvedimage>

          <!--end curved About -->

          <!-- curved start -->

          <a-curvedimage
            height="3"
            radius="9.9"
            theta-length="72"
            rotation="0 143.5 0"
            scale="0.3 0.3 0.3"
            position="0 1.50 7.5"
            material="shader: flat; src: #start"
          >
          </a-curvedimage>
          <a-curvedimage
            height="3.1"
            radius="9.9"
            theta-length="72"
            rotation="0 143.5 0"
            scale="0.3 0.3 0.3"
            position="0 1.50 7.6"
            color="#FFFFFF"
            opacity="0"
            event-start
          >
          </a-curvedimage>

          <!--end curved start -->
          <!-- curved insects -->

          <a-curvedimage
            height="3"
            radius="9.9"
            theta-length="22.5"
            rotation="0 150 0"
            scale="0.2 0.2 0.2"
            position="1.10 0.6 6.3"
            material="shader: flat; src: #my-insects"
          >
          </a-curvedimage>
          <a-curvedimage
            height="3"
            radius="9.9"
            theta-length="22.5"
            rotation="0 150 0"
            scale="0.2 0.2 0.2"
            position="1.10 0.6 6.31"
            color="#FFFFFF"
            opacity="0"
            event-insects
          >
          </a-curvedimage>

          <!--end curved insects -->
          <!-- curved glare -->

          <a-curvedimage
            height="3"
            radius="9.9"
            theta-length="22.5"
            rotation="0 160 0"
            scale="0.2 0.2 0.2"
            position="0.6 0.6 6.2"
            material="shader: flat; src: #my-glare"
          >
          </a-curvedimage>
          <a-curvedimage
            height="3"
            radius="9.9"
            theta-length="22.5"
            rotation="0 160 0"
            scale="0.2 0.2 0.2"
            position="0.6 0.6 6.21"
            color="#FFFFFF"
            opacity="0"
            event-glare
          >
          </a-curvedimage>

          <!--end curved glare -->

          <!-- curved rain -->

          <a-curvedimage
            height="3"
            radius="9.9"
            theta-length="22.5"
            rotation="0 166 0"
            scale="0.2 0.2 0.2"
            position="-0.05 0.6 6.1"
            material="shader: flat; src: #my-rain"
          >
          </a-curvedimage>
          <a-curvedimage
            height="3"
            radius="9.9"
            theta-length="22.5"
            rotation="0 166 0"
            scale="0.2 0.2 0.2"
            position="-0.05 0.6 6.11"
            color="#FFFFFF"
            opacity="0"
            event-rain
          >
          </a-curvedimage>

          <!--end curved rain -->

          <!-- curved Debris -->

          <a-curvedimage
            height="3"
            radius="9.9"
            theta-length="22.5"
            rotation="0 180 0"
            scale="0.2 0.2 0.2"
            position="-0.42 0.6 6.15"
            material="shader: flat; src: #my-Debris"
          >
          </a-curvedimage>
          <a-curvedimage
            height="3"
            radius="9.9"
            theta-length="22.5"
            rotation="0 180 0"
            scale="0.2 0.2 0.2"
            position="-0.42 0.6 6.16"
            color="#FFFFFF"
            opacity="0"
            event-debris
          >
          </a-curvedimage>

          <!--end curved Debris -->
          <!-- curved snow -->

          <a-curvedimage
            height="3"
            radius="9.9"
            theta-length="22.5"
            rotation="0 190 0"
            scale="0.2 0.2 0.2"
            position="-0.9 0.6 6.30"
            material="shader: flat; src: #my-snow"
          >
          </a-curvedimage>
          <a-curvedimage
            height="3"
            radius="9.9"
            theta-length="22.5"
            rotation="0 190 0"
            scale="0.2 0.2 0.2"
            position="-0.9 0.6 6.31"
            color="#FFFFFF"
            opacity="0"
            event-snow
          >
          </a-curvedimage>

          <!--end curved snow -->
        </a-entity>

        <a-entity id="aboutVideo" position="0 25 -5" visible="false">
          <a-plane
            color="#101010"
            opacity="0.5"
            height="6.5"
            width="11"
            position="0 0.5 0"
          ></a-plane>
          <!-- <a-video
            src="#videoabout"
            height="4.25"
            width="9"
            position="0 1.25 0.2"
            video-ended
          ></a-video> -->

          <a-entity
            material="shader: flat; src: #videoabout"
            geometry="primitive: plane; width: 9; height: 4.25;"
            position="0 1.25 0.5"
            rotation="0 0 0"
          >
          </a-entity>

          <a-plane
            color="#FFFFFF"
            id="playPause"
            src="#play"
            opacity="0.5"
            height="0.5"
            transparent="true"
            width="0.5"
            position="0 1.25 0.6"
            event-play-pause
          ></a-plane>
          <a-plane
            color="#1A5DA9"
            opacity="0.5"
            height="4.50"
            width="9.50"
            position="0 1.25 0.1"
          ></a-plane>
          <a-plane
            color="#1A5DA9"
            opacity="0.5"
            height="1.25"
            width="9.50"
            position="0 -1.75 0.1"
            event-back
          ></a-plane>

          <a-plane
            src="#back"
            color="#fff"
            transparent="true"
            height="1"
            width="0.8"
            position="0 -1.75 0.2"
            event-back
          ></a-plane>
        </a-entity>

        <a-entity id="settings1" position="0 25 -5" visible="false">
          <a-plane
            color="#101010"
            opacity="0.5"
            height="6.5"
            width="11"
            position="0 0.5 0"
          ></a-plane>
          <a-plane
            color="#1A5DA9"
            opacity="0.5"
            height="4.50"
            width="9.50"
            position="0 1.25 0.1"
          ></a-plane>

          <a-plane
            color="#1A5DA9"
            opacity="1"
            height="0.2"
            width="6"
            position="0 2.5 0.2"
          ></a-plane>
          <a-plane
            id="menos"
            src="#menosicon"
            color="#FFF"
            transparent="true"
            opacity="0.5"
            height="0.5"
            width="0.5"
            position="-4 2.5 0.2"
            event-menos
          ></a-plane>
          <a-plane
            id="mas"
            src="#masicon"
            color="#FFF"
            transparent="true"
            opacity="0.5"
            height="0.5"
            width="0.5"
            position="4 2.5 0.2"
            event-mas
          ></a-plane>

          <a-plane
            color="#1A5DA9"
            opacity="1"
            height="0.2"
            width="6"
            position="0 1.5 0.2"
          ></a-plane>
          <a-plane
            src="#menosicon"
            color="#FFF"
            transparent="true"
            opacity="0.5"
            height="0.5"
            width="0.5"
            position="-4 1.5 0.2"
            event-menos1
          ></a-plane>
          <a-plane
            src="#masicon"
            color="#FFF"
            transparent="true"
            opacity="0.5"
            width="0.5"
            height="0.5"
            position="4 1.5 0.2"
            event-mas1
          ></a-plane>

          <a-plane
            color="#1A5DA9"
            opacity="1"
            height="0.2"
            width="6"
            position="0 0.5 0.2"
          ></a-plane>
          <a-plane
            src="#menosicon"
            color="#FFF"
            transparent="true"
            opacity="0.5"
            height="0.5"
            width="0.5"
            position="-4 0.5 0.2"
            event-menos2
          ></a-plane>
          <a-plane
            src="#masicon"
            color="#FFF"
            transparent="true"
            height="0.5"
            width="0.5"
            position="4 0.5 0.2"
            event-mas2
          ></a-plane>

          <a-text
            value="BACKGROUND MUSIC"
            align="center"
            position="-3.4 3 0.5"
          ></a-text>
          <a-text
            id="valueBack"
            value="0"
            align="center"
            position="0 2.25 0.5"
          ></a-text>

          <a-text
            value="SOUND EFFECTS"
            align="center"
            position="-3.6 2 0.5"
          ></a-text>
          <a-text
            id="valueEffects"
            value="100"
            align="center"
            position="0 1.25 0.5"
          ></a-text>

          <a-text
            value="VOICEOVER"
            align="center"
            position="-3.8 1 0.5"
          ></a-text>
          <a-text
            id="valueVoice"
            value="100"
            align="center"
            position="0 0.25 0.5"
          ></a-text>

          <a-plane
            color="#1A5DA9"
            opacity="0.5"
            height="1.25"
            width="9.50"
            position="0 -1.75 0.1"
            event-back1
          ></a-plane>

          <a-plane
            src="#back"
            color="#fff"
            transparent="true"
            height="1"
            width="0.8"
            position="0 -1.75 0.2"
            event-back1
          ></a-plane>
        </a-entity>

        <a-entity id="exitMenu" position="0 25 -2" visible="false">
          <a-plane
            color="#101010"
            opacity="0.5"
            height="5"
            width="6"
            position="0 1 0"
          ></a-plane>
          <a-text
            value="Sure to exit the vr experience ?"
            width="6"
            align="center"
            position="0 3.1 0.1"
          ></a-text>

          <a-plane
            color="#1A5DA9"
            height="1.5"
            width="4.5"
            opacity="0.5"
            position="0 2 0.1"
          ></a-plane>

          <a-text
            value="BACK"
            align="center"
            width="8"
            position="0 2 0.2"
          ></a-text>
          <a-plane
            color="#FFF"
            height="1.5"
            width="4.6"
            opacity="0.0"
            position="0 2 0.3"
            event-back2
          ></a-plane>

          <a-plane
            color="#1A5DA9"
            height="1.5"
            width="4.5"
            opacity="0.5"
            position="0 0 0.1"
          ></a-plane>
          <a-text
            value="EXIT"
            align="center"
            width="8"
            position="0 0 0.2"
            event-exit-app
          ></a-text>

          <a-plane
            color="#FFF"
            height="1.5"
            width="4.6"
            opacity="0.0"
            position="0 0 0.3"
            event-exit-app
          ></a-plane>
        </a-entity>

        <a-sky src="#my-id" rotation="0 -90 0"></a-sky>
      </a-entity>

      <a-entity id="scene2" rotation="0 0 0" visible="false">
        <a-videosphere
          id="video1"
          rotation="0 -90 0"
          src="#testVideo"
        ></a-videosphere>
        <a-entity id="menuPause" position="0 25 0" visible="false">
          <a-plane
            color="#101010"
            height="4.5"
            width="5"
            opacity="0.8"
            position="0.5 1.5 0"
          ></a-plane>

          <a-plane
            id="butonContinue"
            color="#1A5DA9"
            height="1.5"
            width="4.5"
            opacity="0.5"
            position="0.5 2.5 0.1"
            event-continue
          ></a-plane>
          <a-text
            value="Continue"
            width="10"
            position="-0.5 2.5 0.5"
            event-continue
          ></a-text>

          <a-plane
            id="buttonQuit"
            color="#1A5DA9"
            height="1.5"
            width="4.5"
            opacity="0.5"
            position="0.5 0.50 0.1"
            event-quit
          ></a-plane>
          <a-text
            value="Main Menu"
            width="10"
            position="-0.7 0.5 0.5"
            event-quit
          ></a-text>
        </a-entity>

        <a-plane
          id="butonPaused"
          color="#fff"
          height="4"
          width="4.8"
          position="6 25 0.5"
          opacity="0.0"
          event-pause
        ></a-plane>
      </a-entity>
      <button
        id="reset-button"
        style="position: absolute; top: 0px; z-index: 999; display: none"
      >
        reproducir video
      </button>
    </a-scene>
    <script>
      const videoElement = document.getElementById("videoabout");
      var scene2 = document.querySelector("#scene2");
      var video = document.querySelector("#testVideo");

      var resetButton = document.querySelector("#reset-button");
      function toggleVideo() {
        console.log("estamos");

        if (videoElement.paused) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      }
      resetButton.addEventListener("click", toggleVideo);

      document
        .querySelector("a-scene")
        .addEventListener("enter-vr", function () {
          console.log(scene2.getAttribute("visible") == true);
          if (scene2.getAttribute("visible") == true) {
            console.log("estamas reproduciones el video");
            video.play();
          } else {
            ("no esta dentro de la escena");
          }

          console.log("ENTERED VR");
        });
    </script>
    <script src="js/script.js"></script>
  </body>
</html>
