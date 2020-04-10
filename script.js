let keysRu = [
    ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab","й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\","Del"],
    ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
    ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "Shift"],
    ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"]
];

let keysEn = [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab","q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\","Del"],
    ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
    ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Shift"],
    ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"]
];

let codes = [
    ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"],
    ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete"],
    ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter"],
    ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight"],
    ["ControlLeft", "OSLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"]
];

let simbolRu = [
['', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', ''],
['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
['', '', '', '', '', '', '', '', '', '', '', '', ''],
['', '', '', '', '', '', '', '', '', '', '', '', ''],
['', '', '', '', '', '', '', '', '']
];

let simbolEn = [
['', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', ''],
['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
['', '', '', '', '', '', '', '', '', '', '', '', ''],
['', '', '', '', '', '', '', '', '', '', '', '', ''],
['', '', '', '', '', '', '', '', '']
];

let container = document.createElement('div');
let keyboard = document.createElement('div');
let textarea = document.createElement('textarea');

container.className = "container";
keyboard.className = "keyboard";
textarea.className = 'textarea';
    
document.body.append(container);
container.appendChild(textarea);
container.append(keyboard);
textarea.focus();
textarea.setAttribute('cols', 70);
    

for(i = 0; i < keysRu.length; i++){
    let row = document.createElement('div');
    row.className = 'row';
    keyboard.append(row);
    for(j = 0; j < keysRu[i].length; j++) {
        let button = document.createElement('div');
        button.className = 'button'; 
        button.classList.add(codes[i][j]);
        row.append(button);
            
        let rus = document.createElement('span');
        rus.className = 'rus';
            
        button.append(rus);  
        rus.classList.add('block');  

        let letter = document.createElement('span');
        letter.className = 'letter';
        rus.append(letter);
        letter.classList.add('block')
        letter.innerHTML = keysRu[i][j];

        let signalRu = document.createElement('span');
        signalRu.className = 'signal';
        signalRu.innerHTML = simbolRu[i][j];

        rus.append(signalRu);
        signalRu.classList.add('hidden');
            
        let eng = document.createElement('span');

        eng.className = 'eng';
        button.append(eng);
        eng.classList.add('hidden');
            
        letter = document.createElement('span');
        letter.className = 'letter';
        eng.append(letter);
        letter.classList.add('block')
        letter.innerHTML = keysEn[i][j];

        let signalEng = document.createElement('span');
        signalEng.className = 'signal';
        signalEng.innerHTML = simbolEn[i][j];

        eng.append(signalEng);
        signalEng.classList.add('hidden');
    }  
}

function isSpecial(key) {
    if(key.classList.contains("ControlLeft") || key.classList.contains("AltLeft") || 
        key.classList.contains("OSLeft") || key.classList.contains("ShiftLeft") || 
        key.classList.contains("CapsLock") || key.classList.contains("Tab") ||
        key.classList.contains("Backspace") || key.classList.contains("Delete") || 
        key.classList.contains("Enter") || key.classList.contains("ControlRight") || 
        key.classList.contains("AltRight") || key.classList.contains("ShiftRight") ||
        key.classList.contains("ArrowLeft") || key.classList.contains("ArrowRight") ||
        key.classList.contains("ArrowDown") || key.classList.contains("ArrowUp")){
            return true;
    }
    else
        return false; 
}

function isDigit(key) {
    if(key.classList.contains('Digit1') || key.classList.contains('Digit2') || key.classList.contains('Digit3') || 
        key.classList.contains('Digit4') || key.classList.contains('Digit5') || key.classList.contains('Digit6') || 
        key.classList.contains('Digit7') || key.classList.contains('Digit8') || key.classList.contains('Digit9') || 
        key.classList.contains('Digit0') || key.classList.contains('Minus') || key.classList.contains('Equal')) {
            return true;
    }
        else 
            return false;
}

function lettertoUpperCase() {
    document.querySelectorAll('.button').forEach(el => {
        if(!(isSpecial(el)) && !(isDigit(el))) {
            el.childNodes.forEach(element => {
                if(element.classList.contains('block')) { 
                    let data = element.querySelector('.block').innerText.toUpperCase();
                    element.querySelector('.block').innerText = '';
                    element.querySelector('.block').innerText = data;
                }
            }) 
        }       
    })
}

function lettertoLowerCase() { 
    document.querySelectorAll('.button').forEach(el => {
        if(!(isSpecial(el)) && !(isDigit(el))) {
            el.childNodes.forEach(element => {
                if(element.classList.contains('block')) {
                    let data = element.querySelector('.block').innerText.toLowerCase();
                    element.querySelector('.block').innerText = '';
                    element.querySelector('.block').innerText = data;
                }
            })    
        }       
    })
}


function digittoSimbol() {
    document.querySelectorAll('.button').forEach(el => {
        el.childNodes.forEach(element => {
            if(isDigit(el)) {
                if(element.classList.contains('block')) {
                    let block = element.querySelector('.letter');
                    let hidden = element.querySelector('.signal');
                    block.classList.remove('block');
                    block.classList.add('hidden');
                    hidden.classList.remove('hidden');
                    hidden.classList.add('block');
                }

            }
        })
    })         
}

function simboltoDigit() {
    document.querySelectorAll('.button').forEach(el => {
        el.childNodes.forEach(element => {
            if(isDigit(el)) {
                if(element.classList.contains('block')) {
                    let block = element.querySelector('.signal');
                    let hidden = element.querySelector('.letter');
                    block.classList.remove('block');
                    block.classList.add('hidden');
                    hidden.classList.remove('hidden');
                    hidden.classList.add('block');
                }

            }
        })
    })         
}

//Change Language 
function changeLanguage() {
    document.querySelectorAll('.button').forEach(button => {     
        button.childNodes.forEach(el => {
            if(el.classList.contains('block')){
                el.classList.remove("block");
                el.classList.add("hidden");
            }
            else {
                el.classList.add("block");
                el.classList.remove("hidden"); 
            }
        })
    })
}

//Position Cursor
function setCursorPosition(position) {
            textarea.selectionStart = position;
            textarea.selectionEnd = position;
}

//Backspace
function backspace() {
    let position = textarea.selectionStart - 1;
    if(textarea.selectionStart == textarea.selectionEnd) {
        textarea.value = textarea.value.substring(0, textarea.selectionStart - 1).concat(textarea.value.substring(textarea.selectionStart, textarea.value.length));
        setCursorPosition(position);
    }
    else {
        textarea.value = textarea.value.substring(0, textarea.selectionStart).concat(textarea.value.substring(textarea.selectionEnd, textarea.value.length));
        setCursorPosition(position);
    }
}

//Delete
function deleteLetter() {
    let position = textarea.selectionStart;
    if(textarea.selectionStart == textarea.selectionEnd) {
        textarea.value = textarea.value.substring(0, textarea.selectionStart).concat(textarea.value.substring(textarea.selectionStart + 1, textarea.value.length));
        setCursorPosition(position);
    }
    else {
        textarea.value = textarea.value.substring(0, textarea.selectionStart).concat(textarea.value.substring(textarea.selectionEnd, textarea.value.length));
        setCursorPosition(position);
    }
}

//Space
function spaceLetter() {  
    let position = textarea.selectionStart;
    if(textarea.selectionStart != textarea.value.length) {    
        textarea.value = textarea.value.substring(0, textarea.selectionStart - 1).concat(' ', textarea.value.substring(textarea.selectionStart - 1, textarea.value.length));
        setCursorPosition(position);
    }
    else {
        textarea.value += " ";    
    } 
}

//Enter
function enterLetter() {  
    let position = textarea.selectionStart + 1;
    if(textarea.selectionStart != textarea.value.length) {    
        textarea.value = textarea.value.substring(0, textarea.selectionStart).concat('\n', textarea.value.substring(textarea.selectionStart, textarea.value.length));
        setCursorPosition(position);
    }
    else {    
        textarea.value += '\n';    
    }
}

//Tab
function tabLetter() {     
    let position = textarea.selectionStart + 2;
    if(textarea.selectionStart != textarea.value.length) {    
        textarea.value = textarea.value.substring(0, textarea.selectionStart).concat('  ', textarea.value.substring(textarea.selectionStart, textarea.value.length));
        setCursorPosition(position);
    }
    else {
        textarea.value += '  ';   
    } 
}

function arrowLeft() {    
    if(textarea.selectionStart - 1 != -1)  
        setCursorPosition(textarea.selectionStart - 1); 
}

function arrowRight() {  
    setCursorPosition(textarea.selectionStart + 1); 
}
        
function arrowUp() { 
    if(textarea.selectionStart >= textarea.getAttribute('cols')) {    
        setCursorPosition(textarea.selectionStart - textarea.getAttribute('cols'));
    }
}

function arrowDown() {  
    if(Number(textarea.selectionStart) + Number(textarea.getAttribute('cols')) <= textarea.value.length) {   
        setCursorPosition(Number(textarea.selectionStart) + Number(textarea.getAttribute('cols'))); 
    }
}

/**************   Keydown   ***************/    
    document.addEventListener('keydown', function (event) {
        event.preventDefault();
        
        let pressedKey = document.querySelector("." + event.code);

        //Pressed button
        if (pressedKey.classList.contains("CapsLock")) {
            pressedKey.classList.toggle("pressed");
        }      
        else {
            pressedKey.classList.add("pressed"); 
        }

        //CapsLock
        if(document.querySelector('.CapsLock').classList.contains('pressed')){

            lettertoUpperCase();
        }

        //Unpressed Shift and CapsLock
        else if(!document.querySelector('.CapsLock').classList.contains('pressed') && 
        !document.querySelector(".ShiftLeft").classList.contains('pressed') && 
        !document.querySelector(".ShiftRight").classList.contains('pressed')) {
            lettertoLowerCase();
        }

        //Pressed Shift
        if(pressedKey.classList.contains("ShiftLeft") || pressedKey.classList.contains("ShiftRight") &&
        pressedKey.classList.contains('AltLeft')) {
            lettertoUpperCase();
        }

        //Pressed Shift
        if(document.querySelector(".ShiftLeft").classList.contains('pressed') || 
            document.querySelector(".ShiftRight").classList.contains('pressed') &&
            !document.querySelector(".AltLeft").classList.contains('pressed')) {
                digittoSimbol();
        }   
        
        //Change language
        if(document.querySelector('.ShiftLeft').classList.contains('pressed') && 
            document.querySelector(".AltLeft").classList.contains('pressed')) {
                changeLanguage();
        } 

        //Add letter
        if(!(isSpecial(pressedKey))) {
            let position = textarea.selectionStart + 1;
            if(textarea.selectionStart != textarea.value.length) {
                textarea.value = textarea.value.substring(0, textarea.selectionStart) +  pressedKey.querySelector('.block').innerText + textarea.value.substring(textarea.selectionStart, textarea.value.length);
                setCursorPosition(position);
            }
            else {
                textarea.value += pressedKey.querySelector('.block').querySelector('.block').innerText;
            }
        }

        //Backspace
        if (pressedKey.classList.contains("Backspace")) {
            backspace();
        }

        //Delete
        if (pressedKey.classList.contains("Delete")) {
            deleteLetter();
        }

        //Space
        if (pressedKey.classList.contains("Space")) {  
            spaceLetter();
        }

        //Enter
        if (pressedKey.classList.contains("Enter")) {  
          enterLetter();
        }

        //Tab
        if (pressedKey.classList.contains("Tab")) {     
           tabLetter();
        }

        //Arrow
        if (pressedKey.classList.contains("ArrowLeft")) {    
            arrowLeft();
        }
        if (pressedKey.classList.contains("ArrowRight")) {  
            arrowRight();
        }
        if (pressedKey.classList.contains("ArrowUp")) { 
           arrowUp();
        }
        if (pressedKey.classList.contains("ArrowDown")) {  
            arrowDown();
        }
    }); 

/**************   Keyup   ***************/    
    document.addEventListener('keyup', function(event) {
        let unpressedKey = document.querySelector("." + event.code);
        //Unpressed CapsLock
        if (!unpressedKey.classList.contains("CapsLock")) {
            unpressedKey.classList.remove("pressed"); 
        } 

        //Unpresed Shift
        if(unpressedKey.classList.contains("ShiftLeft") || unpressedKey.classList.contains("ShiftRight")) {
            lettertoLowerCase();
        }
       
        if(unpressedKey.classList.contains("ShiftLeft") || unpressedKey.classList.contains("ShiftRight") &&
        !unpressedKey.classList.contains("AltLeft")) {
            simboltoDigit();
        }
    })


 /*************** Mousedown **************/
document.addEventListener('mousedown', function(event) { 
    textarea.focus();        
    let pressedClass = event.target.parentElement.parentElement;
    if (pressedClass.classList.contains("CapsLock")) {
        document.querySelector('.CapsLock').classList.toggle("pressed");  
        if(document.querySelector('.CapsLock').classList.contains('pressed')) {
            lettertoUpperCase();
        }
        else {
            lettertoLowerCase();
        }
    }

    if (!(pressedClass.classList.contains("CapsLock")) && pressedClass.classList.contains("button")) {
        pressedClass.classList.toggle("pressed");  
        if(!isSpecial(pressedClass)) {
            textarea.value += event.target.innerText;
        }
    }

    if(event.target.classList.contains("Space")) {
        event.target.classList.toggle("pressed"); 
    }

    //Backspace
    if(document.querySelector('.Backspace').classList.contains('pressed')) {
        backspace();
    }

    //Delete
    if (document.querySelector(".Delete").classList.contains('pressed')) {
        deleteLetter();
    }

    //Space
    if (document.querySelector(".Space").classList.contains('pressed')) {  
        spaceLetter();
    }

    //Enter
    if (document.querySelector(".Enter").classList.contains('pressed')) {  
        enterLetter();
    }

    //Tab
    if (document.querySelector(".Tab").classList.contains('pressed')) {     
        tabLetter();
    }

    //Arrow
    if (document.querySelector(".ArrowLeft").classList.contains('pressed')) {     
        arrowLeft();
    }
    if (document.querySelector(".ArrowRight").classList.contains('pressed')) {     
        arrowRight();
    }
    if (document.querySelector(".ArrowUp").classList.contains('pressed')) {     
        arrowUp();
    }
    if (document.querySelector(".ArrowDown").classList.contains('pressed')) {     
        arrowDown();
    }
})

/**************   Mouseup   ***************/    
document.addEventListener('mouseup', function(event) {
    textarea.focus();
    let unpressedClass = event.target.parentElement.parentElement;
    if (!unpressedClass.classList.contains("CapsLock")) {
        if (event.target.parentElement.classList.contains("block")) {
            unpressedClass.classList.remove("pressed");
        }
        else {
            unpressedClass.classList.remove("pressed"); 
        }

        if(event.target.classList.contains("Space")) {
            event.target.classList.remove("pressed"); 
        }
    }    
})   