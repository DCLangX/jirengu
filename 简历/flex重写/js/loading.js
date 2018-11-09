! function () {
    var view = document.querySelector('.loading');
    var controller = {
        view: null,
        init: function(view){
            this.view = view;
            setTimeout(function () {
                view.classList.add('none');
            }, 1000);
        }
    };
    controller.init(view);
}.call()