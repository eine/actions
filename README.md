A JavaScript action with TypeScript compile time support, unit testing with Jest and using the GitHub Actions Toolkit.

Edit, build, test, and commit changes:

```bash
git checkout master
yarn
yarn run build
yarn test

git add <whatever source files you added/modified>
git commit -m <commit message>
```

Publish a new release:

```bash
git checkout -b <release branch name>

rm -Rf node_modules
yarn install --production
git rm -rf *.json *config.js .github .gitignore __tests__ docs src README.md
echo "JavaScript (TypeScript) actions" > README.md
git add main.js node_modules README.md

git commit -am <release message>
git push origin <release branch name>
```

Update an existing release branch:

```bash
mv main.js main.js.new
cp package.json package.json.new
git checkout <release branch name>
mv package.json.new package.json

rm -Rf node_modules
yarn install --production
rm package.json
git rm -rf *.json *.config.js .github .gitignore __tests__ docs src README.md
echo "JavaScript (TypeScript) actions" > README.md
mv main.js.new main.js
git add main.js node_modules README.md

git commit -a -m <release message>
git push origin <release branch name>
```
