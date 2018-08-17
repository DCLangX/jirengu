portfolio1.onclick = function () {
    portfolioBar.className = 'bar state-1'
}
portfolio2.onclick = function () {
    portfolioBar.className = 'bar state-2'
}
portfolio3.onclick = function () {
    portfolioBar.className = 'bar state-3'
}


var loading = document.querySelector('.loading');
setTimeout(function(){
loading.classList.add('none');
},1000);