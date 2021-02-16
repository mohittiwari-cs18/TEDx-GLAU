$(function () {

    // $('#btnSeating').on('click', createseating);

    var db = firebase.firestore();

    $('.seat').on('selected', function () {
        console.log(this.value)
    })

    a = $('input[name="seat"]:checked').val();
    console.log(a)
    var seats = []
    db.collection("seats")
        .onSnapshot(function (snapshot) {
            seats = []
            snapshot.forEach(doc => {
                console.log(doc.id + ": ", doc.data().status);
                seats.push({
                    id: doc.id,
                    available: (doc.data().status === 'available') ? true : false,
                })
            });
            console.log(seats)
            createseating(seats)
        });

});
//Note:In js the outer loop runs first then the inner loop runs completely so it goes o.l. then i.l. i.l .i.l .i.l. i.l etc and repeat

function splitList(list) {

}

function createseating(seats) {


    var seatingValue = [];
    // for (var i = 0; i < 10; i++) {
    // <input type='radio' name='seat' value=''>
    var i = 0;
    for (var j = 0; j < seats.length; j++) {
        dis = seats[j].available ? "" : "disabled"
        var seatingStyle = "<input type='radio' name='seat' id='" + seats[j].id + "' value='" + seats[j].id + "' class='seat available' " + dis + " required/>";

        // console.log(seatingStyle, dis)
        seatingValue.push(seatingStyle);



        var final = {
            A: 12,
            B: 12,
            C: 14,
            D: 14,
            E: 16,
            F: 16,
            G: 16,
        }
        var val = final[seats[j].id[0]]

        if ((i + 1) % (val / 2) === 0 && (i + 1) % val !== 0) {
            console.log(val, j)
            var seatingStyle = "<div class='space'></div>";
            seatingValue.push(seatingStyle);
        }

        if ((i + 1) % val === 0) {
            console.log(val, j);
            var seatingStyle = "<div class='break'></div>";
            seatingValue.push(seatingStyle);
            i = -1;
        }
        i++;
    }
    // }
    $('#messagePanel').html(seatingValue);


    $(function(){
    	$('.seat').mouseenter(function () {
    			$(this).attr('data-after',$(this).attr('id'));
		});

		$('.seat').mouseleave(function () {
    			$(this).attr('data-after',"");
		});

      
      
    });

    // $(function () {
    //     $('.seat').on('click', function () {


    //         if ($(this).hasClass("selected")) {
    //             $(this).removeClass("selected");
    //         } else {
    //             $(this).addClass("selected");
    //         }

    //     });

    //     $('.seat').mouseenter(function () {
    //         $(this).addClass("hovering");

    //         $('.seat').mouseleave(function () {
    //             $(this).removeClass("hovering");

    //         });
    //     });


    // });

};