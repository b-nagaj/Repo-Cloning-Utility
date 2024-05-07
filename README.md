# Repo Cloning Utility

Easily clone all of your remote GitHub repositories at once into any directory on your local machine through the power of JavaScript

## Prerequisites

What do I need to have installed on my machine before building the project?

- [NodeJS](https://nodejs.org/en/download)
- A [GitHub Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) for your GitHub account

## Installing Dependencies

What dependencies do I need to install & how do I install them?

`npm install`

## Building

How do I run the application?

`node cloneMyRepos.js path username token`

**path** the absolute path to a directory where you'd like your repos cloned

**username** your GitHub username

**token** your GitHub personal access token

**EX:** *node cloneMyRepos.js /home/jdoe/Documents john-doe ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*
