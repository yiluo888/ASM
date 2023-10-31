
const cardItems = document.querySelectorAll("#job-info .container .card-item");
const viewMoreItems = document.querySelectorAll("#job-info .container .card-item .view-more");
const viewMoreBtnList = document.querySelectorAll("#job-info .container .card-item .view-more .btn-view-more");
const cardItemContentList = document.querySelectorAll("#job-info .container .card-item .content");

let toggle = true;

for (let i = 0; i < cardItems.length; ++i) {
    cardItems[i].addEventListener("mouseover", () => {
        viewMoreItems[i].classList.remove("hidden");
    });
    cardItems[i].addEventListener("mouseout", () => {
        viewMoreItems[i].classList.add("hidden");
    });
}

for (let i = 0; i < viewMoreBtnList.length; ++i) {
    viewMoreBtnList[i].addEventListener("click", () => {
        if (toggle) {
            cardItemContentList[i].classList.remove("hidden");
            cardItems[i].classList.add("height-auto");
            viewMoreBtnList[i].innerHTML = "&#x25B2; VIEW LESS";
        }
        else {
            cardItemContentList[i].classList.add("hidden");
            cardItems[i].classList.remove("height-auto");
            viewMoreBtnList[i].innerHTML = "&#x25BC; VIEW MORE";
        }
        toggle = !toggle;
    });
}

