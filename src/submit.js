
const submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener('click',
        () => {
            let title = document.getElementById("movie-title").value;
            let rating = document.getElementById('5').value
            fetchInput(title, rating);
            console.log(title);
            console.log(rating);
        }
    );


const fetchInput = (title, rating) => {
    let url = 'api/movies';
    let options = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(
            {
                "title": title,
                "rating": rating
            })
    };
    return fetch(url, options)
        .then(response => response.json());
};



module.exports = fetchInput;