
const contentContainer = document.querySelector('.content-container')

const searchInput = document.querySelector('.search-input');



let users = [];



fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data =>{
        // console.log(data)
        users = data.map(user =>{
            let item = document.createElement('div');
            item.setAttribute('class', 'search-item');
            item.innerHTML = `<div class="header">

            <div class="name">${user.name}</div>
            <span class="toggle-data" >></span>
        </div>
        <div class="body ">
            <div  class="body-data" data-site>${user.website}</div>
            <div class="body-data" data-number>${user.phone}</div>
            <div class="body-data" data-email>${user.email}</div>
            <div class="body-data" data-company>${user.company.bs}</div>
        </div>
        </div>`
            contentContainer.append(item);
            return {name: user.name, website: user.website, phone: user.phone, email: user.email, company: user.company.bs, element: item}
        })

        users.forEach(u => {
            let arrow = u.element.children[0].children[1];
            arrow.style.cursor = 'pointer';
            let body = u.element.children[1]
            
            arrow.addEventListener('click', e =>{
                let target = e.target;
        
                console.log(target);
                body.classList.toggle('active');
                arrow.textContent = 'x';
            })
        });
        
    })




searchInput.addEventListener('input', e =>{
    let input = e.target.value;
    
    users.forEach(user =>{
        const visible = user.name.toLowerCase().includes(input);
        user.element.classList.toggle('active', visible)
        
    })


    
})
console.log(users)

