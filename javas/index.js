const text = "My goal as a full stack developer is to use the most enhanced technologies to design and develop applications."
const textField = document.getElementById('hero');

const typewriter = new Typewriter(textField, {
    loop: true,
    delay: 20,
});
typewriter
    .typeString('<span>' + text + '</span>')
    .start()

let myLabels = document.querySelectorAll('.lbl-toggle');
Array.from(myLabels).forEach(label => {
    label.addEventListener('keydown', e => {
        if (e.which === 32 || e.which === 13) {
            e.preventDefault();
            label.click();
        };
    });
});