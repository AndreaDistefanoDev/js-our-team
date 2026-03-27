const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];
console.log(teamMembers);
const containerEl = document.getElementById('container')
let cards = ''






const formEl = document.querySelector('section form')
const nameField = document.getElementById('name')
const roleField = document.getElementById('role')
const emailField = document.getElementById('email')
const imgField = document.getElementById('img')

formEl.addEventListener(`submit`, function (e) {
  e.preventDefault()
  const name = nameField.value
  const role = roleField.value
  const email = emailField.value
  const img = imgField.value

  const newMember = {
    name,
    role,
    email,
    img
  }

  teamMembers.unshift(newMember)

  renderTeam(teamMembers, cards)

}

)
renderTeam(teamMembers, cards)




