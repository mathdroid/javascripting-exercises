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
  
  ngobrol(questionName, "Odi", "Ya, saya Odi");
  ngobrol(questionAge, 17, "Tidak, saya tidak berusia 17 tahun");
  