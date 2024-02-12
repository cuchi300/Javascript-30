
const navegacion = document.getElementById('navbar');
const body = document.querySelector('body');

// Agarro botones
const btnProduct = document.getElementById('btn-product');
const btnOpen = document.getElementById('btn-open');

// Click para mostrar navegacion izquiera mobile
btnOpen.addEventListener('click', () => {
    navegacion.classList.toggle('mostrar');

    body.onscroll  = function () {
        navegacion.classList.remove('mostrar')
    }
    navegacion.onmouseleave = function () {
        navegacion.classList.remove('mostrar')
    }
})

btnProduct.addEventListener('mouseenter', () => {
    crearSubnav();
})

// funcion abrir submenu derecha mobile
function crearSubnav() {
    const productsLi = document.getElementById('products');

    const subnavUl = document.createElement('UL');
    subnavUl.classList.add('nav-products');
    subnavUl.style.display = 'block'
    subnavUl.innerHTML = `
    <li class="header-subnav">
        <p>Products</p>
        <button type="button" id="btn-close">
            <img src="Assets/Close.svg" loading="lazy" alt="image button close">
        </button>
    </li>
    <li class="body-subnav">
        <div class="punta"></div>
        <div class="spense">
            <p class="title">
                <img src="Assets/Spense_Icon.svg" alt="imagen icon">
                <b>Spense</b>
            </p>
            <p class="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur aliquid veniam distinctio rerum.</p>
        </div>
        <div class="fiber">
            <p class="title">
                <img src="Assets/Fiber_Icon.svg" alt="imagen icon">
                <b>Fiber Landing Page</b>
            </p>
            <p class="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur aliquid veniam distinctio rerum.</p>
        </div>
        <div class="gradie">
            <p class="title">
                <img src="Assets/Gradie_Icon.svg" alt="imagen icon">
                <b>Gradie Sign Up Page</b>
            </p>
            <p class="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur aliquid veniam distinctio rerum.</p>
        </div>
    </li><!-- body-subnav -->
    `
    productsLi.appendChild(subnavUl);


    const btnClose = document.getElementById('btn-close');
    btnClose.onclick = function() {
        subnavUl.remove();
    }

    subnavUl.onmouseleave = function () {
        subnavUl.remove();
    }
}

