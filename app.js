const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
    // for (let i = 0; i < sectBtn.length; i++) {
    sectBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            document.querySelector('.active-btn').classList.remove('active-btn');
            e.target.classList.add('active-btn');
            document.querySelector(".active").classList.remove("active");
            e.target.classList.add('active')

        })
    })
    // }
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');
            sections.forEach((section) => {
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active')
        }
    })
}

PageTransitions();