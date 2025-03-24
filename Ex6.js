const weatherData = {
    "Ha Noi": {
        img:'https://png.pngtree.com/png-vector/20190916/ourlarge/pngtree-cloud-icon-for-your-project-png-image_1731124.jpg',
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "Ho Chi Minh": {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJuB69sv3BPedDCKMCFC46_qE6hRcIYXjNWJFFQKcCq-NKLKYTTxZ-YOclQY0YUrYXAi0&usqp=CAU',
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Da Nang": {
        img:'https://media.istockphoto.com/id/1245876131/vi/vec-to/biểu-tượng-mưa-lớn-mưa-rào-hoặc-mưa-cho-ứng-dụng-hoặc-tiện-ích-dự-báo-thời-tiết-mây-với.jpg?s=612x612&w=0&k=20&c=S67aeRqH7didayRze8yxxdBvKirbHn0w5xEn76l-vBo=',
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
}
let btn=document.getElementById('btn');
let input=document.getElementById('input');
function displayWeather(city) {
    let weather = weatherData[city];
    if (!weather) {
        alert("Dữ liệu thời tiết không có cho thành phố này.");
        return;
    }
    let weatherDiv = document.createElement('div');
    weatherDiv.id='father';
    weatherDiv.innerHTML=`
        <div>
            <h2>${city}</h2>
            <img src='${weather.img}' >
        </div>
        
        <div >
            <p><strong>Nhiệt độ:</strong> ${weather.temperature}°C</p>
            <p><strong>Độ ẩm:</strong> ${weather.humidity}%</p>
        </div>
        <div>
            <p><strong>Tốc độ gió:</strong> ${weather.windSpeed} m/s</p>
            <p><strong>Mô tả:</strong> ${weather.description}</p>
            <p><strong>Biểu tượng:</strong> ${weather.icon}</p>
        </div>
    `;
    document.getElementById('gird').innerHTML=``;
    document.getElementById('gird').appendChild(weatherDiv);
   
}

function getWeatherFromInput() {
    let cityInput = input.value.trim();
    console.log(cityInput);
    if (cityInput) {
        displayWeather(cityInput);
    } else {
        alert("Vui lòng nhập tên thành phố!");
    }
}
btn.addEventListener('click',()=>{
    
    getWeatherFromInput();
    input.value='';
})