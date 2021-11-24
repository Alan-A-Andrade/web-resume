



let darkMode = (element) => {
    document.querySelector("body").classList.toggle("dark-mode")
    Array.from(element.children).forEach(element => { toggleHidden(element) });
}

let toggleHidden = (element) => { element.classList.toggle('hidden') }