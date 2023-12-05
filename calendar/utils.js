function createVerticalTable(elemList, tableElem) {
    let header = document.createElement('thead');
    let body = document.createElement('tbody');
    tableElem.appendChild(header);
    tableElem.appendChild(body);
    headerRow = document.createElement('tr');
    header.appendChild(headerRow);
    elemList[0].forEach((val, _) => {
        let td = document.createElement('td');
        td.innerText = val;
        headerRow.appendChild(td);
    })

    elemList.slice(1).forEach((values, _) => {
        let row = document.createElement('tr');
        values.forEach((val, idx) => {
            let td = document.createElement('td');
            td.innerText = val;
            if (idx == 2) { // special sauce for solar terms
                td.classList.add('degree');
            }
            row.appendChild(td);
        });
        body.appendChild(row);
    });
}

function createHorizontalTable(elemList, tableElem, withIndex = true, decorated = true) {
    let dimension = (typeof elemList[0] == "string" ? 1 : elemList[0].length) + (withIndex ? 1 : 0);
    let rows = Array.from({ length: dimension }, (_, i) => document.createElement('tr'));
    let header = document.createElement('thead');
    let body = document.createElement('tbody');
    tableElem.appendChild(header);
    tableElem.appendChild(body);
    if (decorated) {
        body.classList.add('decorated');
    }
    header.appendChild(rows[0]);
    rows.slice(1).forEach((row, _) => body.appendChild(row));

    elemList.forEach((values, idx) => {
        if (!Array.isArray(values)) {
            values = [values];
        }
        if (withIndex) {
            if (idx === 0 && decorated) {
                idx = '次序';
            }
            values.unshift(idx);
        }

        values.forEach((val, idx) => {
            let td = document.createElement('td');
            td.innerText = val;
            rows[idx].appendChild(td);
        });
    });
}

function getLocalDatetime(datetime) {
    const dateOptions = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        timeZoneName: 'short',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };
    return `${PLANETARY_SYMBOLS[datetime.getDay()][0]} ${datetime.toLocaleDateString('en-GB', dateOptions)}`;
}

function setChineseDate(datetime, elementId) {
    fetch(`calendar/chinese/${now.getFullYear()}.min.json`)
        .then(response => response.json())
        .then(data => data.find(d => d.gregorian.year == datetime.getFullYear() &&
            d.gregorian.month == datetime.getMonth() + 1 &&
            d.gregorian.date == datetime.getDate()))
        .then(d => document.getElementById(elementId).textContent = `${d.lunar.year}年 ${d.lunar.month} ${d.lunar.date}日`)
        .catch(error => {
            console.error(error);
            alert('Error fetching data:', error.message);
        });
}
