
export function createRepo(repos)
{
const parent = document.getElementById('repos');
// id="cards" class="grid" 'cards'
const cards = document.createElement('section');
cards.id = "cards";
cards.classList.add('grid');
for (const repo of repos) {
const card = document.createElement("article");
card.classList.add("repo","flex");
card.innerHTML = `
<div class="flex">
        <i class="custom-i fa-solid fa-code-branch"></i>
        <span class="label">${repo.name}</span></div>
<p class="text">${repo.description}</p>
<div class="skills flex">
    <div class="skill flex">
 <i class="custom-i fa-solid fa-circle"></i>   
 <span class="label">${repo.language}</span>
</div>
<div class="skill flex">
<i class="custom-i fa-solid fa-star"></i>   
<span class="label">${repo.stars}</span>
</div>
<div class="skill flex">
    <i class="custom-i fa-solid fa-code-fork"></i>
<span class="label">${repo.fork}</span>
</div>
<div class="skill flex">
<i class="custom-i fa-solid fa-arrow-rotate-right fa-flip-horizontal"></i>
    <span class="label">${repo.updatedAt}</span></div></div>`
cards.appendChild(card);
}
parent.appendChild(cards);
}