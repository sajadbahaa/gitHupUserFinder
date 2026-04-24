const api = "https://api.github.com/users/";


function ResponseMessage(status)
{
 switch (status) {
                case 404:
                    throw new Error("User not found");

                case 401:
                    throw new Error("Unauthorized - check your token");

                case 403:
                    throw new Error("Rate limit exceeded");

                case 500:
                    throw new Error("Server error");

                default:
                    throw new Error(`Unexpected error: ${status}`);
            }
}

export async function getUserDetials(username)
{
    try
    {
const response  = await fetch(`${api}${username}`);

if (!response.ok)
    {
    ResponseMessage(response.status);
    }
const data = await response.json();
return data;
    }
    catch(e)
    {
    console.error(`error fetching user : `,e.message);
throw e;
    }
}


async function getUserRepos(url)
{
    try
    {
const response  = await fetch(`${url}`);

if (!response.ok)
    {
    ResponseMessage(response.status);
    }
const data = await response.json();
return data;
    }
    catch(e)
    {
    console.error(`error fetching user : `,e.message);
throw e;
    }
}




export async function fetchUserAndRepos(username) {
  try {
    // 1️⃣ first call: user
    const user = await getUserDetials(username);

    // 2️⃣ second call depends on first
    const repos = await getUserRepos(user.repos_url);

    return { user, repos };

  } catch (err) {
    console.error(err);
  }
}