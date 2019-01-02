RELEASE_DIR="release-builds"
APP_FOLDER="w3c-darwin-x64"

eval "electron-packager . w3c --overwrite --platform=darwin --arch=x64 --prune=true --out=$RELEASE_DIR --ignore=assets"
eval "cd $RELEASE_DIR/"
eval "tar -zcvf mac.tar.gz $APP_FOLDER"
eval "cd ../"
eval "rm -rf $RELEASE_DIR/$APP_FOLDER"

echo "macOS package is ready."
