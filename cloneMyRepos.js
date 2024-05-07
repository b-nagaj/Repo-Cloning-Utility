import { Octokit } from "@octokit/core";
import { createRequire } from "module"
import { argv } from "process";
const require = createRequire(import.meta.url)

var path = ''
var username = ''
var authToken = ''
var repositories = []

// captures command line arguments into variables
function getArgs() {
    path = argv[2]
    username = argv[3]
    authToken = argv[4]
}

// retrieves a list of repos associated with a user's account
async function getRepos() {
    // authenticate with GitHub
    const octokit = new Octokit({
        auth: authToken
    });

    // retrieve data from the GitHub API
    const response = await octokit.request(`https://api.github.com/users/${username}/repos`, {
        headers: {
            'X-Github-Api-Version': '2022-11-28'
        }
    });

    // store the names & urls of each repository
    response.data.forEach((repo) => {
        repositories.push([repo.name, repo.html_url])
    });
}

// clones each repo associated with a user's account
function cloneRepos() {
    var command = ''

    // initialize and configure a shell
    var shell = require('shelljs')
    shell.cd(path)

    // clone each repository
    repositories.forEach((repo) => {
        command = `git clone ${repo[1]}`
        shell.exec(command)
    })
}

async function main() {
    await getArgs()
    await getRepos()
    await cloneRepos()
}

main()
