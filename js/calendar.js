let calendarEl = document.getElementById('calendar');

    fetch("date_combat_ufc.json")
        .then(res => res.json())
        .then(res => {

            let data = [];

            for(let i = 0; i < res.length; i++){
                data.push({ title: res[i].Name, start: res[i].DateTime,  color: '#1e2761',
                    
                  } );
            }

            console.log(data)

            let calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                events: data
                
            });
            calendar.render();

        });