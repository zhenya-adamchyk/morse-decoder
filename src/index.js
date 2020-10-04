const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const words = expr.split('**********');
    const decodedWords = words.map(word => {
        let newWord = '';
        for (let i = 0; i < word.length; i += 10) {
            let code = '';
            let letter = word.slice(i, i + 10);
            while (letter[0] !== '1') {
                letter = letter.slice(2);
            }
            for (let g = 0; g < letter.length; g += 2) {
                const morseElem = letter.slice(g, g + 2);
                if (morseElem === '10') {
                    code += '.';
                } else {
                    code += '-';
                }
            }
            newWord += MORSE_TABLE[code];
        }
        return newWord;
    }) 
    return decodedWords.join(' ');
}

module.exports = {
    decode
}