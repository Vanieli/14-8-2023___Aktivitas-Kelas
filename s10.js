
  // Menggabungkan Dua Nama dengan Metode concat
  function combineNames(firstName1, firstName2) {
    return firstName1.concat(" ", firstName2);
  }
  
  const firstName1 = "John";
  const firstName2 = "Doe";
  const combinedNames = combineNames(firstName1, firstName2);
  
  console.log(combinedNames); // Output: "John Doe"
  