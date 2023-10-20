const emojiContainer = document.querySelector(".emoji-gallery");

for (let item of emoji) { 
    const emojiItem = document.createElement('div');
    emojiItem.className = 'emoji-item';
    
    const emojiChar = document.createElement('div');
    emojiChar.className = 'emoji-char'; 
    emojiChar.innerText = item.char;
    
    const emojiName = document.createElement('div');
    emojiName.className = 'emoji-name'; 
    emojiName.innerText = item.name;
    
    emojiItem.appendChild(emojiChar);
    emojiItem.appendChild(emojiName);
    emojiContainer.appendChild(emojiItem);
}

