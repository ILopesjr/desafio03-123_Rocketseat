const contents = document.querySelectorAll('.content');

// for (const content of contents) {
//     content.addEventListener('click', function(){
//         const curseId = content.getAttribute('id');
//         modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${curseId}`;
//         window.location.href = `/recipe/${i}`;
//     });
// }

for (const content of contents) {
    content.addEventListener('click', function(){
        const curseId = content.getAttribute('id');
        window.location.href= `https://rocketseat.com.br/${curseId}`;
    });
}