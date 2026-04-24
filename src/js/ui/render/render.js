import {createRepo} from "../component/repo.js";

const UI  =
{
name : document.getElementById("name"),
username:document.getElementById('username'),
userBio:document.getElementById('user-bio'),
location:document.getElementById('location'),
joined:document.getElementById('joined'),
img:document.getElementById('img-profile'),
followers:document.getElementById('followers'),
following:document.getElementById('following'),
countrepo:document.getElementById('count-repo'),
avator_feedBack : document.querySelector(".avatar-fallback"),
company:document.getElementById("company"),
link:document.getElementById("link"),
twiter:document.getElementById("twiter"),
}
export function defaultValue()
{
UI.name.textContent ="unKnown";
UI.username.textContent = "unKnown";
UI.location.textContent = "unKnown";
UI.joined.textContent = "unKnown";
UI.countrepo.textContent ="0 repositories";
UI.followers.textContent= "0 Followers";
UI.following.textContent = "0 Following";
UI.img.classList.add('hide');
UI.avator_feedBack.classList.remove('hide');
UI.avator_feedBack.classList.add('flex');
UI.company.textContent = "unKnown";
UI.link.textContent = "unKnown";
UI.twiter.textContent = "unKnown";
UI.userBio.textContent = "unKnown"
}
export function noRepos()
{
const repos = document.getElementById('repos');
isCardsExist();
isErrorExsist();
const error = document.createElement('div');
error.id="error";
error.classList.add('error-message');
error.textContent = "No Repos";
repos.appendChild(error);
}
function isErrorExsist()
{
const error = document.getElementById('error');
if (error)
    {
    error.remove();
    }
}
function isCardsExist()
{
const cards = document.getElementById('cards');
if (cards)
    {
    cards.remove();
    } 
}
export function renderRepo(repos)
{
isErrorExsist();
isCardsExist();
createRepo(repos);
}
export function renderUser(data)
{
UI.name.textContent = data.name,
UI.username.textContent = data.username,
UI.countrepo.textContent = data.repos;
UI.followers.textContent = data.followers;
UI.following.textContent = data.following;
UI.location.innerHTML =
`<i class="custom-i fa-solid fa-location-dot"></i>
${data.location}` ;
UI.joined.innerHTML = 
`<i class="custom-i fa-regular fa-calendar-days"></i> ${data.createdAt}`
UI.userBio.textContent = data.bio;
UI.company.textContent = data.company;
UI.link.textContent = data.link;
UI.twiter.textContent = data.twitter_username;
if (!data.img_url)
    {
UI.img.classList.add("hide");
UI.avator_feedBack.classList.remove('hide');
UI.avator_feedBack.classList.add('flex');
}else
{
UI.img.classList.remove('hide');
UI.avator_feedBack.classList.remove('flex');

UI.img.src = data.img_url;
UI.avator_feedBack.classList.add('hide');
}

}