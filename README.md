# Welcome to Crypto Dash React app

## Instructions for installing and running app

### Nvm
Be sure to have homebrew installed 
1. brew update
2. brew install nvm 
3. mkdir ~/.nvm
4. nano ~/.bash_profile

In your bash_profile file, commit the following changes
1. export NVM_DIR=~/.nvm
2. source $(brew --prefix nvm)/nvm.sh

Back in the terminal, checkout
1. source ~/.bash_profile
2. echo $NVM_DIR

Finally, the current version of node being used is 9.2.0, so: 
1. nvm install 9.2.0 && nvm use 9.2.0

### Final Bit
In your terminal, cd into the root directory & run npm i
once completed run npm start
