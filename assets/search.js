// input box search and download

// https://stackoverflow.com/questions/574941/best-way-to-track-onchange-as-you-type-in-input-type-text?noredirect=1&lq=1

// check if value exists
function checkExists(inputValue) {
    if (inputValue === undefined) {
        return undefined;
    }
    var x = document.getElementById("papers");
    var i;
    var flag;
    for (i = 0; i < x.options.length; i++) { // loop through all options in papers
        if (inputValue.data == x.options[i].value) {
            flag = true;
            var p = x.options[i].title;
            downloadFile("../public/papers/" + p, p);
        }
    }
    return flag;
}

var path;
// add element and simulate click
function downloadFile(href, title) {
    var elem = window.document.createElement('a');
    elem.href = href;

    // update download button too
    var elem_download = document.getElementById("downloadlink");
    elem_download.href = href
    
    path = "https://www.hauselin.com" + href.slice(2)
    if (title.slice(0, 4) == "http") { // if it's a url
        elem.href = title;
        path = title;
        elem_download.href = title;
    }
    console.log(path); // full path
    elem.target = "_blank";
    elem.download = title;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);

}

function copy2clipboard(x) {
    console.log(x);
    var inp = document.createElement('input');
    document.body.appendChild(inp);
    inp.value = x;
    inp.select();
    document.execCommand('copy', false);
    inp.remove();
}
