function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    
  
    // Compare the original string with its reverse
    const cleanStr = str.split('').reverse().join('');
    return cleanStr;
  }
  
  // Example usage:
  const testString = "sravanthi";
  console.log(isPalindrome(testString)); // Output: true
