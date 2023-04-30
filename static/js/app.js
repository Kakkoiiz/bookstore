var btnShowSearch = document.getElementById('btn_show_search')
var topSearch = document.getElementById('header_top_search')


function showSearch() {
    if (topSearch.style.display == 'block') {
        topSearch.style.display = 'none'
    } else {
        topSearch.style.display ='block'
        btnShowSearch.style.display='none'
    }
}

btnShowSearch.addEventListener("click", showSearch)


