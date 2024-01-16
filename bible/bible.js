/* Reads a CSV file and returns an object with the fields named by the headers
 * and containing list of elements.
 */
async function fetchAndReadCsv(filename) {
    let response = await fetch(filename)  // Replace with the path to your "hello.csv" file
    if (!response.ok) {
        throw new Error(`HTTP Status ${response.status}. Error fetch ${filename}.`);
    }
    let result = parseCsvData(await response.text());
    return result;
}


/* Receives a string and returns an object with fields named by headers 
 * and containing list of elements (length of rows).
 */
function parseCsvData(csvData) {
    const rows = csvData.split('\n');
    const headers = rows[0].split(',').map(header => header.trim());
    const csvObject = {};

    // Initialize object properties with empty arrays
    headers.forEach(header => {
        csvObject[header] = [];
    });

    // Populate the object with data
    for (let i = 1; i < rows.length; i++) {
        if (rows[i] == '') {
            continue;
        }
        const columns = rows[i].split(',');

        headers.forEach((header, index) => {
            try {
                csvObject[header].push(columns[index].trim());
            } catch {
                console.error(columns);
            }
        });
    }

    return csvObject;
}


/* List of objects (each row) from toc.csv with headers as field names. */
let tableOfContent = fetchAndReadCsv("bible/toc.csv").then(toc =>
    Object.fromEntries(
        toc.id.map((id, index) => [
            id, {
                id: id,
                volume: toc.volume[index],
                genre: toc.genre[index],
                name: toc.name[index],
                chapterCount: toc.chapters[index]
            }
        ])
    )
);


/* List of book names for select field */
let bookNames = tableOfContent
    .then(Object.values)
    .then(entry =>
        entry.map(value =>
            [value.id, value.name]));

/* HTML element for new user input as a table row */
async function getUserInput() {
    var row = document.createElement('tr');

    // Create a select input field for the third column
    var selectBook = document.createElement('select');
    selectBook.name = "book";

    let bookNames_ = await bookNames;
    bookNames_.forEach(([bookId, bookName]) => {
        const option = document.createElement('option');
        option.value = bookId;
        option.text = bookName;
        selectBook.add(option);
    });

    var thirdColumn = document.createElement('td');
    thirdColumn.appendChild(selectBook);
    row.appendChild(thirdColumn);

    var fourthColumn = document.createElement('td');
    var selectChapter = document.createElement('input');
    selectChapter.type = 'number';
    selectChapter.name = "chapter";
    selectChapter.defaultValue = 1;

    fourthColumn.appendChild(selectChapter);
    row.appendChild(fourthColumn);

    var fifthColumn = document.createElement('td');
    var selectVerse = document.createElement('input');
    selectVerse.type = 'number';
    selectVerse.name = 'verse';
    selectVerse.defaultValue = 1;
    fifthColumn.appendChild(selectVerse);
    row.appendChild(fifthColumn);

    return row;
}

function getCheckmarkedText(guessed, trueVal, checkForDistance = false) {
    const correctGuess = guessed == trueVal; 
    const checkMark = correctGuess ? '✅' : '❌';
    if (!correctGuess && checkForDistance) {
        guessed = parseInt(guessed);
        trueVal = parseInt(trueVal);
        const trueDistance = Math.abs(guessed - trueVal);
        var distanceMarker;
        if (trueDistance < 5) {
            distanceMarker = "very hot";
        } else if (trueDistance < 10) {
            distanceMarker = "hot";
        } else if (trueDistance < 30) {
            distanceMarker = "cold";
        } else {
            distanceMarker = "very cold";
        }
        return `${guessed} ${checkMark} (${distanceMarker})`;
    }
    else {
        return `${guessed} ${checkMark}`;
    }
}

/* HTML element of last user input as a table row */
async function getPastInput(bookId, chapterNumber, verseNumber) {
    const row = document.createElement('tr');

    const tableOfContent_ = await tableOfContent;
    const guessMetadata = tableOfContent_[bookId];

    const volume = document.createElement('td');
    volume.innerText = getCheckmarkedText(`${guessMetadata.volume} Testament`, `${bookMetadata.volume} Testament`);
    row.appendChild(volume);

    const genre = document.createElement('td');
    genre.innerText = getCheckmarkedText(guessMetadata.genre, bookMetadata.genre);
    row.appendChild(genre);

    const book = document.createElement('td');
    book.innerText = getCheckmarkedText(guessMetadata.name, bookMetadata.name);
    row.appendChild(book);

    const chapter = document.createElement('td');
    chapter.innerText = getCheckmarkedText(chapterNumber, randomChapter, guessMetadata.name == bookMetadata.name);
    row.appendChild(chapter);

    const verse = document.createElement('td');
    verse.innerText = getCheckmarkedText(verseNumber, randomVerse, guessMetadata.name == bookMetadata.name);
    row.appendChild(verse);

    const textElement = document.createElement("td");
    var verseText = await getVerse(bookId, chapterNumber, verseNumber);
    verseText = verseText[0].length > 55 ? verseText[0].slice(0, 50) + "..." : verseText[0]; 
    textElement.innerText = verseText;
    row.appendChild(textElement);
    return row;
}


/* Global */
var randomChapterId;
var randomVerse;
var randomChapter;
var bookId;
var bookMetadata;


async function getVerse(bookId, chapter, verse) {
    let response = await fetch(`bible/data/${bookId}.json`)
    if (!response.ok) {
        throw new Error(`HTTP Status ${response.status}. Error fetch ${filename}.`);
    }
    const bookContent = await response.json();
    const verseContent = bookContent[chapter.toString()][verse.toString()];
    const verseCitation = `[${bookMetadata.volume} Testament ${bookMetadata.genre}] `
        + `${bookMetadata.name} ${randomChapter}:${randomVerse} (Catholic Public Domain Version)`;
    return [verseContent, verseCitation];
}

/* Get random verse and displays on page. */
async function getRandomVerse() {
    const data = await fetchAndReadCsv("bible/verses_metadata.csv");
    randomChapterId = Math.floor(Math.random() * data["verses"].length);
    randomVerse = Math.floor(Math.random() * data["verses"][randomChapterId] + 1);
    randomChapter = data["chapter"][randomChapterId];
    bookId = data['book_id'][randomChapterId];
    let toc = await tableOfContent;
    bookMetadata = toc[bookId];
    let [verseContent, verseCitation] = await getVerse(bookId, randomChapter, randomVerse);
    return [verseContent, verseCitation];
}

// fetchAndReadCsv("bible/verses_metadata.csv")
// .then(data => { 
//     console.log(data["verses"])
//     sum = data["verses"].reduce((accumulator, currentValue) => {
//         return accumulator + parseInt(currentValue);
//     }, 0);
//     console.log(sum)
// })


getRandomVerse().then(
    ([verseContent, verseCitation]) => {
        document.getElementById("verse-content").innerText = verseContent;
        document.getElementById("verse-citation").innerText = verseCitation;
    }
);

getUserInput().then(
    row => {
        userInput = document.getElementById("user-input");
        userInput.appendChild(row);
    }
);


function submitGuess() {
    const book = document.getElementsByName('book')[0].value;
    const chapter = document.getElementsByName('chapter')[0].value;
    const verse = document.getElementsByName('verse')[0].value;

    getPastInput(book, chapter, verse).then(
        row => {
            userInput = document.getElementById("user-guesses");
            userInput.appendChild(row);
        }
    )
}
