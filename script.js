const COLORS_ARRAY = ["red","yellow","magenta","cyan","blue","black","gray","teal","green","purple","violet",];

// ===== CHALLENGE =====
const ul = document.getElementById("color-list")
// 1. Create A Function (generate)

const generate = () => {
    let randomColor = COLORS_ARRAY[Math.round(Math.random() * COLORS_ARRAY.length)]
    const li = document.createElement("li")
    li.textContent = randomColor
    li.style.backgroundColor = randomColor
    ul.appendChild(li)
}

const colorMeBtn = document.getElementById('generate-color')
colorMeBtn.addEventListener('click', generate)

  
// 2. Create Function (reset)
  // Should remove all li children from the ul. 
  // Should set background color to white.

const reset = () => {
    while(ul.firstChild){
        ul.firstChild.remove()    
    }
}
const resetBtn = document.getElementById('reset')
resetBtn.addEventListener('click',reset)