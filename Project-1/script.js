// Define the generateCode function, set default length to 6 and uppercase letter only
  function generateCode(length = 6, includeNumbers = false) {
    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // User may also request the code to include number
    if (includeNumbers) {
        charset += "0123456789";
    }
    
    let result = "";
    const charsetLength = charset.length;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charsetLength);
        result += charset.charAt(randomIndex);
    }

    //Return the result
    return result; 
}
