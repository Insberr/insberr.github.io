// Return Key Enters
/*
secretCodeInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("codeButton").click();
    }
});

document.getElementById("outputSecretCode").innerHTML = "Your translated text will go here";
*/

var characterMap = {
    a: "@",
    b: "/",
    c: "+",
    d: "$",
    e: "3",
    f: "&",
    g: "*",
    h: "(",
    i: "8",
    j: ")",
    k: "'",
    l: '"',
    m: ":",
    n: ";",
    o: "9",
    p: "0",
    q: "1",
    r: "4",
    s: "#",
    t: "5",
    u: "7",
    v: "=",
    w: "2",
    x: "-",
    y: "6",
    z: "%",
    "1": "q",
    "2": "w",
    "3": "e",
    "4": "r",
    "5": "t",
    "6": "y",
    "7": "u",
    "8": "i",
    "9": "o",
    "0": "p",
    ".": "?",
    "?": ".",
    "!": ",",
    ",": "!",
    "@": "a",
    "/": "b",
    "+": "c",
    $: "d",
    "&": "f",
    "*": "g",
    "(": "h",
    ")": "j",
    "'": "k",
    "‘": "k",
    '"': "l",
    "“": "l",
    ":": "m",
    ";": "n",
    "#": "s",
    "=": "v",
    "-": "x",
    "%": "z",
    " ": " ",
    "\n": "<br>",
};

function secretCode(input, callback) {
    var output = input.toLowerCase().split('').map(character => characterMap[character]).join('');
    callback(output);
}
