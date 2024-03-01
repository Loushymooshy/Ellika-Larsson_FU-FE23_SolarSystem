export function scrollToBottom()  {
    var planets = document.querySelectorAll('.planet'); 
    console.log(planets)
    for (var i = 0; i < planets.length; i++) {
        planets[i].addEventListener('click', function() {
            window.scrollTo({ left: 0, top: planets.scrollHeight, behavior: "smooth" });
        });
    }
}