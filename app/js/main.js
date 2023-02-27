// ================== show\hide accordion in settings menu ===================
let accordion = document.getElementsByClassName('menu__link-accordion');
accordion[0].addEventListener('click', function () {
    this.classList.toggle('menu__link-accordion--active');
    let submenu = document.getElementsByClassName('menu__submenu');
    if (submenu[0].style.maxHeight) {
        submenu[0].style.maxHeight = null;
    } else {
        submenu[0].style.maxHeight = submenu[0].scrollHeight + "px";
    }
})

// ======================= switching categories tabs =================
let selectedTab = document.getElementsByClassName('categories__body-item');
let openTabIndex = 0;
for (let i = 0; i < selectedTab.length; i++) {
    selectedTab[i].addEventListener('click', function () {
        for (let j = 0; j < selectedTab.length; j++) {
            selectedTab[j].classList.remove('categories__body-item--active');
        }
        this.classList.toggle('categories__body-item--active');
        openTabIndex = i;
        showCatList(openTabIndex);
    })
}


showCatList(openTabIndex);

function showCatList(x) {
    let catList = document.getElementsByClassName('categories-list');
    for (let i = 0; i < catList.length; i++) {
        catList[i].style.display = 'none';
    }
    try {
        catList[x].style.display = 'block';
    }
    catch { }
}

// ============================= popup new-product =====================================
let addProduct = document.getElementsByClassName('categories-list__header-btn');
let newProductPopup = document.getElementsByClassName('new-product');

for (let i = 0; i < addProduct.length; i++) {
    addProduct[i].addEventListener('click', function (event) {
        event.preventDefault();
        newProductPopup[0].classList.toggle('popup--active');
    })
}

let closeBtn = document.getElementsByClassName('new-product__close-link');
try {
    closeBtn[0].addEventListener('click', function (event) {
        event.preventDefault();
        newProductPopup[0].classList.toggle('popup--active');
    })
}
catch { }

// ============================== new product add images ===============================
let newProdImgBtn = document.getElementById('prodImg');
let newProdImgBox = document.getElementsByClassName('new-product__image-lable');

try {
    newProdImgBtn.addEventListener('change', function () {

        try {
            let selectedImg = URL.createObjectURL(newProdImgBtn.files[0]);
            newProdImgBox[0].style.backgroundImage = "url('" + selectedImg + "')";
            newProdImgBox[0].style.backgroundSize = 'cover';
        } catch {
            console.log('image not found');
        }
    })
}
catch { }

// ============================= popup new-categories ====================================
let newCatBtn = document.getElementsByClassName('categories__header-btn');
let newCatPopup = document.getElementsByClassName('new-categories');
try {
    newCatBtn[0].addEventListener('click', function (event) {
        event.preventDefault();
        newCatPopup[0].classList.toggle('popup--active');
    })
}
catch { }

let closeBtnCat = document.getElementsByClassName('new-categories__close-link');
try {
    closeBtnCat[0].addEventListener('click', function (event) {
        event.preventDefault();
        newCatPopup[0].classList.toggle('popup--active');
    })
} catch { }

// ============================ hamburger ================================
let hamburger = document.getElementById('menu-toggler');
let header = document.querySelector('.header');

hamburger.addEventListener('change', () => {
    header.classList.toggle('header--active');
})
