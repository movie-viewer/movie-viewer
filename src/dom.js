
function changeH1 () {
    let h1 = document.body.getElementsByTagName("h1");
    console.log(h1[0]);

    h1[0].innerHTML = "Loading";
}



module.exports = changeH1;