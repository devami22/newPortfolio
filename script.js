// let contactForm = document.getElementById("contact-form");
// contactForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const name = event.target.name.value ;
//     const email = event.target.email.value;
//     if (name.trim() === "") {
//         console.log("Name can not be empty")
//     } else { 
//         console.log(name);
//     }
//     const contact = document.querySelector(".contact-title");

//     contact.innerHTML ="<a href='#'>thanks for your message!</a>"
// });

const skillBox = document.querySelector(".skill-box");

skillBox.addEventListener('mouseover', () => { 
    const skills = document.querySelectorAll(".learning");
    skills.forEach((skill) => 
        skill.classList.add('hover')
    )
})
skillBox.addEventListener('mouseout', () => { 
    const skills = document.querySelectorAll(".learning");
    skills.forEach((skill) => 
        skill.classList.remove('hover')
    )
})

// for (let i = 0; i < skills.length; i++) { 
//     skills[i].addEventListener('mouseover', function (event) {
//         event.target.style.color = "red";
//         })
// }

