var container = document.getElementById("container");
    btn = document.getElementById("btn")
    img = document.getElementById("pokemon-img");
    h3 = document.getElementById("pokemon");
    


    btn.addEventListener("click", fetchPoke);
    console.log(input.value)


    async function fetchPoke(){

    if(input.value != ""){

        document.getElementById("container").innerHTML = "";


        fetch("https://pokeapi.co/api/v2/pokemon/"+input.value.toLowerCase())
            .then(response => response.json())
            .then(data => {
                let output = "";
                output += 
                h3.innerText = data.name;
                img.setAttribute("src", data.sprites.front_default);

            });

         }

     else{

        h3.innerHTML = "";
        img.setAttribute("src", "");

        fetch("https://pokeapi.co/api/v2/pokemon/")
            .then(response => response.json())
            .then(data => {
                let output = "";
                console.log(data)
                var poke = data.results.map(poke => {
    
                    output += `<div>
                        <img id ="front-img" src="" alt="">
                        <h3>${poke.name}</h3>
                        <a href="#">${poke.url}</a>
                        <hr>
                    </div>
                    `
                    
                    frontImg = getElementById("front-img")
                    document.getElementById("container").innerHTML = output;

                })

                }) 

                fetch("https://pokeapi.co/api/v2/pokemon/"+poke)
                .then(response => response.json())
                .then(data => {
                    let output = "";
                    output += 
                    frontImg.setAttribute("src", data.sprites.front_default);
    
                });
        }


    }
