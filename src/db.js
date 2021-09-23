export let projects = {
    0: {
        frontend : true,
        name : 'PhotoStory',
        short_description : 'Сервис публикации пользовательских изображений',
        langs : [0, 1],
        icon : 'photostory.png',
        active : true,
        url : 'https://photostory.difres.ru',
        git : 'https://github.com/StepIgor/photostory.difres.ru'
    },
    1: {
        frontend : true,
        name : 'Видео',
        short_description : 'Сервис публикации пользовательских видеозаписей',
        langs : [0, 1],
        icon : 'video.png',
        active : true,
        url : 'https://video.difres.ru',
        git : 'https://github.com/StepIgor/video.difres.ru'
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