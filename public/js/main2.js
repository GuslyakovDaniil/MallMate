document.addEventListener('DOMContentLoaded', function () {
    const shopListContainer = document.getElementById('shopListContainer');
    const categoryDropdown = document.getElementById('categoryDropdown');

    function fetchResultsFromServer(searchTerm) {
        const selectedCategories = Array.from(categoryDropdown.selectedOptions).map(option => option.value);

        // Check if no categories are selected
        if (selectedCategories.length === 0) {
            fetch(`/api/search?term=${searchTerm}`)
                .then(response => response.json())
                .then(data => displayShopList(data))
                .catch(error => console.error('Error fetching data:', error));
        } else {
            fetch(`/api/search?term=${searchTerm}&categories=${selectedCategories.join(',')}`)
                .then(response => response.json())
                .then(data => displayShopList(data))
                .catch(error => console.error('Error fetching data:', error));
        }
    }

    function updateShopList() {
        const searchTerm = document.getElementById('pointBInput').value.toLowerCase();
        fetchResultsFromServer(searchTerm);
    }

    function displayShopList(shops) {
        shopListContainer.innerHTML = '';

        if (shops.length > 0) {
            const ul = document.createElement('ul');
            shops.forEach(shop => {
                const li = document.createElement('li');
                li.textContent = shop.name;
                li.addEventListener('click', function () {
                    document.getElementById('pointBInput').value = shop.name;
                    hideShopList();
                });
                ul.appendChild(li);
            });
            shopListContainer.appendChild(ul);
            shopListContainer.classList.add('active');
        } else {
            hideShopList();
        }
    }

    function hideShopList() {
        shopListContainer.innerHTML = '';
        shopListContainer.classList.remove('active');
    }

    // Add 'input' event listener to the search input
    const pointBInput = document.getElementById('pointBInput');
    pointBInput.addEventListener('input', function () {
        updateShopList();
    });

    // Add 'focus' event listener to show shop list when the input is focused
    pointBInput.addEventListener('focus', function () {
        const searchTerm = document.getElementById('pointBInput').value.toLowerCase();
        fetchResultsFromServer(searchTerm);
    });

    // Add 'blur' event listener to hide shop list when the input loses focus
    pointBInput.addEventListener('blur', function () {
        setTimeout(hideShopList, 200); // Delay the hiding to allow click events on the shop list
    });

    document.addEventListener('click', function (event) {
        const isClickInsideShopList = shopListContainer.contains(event.target);
        const isClickOnpointBInput = event.target === pointBInput;

        if (!isClickInsideShopList && !isClickOnpointBInput) {
            hideShopList();
        } else if (isClickInsideShopList && event.target.tagName === 'LI') {
            hideShopList();
        }
    });

    // Fetch categories and update the dropdown
    fetch('/api/categories')
        .then(response => response.json())
        .then(data => updateCategoryDropdown(data))
        .catch(error => console.error('Error fetching categories:', error));

    function updateCategoryDropdown(categories) {
        const categoryDropdown = document.getElementById('categoryDropdown');

        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.id; // Assuming each category has an 'id' property
            option.textContent = category.name; // Assuming each category has a 'name' property
            categoryDropdown.appendChild(option);
        });

        // Initialize Select2 for the multi-select dropdown
        $(categoryDropdown).select2();
    }
});
