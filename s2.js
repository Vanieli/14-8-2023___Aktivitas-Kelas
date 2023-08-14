
// Mengubah String Menjadi Huruf Kecil
function toLowerCaseString(inputString) {
    return inputString.toLowerCase();
  }
  
  const originalString = "JavaScript";
  const lowercaseString = toLowerCaseString(originalString);
  
  console.log(lowercaseString); // Output: "javascript"
  
  const substring = originalString.substring(4); // Mengambil dari indeks 4 ke akhir
  
  console.log(substring); // Output: "Script"
  
  