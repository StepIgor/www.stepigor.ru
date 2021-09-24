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
    },
    2: {
        frontend : true,
        name : 'Дневник',
        short_description : 'Ведение собственных записей по предметам',
        langs : [2, 1],
        icon : 'diary.png',
        active : true,
        url : 'https://diary.difres.ru',
        git : 'https://github.com/StepIgor/diary.difres.ru',
        screenshots : ['diary.difres.ru.png', 'diary.difres.ru (1).png', 'diary.difres.ru (2).png', 'diary.difres.ru (3).png'],
        features : ['Свои предметы', 'Свои записи', 'Смена статуса', 'Адаптивность']
    },
    3: {
        frontend : true,
        name : 'Сайт разработчика',
        short_description : 'Представление всех собственных проектов',
        langs : [2, 1],
        icon : 'stepigor.png',
        active : true,
        url : 'https://www.stepigor.ru',
        git : 'https://github.com/StepIgor/www.stepigor.ru',
        screenshots : ['stepigor.ru.png', 'stepigor.ru (1).png', 'stepigor.ru (2).png'],
        features : ['Представление всех проектов', 'Контактные сведения', 'Скриншоты и описание к работе']
    }
}

export let langs = {
    0 : {
        name : 'Svelte'
    },
    1 : {
        name : 'JavaScript'
    },
    2 : {
        name : 'React'
    }
}