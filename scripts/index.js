window.addEventListener('DOMContentLoaded', (e) => {
    let christmas_text = document.getElementById('christmas_text').innerHTML;
    document.getElementById('christmas_text').innerHTML = '';
    for (let index = 0; index < christmas_text.length; index++) {
        let span = document.createElement('span');
        if (index % 2 == 0) {
            span.classList.add('christmas-gold');
        } else {
            span.classList.add('christmas-green');
        }
        span.innerText = christmas_text[index];
        document.getElementById('christmas_text').appendChild(span);
    }
})