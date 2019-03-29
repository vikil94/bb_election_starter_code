document.addEventListener("DOMContentLoaded", function() {

    const candidateList = document.querySelector('#candidate_list');
    axios.get('https://bb-election-api.herokuapp.com/')
        .then((response) => {
            response.data.candidates.forEach((e) => {
                let newList = document.createElement('li');
                newList.innerText = "Name: " + e.name + "\nVotes: " + e.votes;
                candidateList.appendChild(newList);
            })

        })
})