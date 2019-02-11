{
    let view = {
        el: '#song_main',
        template: `
        <ul class="song_list">
        </ul>
        `,
        render: function (data) {
            $(this.el).html(this.template)
            let {
                songs
            } = data
            let liList = songs.map((song) => {
                let li = $('<li></li>').text(song.name)
                return li
            })
            $(this.el).find('ul').empty()
            liList.map((domLi) => {
                $(this.el).find('ul').append(domLi)
            })
        },
        clearActive: function () {
            $(this.el).find('.active').removeClass('active')
        }
    }
    let model = {
        data: {
            songs: []
        },
        find: function () {
            var query = new AV.Query('Song');
            return query.find().then((songs) => {
                this.data.songs = songs.map((element) => {
                    return {
                        id: element.id,
                        ...element.attributes
                    }
                })
                return songs
            })
        }
    }
    let controller = {
        init: function (view, model) {
            this.view = view
            this.model = model
            this.view.render(this.model.data)
            window.eventHub.on('upload', () => {
                this.view.clearActive()
            })
            window.eventHub.on('create', (songData) => {
                this.model.data.songs.push(songData)
                this.view.render(this.model.data)
            })
            this.model.find().then(()=>{
                this.view.render(this.model.data)
            })
        }
    }
    controller.init(view, model)
}