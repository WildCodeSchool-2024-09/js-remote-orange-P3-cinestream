# #!/usr/bin/bash

# # importe node/npm
# export PATH="$PATH:/opt/alt/alt-nodejs20/root/usr/bin/"

# # Installer les dépendances
# cd ./client && npm install --production
# cd ./server && npm install --production
# echo "Dependance installé"

# # Les build
# cd ./client && npm run build
# cd ./server && npm run build
# echo "Build terminé"

# # Déploye
# cp -R ./client/dist /home/ficl4036/public_html/projet3/
# cp -R ./server/dist /home/ficl4036/public_html/projet3-api/
# echo "Déploiement terminé"
