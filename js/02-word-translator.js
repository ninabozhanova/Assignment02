// DECLARING VARIABLES
let languageCode
let translation
let languageName

// ASKING FOR THE LANGUAGE CODE
languageCode = prompt('Please chose one of the languages: es, de, en, or fr')

// 'TRANSLATING'
if (languageCode == 'es') {
    languageName = 'Spanish'
    translation = 'Hola Mundo'
} else if (languageCode == 'de') {
    languageName = 'German'
    translation = 'Hallo Welt'
} else if (languageCode == 'fr') {
    languageName = 'French'
    translation = 'Bonjour le Monde'
} else {
    languageName = 'English'
    translation = 'Hello World'
}

// DISPLAY WITHIN THE BROWSER WINDOW
window.document.write(`'Hello World' in ${languageName} is: <b>${translation}</b>`)