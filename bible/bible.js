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

    row.appendChild(document.createElement('td'));
    row.appendChild(document.createElement('td'));

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


/* HTML element of last user input as a table row */
async function getPastInput(bookId, chapterNumber, verseNumber) {
    var row = document.createElement('tr');

    let tableOfContent_ = await tableOfContent;
    guessMetadata = tableOfContent_[bookId];

    volume = document.createElement('td');
    volume.innerText = `${guessMetadata.volume} Testament`;
    row.appendChild(volume);

    genre = document.createElement('td');
    genre.innerText = guessMetadata.genre;
    row.appendChild(genre);

    book = document.createElement('td');
    book.innerText = guessMetadata.name;
    row.appendChild(book);

    chapter = document.createElement('td');
    chapter.innerText = chapterNumber;
    row.appendChild(chapter);

    verse = document.createElement('td');
    verse.innerText = verseNumber;
    row.appendChild(verse);

    return row;
}

/* Global */
var randomChapterId;
var randomVerse;
var chapter;
var bookId;
var bookMetadata;

/* Get random verse and displays on page. */
async function getVerse() {
    let data = await fetchAndReadCsv("bible/verses_metadata.csv");
    randomChapterId = Math.floor(Math.random() * data["verses"].length);
    randomVerse = Math.floor(Math.random() * data["verses"][randomChapterId] + 1);
    chapter = data["chapter"][randomChapterId];
    bookId = data['book_id'][randomChapterId];
    let toc = await tableOfContent;
    bookMetadata = toc[bookId];
    let response = await fetch(`bible/data/${bookId}.json`)
    if (!response.ok) {
        throw new Error(`HTTP Status ${response.status}. Error fetch ${filename}.`);
    }
    const book = await response.json();
    const verseContent = book[chapter.toString()][randomVerse.toString()];
    const verseCitation = `[${bookMetadata.volume} Testament ${bookMetadata.genre}] `
        + `${bookMetadata.name} ${chapter}:${randomVerse} (Catholic Public Domain Version)`;
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


getVerse().then(
    ([verseContent, verseCitation]) => {
        document.getElementById("verse-content").innerText = verseContent;
        document.getElementById("verse-citation").innerText = verseCitation;
    }
);

getUserInput().then(
    row => {
        userInput = document.getElementById("user-guesses");
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
            userInput.prepend(row);
        }
    )
}
