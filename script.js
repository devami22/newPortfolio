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

const skills = document.querySelector("h5").innerHTML;
console.log(skills)

skills[3].addEventListener('mouseover', function (event) {
    event.style.color = "red";
    });


