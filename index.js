

function compareStrings(str1, str2, str3) {
  const words = [str1, str2, str3];

  const sortedWords = words.sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }));
  
  return sortedWords.join("");
}

const first = "abecce";
const second = "abbbe";
const third = "Aaaaccbbe";

compareStrings(first, second, third);