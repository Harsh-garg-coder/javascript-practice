const input = document.querySelector("input");
const listContainer = document.querySelector("ul");

const data = [
 "first",
 "second",
 "third",
 "fourth",
 "fifth",
 "sixth",
 "seventh",
 "eighth",
 "ninth",
 "tenth"   
]

function filterData(data, stringToMatch) {
    const regex = new RegExp(stringToMatch, "gi");

    return data.filter((currentData) => {
        
        if(currentData.match(regex)) {
            return true;
        }
        return false;
    })
}

function showList(data) {
    let listItems = data.map((currentData) => {
        return `
            <li>
                ${currentData}
            </li>
        `
    }).join("");
    
    listContainer.innerHTML = listItems;
}

function showFilteredList(e) {
    const currentValue = e.target.value;

    const filteredData = filterData(data, currentValue);

    const dataWithHighlighting = filteredData.map((currentData) => {
        return currentData.replace(e.target.value, `<span class = "highlight">${e.target.value}</span>`);
    });

    showList(dataWithHighlighting);
}

input.addEventListener("keyup", showFilteredList);