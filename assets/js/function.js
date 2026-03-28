



/**
 * Generates HTML markup for a team member card.
 * 
 * @param {string} name - The name of the team member.
 * @param {string} role - The role of the team member.
 * @param {string} email - The email address of the team member.
 * @param {string} img - The URL of the team member's image.
 * @returns {string} The generated HTML markup as a string.
*/



function generateMarkup(name, role, email, img) {
    const cards=document.createElement('div')
    cards.classList.add('col')
    
    
    const markupString = `                   
    
    <div class="card">
    <div class="card-body">
    <div class="card-image">
    <img src="${img}" alt="${name}"/>
    </div>
    <div class="card-text">
    <h3>${name}</h3>
    <p>${role}</p>
    <a href="">${email}</a>
    </div> 
    </div>
    </div>
    </div>
    </div>`
    cards.innerHTML= markupString
    containerEl.appendChild(cards)
    return cards

}

/**
 * Renders a list of team members into the specified HTML element.
 * 
 * @param {Array<Object>} items - An array of team member objects, each containing name, role, email, and img properties.
 * @param {HTMLElement} Element - The HTML element where the team members will be rendered.
*/

function renderTeam(items, Element) {
    Element.innerHTML=''

    for (let i = 0; i < items.length; i++) {
        const member = items[i];
        const { name, role, email, img } = member
        const card = generateMarkup(name, role, email, img)
        Element.appendChild(card)
    }
    
}




/**
 * Adds a new team member to the team roster
 * @param {Event} e - The form submission event
 * @returns {void}
 * @description Prevents default form submission, collects form field values (name, role, email, img),
 * creates a new member object, adds it to the beginning of the teamMembers array, and re-renders the team display
 */
function addNewMember(e){
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

  renderTeam(teamMembers,containerEl )

}