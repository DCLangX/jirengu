var clickBtn = document.getElementById('clickme');
var popover = document.getElementById('popover');
var wrapper = document.getElementById('wrapper');
// clickBtn.addEventListener('click', () => {
//     popover.style.display = 'inline-block';
// });
// document.addEventListener('click', () => {
//     popover.style.display = 'none';
// });
// wrapper.addEventListener('click', (e) => {
//     e.stopPropagation();
// })

// planB
$(clickme).on('click', function () {
    $(popover).show();
    console.log('show');
    setTimeout(function () {
        $(document).one('click', function () {
            console.log('hide');
            $(popover).hide()
        })
    }, 0)
})
wrapper.addEventListener('click', (e) => {
    e.stopPropagation();
})