
const submitBtn = document.getElementById("submitBtn");


    submitBtn.addEventListener('click',
        () => {
            let title = document.getElementById("movie-title").value;
            let rating = document.querySelector("[type=radio]:checked").value;
            submitInput(title, rating);

        }
    );

const submitInput = (title, rating) => {
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
        fetch(url, options)
        .then(response => response.json());
};



module.exports = submitInput;