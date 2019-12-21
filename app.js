//get input element
let filterInput = document.getElementById('filterInput');
//add event listener to the element above
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    //getting the value of the input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    //get names ul
    let ul = document.getElementById('names');
    //get li's from ul
    let li = ul.querySelectorAll('li.collection-item');
    //loop through collection-items li's
    for (var i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        //if it matches
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}