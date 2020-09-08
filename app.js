const form1 = document.getElementById("form-1");
const form2 = document.getElementById("form-2");
const form3 = document.getElementById("form-3");

const next = document.getElementById("next");
const next1 = document.getElementById("next-1");
const back = document.getElementById("back");
const back1 = document.getElementById("back-1");

const progress = document.getElementById("progress");

next.onclick = () => {
  form1.style.left = "-450px";
  form2.style.left = "40px";
  progress.style.width = "240px";
};

back.onclick = () => {
  form1.style.left = "40px";
    form2.style.left = "450px";
    progress.style.width = "120px";
};

next1.onclick = () => {
  form2.style.left = "-450px";
    form3.style.left = "40px";
    progress.style.width = "360px";
};

back1.onclick = () => {
  form2.style.left = "40px";
    form3.style.left = "450px";
    progress.style.width = "240px";
};
