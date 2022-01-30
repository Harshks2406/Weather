    const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');
const datahide= document.querySelector('.middle_layer');

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    console.log(cityVal);
    if(cityVal === ""){
        city_name.innerText = `Please write the city name.`
        datahide.classList.add('data_hide');
    }
    else{
        
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=e7d12ef78d130ac5496658a66ddad17f`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data]; 
            city_name.innerText= `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;

            //condtion to check weather
            var timedecide = new Date();
            var hourdecide = timedecide.getHours();
            if(tempMood === "Clear"){
                if(hourdecide>20 || hourdecide<5){
                    temp_status.innerHTML =
                    "<i class= 'fas fa-moon' style='color: #eccc68;'></i>"
                }
                else{
                    temp_status.innerHTML =
                "<i class= 'fas fa-sun' style='color: #eccc68;'></i>";
                }
                
            }
            else if(tempMood ==="Clouds"){
                temp_status.innerHTML =
                "<i class= 'fas fa-cloud' style='color: #f1f2f6;'></i>";
            }
            else if(tempMood ==="Rain"){
                temp_status.innerHTML =
                "<i class= 'fas fa-cloud-Rain' style='color: #a4b0be;'></i>";
            }
            else if(tempMood ==="Mist"){
                temp_status.innerHTML =
                "<i class='fas fa-smog' style='color: #f1f2f6;'></i>";
            }
            else{
                if(hourdecide>20 || hourdecide<5){
                    temp_status.innerHTML =
                    "<i class= 'fas fa-moon' style='color: #eccc68;'></i>"
                }
                else{
                    temp_status.innerHTML =
                "<i class= 'fas fa-sun' style='color: #eccc68;'></i>";
                }
            }
            datahide.classList.remove('data_hide');
        } catch{
            city_name.innerText = `Please write city name properly.`;
            datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click',getInfo);

