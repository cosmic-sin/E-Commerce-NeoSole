document.getElementById("check-out").onclick=function(){
    window.location.href="products.html";
};


//search bar
function toggleSearchBar() {
    const searchBar = document.getElementById('search-bar');
    searchBar.classList.toggle('open');
}

document.getElementById("about-link").addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById("Abt").scrollIntoView({behavior:'smooth'});
});

document.getElementById('event-link').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('evn').scrollIntoView({behavior:'smooth'});
});
