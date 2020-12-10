function questionName(name) {
  return "Is your name " + name + "?";
}

function questionAge(age) {
  return "Is your age " + age + "?";
}

function ngobrol(pertanyaan, asumsi, jawaban) {
  const stringPertanyaan = pertanyaan(asumsi); // questionAge(17)
  console.log(stringPertanyaan);
  console.log(jawaban);
}

function getKotaByKoordinat(coord) {
  if (coord[0] === 53 && coord[1] === 14) {
    return "Bandung";
  } else {
    return "Jakarta";
  }
}

ngobrol(questionName, "Odi", "Ya, saya Odi");
ngobrol(questionAge, 17, "Tidak, saya tidak berusia 17 tahun");
ngobrol(
  function (arg) {
    return "Apakah anda tinggal di kota " + getKotaByKoordinat(arg) + "?";
  },
  [53, 17],
  "Tidak, saya tidak tinggal di Bandung"
);
