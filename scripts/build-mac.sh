eval 'electron-packager . mac --overwrite --platform=darwin --arch=x64 --prune=true --out=release-builds'
eval 'zip release-builds/mac.zip -r release-builds/mac-darwin-x64'
eval 'rm -rf release-builds/mac-darwin-x64'
