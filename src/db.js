export let projects = {
    0: {
        frontend : true,
        name : 'PhotoStory',
        short_description : 'Сервис публикации пользовательских изображений',
        langs : [0, 1],
        icon : 'photostory.png',
        active : true,
        url : 'https://photostory.difres.ru',
        git : 'https://github.com/StepIgor/photostory.difres.ru',
        screenshots : ['photostory.difres.ru_(HD).png', 'photostory.difres.ru_(HD) (1).png', 'photostory.difres.ru_(HD) (2).png', 'photostory.difres.ru_(HD) (3).png', 'photostory.difres.ru_(HD) (4).png'],
        features : ['Персональная лента новых постов', 'Система подписок', 'Система лайков', 'Индивидуальные настройки приложения', 'Адаптивность под смартфоны', 'Рекомендации']
    },
    1: {
        frontend : true,
        name : 'Видео',
        short_description : 'Сервис публикации пользовательских видеозаписей',
        langs : [0, 1],
        icon : 'video.png',
        active : true,
        url : 'https://video.difres.ru',
        git : 'https://github.com/StepIgor/video.difres.ru',
        screenshots : ['video.difres.ru_(HD).png', 'video.difres.ru_(HD) (1).png', 'video.difres.ru_(HD) (2).png', 'video.difres.ru_(HD) (3).png', 'video.difres.ru_(HD) (4).png', 'video.difres.ru_(HD) (5).png'],
        features : ['Система подписок', 'Система лайков', 'Поисковая система', 'Адаптивность', 'История просмотров', 'Рекомендации']
    }
}

export let langs = {
    0 : {
        name : 'Svelte'
    },
    1 : {
        name : 'JavaScript'
    }
}