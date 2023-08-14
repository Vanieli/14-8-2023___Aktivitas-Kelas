
  // Mengembalikan Inisial Nama
  function getInitials(firstName, lastName) {
    const initials = `${firstName.charAt(0)}; ${lastName.charAt(0)}`;
    return `Nama Depan: ${initials[0]}; Nama Belakang: ${initials[3]}`;
  }
  
  const firstName = "John";
  const lastName = "Doe";
  const initialsResult = getInitials(firstName, lastName);
  
  console.log(initialsResult); // Output: "Nama Depan: J; Nama Belakang: D"
  
  