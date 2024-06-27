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



let calendar = document.getElementById('calendar');
document.addEventListener('DOMContentLoaded', function () {



    fetch("date_combat_ufc.json")
        .then(res => res.json())
        .then(res => {
            const calendarEl = document.getElementById('calendar')
            const calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                events: 'date_combat_ufc.json'
            })
            
            calendar.render()
        })
})


