const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
const messageOne = document.querySelector("#message-1")
const messageTwo = document.querySelector("#message-2")

messageOne.textContent = ""
messageTwo.textContent = ""

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault()

  const location = search.value
  messageOne.textContent = "Loading forecast..."
  messageTwo.textContent = ""

  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error
      } else {
        messageOne.textContent = data.forecast
        messageTwo.textContent = data.location
      }
    })
  })
})
