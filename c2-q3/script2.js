function searchText() {
    const input = document.getElementById("userInput").value;
    const searchValue = document.getElementById("searchText").value;
    const resultArea = document.getElementById("resultArea");

    if (!searchValue) {
        alert("Enter text to search!");
        return;
    }

    const regex = new RegExp(searchValue, "gi");

    const matches = input.match(regex);

    if (matches) {
        resultArea.value = "Found " + matches.length + " match(es):\n\n" + matches.join("\n");
    } else {
        resultArea.value = "No matches found.";
    }
}


function replaceText() {
    const input = document.getElementById("userInput").value;
    const searchValue = document.getElementById("searchText").value;
    const replaceValue = document.getElementById("replaceText").value;
    const resultArea = document.getElementById("resultArea");

    if (!searchValue) {
        alert("Enter text to replace!");
        return;
    }

    const regex = new RegExp(searchValue, "gi");

    const replacedText = input.replace(regex, replaceValue);

    resultArea.value = replacedText;
}


function formatText() {
    const input = document.getElementById("userInput").value;
    const resultArea = document.getElementById("resultArea");

    let formatted = input.replace(/\s+/g, " ").trim();

    formatted = formatted.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });

    resultArea.value = formatted;
}