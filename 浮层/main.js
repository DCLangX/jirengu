var clickBtn = document.getElementById('clickme');
var popover = document.getElementById('popover');
var wrapper = document.getElementById('wrapper');
clickBtn.addEventListener('click', () => {
    popover.style.display = 'inline-block';
});
wrapper.addEventListener('click', (e) => {
    e.stopPropagation();
})
document.addEventListener('click', () => {
    popover.style.display = 'none';
})