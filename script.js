document.getElementById("check-btn").addEventListener("click", function() {
    const inputText = document.getElementById("text-input").value.trim().toLowerCase(); // Trim and convert to lowercase
    const resultDiv = document.getElementById("result");
    
    if (inputText === "") {
        alert("Please input a value");
    } else {
        // Remove non-alphanumeric characters except underscores (_) and spaces - updated regex
        const cleanText = inputText.replace(/[^a-z0-9]/g, '');
        const isPalindrome = cleanText === cleanText.split('').reverse().join('');
        const result = isPalindrome ? inputText + " is a palindrome" : inputText + " is not a palindrome";
        resultDiv.textContent = result;
    }
});
