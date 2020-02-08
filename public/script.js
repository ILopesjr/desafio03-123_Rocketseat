const modalOverlay = document.querySelector('.modal-overlay');
const contents = document.querySelectorAll('.content');
const modal = document.querySelector('.modal');

for (const content of contents) {
    content.addEventListener('click', function(){
        const curseId = content.getAttribute('id');
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${curseId}`;

    });
}
document.querySelector('.close-modal').addEventListener('click', function(){
    document.exitFullscreen();
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('iframe').src = '';
});

document.querySelector('.maximize-modal').addEventListener("click", function() {

    modal.requestFullscreen();
  });