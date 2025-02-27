        const mode = document.getElementById('dark-mode');
        const kartochki = document.getElementById('kartochki');
        const searchForm = document.getElementById('search-form');
        const searchInput = document.getElementById('searchInput');
        let usersData = [];

      
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                usersData = data;
                showUsers(usersData);
            });

       
        function showUsers(users) {
            kartochki.innerHTML = '';
            users.forEach(user => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <h3>Ismi: ${user.name}</h3>
                    <p>Username: ${user.username}</p>
                    <p>Website: ${user.website}</p>
                    <p>Email: ${user.email}</p>
                `;
                kartochki.appendChild(card);
            });
        }

        
        searchForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let input = searchInput.value.toLowerCase();
            let filteredUsers = usersData.filter(user => 
                user.name.toLowerCase().includes(input)
            );
            showUsers(filteredUsers);
        });

     
        mode.addEventListener("click", function() {
            document.body.classList.toggle("dark-mode");
            
            if (document.body.classList.contains("dark-mode")) {
                document.body.style.backgroundColor = "black";
                document.body.style.color = "white";
                mode.textContent = "☀️"; 
                document.getElementById('dark-mode').style.backgroundColor = "white";
                document.getElementById('searchInput').style.backgroundColor = "white"
                document.getElementById('searchInput').style.color = "black";
            } else {
                document.body.style.backgroundColor = "white";
                document.body.style.color = "black";
                mode.textContent = "🌙";
                document.getElementById('dark-mode').style.backgroundColor = "black";
                document.getElementById('searchInput').style.backgroundColor = "black";
                document.getElementById('searchInput').style.color = "white";
            }
        });