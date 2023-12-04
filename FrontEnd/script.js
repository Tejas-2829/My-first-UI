const searchInput=() => {

    const userInput = document.getElementById("search_bar").value
    
    const ul =document.getElementById("searchlist");

    const lilist = ul.getElementsByTagName("li");

    Array.from(lilist).forEach((li) => {
        const classvalue = (li.textContent);

        if ((classvalue).includes(userInput)) {
            li.style.display="block";
            console.log("found");
        }
        else{
            li.style.display="none";
            console.log("not found");
        }
    })
}
document.getElementById("search_bar").addEventListener("input",searchInput);