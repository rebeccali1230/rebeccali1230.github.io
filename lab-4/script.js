// define setTitle function to update the title
function setTitle(newTitle) {
    const pageTitle = document.querySelector('h1'); 
    pageTitle.textContent = newTitle;
    return `Title has been updated to: ${newTitle}`;
  }

// define setBackgroundColor function to update the background color
function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    return 'Background color updated: ' + color;
}

// define setFontColor function to update the font color
function setFontColor(color) {
    document.body.style.color = color;
    return 'Font color updated: ' + color;
}

// define function setTheme to update the page theme
function setTheme(themeName) {
    const validThemes = ['theme1', 'theme2']; // create two different themes
    const body = document.body;

    // check if its a valid theme
    if (validThemes.includes(themeName)) {
        // remove existing themes
        validThemes.forEach((theme) => {
            body.classList.remove(theme);
        });

        // apply the new theme
        body.classList.add(themeName);
        return 'Theme updated: ' + themeName;
    } else {
        return 'Invalid theme: ' + themeName;
    }
}

