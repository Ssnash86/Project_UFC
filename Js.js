let link = document.getElementById('bar_rencontre');
let tableau = document.getElementById('tableau');

async function even() {

    const reponse = await fetch("date_combat_ufc.json");
    const even = await reponse.json();
    even.forEach(element => {
        console.log(element);
        if (element.Status == "Scheduled") {
            link.innerText += element.Name + " " + element.Day + " "
        }
    })
};

if (tableau) {

    even()
    fetch("Fighters.json")
        .then(res => res.json())
        .then(res => {
            new gridjs.Grid({
                columns: [{
                    name: "FirstName",
                }, {
                    id: 'LastName',
                    name: "LastName"
                }, {
                    id: 'Nickname',
                    name: "Nickname",
                }, {
                    id: 'Wins',
                    name: "Wins",
                    sort: true,
                }],

                search: true,
                pagination: {
                    limit: 10
                },
                data: res,

            }).render(tableau);

        })
}



    let calendarEl = document.getElementById('calendar');

    fetch("date_combat_ufc.json")
        .then(res => res.json())
        .then(res => {

            let data = [];

            for(let i = 0; i < res.length; i++){
                data.push({ title: res[i].Name, start: res[i].DateTime,  color: 'red',
                    
                  } );
            }

            console.log(data)

            let calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                events: data
                
            });
            calendar.render();

        });
        
        new Splide('.splide').mount();


       




        



