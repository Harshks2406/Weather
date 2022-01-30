const day = document.getElementById('day');
        const getCurrentDay = () =>{
            let weekDay = new Array(7);
            weekDay[0] = "Sunday";
            weekDay[1] = "Monday";
            weekDay[2] = "Tuesday";
            weekDay[3] = "Wednesday";
            weekDay[4] = "Thrusday";
            weekDay[5] = "Friday";
            weekDay[6] = "Saturday";


            let currenTime = new Date();
            days = weekDay[currenTime.getDay()];
            let day = document.getElementById('day');
            day.innerText = days;
        };

        const getCurrentTime = () =>{
            var months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
            var now = new Date();
            var hours = now.getHours();
            var mins = now.getMinutes();
            var month = months[now.getMonth()+1];
            var date = now.getDate();
            let today_date = document.getElementById('today_date');
            today_date.innerText = `${date} ${month}, ${hours}:${mins}`;
        }

        getCurrentDay();
        setInterval(getCurrentTime,10);