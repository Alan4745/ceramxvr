let test = false;

window.onload = function () {
  var barra = document.querySelector(".barra");
  var texto = document.querySelector(".texto");
  var ascene = document.querySelector("#ascene");
  var screenStart = document.querySelector("#screenStart");
  var audioMainMenu = document.querySelector("#audioMainMenu");
  var contenedorBarra = document.querySelector("#contenedorBarra");
  var textStart = document.querySelector("#textStart");
  var miVideo = document.querySelector("#videoabout");
  var testVideo = document.querySelector("#testVideo");

  // var pared = document.querySelector("#pared");
  let test1 = false;

  if (screenStart) {
    screenStart.addEventListener("click", function () {
      if (test1) {
        ascene.setAttribute("visible", "true");
        document.querySelector(".contenedor").style.display = "none";
        console.log('estamos aqui');
        localStorage.clear()
        setTimeout(() => {
          // pared.setAttribute("position", "0 25 2");
        }, 3000);
        var test = localStorage.getItem("audioMainMenu");
        console.log(test, "test");

        if (
          localStorage.getItem("audioMainMenu") !== null ||
          localStorage.getItem("audioBackgroud") !== null ||
          localStorage.getItem("audioVoicer") !== null ||
          localStorage.getItem("videoAudio") !== null
        ) {
          console.log("verdadero");
          audioMainMenu.play();
          audioMainMenu.volume =
            parseInt(localStorage.getItem("audioMainMenu")) / 100;

          console.log(parseInt(localStorage.getItem("audioMainMenu")) / 100);
        } else {
          console.log("falso");

          localStorage.setItem("audioMainMenu", "50");
          localStorage.setItem("audioBackgroud", "20");
          localStorage.setItem("audioVoicer", "80");
          localStorage.setItem("videoAudio", "60");
          miVideo.volume = 0.0
          testVideo.play()
          testVideo.pause()
          miVideo.play()
          miVideo.pause()


          audioMainMenu.play();
          audioMainMenu.volume =
            parseInt(localStorage.getItem("audioMainMenu")) / 100;
        }
      }
    });
  }

  var porcentaje = 0;
  var intervalo = setInterval(function () {
    if (porcentaje >= 100) {
      clearInterval(intervalo);
      setTimeout(function () {
        contenedorBarra.setAttribute("style", "display: none");
        textStart.setAttribute(
          "style",
          "display: block; margin-top: 50px; margin-bottom: 0px;"
        );
        test1 = true;
      }, 500);
    } else {
      porcentaje += 1;
      barra.style.width = porcentaje + "%";
      texto.innerHTML = "Loading " + porcentaje + "%";
    }
  }, 20);
};
