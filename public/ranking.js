window.getRanking = (event) => {
    
    event.preventDefault();

    let formate = document.getElementById("FormateCricket").value
    
    
    axios.get(`/ranking/${formate}`)
        .then(function (response) {
            // handle success
            console.log(response.data);

            document.getElementById("resultHeading").innerHTML = `This is the Ranking of ${formate} Cricket`
            document.getElementById("POS_1").innerHTML = response.data.POS_1 
            document.getElementById("POS_2").innerHTML = response.data.POS_2 
            document.getElementById("POS_3").innerHTML = response.data.POS_3 
            document.getElementById("POS_4").innerHTML = response.data.POS_4 
            document.getElementById("POS_5").innerHTML = response.data.POS_5 
            document.getElementById("POS_6").innerHTML = response.data.POS_6 
            document.getElementById("POS_7").innerHTML = response.data.POS_7 
            document.getElementById("POS_8").innerHTML = response.data.POS_8 
            document.getElementById("POS_9").innerHTML = response.data.POS_9 
            document.getElementById("POS_10").innerHTML = response.data.POS_10

            document.getElementById("RAT_1").innerHTML = response.data.RAT_1 
            document.getElementById("RAT_2").innerHTML = response.data.RAT_2 
            document.getElementById("RAT_3").innerHTML = response.data.RAT_3 
            document.getElementById("RAT_4").innerHTML = response.data.RAT_4 
            document.getElementById("RAT_5").innerHTML = response.data.RAT_5 
            document.getElementById("RAT_6").innerHTML = response.data.RAT_6 
            document.getElementById("RAT_7").innerHTML = response.data.RAT_7 
            document.getElementById("RAT_8").innerHTML = response.data.RAT_8 
            document.getElementById("RAT_9").innerHTML = response.data.RAT_9 
            document.getElementById("RAT_10").innerHTML = response.data.RAT_10
        })
        .catch(function (error) {
            // handle error
            console.log(error.data);
            document.getElementById("resultHeading").innerHTML = "Error in fetching data"
        })

        let div = document.getElementById("resultTable")
        div.style.display = "inline-block"

}