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