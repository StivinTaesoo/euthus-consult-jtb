const scrollContainer = document.getElementById("scrollContainer");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

prevBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 280;
});
nextBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 280;
});

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle("show");
    });
});
