// https://hindi-jokes-api.onrender.com/jokes?api_key=a076ef955ea6aeadf16f8122f967

document.addEventListener("DOMContentLoaded",  function () {
        
        let btn = document.getElementById('btn');
        let joke = document.getElementById('textContent');
        let emoji = document.querySelector('.emojiContent');

        function setData(data) {
                console.log("In setData function/...");
                console.log(data.jokeContent);
                emoji.style.display = 'block';
                joke.textContent = data.jokeContent;
        }

        async function loadContent() {
                console.log("In loadContent Function");
                try {
                        btn.textContent = 'Generating Joke...';
                        btn.disabled = true;
                        let url = 'https://hindi-jokes-api.onrender.com/jokes?api_key=a076ef955ea6aeadf16f8122f967';
                        let response = await fetch(url);
                        if (!response.ok) {
                                throw new Error("Unable to fetch data");
                        }
                        let data = await response.json();
                        console.log(data);
                        setData(data);
                }
                catch(error) {
                        joke.innerHTML = `<p>${error.message}</p>`;
                }
                finally {
                        btn.textContent = 'Generate Joke';
                        btn.disabled = false;
                }
        }

        btn.addEventListener('click',  function () {
                console.log("btn clicked...");
                loadContent();
        })

})


