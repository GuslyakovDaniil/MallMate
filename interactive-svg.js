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
// Поиск
function performSearch() {
    // Ваш код для обработки поиска
    var searchTerm = document.getElementById('searchInput').value;
    console.log('Вы выполнили поиск по:', searchTerm);
    // Дополнительная логика поиска может быть добавлена здесь
}
function toggleFilterContainer() {
    var filterContainer = document.getElementById('filterContainer');
    filterContainer.style.display = filterContainer.style.display === 'none' ? 'block' : 'none';
}

// Функция для переключения видимости контейнера с фильтрами
function toggleFilterContainer() {
    var filterContainer = document.getElementById('filterContainer');
    filterContainer.style.display = filterContainer.style.display === 'none' ? 'block' : 'none';
}

// Функция для переключения видимости выпадающего списка
function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
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

// Поиск
function performSearch() {
    // Ваш код для обработки поиска
    var searchTerm = document.getElementById('searchInput').value;
    console.log('Вы выполнили поиск по:', searchTerm);
    // Дополнительная логика поиска может быть добавлена здесь
}

document.addEventListener('DOMContentLoaded', function () {
    // Добавляем обработчики событий для каждого магазина
    var shop1 = document.getElementById('shop1');
    shop1.addEventListener('click', function () {
        showShopInfo('Shop 1', 'img/Karmanobv.jpg', 'Description of Shop 1');
    });
    var shop2 = document.getElementById('shop2');
    shop2.addEventListener('click', function () {
        showShopInfo('Shop 2', 'img/Karmanobv.jpg', '«5 КармаNов» — это сеть розничных мультибрендовых магазинов джинсовой одежды на каждый день оригинального дизайна и высокого качества.');
    });
    var shop3 = document.getElementById('shop3');
    shop3.addEventListener('click', function () {
        showShopInfo('Shop 3', 'img/Karmanobv.jpg', 'Description of Shop 3');
    });
    var shop4 = document.getElementById('shop4');
    shop4.addEventListener('click', function () {
        showShopInfo('Shop 4', 'img/Karmanobv.jpg', 'Description of Shop 4');
    });
    var shop5 = document.getElementById('shop5');
    shop5.addEventListener('click', function () {
        showShopInfo('Shop 5', 'img/Karmanobv.jpg', 'Description of Shop 5');
    });
    var shop6 = document.getElementById('shop6');
    shop6.addEventListener('click', function () {
        showShopInfo('Shop 6', 'img/Karmanobv.jpg', 'Description of Shop 6');
    });
    var shop7 = document.getElementById('shop7');
    shop7.addEventListener('click', function () {
        showShopInfo('Shop 7', 'img/Karmanobv.jpg', 'Description of Shop 7');
    });
    var shop8 = document.getElementById('shop8');
    shop8.addEventListener('click', function () {
        showShopInfo('Shop 8', 'img/Karmanobv.jpg', 'Description of Shop 8');
    });
    var shop9 = document.getElementById('shop9');
    shop9.addEventListener('click', function () {
        showShopInfo('Shop 9', 'img/Karmanobv.jpg', 'Description of Shop 9');
    });
    var shop10 = document.getElementById('shop10');
    shop10.addEventListener('click', function () {
        showShopInfo('Shop 10', 'img/Karmanobv.jpg', 'Description of Shop 10');
    });
    var shop11 = document.getElementById('shop11');
    shop11.addEventListener('click', function () {
        showShopInfo('Shop 11', 'img/Karmanobv.jpg', 'Description of Shop 11');
    });
    var shop12 = document.getElementById('shop12');
    shop12.addEventListener('click', function () {
        showShopInfo('Shop 12', 'img/Karmanobv.jpg', 'Description of Shop 12');
    });
    var shop13 = document.getElementById('shop13');
    shop13.addEventListener('click', function () {
        showShopInfo('Shop 13', 'img/Karmanobv.jpg', 'Description of Shop 13');
    });
    var shop14 = document.getElementById('shop14');
    shop14.addEventListener('click', function () {
        showShopInfo('Shop 14', 'img/Karmanobv.jpg', 'Description of Shop 14');
    });
    var shop15 = document.getElementById('shop15');
    shop15.addEventListener('click', function () {
        showShopInfo('Shop 15', 'img/Karmanobv.jpg', 'Description of Shop 15');
    });
    var shop16 = document.getElementById('shop16');
    shop16.addEventListener('click', function () {
        showShopInfo('Shop 16', 'img/Karmanobv.jpg', 'Description of Shop 16');
    });
    var shop17 = document.getElementById('shop17');
    shop17.addEventListener('click', function () {
        showShopInfo('Shop 17', 'img/Karmanobv.jpg', 'Description of Shop 17');
    });

    // Закрытие модального окна при нажатии на кнопку "Закрыть"
    var closeButton = document.getElementById('shopPhoto');
    closeButton.addEventListener('click', function () {
        closeShopInfoModal();
    });
});

function showShopInfo(shopName, photoSrc, description) {
    // Отобразить модальное окно с информацией о магазине
    var shopInfoModal = document.getElementById('shopInfoModal');
    var shopPhoto = document.getElementById('shopPhoto');
    var shopDescription = document.getElementById('shopDescription');

    // Set the source
    shopPhoto.src = photoSrc;

    // Format the description text with character limit and line wrapping
    var formattedDescription = formatDescription(description);
    shopDescription.innerHTML = formattedDescription;

    // Dynamically adjust the image size (you can adjust these values as needed)
    shopPhoto.style.width = '200px'; // Set the desired width
    shopPhoto.style.height = 'auto'; // Maintain the aspect ratio

    // Display the modal window
    shopInfoModal.style.display = 'block';
}

function closeShopInfoModal() {
    var shopInfoModal = document.getElementById('shopInfoModal');
    shopInfoModal.style.display = 'none';
}

function formatDescription(description) {
    var maxLength = 40; // Maximum number of characters per line

    // Split the description into words
    var words = description.split(' ');

    // Initialize variables
    var currentLine = '';
    var formattedDescription = '';

    // Iterate through words
    for (var i = 0; i < words.length; i++) {
        // Check if adding the next word exceeds the character limit
        if ((currentLine + words[i]).length > maxLength) {
            // If yes, start a new line
            formattedDescription += currentLine + '<br>';
            currentLine = words[i] + ' ';
        } else {
            // If no, add the word to the current line
            currentLine += words[i] + ' ';
        }
    }

    // Add the last line to the formatted description
    formattedDescription += currentLine;

    return formattedDescription;
}
