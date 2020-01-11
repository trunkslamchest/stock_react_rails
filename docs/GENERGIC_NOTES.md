// ============ INSTALL ============ \\

bundle add jwt
bundle add dotenv-rails

INSTALL REACT:

npm install -g react-router
npm install -g react-router-dom

sudo npm install -g --save react-globally
npm install create-react-app
npm install redux

INSTALL REDUX:

sudo npm install -g create-react-app
sudo npm install -g redux

// ============ SERVER ============ \\

HTTPS server start:

  "scripts": {
    "start": "HTTPS=true react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },

KILL SERVER PROCESS:

lsof -i :<port number>

kill -9 $(lsof -i tcp:3000 -t)

kill -9 $(lsof -i tcp:<port number> -t)

// ============ FAKE SCREENS ============ \\

chmod +x genact-osx
./genact-osx
./genact-osx -h
./genact-osx -m


// ============ GIT HUB ============ \\

mkdir
	- make directory

cd
	- change directory

touch
	- make file

ls
	- list files in current directory

~

rm -rf .git
	- removes git tracking from folder

git init
	- start git tracking

git status
	- check status of changes

git add <file_name>
	- add file to tracking after it has been made

git add -p
	- shows simple difference report

git add .
	- adds the current folder you are in to tracking

git add <folder_name>/.
	- adds all the changes to all the files in a folder to tracking

git commit -m "message"
	- commit changes listed by git status (-m is the message flag)

git commit -am "message" - (-a adds all changes to the tracked file)

git clone <git URL>
	- downloads repository at a git URL and saves it locally (get URL by going to repository on github, click "Clone or Download" and "use ssh", copy link)

git remote
	- lists folders on remote repository

git remote show <folder>
	- shows stats about the folder on the remote repository

git remote add <short_name> <git URL>
	- adds the commited changes to the remote repository at a git URL using <short_name> as a designation

git remote rm <short_name>
	- removes remote branch from git tracking

git remote -v
	- view the current remote you are connected to

git push -u <short_name> <branch>
	- uploads commited changes to the specified branch using <short_name> as a designation (-u flag for first commit to "save" the remote repository as the default push destination)

git branch
	- view local branches

git branch -a
	- view remote branches

git branch <new_branch_name>
	- locally creates a new branch

git branch -d <branch_name>
	- deletes branch but halts on push status and merge conflicts

git branch -D <branch_name>
	- force deletes branch

git checkout <branch_name>
	- switch between local branches

git checkout -b <new_branch_name>
	- locally create a new branch and switch to the new branch

git checkout -
	- switch back to a previous branch

git checkout <short_name>/<branch>
	- establishes a remote tracking branch, establishes a local tracking branch, moves you to the local tracking branch

git merge <branch_name>
	- merges the current branch you are on with <branch_name>

git fetch <git URL>
	- downloads a new copy of the remote repository

git pull <git URL>
	-  downloads a new copy of the remote repository, and merges it with the local repository

echo "Here be text." > <file_name>
	- adds what is in quotes to the file in <file_name>