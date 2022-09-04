document.addEventListener("DOMContentLoaded", () => {
  
  const submitBtn = document.getElementById('submitBtn')

  submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()

    const ul = document.getElementById('tasks')
    const li = document.createElement("li")
    const inputValue = document.getElementById('new-task-description').value
    console.log(inputValue)
    let button = document.createElement("button")
    button.textContent = "x"
    button.addEventListener("click", (e) => {
      li.remove()
    })

    li.textContent = inputValue
    ul.append(li)
    li.appendChild(button)
    button.style.marginLeft = "10px"
  
  })



});
