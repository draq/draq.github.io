function fetchAndReadCsv(filename) {
    result = fetch(filename)  // Replace with the path to your "hello.csv" file
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP Status ${response.status}. Error fetch ${filename}.`);
            }
            return response.text();
        })
        .then(parseCsvData)
        .catch(error => {
            console.error('Error fetching CSV file:', error.message);
        });
    return result;
}

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

let tableOfContent;
fetchAndReadCsv("bible/toc.csv")
.then(toc => { 
    tableOfContent =  Object.fromEntries(
        toc.id.map((id, index) => [
            id, { 
                volume: toc.volume[index],
                genre: toc.genre[index],
                name: toc.name[index],
                chapterCount: toc.chapters[index]
            }
        ])   
    );
});

function getVerse() {
    fetchAndReadCsv("bible/verses_metadata.csv")
    .then(data => {
        const randomChapterId = Math.floor(Math.random() * data["verses"].length);
        const randomVerse = Math.floor(Math.random() * data["verses"][randomChapterId] + 1);
        const chapter = data["chapter"][randomChapterId];
        const bookId = data['book_id'][randomChapterId];
        const bookMetadata = tableOfContent[bookId];
        fetch(`bible/data/${bookId}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP Status ${response.status}. Error fetch ${filename}.`);
            }
            return response.json();
        })
        .then(book => {
            verseContent = book[chapter.toString()][randomVerse.toString()];
            document.getElementById("verse-content").innerText = verseContent;
            document.getElementById("verse-citation").innerText = `[${bookMetadata.volume} Testament ${bookMetadata.genre}] ` 
                + `${bookMetadata.name} ${chapter}:${randomVerse} (Catholic Public Domain Version)`
        })

    });
}

// fetchAndReadCsv("bible/verses_metadata.csv")
// .then(data => { 
//     console.log(data["verses"])
//     sum = data["verses"].reduce((accumulator, currentValue) => {
//         return accumulator + parseInt(currentValue);
//     }, 0);
//     console.log(sum)
// })

getVerse();