echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server"
scp -r build/* sergio@192.155.82.210:/var/www/sergioo.xyz/

echo "Done :>"