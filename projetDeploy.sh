# supprime les ficher qui pose problème pour le deploiement
rm package.json
rm package-lock.json

# import de node
export PATH="$PATH:/opt/alt/alt-nodejs20/root/usr/bin/"

# installation des dépendances
cd ./client && npm install
cd ..
cd ./server && npm install
cd ..

# build
cp /home/ficl4036/00ConfigSites/clientProjet3/.env ./client/
cd ./client && npm run build
cd ..
cp ./client/.htaccess ./client/dist/

  
if [ -d ./server/dist/public/uploads ]; then
  cp ./server/dist/public/uploads/. ./server/public/uploads/
fi
cd ./server && npm run build
cd ..

# deploiement
mkdir -p /home/ficl4036/public_html/projet3
mkdir -p /home/ficl4036/public_html/projet3-api

cp -R ./client/dist/. /home/ficl4036/public_html/projet3/
