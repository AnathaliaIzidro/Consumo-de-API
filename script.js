const scriptURL = 'https://script.google.com/macros/s/AKfycbzTCMvURr-JMYn4MV0WOgLB59m10Sx74xrtxZrzKQVmZH7Cc9HejsKHYqiJMRdkPlCf/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'post', body: new formdata(form)})
  .then(response => alert("Thank you! Your form has been submitted successfully."))
  .then(() => { window.location.reload(); })
  .catch(error => console.error("Error!", error.message))
})
