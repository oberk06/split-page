const okyanus = document.getElementById("okyanus");
const orman = document.getElementById("orman");
const btnokyanus = document.getElementById("btn-okyanus");
const btnorman = document.getElementById("btn-orman");
const okyanusbilgi = document.getElementById("okyanusbilgi");
const ormanbilgi = document.getElementById("ormanbilgi");
const body = document.querySelector("body");

let setbilgi;
let bilgifront = "Front-End Kursumuz Hakkında Bilgi Almak İçin Tıklayın...";
let bilgiback = "Back-End Kursumuz Hakkında Bilgi Almak İçin Tıklayın...";

okyanus.addEventListener("mouseenter", (e) => {
  okyanus.style.flex = 3;
  orman.style.flex = 1;

  let index = 0;

  let bilgidizi = bilgifront.split("");

  setbilgi = setInterval(() => {
    if (index < bilgidizi.length) {
      okyanusbilgi.textContent += bilgidizi[index];
    } else {
      clearInterval(setbilgi);
      setbilgi = null;
    }
    index++;
  }, 50);

  okyanusbilgi.textContent = "";
});

okyanus.addEventListener("mouseleave", () => {
  okyanus.style.flex = 1;
  orman.style.flex = 1;

  clearInterval(setbilgi);
  okyanusbilgi.textContent = "";
});

orman.addEventListener("mouseenter", (e) => {
  okyanus.style.flex = 1;
  orman.style.flex = 3;

  let index = 0;

  let bilgidizi = bilgiback.split("");

  setbilgi = setInterval(() => {
    if (index < bilgidizi.length) {
      ormanbilgi.textContent += bilgiback[index];
    } else {
      clearInterval(setbilgi);
      setbilgi = null;
    }
    index++;
  }, 50);
  ormanbilgi.textContent = "";
});

orman.addEventListener("mouseleave", () => {
  okyanus.style.flex = 1;
  orman.style.flex = 1;
  clearInterval(setbilgi);
  ormanbilgi.textContent = "";
});
