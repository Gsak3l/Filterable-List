//names generates with javascript (optional)
document.getElementById('mainContainer').innerHTML = '<!--HEADER--> <h1 class="center-align"> ' 
+ ' Name your Child </h1> <!--INPUT--> <input id="filterInput" placeholder="Search for Names"' 
+ ' type="text"> <!--NAMES--> <ul id="names" class="collection with-header"> <!--A--> <li ' 
+ 'class="collection-header"> <h5>A</h5> </li> <li class="collection-item"> <a href="#">' 
+ 'Abe</a> </li> <li class="collection-item"> <a href="#">Adam</a> </li> <li ' 
+ 'class="collection-item"> <a href="#">Alan</a> </li> <li class="collection-item">' 
+ ' <a href="#">Anna</a> </li> <!--B--> <li class="collection-header"> <h5>B</h5> </li>' 
+ ' <li class="collection-item"> <a href="#">Beth</a> </li> <li class="collection-item">' 
+ ' <a href="#">Bob</a> </li> <li class="collection-item"> <a href="#">Bill</a> </li>' 
+ ' <li class="collection-item"> <a href="#">Brad</a> </li> <!--J--> <li class="collection-header">' 
+ ' <h5>J</h5> </li> <li class="collection-item"> <a href="#">James</a> </li> <li ' 
+ 'class="collection-item"> <a href="#">Jessica</a> </li> <!--L--> <li class="collection-header">' 
+ ' <h5>L</h5> </li> <li class="collection-item"> <a href="#">Liam</a> </li> <li class="collection-item">' 
+ ' <a href="#">Lydia</a> </li> <!--N--> <li class="collection-header"> <h5>N</h5> </li> <li ' 
+ 'class="collection-item"> <a href="#">Noah</a> </li> <li class="collection-item">' 
+ ' <a href="#">Nadia</a> </li> <!--W--> <li class="collection-header"> <h5>L</h5> </li>' 
+ ' <li class="collection-item"> <a href="#">William</a> </li> <li class="collection-item">' 
+ ' <a href="#">Wyatt</a> </li> <li class="collection-item"> <a href="#">Westley</a> </li>' 
+ ' </ul>';
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