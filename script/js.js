



let darkMode = (element) => {
    document.querySelector("body").classList.toggle("dark-mode")
    Array.from(element.children).forEach(element => { toggleHidden(element) });
}

let toggleHidden = (element) => { element.classList.toggle('hidden') }


let scrollToElement = (element) => {
    element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
}

scrollToElement(document.querySelector(".about-me"))


