


function sendToHyperLink(url) {

    window.open(url)
}

const nodeArticle = document.querySelectorAll("main > section > article")
const arraySections = Array.from(nodeArticle);

const nodeIcons = document.querySelectorAll(".wrapper-menu > Ion-Icon")
const arrayIcons = Array.from(nodeIcons);

function scrollToArticle(element) {

    const index = arrayIcons.indexOf(element)
    arraySections[index].scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })

}