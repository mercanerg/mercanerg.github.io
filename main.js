const text = ["Full stack", "GitHub", "JavaScript", "HTML", "CSS", "C#", "Microcontroller"]
const textField = document.getElementById('awesomeAnimation');

const typewriter = new Typewriter(textField, {
    loop: true,
    delay: 100,
});
for (var i = 0; i < text.length; i++) {
    typewriter
        .typeString('<span> ' + text[i] + ' </span>')
        .start()
}