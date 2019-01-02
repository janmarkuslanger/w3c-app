eval 'electron-packager . mac --overwrite --platform=darwin --arch=x64 --prune=true --out=release-builds --ignore='
eval 'tar -zcvf release-builds/mac.tar.gz release-builds/mac-darwin-x64'
eval 'rm -rf release-builds/mac-darwin-x64'
