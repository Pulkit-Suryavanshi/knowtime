const userCardTemplate=document.querySelector("[data-user-template]")
const userCardContainer=document.querySelector("[data-user-cards-container]")
const searchInput=document.querySelectorAll("[data-search]")

const userCardTemplateDisplay=document.querySelector("[display-user-template]")
const userCardContainerDisplay=document.querySelector("[display-user-cards-container]")

let users=[]
let usersDisplay=[]

searchInput[0].addEventListener("input", e => {
    const value=e.target.value.toLowerCase()
    users.forEach(user=>{
        const isVisible=user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value)
        user.element.classList.toggle("hide",!isVisible)
    })

})
searchInput[1].addEventListener("input",e=>{document.getElementById("searchRecord").style.display='inline-block';});
searchInput[1].addEventListener("input",e=>
{
    let lengthOfInput=document.getElementById("search").value;
    if(lengthOfInput<1)
    {
        document.getElementById("searchRecord").style.display='none';
    }
});

searchInput[1].addEventListener("input", e => {
    const value=e.target.value.toLowerCase() //getting each input on search bar
    users.forEach(user=>{
        const isVisible=user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value)
        user.element.classList.toggle("hide",!isVisible) //toggle the class on or off
    })

})
fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>{
        users = data.map(user=>{ //users array being populated with contents all data
            const card=userCardTemplate.content.cloneNode(true).children[0] //this gets the json object elements
            const header=card.querySelector("[data-header]")
            const body=card.querySelector("[data-body]")
            const id=card.querySelector("[data-id]")
            const phone=card.querySelector("[data-phone]")
            header.textContent="Name: "+user.name
            id.textContent="Id: "+user.id
            phone.textContent="Phone: "+user.phone
            body.textContent="Email: "+user.email
            userCardContainer.append(card) //appending all details of all inside the container
            return{name:user.name,email:user.email,id:user.id,phone:user.phone,element:card}//element:card to have reference of that , ,phone:user.phone
        })
    })
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>{
        usersDisplay = data.map(user=>{ //users array being populated with contents all data
            const card=userCardTemplateDisplay.content.cloneNode(true).children[0] //this gets the json object elements
            const header=card.querySelector("[display-header]")
            const body=card.querySelector("[display-body]")
            const id=card.querySelector("[display-id]")
            const phone=card.querySelector("[display-phone]")
            header.textContent=user.name
            //id.textContent=user.id
            //phone.textContent=user.phone
            body.textContent=user.email
            userCardContainerDisplay.append(card) //appending all details of all inside the container
            return{name:user.name,email:user.email,element:card}//element:card to have reference of that 
        })
    })
