let isDragging = false;
let dragStartX, dragStartY;
let currentTranslateX = 100;
let currentTranslateY = 100;
let currentScale = 1;

const floorSvg = document.getElementById('floorSvg');

floorSvg.addEventListener('mousedown', (e) => {
    isDragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    floorSvg.style.cursor = 'grabbing';
});

floorSvg.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const deltaX = e.clientX - dragStartX;
        const deltaY = e.clientY - dragStartY;
        currentTranslateX += deltaX;
        currentTranslateY += deltaY;
        floorSvg.style.transform = `translate(${currentTranslateX}px, ${currentTranslateY}px) scale(${currentScale})`;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
    }
});

floorSvg.addEventListener('mouseup', () => {
    isDragging = false;
    floorSvg.style.cursor = 'grab';
});

floorSvg.addEventListener('wheel', (e) => {
    const delta = e.deltaY > 0 ? 0.9 : 1.1; // уменьшение или увеличение масштаба
    currentScale *= delta;
    floorSvg.style.transform = `translate(${currentTranslateX}px, ${currentTranslateY}px) scale(${currentScale})`;
});

function handleSearchById(id) {
    // Check if the element with the specified ID exists
    var inputElement = document.getElementById(id);

    if (inputElement !== null) {
        // Ваш код для обработки поиска
        var searchTerm = inputElement.value;
        console.log('Вы выполнили поиск по:', searchTerm);

        // Найти магазин по введенному ID
        var shopElement = document.getElementById(searchTerm);

        if (shopElement !== null) {
            // Если магазин найден, вызвать событие click на нем
            var clickEvent = new Event('click');
            shopElement.dispatchEvent(clickEvent);
        }
    } else {
        console.log('Элемент с ID ' + id + ' не найден.');
    }
}

// Поиск
function performSearch() {
    var shopID = sessionStorage.getItem('searchTerm');
    if (shopID !== null){
        console.log('Вы выполнили поиск по:', shopID);
    // Найти магазин по введенному ID
    var shopElement = document.getElementById(shopID);

    if (shopElement !== null) {
        // Если магазин найден, вызвать событие click на нем
        var clickEvent = new Event('click');
        shopElement.dispatchEvent(clickEvent);
    } else {
        sessionStorage.setItem('searchTerm', searchTerm);
        window.location.href = "/first/firstFloor.html";
    }
    }else{
    // Ваш код для обработки поиска
    var searchTerm = document.getElementById('searchInput').value;
    console.log('Вы выполнили поиск по:', searchTerm);
    // Найти магазин по введенному ID
    var shopElement = document.getElementById(searchTerm);
    if (shopElement !== null) {
        // Если магазин найден, вызвать событие click на нем
        var clickEvent = new Event('click');
        shopElement.dispatchEvent(clickEvent);
    } else {
        sessionStorage.setItem('searchTerm', searchTerm);
        window.location.href = "/first/firstFloor.html";
    }

    // Дополнительная логика поиска может быть добавлена здесь
}}

function toggleFilterContainer() {
    console.log('toggleFilterContainer called');
    var filterContainer = document.getElementById('filterContainer');
    var computedStyle = window.getComputedStyle(filterContainer);

    if (computedStyle.display === 'none') {
        filterContainer.style.display = 'block';
    } else {
        filterContainer.style.display = 'none';
    }
}
// Функция для переключения видимости выпадающего списка
function toggleDropdown(dropdownId) {
    console.log('toggleDropdown called for dropdownId:', dropdownId);
    var dropdown = document.getElementById(dropdownId);
    var computedStyle = window.getComputedStyle(dropdown);

    if (computedStyle.display === 'none') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}


// Функция для переключения выбора и изменения цвета
function toggleSelection(label) {
    label.classList.toggle('selected');
    var checkboxId = label.getAttribute('for');
    var checkbox = document.getElementById(checkboxId);
    checkbox.checked = !checkbox.checked;
}

// Функция для применения фильтров
function applyFilters() {
    // Ваш код для обработки выбранных фильтров
    console.log('Фильтры применены');
    // Дополнительная логика фильтрации может быть добавлена здесь

    // Закрыть контейнер с фильтрами после применения
    var filterContainer = document.getElementById('filterContainer');
    filterContainer.style.display = 'none';
}



document.addEventListener('DOMContentLoaded', function () {

    
    
    var shop18 = document.getElementById('shop18');
    shop18.addEventListener('click', function () {
        showShopInfo('Shop 18', 'img/Karmanobv.jpg', 'Description of Shop 18');
    });
    var shop19 = document.getElementById('shop19');
    shop19.addEventListener('click', function () {
        showShopInfo('Shop 19', '/img/Karmanobv.jpg', '«5 КармаNов» — это сеть розничных мультибрендовых магазинов джинсовой одежды на каждый день оригинального дизайна и высокого качества.');
    });
    var shop20 = document.getElementById('shop20');
    shop20.addEventListener('click', function () {
        showShopInfo('Shop 20', '/img/Karmanobv.jpg', 'Description of Shop 20');
    });
    var shop21 = document.getElementById('shop21');
    shop21.addEventListener('click', function () {
        showShopInfo('Shop 21', '/img/Karmanobv.jpg', 'Description of Shop 21');
    });
    var shop22 = document.getElementById('shop22');
    shop22.addEventListener('click', function () {
        showShopInfo('Shop 22', '/img/Karmanobv.jpg', 'Description of Shop 22');
    });
    var shop23 = document.getElementById('shop23');
    shop23.addEventListener('click', function () {
        showShopInfo('Shop 23', '/img/Karmanobv.jpg', 'Description of Shop 23');
    });
    var shop24 = document.getElementById('shop24');
    shop24.addEventListener('click', function () {
        showShopInfo('Shop 24', '/img/Karmanobv.jpg', 'Description of Shop 24');
    });
    var shop25 = document.getElementById('shop25');
    shop25.addEventListener('click', function () {
        showShopInfo('Shop 25', '/img/Karmanobv.jpg', 'Description of Shop 25');
    });
    var shop26 = document.getElementById('shop26');
    shop26.addEventListener('click', function () {
        showShopInfo('Shop 26', '/img/Karmanobv.jpg', 'Description of Shop 26');
    });
    var shop27 = document.getElementById('shop27');
    shop27.addEventListener('click', function () {
        showShopInfo('Shop 27', '/img/Karmanobv.jpg', 'Description of Shop 27');
    });
    var shop28 = document.getElementById('shop28');
    shop28.addEventListener('click', function () {
        showShopInfo('Shop 28', '/img/Karmanobv.jpg', 'Description of Shop 28');
    });
    var shop29 = document.getElementById('shop29');
    shop29.addEventListener('click', function () {
        showShopInfo('Shop 29', '/img/Karmanobv.jpg', 'Description of Shop 29');
    });
    var shop30 = document.getElementById('shop30');
    shop30.addEventListener('click', function () {
        showShopInfo('Shop 30', '/img/Karmanobv.jpg', 'Description of Shop 30');
    });
    var shop31 = document.getElementById('shop31');
    shop31.addEventListener('click', function () {
        showShopInfo('Shop 31', '/img/Karmanobv.jpg', 'Description of Shop 31');
    });
    var shop32 = document.getElementById('shop32');
    shop32.addEventListener('click', function () {
        showShopInfo('Shop 32', '/img/Karmanobv.jpg', 'Description of Shop 32');
    });
    var shop33 = document.getElementById('shop33');
    shop33.addEventListener('click', function () {
        showShopInfo('Shop 33', '/img/Karmanobv.jpg', 'Description of Shop 33');
    });
    var shop34 = document.getElementById('shop34');
    shop34.addEventListener('click', function () {
        showShopInfo('Shop 34', '/img/Karmanobv.jpg', 'Description of Shop 34');
    });
    var shop35 = document.getElementById('shop35');
    shop35.addEventListener('click', function () {
        showShopInfo('Shop 35', '/img/Karmanobv.jpg', 'Description of Shop 35');
    });
    var shop36 = document.getElementById('shop36');
    shop36.addEventListener('click', function () {
        showShopInfo('Shop 36', '/img/Karmanobv.jpg', 'Description of Shop 36');
    });
    var shop37 = document.getElementById('shop37');
    shop37.addEventListener('click', function () {
        showShopInfo('Shop 37', '/img/Karmanobv.jpg', 'Description of Shop 37');
    });
    // Закрытие модального окна при нажатии на кнопку "Закрыть"
    var closeButton = document.getElementById('shopPhoto');
    closeButton.addEventListener('click', function () {
        closeShopInfoModal();
    });
});

function showShopInfo(shopName, photoSrc, description) {
    var shopInfoModal = document.getElementById('shopInfoModal');
    var shopPhoto = document.getElementById('shopPhoto');
    var shopDescription = document.getElementById('shopDescription');

    shopPhoto.src = photoSrc;

    var formattedDescription = formatDescription(description);
    shopDescription.innerHTML = formattedDescription;

    shopPhoto.style.width = '280px';
    shopPhoto.style.height = 'auto';

    shopInfoModal.style.display = 'block';
}

function closeShopInfoModal() {
    var shopInfoModal = document.getElementById('shopInfoModal');
    shopInfoModal.style.display = 'none';
}

function formatDescription(description) {
    var maxLength = 40;

    var words = description.split(' ');

    var currentLine = '';
    var formattedDescription = '';

    for (var i = 0; i < words.length; i++) {
        if ((currentLine + words[i]).length > maxLength) {
            formattedDescription += currentLine + '<br>';
            currentLine = words[i] + ' ';
        } else {
            currentLine += words[i] + ' ';
        }
    }

    formattedDescription += currentLine;

    return formattedDescription;
}