const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function load(selector, path) {
    const cached = localStorage.getItem(path);
    if (cached) {
        $(selector).innerHTML = cached;
    }

    fetch(path)
        .then((res) => res.text())
        .then((html) => {
            if (html !== cached) {
                $(selector).innerHTML = html;
                localStorage.setItem(path, html);
            }
        })
        .finally(() => {
            window.dispatchEvent(new Event("template-loaded"));
        });
}

// Header
function handleArrowClick() {
    const arrows = $$(".header__content-top--arrow");

    arrows.forEach((arrow) => {
        arrow.onclick = () => {
            console.log(arrow);

            const infoPhone = $(".header__phone");
            const infoAddress = $(".header__address");
            if (infoPhone.classList.contains("d-md-none")) {
                infoPhone.classList.remove("d-md-none");
                infoAddress.classList.add("d-md-none");
            } else {
                infoPhone.classList.add("d-md-none");
                infoAddress.classList.remove("d-md-none");
            }
        };
    });
}

window.addEventListener("template-loaded", handleArrowClick);
handleArrowClick();

// Cate product
function handleCateClick() {
    const categories = $$(".products-cate__item");
    const productCate = $$(".products-list");

    categories.forEach((cate, index1) => {
        cate.onclick = () => {
            let cateOld = $(".products-cate__item--active");
            cateOld.classList.remove("products-cate__item--active");
            cate.classList.add("products-cate__item--active");

            productCate.forEach((item, index2) => {
                if (index1 === index2) {
                    let productCateOld = $(".products-list--active");
                    productCateOld.classList.remove("products-list--active");
                    item.classList.add("products-list--active");
                }
            });
        };
    });
}
window.addEventListener("template-loaded", handleCateClick);
handleCateClick();
