// eventos principales de escenas

AFRAME.registerComponent("event-snow", {
  init: function () {
    var scene1 = document.querySelector("#scene1");
    var scene2 = document.querySelector("#scene2");
    var camera1 = document.querySelector("#camera1");
    var video = document.querySelector("#testVideo");
    var menuPause = document.querySelector("#menuPause");
    var butonPaused = document.querySelector("#butonPaused");
    var ascene = document.querySelector("#ascene");
    var counter = document.querySelector("#counter");
    var video1 = document.querySelector("#video1");
    var textCounter = document.querySelector("#text-counter");
    var testVideo = document.querySelector("#testVideo");
    var ring = document.querySelector("#ring");
    var progress = document.querySelector("#progress");
    var porcentaje = document.querySelector("#porcentaje");
    var porcentaje1 = document.querySelector("#porcentaje1");
    var progress_bar = document.querySelector("#progress_bar");
    var audioMainMenu = document.querySelector("#audioMainMenu");
    var audioMainMenu = document.querySelector("#audioMainMenu");
    var audioBackgroud = document.querySelector("#audioBackgroud");
    var audioVoicer = document.querySelector("#audioVoicer");
    var plano_snow = document.querySelector("#plano_snow");
    var valor_verdaera = false;

    var el = this.el;
    el.addEventListener("click", function () {
      let controls =
        document.querySelector("a-camera").components["look-controls"];
      controls.pitchObject.rotation.x = 0;
      controls.yawObject.rotation.y = 0;

      scene3 = true;
      console.log(video.getAttribute("esene") == "true");

      console.log(ascene.is("vr-mode"), "estamos dentro del vr");

      video.setAttribute("esene", "true");

      audioMainMenu.pause();
      scene1.setAttribute("visible", "false");
      scene1.setAttribute("position", "0 15 0");
      scene2.setAttribute("rotation", "0 0 0");
      scene2.setAttribute("visible", "true");
      camera1.setAttribute("fov", "80");
      menuPause.setAttribute("position", "0 25 0");

      audioBackgroud.src =
        "./assets/audios/audios_backgroud_music/Snow_Scene_Background_Music.mp3";
      audioBackgroud.volume = 0 / 100;
      audioVoicer.src = "./assets/audios/audios_voiceovers/Snow_Post.mp3";
      audioVoicer.volume = 0 / 100;
      video.src = "./assets/videos/snow.mp4";
      video1.setAttribute("color", "#000000");
      video1.setAttribute("cargando", "si");
      video.volume = 0.5;
      video.muted = true;
      video.play();
      valor_verdaera = true;
      videoReiniciado = false;
      progress_bar.setAttribute("visible", true);
      progress_bar.setAttribute("position", "0 0 0");
    });

    let stop = false;

    el.addEventListener("mouseenter", function () {
      stop = false;

      plano_snow.setAttribute("opacity", "0.25");

      ring.setAttribute("material", "color: #0061AF");

      if (ring.getAttribute("visible") == true) {
        counter.setAttribute("visible", "true");
        textCounter.setAttribute("visible", "true");
        textCounter.setAttribute("value", "3");
        let contador = 3;
        const interval = setInterval(() => {
          if (stop == true) {
            console.log("se paro sepetirnamente");
            clearInterval(interval);
          }
          console.log(contador);
          textCounter.setAttribute("value", `${contador}`);

          contador--;

          if (contador < 0) {
            clearInterval(interval);
            console.log("¡Tiempo terminado!");
          }
        }, 1000);
      }
    });
    el.addEventListener("mouseleave", function () {
      stop = true;
      plano_snow.setAttribute("opacity", "0");
      ring.setAttribute("material", "color: white");
      if (ring.getAttribute("visible") == true) {
        counter.setAttribute("visible", "false");
        textCounter.setAttribute("visible", "false");
        textCounter.setAttribute("value", "3");
      }
    });
    testVideo.addEventListener("ended", function () {
      if (video.getAttribute("esene") == "true") {
        console.log("temino de video glare");

        scene1.setAttribute("visible", "true");
        scene1.setAttribute("position", "0 0 0");
        scene2.setAttribute("visible", "false");
        camera1.setAttribute("fov", "50");
        audioMainMenu.play();
      }
    });
    var videoReiniciado = false;
    video.addEventListener("progress", function () {
      if (valor_verdaera) {
        var buffered = video.buffered;
        if (buffered.length > 0) {
          var percent = (buffered.end(0) / video.duration) * 10;
          console.log("Porcentaje de carga: " + percent.toFixed(3) + "%");
          progress.setAttribute("width", `${percent.toFixed(3)}`);
          porcentaje.setAttribute("value", `${percent.toFixed(1) * 2 * 10}%`);
          porcentaje1.setAttribute("value", `${percent.toFixed(1) * 2 * 10}%`);
          if (percent >= 5 && !videoReiniciado) {
            console.log("El video está completamente cargado.");
            video1.setAttribute("color", "");
            video1.setAttribute("cargando", "no");
            video.muted = false;
            video.currentTime = 0;
            if (ascene.is("vr-mode")) {
              butonPaused.setAttribute("position", "0 -1.3 0");
            } else {
              butonPaused.setAttribute("position", "0 -3.1 0");
            }
            video.play();
            video.volume = 50 / 100;
            valor_verdaera = false;
            videoReiniciado = true;
            progress_bar.setAttribute("visible", false);
            progress_bar.setAttribute("position", "0 25 0");
          }
        }
      }
    });
  },
});

AFRAME.registerComponent("event-debris", {
  init: function () {
    var scene1 = document.querySelector("#scene1");
    var scene2 = document.querySelector("#scene2");
    var video = document.querySelector("#testVideo");
    var camera1 = document.querySelector("#camera1");
    var menuPause = document.querySelector("#menuPause");
    var cursor1 = document.querySelector("#cursor1");
    var counter = document.querySelector("#counter");
    var video1 = document.querySelector("#video1");
    var butonPaused = document.querySelector("#butonPaused");
    var textCounter = document.querySelector("#text-counter");
    var ring = document.querySelector("#ring");

    var audioMainMenu = document.querySelector("#audioMainMenu");
    var audioBackgroud = document.querySelector("#audioBackgroud");
    var audioVoicer = document.querySelector("#audioVoicer");

    var plano_debris = document.querySelector("#plano_debris");

    var el = this.el;
    el.addEventListener("click", function () {
      let controls =
        document.querySelector("a-camera").components["look-controls"];
      controls.pitchObject.rotation.x = 0;
      controls.yawObject.rotation.y = 0;

      scene3 = true;
      video.setAttribute("esene", "true");

      scene1.setAttribute("visible", "false");
      scene1.setAttribute("position", "0 15 0");
      scene2.setAttribute("rotation", "0 0 0");
      scene2.setAttribute("visible", "true");
      camera1.setAttribute("fov", "80");
      menuPause.setAttribute("position", "0 25 0");

      audioMainMenu.pause();

      audioBackgroud.src =
        "./assets/audios/audios_backgroud_music/Debris_Scene_Background_Music.mp3";
      audioBackgroud.volume = 0 / 100;
      audioVoicer.src = "./assets/audios/audios_voiceovers/Debris_Post.mp3";
      audioVoicer.volume = 0 / 100;
      video.src = "./assets/videos/debris.mp4";
      video1.setAttribute("color", "#000000");
      video1.setAttribute("cargando", "si");

      video.volume = 0.5;
      video.muted = true;
      video.play();
      valor_verdaera = true;
      videoReiniciado = false;
      progress_bar.setAttribute("visible", true);
      progress_bar.setAttribute("position", "0 0 0");
    });

    let stop = false;

    el.addEventListener("mouseenter", function () {
      stop = false;
      plano_debris.setAttribute("opacity", "0.25");

      ring.setAttribute("material", "color: #0061AF");

      if (ring.getAttribute("visible") == true) {
        counter.setAttribute("visible", "true");
        textCounter.setAttribute("visible", "true");
        textCounter.setAttribute("value", "3");

        let contador = 3;
        const interval = setInterval(() => {
          if (stop == true) {
            console.log("se paro sepetirnamente");
            clearInterval(interval);
          }
          console.log(contador);
          textCounter.setAttribute("value", `${contador}`);

          contador--;

          if (contador < 0) {
            clearInterval(interval);
            console.log("¡Tiempo terminado!");
          }
        }, 1000);
      }
    });
    el.addEventListener("mouseleave", function () {
      stop = true;
      plano_debris.setAttribute("opacity", "0");
      ring.setAttribute("material", "color: white");

      if (cursor1.getAttribute("visible") == true) {
        counter.setAttribute("visible", "false");
        textCounter.setAttribute("visible", "false");
        textCounter.setAttribute("value", "3");
      }
    });

    testVideo.addEventListener("ended", function () {
      if (video.getAttribute("esene") == "true") {
        console.log("temino de video glare");

        scene1.setAttribute("visible", "true");
        scene1.setAttribute("position", "0 0 0");
        scene2.setAttribute("visible", "false");
        camera1.setAttribute("fov", "50");
        audioMainMenu.play();
      }
    });

    var progress = document.querySelector("#progress");
    var porcentaje = document.querySelector("#porcentaje");
    var porcentaje1 = document.querySelector("#porcentaje1");
    var progress_bar = document.querySelector("#progress_bar");
    var videoReiniciado = false;
    var valor_verdaera = false;

    video.addEventListener("progress", function () {
      if (valor_verdaera) {
        var buffered = video.buffered;
        if (buffered.length > 0) {
          var percent = (buffered.end(0) / video.duration) * 10;
          console.log("Porcentaje de carga: " + percent.toFixed(3) + "%");
          progress.setAttribute("width", `${percent.toFixed(3)}`);

          porcentaje.setAttribute("value", `${percent.toFixed(1) * 2 * 10}%`);
          porcentaje1.setAttribute("value", `${percent.toFixed(1) * 2 * 10}%`);
          if (percent >= 5 && !videoReiniciado) {
            console.log("El video está completamente cargado.");
            video1.setAttribute("color", "");
            video1.setAttribute("cargando", "no");
            video.muted = false;

            if (ascene.is("vr-mode")) {
              butonPaused.setAttribute("position", "0 -1.3 0");
            } else {
              butonPaused.setAttribute("position", "0 -3.1 0");
            }

            video.currentTime = 0;
            video.volume = 50 / 100;

            video.play();
            valor_verdaera = false;
            videoReiniciado = true;
            progress_bar.setAttribute("visible", false);
            progress_bar.setAttribute("position", "0 25 0");
          }
        }
      }
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
    var counter = document.querySelector("#counter");
    var video1 = document.querySelector("#video1");

    var audioMainMenu = document.querySelector("#audioMainMenu");
    var audioBackgroud = document.querySelector("#audioBackgroud");
    var audioVoicer = document.querySelector("#audioVoicer");
    var textCounter = document.querySelector("#text-counter");
    var plano_rain = document.querySelector("#plano_rain");
    var ring = document.querySelector("#ring");

    let scene3 = false;

    var el = this.el;
    el.addEventListener("click", function () {
      let controls =
        document.querySelector("a-camera").components["look-controls"];
      controls.pitchObject.rotation.x = 0;
      controls.yawObject.rotation.y = 0;
      scene3 = true;
      video.setAttribute("esene", "true");

      var audioBackgroud1 = localStorage.getItem("audioBackgroud");
      var audioVoicer1 = localStorage.getItem("audioVoicer");
      var videoAudio1 = localStorage.getItem("videoAudio");

      scene1.setAttribute("visible", "false");
      scene1.setAttribute("position", "0 15 0");
      scene2.setAttribute("rotation", "0 0 0");
      scene2.setAttribute("visible", "true");
      camera1.setAttribute("fov", "80");
      menuPause.setAttribute("position", "0 25 0");

      audioMainMenu.pause();

      audioBackgroud.src =
        "./assets/audios/audios_backgroud_music/Rain_Scene_Background_Music.mp3";
      audioBackgroud.volume = 0 / 100;
      audioVoicer.src = "./assets/audios/audios_voiceovers/Rain_Post.mp3";
      audioVoicer.volume = 0 / 100;
      video.src = "./assets/videos/rain.mp4";
      video1.setAttribute("color", "#000000");
      video1.setAttribute("cargando", "si");

      video.volume = 0.5;
      video.muted = true;
      video.play();
      valor_verdaera = true;
      videoReiniciado = false;
      progress_bar.setAttribute("visible", true);
      progress_bar.setAttribute("position", "0 0 0");
    });

    let stop = false;

    el.addEventListener("mouseenter", function () {
      stop = false;
      plano_rain.setAttribute("opacity", "0.25");
      // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 720; dur: 1500")
      ring.setAttribute("material", "color: #0061AF");

      if (ring.getAttribute("visible") == true) {
        counter.setAttribute("visible", "true");
        textCounter.setAttribute("visible", "true");
        textCounter.setAttribute("value", "3");

        let contador = 3;
        const interval = setInterval(() => {
          if (stop == true) {
            console.log("se paro sepetirnamente");
            clearInterval(interval);
          }
          console.log(contador);
          textCounter.setAttribute("value", `${contador}`);

          contador--;

          if (contador < 0) {
            clearInterval(interval);
            console.log("¡Tiempo terminado!");
          }
        }, 1000); // Mostrará el contador cada 1 segundo (1000 milisegundos)
      }
    });
    el.addEventListener("mouseleave", function () {
      stop = true;
      plano_rain.setAttribute("opacity", "0");
      ring.setAttribute("material", "color: white");

      if (ring.getAttribute("visible") == true) {
        counter.setAttribute("visible", "false");
        textCounter.setAttribute("visible", "false");
        textCounter.setAttribute("value", "3");
      }

      // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 0; dur: 150")
    });

    testVideo.addEventListener("ended", function () {
      if (video.getAttribute("esene") == "true") {
        console.log("temino de video glare");

        scene1.setAttribute("visible", "true");
        scene1.setAttribute("position", "0 0 0");
        scene2.setAttribute("visible", "false");
        camera1.setAttribute("fov", "50");
        audioMainMenu.play();
      }
      // Aquí puedes realizar las acciones que desees al finalizar el video
    }); // var videoElement = this.el.components.material.material.map.image;s

    var progress = document.querySelector("#progress");
    var porcentaje = document.querySelector("#porcentaje");
    var porcentaje1 = document.querySelector("#porcentaje1");
    var progress_bar = document.querySelector("#progress_bar");
    var videoReiniciado = false;
    var valor_verdaera = false;

    // Escuchamos el evento "progress" para mostrar el porcentaje de carga
    video.addEventListener("progress", function () {
      if (valor_verdaera) {
        var buffered = video.buffered;
        if (buffered.length > 0) {
          var percent = (buffered.end(0) / video.duration) * 10;
          console.log("Porcentaje de carga: " + percent.toFixed(3) + "%");
          progress.setAttribute("width", `${percent.toFixed(3)}`);

          porcentaje.setAttribute("value", `${percent.toFixed(1) * 2 * 10}%`);
          porcentaje1.setAttribute("value", `${percent.toFixed(1) * 2 * 10}%`);
          // Verificamos si el porcentaje es igual a 100 y si el video no se ha reiniciado
          if (percent >= 5 && !videoReiniciado) {
            console.log("El video está completamente cargado.");
            video1.setAttribute("color", "");
            video1.setAttribute("cargando", "no");
            video.muted = false;

            if (ascene.is("vr-mode")) {
              butonPaused.setAttribute("position", "0 -1.3 0");
            } else {
              butonPaused.setAttribute("position", "0 -3.1 0");
            }

            // Reiniciar el video al inicio
            video.currentTime = 0;
            video.volume = 50 / 100;

            video.play();
            valor_verdaera = false;
            videoReiniciado = true; // Marcar que el video se ha reiniciado
            progress_bar.setAttribute("visible", false);
            progress_bar.setAttribute("position", "0 25 0");
          }
        }
      }
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
    var counter = document.querySelector("#counter");
    let scene3 = false;
    var ring = document.querySelector("#ring");
    var video1 = document.querySelector("#video1");

    var textCounter = document.querySelector("#text-counter");

    var butonPaused = document.querySelector("#butonPaused");
    // var camerarotation = document.querySelector('#camerarotation')
    var eventabout1 = document.querySelector("#eventabout1");

    var plano_glare = document.querySelector("#plano_glare");

    var el = this.el;
    el.addEventListener("click", function () {
      let controls =
        document.querySelector("a-camera").components["look-controls"];
      controls.pitchObject.rotation.x = 0;
      controls.yawObject.rotation.y = 0;

      scene3 = true;
      video.setAttribute("esene", "true");
      console.log(video.getAttribute("esene"));

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

      audioBackgroud.src =
        "./assets/audios/audios_backgroud_music/Glare_Scene_Background_Music.mp3";
      audioBackgroud.volume = 0 / 100;
      audioVoicer.src = "./assets/audios/audios_voiceovers/Glare_Post.mp3";
      audioVoicer.volume = 0 / 100;
      video.src = "./assets/videos/glare.mp4";
      video1.setAttribute("color", "#000000");
      video1.setAttribute("cargando", "si");
      video.volume = 0.5;
      video.muted = true;
      video.play();
      valor_verdaera = true;
      videoReiniciado = false;
      progress_bar.setAttribute("visible", true);
      progress_bar.setAttribute("position", "0 0 0");
    });

    let stop = false;

    el.addEventListener("mouseenter", function () {
      stop = false;
      plano_glare.setAttribute("opacity", "0.25");
      // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 720; dur: 1500")
      ring.setAttribute("material", "color: #0061AF");

      if (ring.getAttribute("visible") == true) {
        counter.setAttribute("visible", "true");
        textCounter.setAttribute("visible", "true");
        textCounter.setAttribute("value", "3");

        let contador = 3;
        const interval = setInterval(() => {
          if (stop == true) {
            console.log("se paro sepetirnamente");
            clearInterval(interval);
          }
          console.log(contador);
          textCounter.setAttribute("value", `${contador}`);

          contador--;

          if (contador < 0) {
            clearInterval(interval);
            console.log("¡Tiempo terminado!");
          }
        }, 1000); // Mostrará el contador cada 1 segundo (1000 milisegundos)
      }
    });
    el.addEventListener("mouseleave", function () {
      stop = true;

      plano_glare.setAttribute("opacity", "0");
      ring.setAttribute("material", "color: white");

      if (ring.getAttribute("visible") == true) {
        counter.setAttribute("visible", "false");
        textCounter.setAttribute("visible", "false");
        textCounter.setAttribute("value", "3");
      }

      // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 0; dur: 150")
    });

    testVideo.addEventListener("ended", function () {
      if (video.getAttribute("esene") == "true") {
        console.log("temino de video glare");

        scene1.setAttribute("visible", "true");
        scene1.setAttribute("position", "0 0 0");
        scene2.setAttribute("visible", "false");
        camera1.setAttribute("fov", "50");
        audioMainMenu.play();
      }
      // Aquí puedes realizar las acciones que desees al finalizar el video
    }); // var videoElement = this.el.components.material.material.map.image;s

    var progress = document.querySelector("#progress");
    var porcentaje = document.querySelector("#porcentaje");
    var porcentaje1 = document.querySelector("#porcentaje1");
    var progress_bar = document.querySelector("#progress_bar");
    var videoReiniciado = false;
    var valor_verdaera = false;

    // Escuchamos el evento "progress" para mostrar el porcentaje de carga
    video.addEventListener("progress", function () {
      if (valor_verdaera) {
        var buffered = video.buffered;
        if (buffered.length > 0) {
          var percent = (buffered.end(0) / video.duration) * 10;
          console.log("Porcentaje de carga: " + percent.toFixed(3) + "%");
          progress.setAttribute("width", `${percent.toFixed(3)}`);

          porcentaje.setAttribute("value", `${percent.toFixed(1) * 2 * 10}%`);
          porcentaje1.setAttribute("value", `${percent.toFixed(1) * 2 * 10}%`);
          // Verificamos si el porcentaje es igual a 100 y si el video no se ha reiniciado
          if (percent >= 5 && !videoReiniciado) {
            console.log("El video está completamente cargado.");
            video1.setAttribute("color", "");
            video1.setAttribute("cargando", "no");
            video.muted = false;

            if (ascene.is("vr-mode")) {
              butonPaused.setAttribute("position", "0 -1.3 0");
            } else {
              butonPaused.setAttribute("position", "0 -3.1 0");
            }

            // Reiniciar el video al inicio
            video.currentTime = 0;
            video.play();
            valor_verdaera = false;
            videoReiniciado = true; // Marcar que el video se ha reiniciado
            progress_bar.setAttribute("visible", false);
            progress_bar.setAttribute("position", "0 25 0");
          }
        }
      }
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
    var counter = document.querySelector("#counter");
    var video1 = document.querySelector("#video1");

    var butonPaused = document.querySelector("#butonPaused");
    // var camerarotation = document.querySelector('#camerarotation')
    var eventabout1 = document.querySelector("#eventabout1");
    video.setAttribute("esene", "true");

    var ring = document.querySelector("#ring");

    var audioMainMenu = document.querySelector("#audioMainMenu");
    var audioBackgroud = document.querySelector("#audioBackgroud");
    var audioVoicer = document.querySelector("#audioVoicer");
    var textCounter = document.querySelector("#text-counter");
    var plano_insects = document.querySelector("#plano_insects");

    let scene3 = false;

    var el = this.el;

    el.addEventListener("click", function () {
      let controls =
        document.querySelector("a-camera").components["look-controls"];
      controls.pitchObject.rotation.x = 0;
      controls.yawObject.rotation.y = 0;
      scene3 = true;

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

      audioBackgroud.src =
        "./assets/audios/audios_backgroud_music/Insects_Scene_Background_Music.mp3";
      audioBackgroud.volume = 0 / 100;
      audioVoicer.src = "./assets/audios/audios_voiceovers/Insects_Post.mp3";
      audioVoicer.volume = 0 / 100;
      video.src = "./assets/videos/insects.mp4";

      video1.setAttribute("color", "#000000");
      video1.setAttribute("cargando", "si");

      video.volume = 0.5;
      video.muted = true;
      video.play();
      valor_verdaera = true;
      videoReiniciado = false;
      progress_bar.setAttribute("visible", true);
      progress_bar.setAttribute("position", "0 0 0");
    });

    let stop = false;

    el.addEventListener("mouseenter", function () {
      stop = false;
      plano_insects.setAttribute("opacity", "0.25");
      // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 720; dur: 1500")
      ring.setAttribute("material", "color: #0061AF");

      if (ring.getAttribute("visible") == true) {
        counter.setAttribute("visible", "true");
        textCounter.setAttribute("visible", "true");
        textCounter.setAttribute("value", "3");

        let contador = 3;
        const interval = setInterval(() => {
          if (stop == true) {
            console.log("se paro sepetirnamente");
            clearInterval(interval);
          }
          console.log(contador);
          textCounter.setAttribute("value", `${contador}`);

          contador--;

          if (contador < 0) {
            clearInterval(interval);
            console.log("¡Tiempo terminado!");
          }
        }, 1000); // Mostrará el contador cada 1 segundo (1000 milisegundos)
      }
    });
    el.addEventListener("mouseleave", function () {
      stop = true;

      plano_insects.setAttribute("opacity", "0");
      ring.setAttribute("material", "color: white");

      if (ring.getAttribute("visible") == true) {
        counter.setAttribute("visible", "false");
        textCounter.setAttribute("visible", "false");
        textCounter.setAttribute("value", "3");
      }

      // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 0; dur: 150")
    });

    testVideo.addEventListener("ended", function () {
      if (video.getAttribute("esene") == "true") {
        console.log("temino de video glare");

        scene1.setAttribute("visible", "true");
        scene1.setAttribute("position", "0 0 0");
        scene2.setAttribute("visible", "false");
        camera1.setAttribute("fov", "50");
        audioMainMenu.play();
      }

      // Aquí puedes realizar las acciones que desees al finalizar el video
    }); // var videoElement = this.el.components.material.material.map.image;s

    var progress = document.querySelector("#progress");
    var porcentaje = document.querySelector("#porcentaje");
    var porcentaje1 = document.querySelector("#porcentaje1");
    var progress_bar = document.querySelector("#progress_bar");
    var videoReiniciado = false;
    var valor_verdaera = false;

    // Escuchamos el evento "progress" para mostrar el porcentaje de carga
    video.addEventListener("progress", function () {
      if (valor_verdaera) {
        var buffered = video.buffered;
        if (buffered.length > 0) {
          var percent = (buffered.end(0) / video.duration) * 10;
          console.log("Porcentaje de carga: " + percent.toFixed(3) + "%");
          progress.setAttribute("width", `${percent.toFixed(3)}`);

          porcentaje.setAttribute("value", `${percent.toFixed(1) * 2 * 10}%`);
          porcentaje1.setAttribute("value", `${percent.toFixed(1) * 2 * 10}%`);
          // Verificamos si el porcentaje es igual a 100 y si el video no se ha reiniciado
          if (percent >= 5 && !videoReiniciado) {
            console.log("El video está completamente cargado.");
            video1.setAttribute("color", "");
            video1.setAttribute("cargando", "no");

            if (ascene.is("vr-mode")) {
              butonPaused.setAttribute("position", "0 -1.3 0");
            } else {
              butonPaused.setAttribute("position", "0 -3.1 0");
            }
            video.muted = false;

            // Reiniciar el video al inicio
            video.currentTime = 0;
            video.volume = 50 / 100;

            video.play();
            valor_verdaera = false;
            videoReiniciado = true; // Marcar que el video se ha reiniciado
            progress_bar.setAttribute("visible", false);
            progress_bar.setAttribute("position", "0 25 0");
          }
        }
      }
    });
  },
});

// evento de inicio

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
    let escene5 = true;
    // var cursor1 = document.querySelector('#cursor1');
    var cursor1 = document.querySelector("#cursor1");

    var butonPaused = document.querySelector("#butonPaused");
    // var camerarotation = document.querySelector('#camerarotation')
    var eventabout1 = document.querySelector("#eventabout1");
    var counter = document.querySelector("#counter");

    var audioMainMenu = document.querySelector("#audioMainMenu");
    var audioBackgroud = document.querySelector("#audioBackgroud");
    var audioVoicer = document.querySelector("#audioVoicer");
    var textCounter = document.querySelector("#text-counter");
    var plano_externo = document.querySelector("#plano_externo");
    var ring = document.querySelector("#ring");

    var el = this.el;

    // video1.addEventListener('ended', console.log('video terminado'));

    el.addEventListener("click", function () {
      let controls =
        document.querySelector("a-camera").components["look-controls"];
      controls.pitchObject.rotation.x = 0;
      controls.yawObject.rotation.y = 0;

      video.setAttribute("esene", "false");

      var audioBackgroud1 = localStorage.getItem("audioBackgroud");
      var audioVoicer1 = localStorage.getItem("audioVoicer");
      var videoAudio1 = localStorage.getItem("videoAudio");
      console.log(video.getAttribute("esene") == "false");
      console.log(video.getAttribute("esene") == "true");

      audioMainMenu.pause();
      scene1.setAttribute("visible", "false");
      // scene1.setAttribute('rotation', "0 100 0")
      scene1.setAttribute("visible", "false");
      scene1.setAttribute("position", "0 15 0");
      scene2.setAttribute("rotation", "0 0 0");
      scene2.setAttribute("visible", "true");
      camera1.setAttribute("fov", "80");
      menuPause.setAttribute("position", "0 25 0");
      video1.setAttribute("cargando", "no");

      video1.setAttribute("event-videp-end", "");

      if (ascene.is("vr-mode")) {
        butonPaused.setAttribute("position", "0 -1.3 0");
      } else {
        butonPaused.setAttribute("position", "0 -3.1 0");
      }
      audioBackgroud.src =
        "./assets/audios/audios_backgroud_music/Snow_Scene_Background_Music.mp3";
      audioBackgroud.volume = 0 / 100;
      audioVoicer.src = "./assets/audios/audios_voiceovers/Snow_Post.mp3";
      audioVoicer.volume = 0 / 100;
      video.src = "./assets/videos/snow.mp4";
      video.volume = parseInt(videoAudio1) / 100;
      video.play();
    });

    let stop = false;

    el.addEventListener("mouseenter", function () {
      stop = false;
      plano_externo.setAttribute("opacity", "0.25");
      // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 720; dur: 1500")
      ring.setAttribute("material", "color: #0061AF");

      if (ring.getAttribute("visible") == true) {
        counter.setAttribute("visible", "true");

        textCounter.setAttribute("visible", "true");
        textCounter.setAttribute("value", "3");

        let contador = 3;
        const interval = setInterval(() => {
          if (stop == true) {
            console.log("se paro sepetirnamente");
            clearInterval(interval);
          }
          console.log(contador);
          textCounter.setAttribute("value", `${contador}`);

          contador--;

          if (contador < 0) {
            clearInterval(interval);
            console.log("¡Tiempo terminado!");
          }
        }, 1000); // Mostrará el contador cada 1 segundo (1000 milisegundos)
      }
    });
    el.addEventListener("mouseleave", function () {
      stop = true;

      plano_externo.setAttribute("opacity", "0");
      ring.setAttribute("material", "color: white");

      if (ring.getAttribute("visible") == true) {
        counter.setAttribute("visible", "false");
        textCounter.setAttribute("visible", "false");
        textCounter.setAttribute("value", "3");
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
    var counter = document.querySelector("#counter");

    var textCounter = document.querySelector("#text-counter");
    cursor1.setAttribute("material", "color: white");

    var el = this.el;
    el.addEventListener("click", function () {
      menuPause.setAttribute("visible", "true");
      video1.setAttribute("color", "#1A5DA9");
      menuPause.setAttribute("position", "0 0 0");

      video.pause();
    });

    let stop = false;

    el.addEventListener("mouseenter", function () {
      stop = false;

      ring.setAttribute("material", "color: #0061AF");

      if (ring.getAttribute("visible") == true) {
        counter.setAttribute("visible", "true");
        textCounter.setAttribute("visible", "true");
        textCounter.setAttribute("value", "3");

        let contador = 3;
        const interval = setInterval(() => {
          if (stop == true) {
            console.log("se paro sepetirnamente");
            clearInterval(interval);
          }
          console.log(contador);
          textCounter.setAttribute("value", `${contador}`);

          contador--;

          if (contador < 0) {
            clearInterval(interval);
            console.log("¡Tiempo terminado!");
          }
        }, 1000); // Mostrará el contador cada 1 segundo (1000 milisegundos)
      }

      // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 720; dur: 1500")
    });
    el.addEventListener("mouseleave", function () {
      stop = true;

      ring.setAttribute("material", "color: white");
      if (ring.getAttribute("visible") == true) {
        counter.setAttribute("visible", "false");
        textCounter.setAttribute("visible", "false");
        textCounter.setAttribute("value", "3");
      }

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
    var textCounter = document.querySelector("#text-counter");
    var counter = document.querySelector("#counter");
    cursor1.setAttribute("material", "color: white");

    var el = this.el;
    el.addEventListener("click", function () {
      menuPause.setAttribute("visible", "false");
      menuPause.setAttribute("position", "0 25 0");
      video1.setAttribute("color", "");
      butonPaused.setAttribute("position", "0 -3.1 0");

      video.play();
    });

    let stop = false;

    el.addEventListener("mouseenter", function () {
      stop = false;

      // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 720; dur: 1500")
      butonContinue.setAttribute("opacity", "1.5");
      ring.setAttribute("material", "color: #0061AF");

      if (ring.getAttribute("visible") == true) {
        counter.setAttribute("visible", "true");
        textCounter.setAttribute("visible", "true");
        textCounter.setAttribute("value", "3");

        let contador = 3;
        const interval = setInterval(() => {
          if (stop == true) {
            console.log("se paro sepetirnamente");
            clearInterval(interval);
          }
          console.log(contador);
          textCounter.setAttribute("value", `${contador}`);

          contador--;

          if (contador < 0) {
            clearInterval(interval);
            console.log("¡Tiempo terminado!");
          }
        }, 1000); // Mostrará el contador cada 1 segundo (1000 milisegundos)
      }
    });
    el.addEventListener("mouseleave", function () {
      stop = true;

      // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 0; dur: 500")
      butonContinue.setAttribute("opacity", "0.5");
      ring.setAttribute("material", "color: white");

      if (ring.getAttribute("visible") == true) {
        counter.setAttribute("visible", "false");
        textCounter.setAttribute("visible", "false");
        textCounter.setAttribute("value", "3");
      }
    });
  },
});

AFRAME.registerComponent("event-about", {
  init: function () {
    var mainMenu = document.querySelector("#mainMenu");
    var aboutVideo = document.querySelector("#aboutVideo");
    var miVideo = document.querySelector("#videoabout");
    var cursor1 = document.querySelector("#cursor1");
    var counter = document.querySelector("#counter");
    var textCounter = document.querySelector("#text-counter");
    var ring = document.querySelector("#ring");

    var el = this.el;
    el.addEventListener("click", function () {
      mainMenu.setAttribute("position", "0 25 0");
      mainMenu.setAttribute("visible", "false");
      aboutVideo.setAttribute("visible", "true");
      aboutVideo.setAttribute("position", "0 0 -2");
      cursor1.setAttribute("fuse-timeout", "500");

      miVideo.pause();
      miVideo.currentTime = 0;
    });

    let stop = false;

    el.addEventListener("mouseenter", function () {
      stop = false;
      el.setAttribute("opacity", "0.25");
      // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 720; dur: 1500")
      ring.setAttribute("material", "color: #0061AF");

      if (ring.getAttribute("visible") == true) {
        counter.setAttribute("visible", "true");
        textCounter.setAttribute("visible", "true");
        textCounter.setAttribute("value", "3");

        let contador = 3;
        const interval = setInterval(() => {
          if (stop == true) {
            console.log("se paro sepetirnamente");
            clearInterval(interval);
          }
          console.log(contador);
          textCounter.setAttribute("value", `${contador}`);

          contador--;

          if (contador < 0) {
            clearInterval(interval);
            console.log("¡Tiempo terminado!");
          }
        }, 1000); // Mostrará el contador cada 1 segundo (1000 milisegundos)
      }
    });
    el.addEventListener("mouseleave", function () {
      stop = true;

      el.setAttribute("opacity", "0");
      ring.setAttribute("material", "color: white");

      if (ring.getAttribute("visible") == true) {
        counter.setAttribute("visible", "false");
        textCounter.setAttribute("visible", "false");
        textCounter.setAttribute("value", "3");
      }

      // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 0; dur: 150")
    });
  },
});

AFRAME.registerComponent("event-setting", {
  init: function () {
    var el = this.el;
    var mainMenu = document.querySelector("#mainMenu");
    var settings1 = document.querySelector("#settings1");
    var counter = document.querySelector("#counter");
    var textCounter = document.querySelector("#text-counter");
    var ring = document.querySelector("#ring");

    el.addEventListener("click", function () {
      mainMenu.setAttribute("position", "0 25 0");
      mainMenu.setAttribute("visible", "false");
      settings1.setAttribute("visible", "true");
      settings1.setAttribute("position", "0 0 -2");
    });
    let stop = false;

    el.addEventListener("mouseenter", function () {
      stop = false;
      el.setAttribute("opacity", "0.25");
      // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 720; dur: 1500")
      ring.setAttribute("material", "color: #0061AF");

      if (ring.getAttribute("visible") == true) {
        counter.setAttribute("visible", "true");
        textCounter.setAttribute("visible", "true");
        textCounter.setAttribute("value", "3");

        let contador = 3;
        const interval = setInterval(() => {
          if (stop == true) {
            console.log("se paro sepetirnamente");
            clearInterval(interval);
          }
          console.log(contador);
          textCounter.setAttribute("value", `${contador}`);

          contador--;

          if (contador < 0) {
            clearInterval(interval);
            console.log("¡Tiempo terminado!");
          }
        }, 1000); // Mostrará el contador cada 1 segundo (1000 milisegundos)
      }
    });
    el.addEventListener("mouseleave", function () {
      stop = true;
      el.setAttribute("opacity", "0");
      ring.setAttribute("material", "color: white");

      if (ring.getAttribute("visible") == true) {
        counter.setAttribute("visible", "false");
        textCounter.setAttribute("visible", "false");
        textCounter.setAttribute("value", "3");
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

      // Aquí puedes realizar las acciones que desees al finalizar el video
    }); // var videoElement = this.el.components.material.material.map.image;

    // videoElement.onended = function () {
    //   var mensajeFinVideo = document.getElementById("mensajeFinVideo");
    //   mensajeFinVideo.setAttribute("visible", "true");
    // };
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
    var textCounter = document.querySelector("#text-counter");
    var counter = document.querySelector("#counter");
    cursor1.setAttribute("material", "color: white");

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
    let stop = false;

    el.addEventListener("mouseenter", function () {
      stop = false;
      // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 720; dur: 1500")
      buttonQuit.setAttribute("opacity", "1.5");
      ring.setAttribute("material", "color: #0061AF");

      if (ring.getAttribute("visible") == true) {
        counter.setAttribute("visible", "true");
        textCounter.setAttribute("visible", "true");
        textCounter.setAttribute("value", "3");

        let contador = 3;
        const interval = setInterval(() => {
          if (stop == true) {
            console.log("se paro sepetirnamente");
            clearInterval(interval);
          }
          console.log(contador);
          textCounter.setAttribute("value", `${contador}`);

          contador--;

          if (contador < 0) {
            clearInterval(interval);
            console.log("¡Tiempo terminado!");
          }
        }, 1000); // Mostrará el contador cada 1 segundo (1000 milisegundos)
      }
    });
    el.addEventListener("mouseleave", function () {
      stop = true;

      // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 0; dur: 1500")
      buttonQuit.setAttribute("opacity", "0.5");
      ring.setAttribute("material", "color: white");

      if (ring.getAttribute("visible") == true) {
        counter.setAttribute("visible", "false");
        textCounter.setAttribute("visible", "false");
        textCounter.setAttribute("value", "3");
      }
    });
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
    var boton = document.querySelector(".a-enter-vr");
    var fullscreenButton = document.querySelector("#fullscreenButton");
    var userAgent = navigator.userAgent.toLowerCase();
    var ring = document.querySelector("#ring");
    var counter = document.querySelector("#counter");

    // Detectar el sistema operativo
    if (userAgent.indexOf("android") !== -1) {
      // Dispositivo Android
      console.log("Dispositivo Android detectado");
    } else if (
      userAgent.indexOf("iphone") !== -1 ||
      userAgent.indexOf("ipad") !== -1 ||
      userAgent.indexOf("ipod") !== -1
    ) {
      // Dispositivo iOS
      console.log("Dispositivo iOS (iPhone, iPad o iPod) detectado");
      fullscreenButton.setAttribute("style", "display:none;");
    } else {
      // Otro sistema operativo móvil o no móvil
      console.log(
        "Sistema operativo móvil no reconocido o no es un dispositivo móvil"
      );
    }

    const miElemento = document.querySelector(".a-enter-vr fullscreen");
    if (
      localStorage.getItem("audioMainMenu") !== null ||
      localStorage.getItem("audioBackgroud") !== null ||
      localStorage.getItem("audioVoicer") !== null ||
      localStorage.getItem("videoAudio") !== null
    ) {
      var audiomenu1 = localStorage.getItem("audioMainMenu");
      var audioBackgroud2 = localStorage.getItem("audioBackgroud");
      var audioVoicer3 = localStorage.getItem("audioVoicer");
      var videoAudio = localStorage.getItem("videoAudio");

      valueBack.setAttribute("value", `${audioBackgroud2}%`);
      valueEffects.setAttribute("value", `${videoAudio}%`);
      valueVoice.setAttribute("value", `${audioVoicer3}%`);
    } else {
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
      cursor1.setAttribute("visible", true);
      cursor1.setAttribute("position", "0 25 0");
      ring.setAttribute("visible", false);
      ring.setAttribute("position", "0 25 0");
      counter.setAttribute("position", "0 26 0");
      ascene.removeAttribute("vr-mode-ui");

      console.log(miElemento, "boton");
    } else {
      var time = false;
      // ascene.removeAttribute("cursor");
      //     cursor1.removeAttribute("objects");
      //     cursor1.setAttribute("fuse", "true");
      //     cursor1.setAttribute("visible", "true");
      console.log("estamos en mobile");
      // entityCamera.setAttribute("position", "0 0.5 8");

      setTimeout(() => {
        console.log("estamos dentro de 1/2 segundos");

        ascene.removeAttribute("cursor");
        cursor1.removeAttribute("objects");
        cursor1.setAttribute("fuse", "true");
        cursor1.setAttribute("visible", "true");
        ring.setAttribute("visible", true);
      }, 500);
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
    var counter = document.querySelector("#counter");
    var cursor1 = document.querySelector("#cursor1");
    var textCounter = document.querySelector("#text-counter");
    var ring = document.querySelector("#ring");

    el.addEventListener("click", function () {
      mainMenu.setAttribute("position", "0 0 0");
      mainMenu.setAttribute("visible", "true");
      aboutVideo.setAttribute("visible", "false");
      aboutVideo.setAttribute("position", "0 25 -2");
      cursor1.setAttribute("fuse-timeout", "4000");

      miVideo.pause();
      audioMainMenu.play();
    });

    el.addEventListener("mouseenter", function () {
      // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 720; dur: 1500")
      ring.setAttribute("material", "color: #0061AF");

      if (ring.getAttribute("visible") == true) {
        counter.setAttribute("visible", "true");
        textCounter.setAttribute("visible", "true");
        textCounter.setAttribute("value", "3");

        let contador = 3;
        const interval = setInterval(() => {
          if (stop == true) {
            console.log("se paro sepetirnamente");
            clearInterval(interval);
          }
          console.log(contador);
          textCounter.setAttribute("value", `${contador}`);

          contador--;

          if (contador < 0) {
            clearInterval(interval);
            console.log("¡Tiempo terminado!");
          }
        }, 1000); // Mostrará el contador cada 1 segundo (1000 milisegundos)
      }
    });
    el.addEventListener("mouseleave", function () {
      ring.setAttribute("material", "color: white");

      if (ring.getAttribute("visible") == true) {
        counter.setAttribute("visible", "false");
        textCounter.setAttribute("visible", "false");
        textCounter.setAttribute("value", "3");
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
        miVideo.volume = 0.5;
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
      playPause.setAttribute("opacity", "1");
      cursor1.setAttribute("material", "color: #0061AF");

      // setTimeout(() => {
      //   playPause.setAttribute("opacity", "0.0");
      // }, 5000);
    });

    el.addEventListener("mouseleave", function () {
      // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 0; dur: 1500")
      playPause.setAttribute("opacity", "0.1");
      cursor1.setAttribute("material", "color: #ffffff");

      // setTimeout(() => {
      //   playPause.setAttribute("opacity", "0.0");
      // }, 5000);
    });
  },
});

AFRAME.registerComponent("event-mas", {
  init: function () {
    var el = this.el;
    var valueBack = document.querySelector("#valueBack");
    var porcentaje = localStorage.getItem("audioBackgroud");
    var numero = parseInt(porcentaje);
    var cursor1 = document.querySelector("#cursor1");

    el.addEventListener("click", function () {
      var numero1 = localStorage.getItem("audioBackgroud");
      var numero2 = parseInt(numero1);
      // total = valueBack.value - 5
      if (cursor1.getAttribute("visible") == false) {
        if (numero2 !== 100) {
          numero2 += 5;
          localStorage.setItem("audioBackgroud", `${numero2}`);

          valueBack.setAttribute("value", numero2 + "%");
        }
      }

      // valueBack. setAttribute('value', `${total}`)
    });
    el.addEventListener("mouseenter", function () {
      var numero1 = localStorage.getItem("audioBackgroud");
      var numero2 = parseInt(numero1);
      // total = valueBack.value - 5
      if (ring.getAttribute("visible") == true) {
        if (numero2 !== 100) {
          numero2 += 5;
          localStorage.setItem("audioBackgroud", `${numero2}`);

          valueBack.setAttribute("value", numero2 + "%");
        }
      }

      cursor1.setAttribute("material", "color: #0061AF");

      el.setAttribute("opacity", "1");
    });
    el.addEventListener("mouseleave", function () {
      el.setAttribute("opacity", "0.5");
      cursor1.setAttribute("material", "color: #ffffff");
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
    var cursor1 = document.querySelector("#cursor1");

    let total = 0;

    el.addEventListener("click", function () {
      var numero1 = localStorage.getItem("audioBackgroud");
      var numero2 = parseInt(numero1);
      // total = valueBack.value - 5
      if (ring.getAttribute("visible") == false) {
        if (numero2 !== 0) {
          numero2 -= 5;

          localStorage.setItem("audioBackgroud", `${numero2}`);

          valueBack.setAttribute("value", numero2 + "%");
        }
      }

      // valueBack. setAttribute('value', `${total}`)
    });

    el.addEventListener("mouseenter", function () {
      var numero1 = localStorage.getItem("audioBackgroud");
      var numero2 = parseInt(numero1);
      // total = valueBack.value - 5
      if (ring.getAttribute("visible") == true) {
        if (numero2 !== 0) {
          numero2 -= 5;

          localStorage.setItem("audioBackgroud", `${numero2}`);

          valueBack.setAttribute("value", numero2 + "%");
        }
      }
      el.setAttribute("opacity", "1");
      cursor1.setAttribute("material", "color: #0061AF");
    });
    el.addEventListener("mouseleave", function () {
      el.setAttribute("opacity", "0.5");
      cursor1.setAttribute("material", "color: #ffffff");
    });
  },
});

AFRAME.registerComponent("event-mas1", {
  init: function () {
    var el = this.el;
    var valueEffects = document.querySelector("#valueEffects");
    var porcentaje = localStorage.getItem("audioBackgroud");
    var numero = parseInt(porcentaje);
    var cursor1 = document.querySelector("#cursor1");

    el.addEventListener("click", function () {
      var numero1 = localStorage.getItem("videoAudio");
      var numero2 = parseInt(numero1);
      // total = valueBack.value - 5
      if (ring.getAttribute("visible") == false) {
        if (numero2 !== 100) {
          numero2 += 5;

          localStorage.setItem("videoAudio", `${numero2}`);

          valueEffects.setAttribute("value", numero2 + "%");
        }
      }

      // valueBack. setAttribute('value', `${total}`)
    });

    el.addEventListener("mouseenter", function () {
      var numero1 = localStorage.getItem("videoAudio");
      var numero2 = parseInt(numero1);
      // total = valueBack.value - 5
      if (cursor1.getAttribute("visible") == true) {
        if (numero2 !== 100) {
          numero2 += 5;

          localStorage.setItem("videoAudio", `${numero2}`);

          valueEffects.setAttribute("value", numero2 + "%");
        }
      }
      el.setAttribute("opacity", "1");
      cursor1.setAttribute("material", "color: #0061AF");
    });
    el.addEventListener("mouseleave", function () {
      el.setAttribute("opacity", "0.5");
      cursor1.setAttribute("material", "color: #ffffff");
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
    var cursor1 = document.querySelector("#cursor1");

    el.addEventListener("click", function () {
      var numero1 = localStorage.getItem("videoAudio");
      var numero2 = parseInt(numero1);
      // total = valueBack.value - 5

      if (ring.getAttribute("visible") == false) {
        if (numero2 !== 0) {
          numero2 -= 5;

          localStorage.setItem("videoAudio", `${numero2}`);

          valueEffects.setAttribute("value", numero2 + "%");
        }
      }

      // valueBack. setAttribute('value', `${total}`)
    });

    el.addEventListener("mouseenter", function () {
      var numero1 = localStorage.getItem("videoAudio");
      var numero2 = parseInt(numero1);
      // total = valueBack.value - 5

      if (ring.getAttribute("visible") == true) {
        if (numero2 !== 0) {
          numero2 -= 5;

          localStorage.setItem("videoAudio", `${numero2}`);

          valueEffects.setAttribute("value", numero2 + "%");
        }
      }

      el.setAttribute("opacity", "1");
      cursor1.setAttribute("material", "color: #0061AF");
    });
    el.addEventListener("mouseleave", function () {
      cursor1.setAttribute("material", "color: #ffffff");

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
    var cursor1 = document.querySelector("#cursor1");

    el.addEventListener("click", function () {
      var numero1 = localStorage.getItem("audioVoicer");
      var numero2 = parseInt(numero1);
      // total = valueBack.value - 5
      if (ring.getAttribute("visible") == false) {
        if (numero2 !== 100) {
          numero2 += 5;

          localStorage.setItem("audioVoicer", `${numero2}`);

          valueVoice.setAttribute("value", numero2 + "%");
        }
      }

      // valueBack. setAttribute('value', `${total}`)
    });

    el.addEventListener("mouseenter", function () {
      var numero1 = localStorage.getItem("audioVoicer");
      var numero2 = parseInt(numero1);
      // total = valueBack.value - 5
      if (ring.getAttribute("visible") == true) {
        if (numero2 !== 100) {
          numero2 += 5;

          localStorage.setItem("audioVoicer", `${numero2}`);

          valueVoice.setAttribute("value", numero2 + "%");
        }
      }
      el.setAttribute("opacity", "1");
      cursor1.setAttribute("material", "color: #0061AF");
    });
    el.addEventListener("mouseleave", function () {
      el.setAttribute("opacity", "0.5");
      cursor1.setAttribute("material", "color: #ffffff");
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
    var cursor1 = document.querySelector("#cursor1");

    el.addEventListener("click", function () {
      var numero1 = localStorage.getItem("audioVoicer");
      var numero2 = parseInt(numero1);
      // total = valueBack.value - 5
      if (ring.getAttribute("visible") == false) {
        if (numero2 !== 0) {
          numero2 -= 5;

          localStorage.setItem("audioVoicer", `${numero2}`);

          valueVoice.setAttribute("value", numero2 + "%");
        }
      }

      // valueBack. setAttribute('value', `${total}`)
    });

    el.addEventListener("mouseenter", function () {
      var numero1 = localStorage.getItem("audioVoicer");
      var numero2 = parseInt(numero1);
      // total = valueBack.value - 5
      if (ring.getAttribute("visible") == true) {
        if (numero2 !== 0) {
          numero2 -= 5;

          localStorage.setItem("audioVoicer", `${numero2}`);

          valueVoice.setAttribute("value", numero2 + "%");
        }
      }
      el.setAttribute("opacity", "1");
      cursor1.setAttribute("material", "color: #0061AF");
    });
    el.addEventListener("mouseleave", function () {
      el.setAttribute("opacity", "0.5");
      cursor1.setAttribute("material", "color: #ffffff");
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
    var textCounter = document.querySelector("#text-counter");
    cursor1.setAttribute("material", "color: white");

    el.addEventListener("click", function () {
      mainMenu.setAttribute("position", "0 0 0");
      mainMenu.setAttribute("visible", "true");
      settings1.setAttribute("visible", "false");
      settings1.setAttribute("position", "0 25 -2");
    });

    el.addEventListener("mouseenter", function () {
      // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 720; dur: 1500")
      ring.setAttribute("material", "color: #0061AF");

      if (ring.getAttribute("visible") == true) {
        counter.setAttribute("visible", "true");
        textCounter.setAttribute("visible", "true");
        textCounter.setAttribute("value", "3");

        let contador = 3;
        const interval = setInterval(() => {
          if (stop == true) {
            console.log("se paro sepetirnamente");
            clearInterval(interval);
          }
          console.log(contador);
          textCounter.setAttribute("value", `${contador}`);

          contador--;

          if (contador < 0) {
            clearInterval(interval);
            console.log("¡Tiempo terminado!");
          }
        }, 1000); // Mostrará el contador cada 1 segundo (1000 milisegundos)
      }
    });
    el.addEventListener("mouseleave", function () {
      ring.setAttribute("material", "color: white");

      if (cursor1.getAttribute("visible") == true) {
        counter.setAttribute("visible", "false");
        textCounter.setAttribute("visible", "false");
        textCounter.setAttribute("value", "3");
      }

      // cursor1.setAttribute('animation__rotation', "property: rotation; to: 0 0 0; dur: 150")
    });
  },
});

AFRAME.registerComponent("event-exit", {
  init: function () {
    var el = this.el;
    var mainMenu = document.querySelector("#mainMenu");
    var exitMenu = document.querySelector("#exitMenu");
    var cursor1 = document.querySelector("#cursor1");
    var ring = document.querySelector("#ring");

    el.addEventListener("click", function () {
      mainMenu.setAttribute("position", "0 25 0");
      mainMenu.setAttribute("visible", "false");
      exitMenu.setAttribute("visible", "true");
      exitMenu.setAttribute("position", "0 0 -2");
    });

    el.addEventListener("mouseenter", function () {
      el.setAttribute("opacity", "0.3");
      ring.setAttribute("material", "color: #0061AF");
    });
    el.addEventListener("mouseleave", function () {
      el.setAttribute("opacity", "0.0");
      ring.setAttribute("material", "color: white");
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
    var textNotificacion = document.querySelector("#text-notificacion");

    var ecenes4 = false;

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
      if (video.getAttribute("esene") == "false") {
        console.log("El video ha terminado 3");
        notificacion.setAttribute("visible", "true");

        textNotificacion.setAttribute("value", "Loading next scene.");
        textNotificacion.setAttribute("width", "4");

        video1.setAttribute("color", "#000000");
        setTimeout(function () {
          console.log("Hola");
          notificacion.setAttribute("visible", "false");
          video1.setAttribute("color", "");
          textNotificacion.setAttribute(
            "value",
            "The scene will open in 3 seconds."
          );
          textNotificacion.setAttribute("width", "4");
          playNextVideo();
        }, 4000);
      }

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

        video.play();
      } else {
        console.log("estamos en el else");
        menuPause.setAttribute("visible", "true");
        menuPause.setAttribute("position", "0 0 0");
        video1.setAttribute("color", "#1A5DA9");

        // Se reproducieron todos los videos en secuencia
        // Puedes realizar alguna acción aquí o reiniciar la reproducción
        currentVideoIndex = 0;
        // videoPlayer.src = videoList[currentVideoIndex];
        // videoPlayer.play();
      }
    }
  },
});
