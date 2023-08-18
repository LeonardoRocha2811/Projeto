function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Tá claro pa carai")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "pq q ta preto ?")
  }
}
