#!/bin/bash

git stash clear
git stash
git pull origin master
git stash apply stash@{0}

#cp _book到父目录
cp -r ./_book ../

#commit alters

git add .
git commit -m $(date "+%Y%m%d-%H%M%S")
git push origin master

#switch branch
git checkout gh-pages
cp -R ../_book/ ./
rm -r ../_book

git add .
git commit -m $(date "+%Y%m%d-%H%M%S")
git push


#switch master branch
git checkout master

