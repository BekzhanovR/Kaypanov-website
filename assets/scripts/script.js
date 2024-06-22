const qa_btns = document.querySelectorAll('#qa-cards .card')

qa_btns.forEach((val) => {
    val.addEventListener('click', () => {
        qa_btns.forEach((item) => {
            item.classList.remove('active');
        })
        val.classList.toggle('active')
    })
})