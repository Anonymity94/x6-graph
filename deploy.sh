#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

npm run build
cd dist
git init

git add -A
git commit -m 'deploy'
git push -f git@github.com:Anonymity94/x6-graph.git master:gh-pages

cd -