//Animation Button
const lienDelai = document.querySelectorAll(".lienDelai");

function onClickHandler(event) {
    event.preventDefault();

    const delai = 2000;

    // Redirige vers le lien après le délai
    setTimeout(function () {
        if (event.target.href) {
            window.location.href = event.target.href;
        } else {
            window.location.href = event.target.children[0].href;
        }
    }, delai);
}
lienDelai.forEach(lien => {
    lien.addEventListener("click", onClickHandler);

})

const lienDelai2 = document.querySelectorAll(".lienDelai > a ");
lienDelai2.forEach(lienDelai => {
    lienDelai.addEventListener("click", (event) => {
        event.preventDefault()
    });
})