function toggleLesson(btn){
    let content = btn.nextElementSibling;

    document.querySelectorAll('.uh-lesson-content').forEach(el => {
        if (el !== content) el.classList.remove("show");
    });

    content.classList.toggle("show");
}