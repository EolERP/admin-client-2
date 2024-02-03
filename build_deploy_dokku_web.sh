npm i

rm -rf build

VITE_API_BASE_URL=https://erpjs-api.prod.eolerp.eu/graphql \
VITE_KEYCLOAK_BASE_URL=https://keycloak.prod.eolerp.eu/auth \
VITE_KEYCLOAK_REALM=erpjs \
VITE_URL=https://admin.prod.eolerp.eu/ \
 npm run build

cd dist

touch .static

git init
git remote add dokku dokku@prod.eolerp.eu:admin2
git add .
git commit -am "make it better"
git push dokku main --force

cd ..

