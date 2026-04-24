import {getUserDetials, fetchUserAndRepos} from "../../src/js/service/service.js";
import {getUserMapper} from "./ui/mapper/userMapper.js";
import {getRepoMapper} from "./ui/mapper/repoMapper.js"
import{renderUser,defaultValue, noRepos,renderRepo} from "./ui/render/render.js"
const UI = 
{
form:document.getElementById('form-id'),
input:document.getElementById('input-search'),
btnSearch:document.getElementById('btn-search'),
}

function IsinvalidInput(input)
{
return !input || input.length<3;
}
UI.form.addEventListener("submit", submit);
 async function fetchUser(username)
{
if (IsinvalidInput(username))
        {
        alert("username is not valid");
        return;
        }
        try
        {
        const data = await fetchUserAndRepos(username);           
        const usermap =  getUserMapper(data.user);  
    // console.log(usermap);
    // console.log("Repos :",getRepoMapper(data.repos));
// render 
renderUser(usermap);
console.log(usermap);
const repos = getRepoMapper(data.repos);
console.log(repos);
if (repos.length===0)
{
noRepos();
}else
    {
renderRepo(repos);
    }
    
}catch(e)
        {
        defaultValue();
        noRepos();
        console.error(e);
        }
}
async function submit(e)
{
    e.preventDefault();        
    const username = UI.input.value.trim();
    await fetchUser(username);
}


fetchUser("sajadbahaa");