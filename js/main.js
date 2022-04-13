// Выпадающие списки
const dropdown = document.querySelectorAll(`.dropdown`);

for (let i = 0; i < dropdown.length; i++) {
    let dropBody = dropdown[i].querySelector(`.dropTrigger`);
    let dropContent = dropdown[i].querySelector(`.dropContent`);

    dropBody.addEventListener('click', function (event) {
        if (dropBody.contains(dropBody)) {
            let toOpen = dropContent.classList.contains('openDrop');
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

// Список языков
const langChange = document.querySelector(`.langChange`);
let dropElements = langChange.querySelectorAll(`li`);

for (let i = 0; i < dropElements.length; i++) {
    dropElements[i].addEventListener('click', function (event) {
        for (let i = 0; i < dropElements.length; i++) {
            dropElements[i].classList.remove(`active`);
        }

        dropElements[i].classList.add(`active`);
        langChange.querySelector('.dropTrigger p').innerHTML = dropElements[i].querySelector('span').innerHTML;
    });
}

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
    toggleMobileMainMenu(!isOpenMobileMainMenu);
});
