export function repoLight(repos)
{
return repos.map(repo=>(
{
name:repo.name.trim(),
language:repo.language,
updatedAt: new Date(repo.updated_at).toLocaleDateString("en-GB"),
stars:String(repo.stargazers_count),
description:repo.description??"Not Specified",
fork:String(repo.forks_count),
    })
) ;


}