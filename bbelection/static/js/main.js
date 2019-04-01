document.addEventListener("DOMContentLoaded", function() {

    const candidateList = document.querySelector('#candidate_list');





    axios.get('https://bb-election-api.herokuapp.com/')
        .then((response) => {
            response.data.candidates.forEach((e) => {
                let newList = document.createElement('li');
                const newForm = document.createElement('form');
                newForm.method = "POST";
                newForm.action = "https://bb-election-api.herokuapp.com/vote";

                const newInput = document.createElement('input');
                newInput.type = 'hidden';
                newInput.name = 'name';
                newInput.value = e.name;
                const submitButton = document.createElement('button');
                submitButton.innerText = `Vote for ${e.name}`
                newForm.appendChild(newInput);
                newForm.appendChild(submitButton);

                newList.innerText = "Name: " + e.name + "\nVotes: " + e.votes;
                candidateList.appendChild(newList);
                newList.appendChild(newForm);
            })

        })


    document.addEventListener('submit', function(event) {
        event.preventDefault()

        let name = event.target.querySelector('input[type=hidden]').value;
        console.log(name);

        axios.post('https://bb-election-api.herokuapp.com/vote', {
            'name': name


        }).then(function(response) {
            console.log(response);

        }).catch(function(response) {
            alert('This request did not go through');
        })

    })

    let refresh = document.querySelector('#refresh');

    refresh.addEventListener('click', function() {
        console.log("refresh button was clicked")
        location.reload();
    })

})