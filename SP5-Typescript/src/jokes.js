var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let jokeOutput = document.querySelector("#jokeOutput");
let counter = 0;
let btnContainer = document.querySelector(".scoreButtons");
let dataAPI, data;
let scoreJoke, joke;
scoreJoke = undefined;
let dadJokesApi = "https://icanhazdadjoke.com";
let chuckNorrisJokes = "https://api.chucknorris.io/jokes/random ";
let randomN;
let lastOne;
let showBgBlob = document.querySelector("#bgBlob");
//const weatherIcon = document.getElementById("icon");
let weatherIcon = document.querySelector("#icon"); //.innerHTML =  iconCode
let iconCode;
let iconUrl;
let jokeJoke;
function cargarApi() {
    return __awaiter(this, void 0, void 0, function* () {
        randomN = Math.random();
        console.log(randomN);
        if (randomN < 0.5) {
            yield fetch("https://icanhazdadjoke.com/", {
                headers: {
                    Accept: "application/json",
                },
            })
                .then((response) => response.json())
                .then((data) => {
                jokeOutput.textContent = data.joke;
                console.log(data);
            });
        }
        else {
            yield fetch(chuckNorrisJokes)
                .then((response) => response.json())
                .then((data) => {
                jokeOutput.innerHTML = data.value;
                console.log(data);
            });
        }
        /* try {
            const respuesta = await fetch("https://icanhazdadjoke.com", {
            headers: {
                Accept: "application/json",
            },
            });
            console.log(respuesta);
            dataAPI = await respuesta.json();
        
            
            
        } catch (error) {
            console.log(error);
        }
        return dataAPI
        */
        const objJoke = { joke: jokeOutput.textContent, date: getTheDate(), scoreJoke: undefined };
        reportJoke.push(objJoke);
        console.log("reportJoke: ", reportJoke);
    });
}
function getTheDate() {
    const d = new Date();
    let date = d.toISOString().substring(0, 19);
    console.log("date: ", date);
    return date;
}
function showJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        let imagesBG = ["img/blob2.svg", "img/blob4.svg", "img/blob5.svg"];
        let currentImageIndex = 0;
        counter++;
        console.log("counter: ", counter);
        //jokeOutput.textContent = dataAPI.joke;
        btnContainer.innerHTML = `<p>Pots votar:</p>
        <button class="scoreBtn btn" onclick="getTheScore(1)"><i
        class="fa-regular fa-face-laugh-beam"></i></button>
        <button class="scoreBtn btn" onclick="getTheScore(2)"><i
        class="fa-regular fa-face-laugh-squint"></i></button>
        <button class="scoreBtn btn" onclick="getTheScore(3)"><i
        class="fa-regular fa-face-grin-squint-tears"></i></button>`;
        //document.getElementById("containerJokesId").style = "background-image: url('img/blob2.svg');"
        currentImageIndex = Math.floor(Math.random() * imagesBG.length);
        console.log("currentImageIndex: ", currentImageIndex);
        console.log(imagesBG[currentImageIndex]);
        //showBgBlob.src = imagesBG[currentImageIndex];
        showBgBlob.setAttribute("src", imagesBG[currentImageIndex]);
        jokeJoke = jokeOutput.textContent;
        //console.log("joke: ", joke, dataAPI.id);
    });
}
let btn = document.getElementById("callApi");
btn.addEventListener("click", cargarApi);
// ********************************************************* MAKE THE OBJECT *********************************************************
const reportJoke = [];
function getTheScore(score) {
    let dateJoke = getTheDate();
    dateJoke;
    console.log("score: ", score);
    lastOne = reportJoke.length - 1;
    let jokeIsThereIndex = reportJoke.findIndex((reportJokeItem) => reportJokeItem.jokeJoke === joke);
    console.log("jokeIsThereIndex: ", jokeIsThereIndex);
    /* console.log("length_: ", length_); */
    reportJoke[lastOne].scoreJoke = score;
    console.log(reportJoke);
}
// ********************************************************* API WEATHER *********************************************************
const API_KEY = "4dc77f7d5c307a99eab50053b6491927";
let apiCall = (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=fr`;
    fetch(url)
        .then((response) => response.json().then((data) => {
        console.log(data);
        console.log(data.weather[0].description);
        console.log(data.weather[0].icon);
        let description = data.weather[0].description;
        iconCode = data.weather[0].icon;
        console.log("iconCode: ", iconCode);
        //document.querySelector("#description").innerHTML = description[0].toUpperCase() + description.slice(1);
        //document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#temp").innerHTML = data.main.temp + "º";
        iconUrl = "https://openweathermap.org/img/w/" + iconCode + ".png";
        //weatherIcon.src = iconUrl;
        weatherIcon.setAttribute("src", iconUrl);
    }))
        .catch((err) => console.log("Erreur: " + err));
};
/* document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault();
        let ville = document.querySelector("#inputCity").value;

        apiCall(ville)
    }
    ); */
// ********************************************************* FIN API WEATHER *********************************************************
apiCall("Barcelona");
