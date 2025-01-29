const scriptURL = 'https://script.google.com/macros/s/AKfycbycqoj6gHf-rYf7mXSPe2TL3ix76RuSXzHIEvlA27t716LE35gQxwys_gme7uSCzwRN5A/exec'

const form = document.forms['contact-formss']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL,  {method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank You! Form is submitted successfully."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})