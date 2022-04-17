let tabs = ["overview", "join", "about", "resources", "articles"]
let active = 0
for (let i = 0; i < tabs.length; i++) {
    document.getElementById("btn-" + tabs[i]).addEventListener("click", function() {
        console.log(tabs[i])
        if(i != active){
            document.getElementById("btn-" + tabs[active]).parentElement.classList.remove("is-active")
            document.getElementById("btn-" + tabs[i]).parentElement.classList.add("is-active")

            document.getElementById("tab-" + tabs[active]).style.display = "none"
            document.getElementById("tab-" + tabs[i]).style.display = "block"
            active = i
        }
    })
}