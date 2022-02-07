function handleOnClick(element){
    srollHandler(element.innerText.toLowerCase())
}

const srollHandler = (selectedSection) => {
    let section = document.getElementById(selectedSection);
    section.scrollIntoView({
        behavior: "smooth"
    });
}