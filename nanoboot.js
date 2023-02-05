Document.prototype.createElementFromString = function (str) {
   const element = new DOMParser().parseFromString(str, 'text/html');
   return element;
};

function init(pathToRoot) {
    
    if (pathToRoot === undefined) {
        pathToRoot = '.';
    }

}

function addAsFirstChild(parentElement, childElement) {
    parentElement.insertBefore(childElement, parentElement.firstChild)
}





function createTableFromCsvContentOfElement(id) {

const csv_content = document.getElementById(id).textContent;

csv_lines = csv_content.split('\n')


var table= document.createElement("table");

for (row_number=0;row_number<csv_lines.length;++row_number) {
    csv_line= csv_lines[row_number]
    if(csv_line.length==0)continue;
    header_row = row_number == 0
    
    var tr= document.createElement("tr")
    table.appendChild(tr)
    if(row_number==0)csv_line="#;"+csv_line
    csv_columns = csv_line.split(";")
    
    if(!header_row){
    var cellId= document.createElement("td")
    cellId.appendChild(document.createTextNode(row_number))
    tr.appendChild(cellId)
    }
    
    for (column_number=0;column_number<csv_columns.length;++column_number){
    csv_column=csv_columns[column_number]
    var cell= document.createElement(row_number > 0 ? "td" : "th");
    tr.appendChild(cell)
    cell.appendChild(document.createTextNode(csv_column))
    }
}
return table
}
