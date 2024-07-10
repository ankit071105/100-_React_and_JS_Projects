const btn = document.querySelector(".butt");

const result = document.querySelector(".result");
const checkPalindrome = () => {
    const word = document.querySelector(".input").value;
    let len = word.length;

    let start = word.substring(0, Math.floor(len / 2)).toLowerCase();

    let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
    const flip = [...end].reverse().join("");

    if(start == flip) {
        result.innerHTML = `${word.toUpperCase()} is a palindrome`;
    }
    else {
        result.innerHTML = `${word.toUpperCase()} is NOT a palindrome`;
    }
}
btn.addEventListener("click" , checkPalindrome);
