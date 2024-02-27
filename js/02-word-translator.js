// DECLARING VARIABLES
let languageCode
let translation
let languageName

// ASKING FOR THE LANGUAGE CODE
languageCode = prompt('Please choose one of the languages: es, de, en, or fr').trim()

// 'TRANSLATING'
if (languageCode === 'es') {
    languageName = 'Spanish'
    translation = 'Hola Mundo'
}
if (languageCode === 'de') {
    languageName = 'German'
    translation = 'Hallo Welt'
}
if (languageCode === 'fr') {
    languageName = 'French'
    translation = 'Bonjour le Monde'
}
if (languageCode !== 'es' && languageCode !== 'de' && languageCode !== 'fr') {
    languageName = 'English'
    translation = 'Hello World'
}

// DISPLAY WITHIN THE CONSOLE WINDOW
console.log(`'Hello World' in ${languageName} is: ${translation}`)