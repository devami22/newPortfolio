let contactForm = document.getElementById("contact-form");
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = event.target.name.value ;
    const email = event.target.email.value;
    if (name.trim() === "") {
        console.log("Name can not be empty")
    } else { 
        console.log(name);
    }
    const education = document.querySelector(".education-title");

    education.innerHTML ="<a href='#'>something else</a>"
});