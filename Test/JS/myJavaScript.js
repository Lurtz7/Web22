$(document).ready(function () {

   
    $(function () {
       
        var date = $('#datepicker').datepicker({
            dateFormat: 'yy-mm-dd' ,  
            changeMonth: true,
            changeYear: true,
            yearRange: '1900:2150',
        }).val();
 

    });
    
   

   
    $("#addContact").click(function () {


      

        var birthDay = $("#datepicker").val();
        var DOB = new Date(birthDay);
        var today = new Date();
        var age = today.getTime() - DOB.getTime();
        age = Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
         

        var sex = "Man";

        if( $("#lastNumber").val().substr(2,1) % 2 == 0) {

            sex = "Kvinna";
        }

        var birthday = birthDay.substr(8, 2) + "/" + birthDay.substr(5, 2);
        
        var input = "<div class='tableRow'>" +
            " <div class='tableCell'>" + $("#firstname").val() + "</div>" +
            " <div class='tableCell'>" + $("#lastname").val() + "</div>" +
            " <div class='tableCell'>" + $("#datepicker").val() + "</div>" +
            " <div class='tableCell'>" + sex + "</div>" +
            " <div class='tableCell'>" + age + "</div>" +
            " <div class='tableCell'>" + birthday + "</div>" +
            " </div>";
        
            

                $(".tableBody").append(input);
         


    });

    var ctx = $("#myChart");
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
});

