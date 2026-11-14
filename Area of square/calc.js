function check() {
    let lenght = document.getElementById("square").value
    let unit = document.getElementById("unit").value
    let displayarea = document.getElementById("display")
    let area = lenght*lenght
    

    displayarea.textContent = `${area} ${unit}²`
}