// Поиск
const search = document.querySelector(`.search`);
const searchToggle = document.querySelector(`.search .inputField`);

searchToggle.onfocus = function () {
    search.classList.remove('inactive');
    search.classList.remove(`modalAnimation`);
};

searchToggle.onblur = function () {
    search.classList.add('inactive');
    search.classList.add(`modalAnimation`);
};

// Мобильное меню
const mobileButtons = document.querySelector('.hamburger');
const mobileMainMenu = document.querySelector(`.header`);

let isOpenMobileMainMenu = false;

function toggleMobileMainMenu(val) {
    isOpenMobileMainMenu = val;

    if (isOpenMobileMainMenu) {
        mobileMainMenu.classList.add('mobile');
        mobileMainMenu.classList.add('modalAnimation');
        mobileButtons.classList.add(`opened`);
        document.body.classList.add(`noScroll`);
    } else {
        mobileMainMenu.classList.remove('mobile');
        mobileMainMenu.classList.remove('modalAnimation');
        mobileButtons.classList.remove(`opened`);
        document.body.classList.remove(`noScroll`);
    }
}

mobileButtons.addEventListener(`click`, function () {
    if (window.screen.width < 1025) {
        toggleMobileMainMenu(!isOpenMobileMainMenu);
    }
});

// Выпадающие списки
const dropdown = document.querySelectorAll(`.dropdown`);

for (let i = 0; i < dropdown.length; i++) {
    let dropBody = dropdown[i].querySelector(`.dropTrigger`);
    let dropContent = dropdown[i].querySelector(`.dropContent`);
    let mobileMainMenu = document.querySelector(`.mainMenu nav`);

    dropBody.addEventListener('click', function (event) {
        if (dropBody.contains(dropBody)) {
            let toOpen = dropContent.classList.contains('openDrop');

            if (dropdown[i].classList.contains('resources')) {
                if (dropBody.classList.contains('whileOpened')) {
                    mobileMainMenu.classList.remove('hide');
                } else {
                    mobileMainMenu.classList.add('hide');
                }
            }

            toggleFilterButton(toOpen, dropContent, dropBody);
        }
    });
}

function toggleFilterButton(toClose, dropContent, dropBody) {
    if (toClose) {
        dropContent.classList.remove(`openDrop`);
        dropBody.classList.remove(`whileOpened`);
        dropContent.classList.remove(`modalAnimation`);
    } else {
        dropContent.classList.add(`openDrop`);
        dropBody.classList.add(`whileOpened`);
        dropContent.classList.add(`modalAnimation`);
    }
}