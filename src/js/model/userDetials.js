export function getUserDetials(user)
{
return {
username: user.login,
img_url : user.avatar_url,
followers : user.followers,
following : user.following,
repos : user.public_repos,
repos_url : user.repos_url,
name : user.name??"unknown",
company : user.company??"not specified",
link : user.blog??"not specified",
location : user.location??"not specified",
bio : user.bio??"not specified",
twitter_username : user.twitter_username??"not specified",
createdAt : new Date(user.created_at).toLocaleDateString("en-GB") 
}

}