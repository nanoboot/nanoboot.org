#! /bin/bash

txtFile=version.html
# Create version.html if it does not exist
if [[ ! -e ./$txtFile ]]; then
    echo "0" >$txtFile
fi

# Increment version.txt
#script, which increments the number in file version.txt
cat $txtFile | while read LINE; do
    versionNumber=$LINE
    newVersionNumber=$((versionNumber+1))
    echo $newVersionNumber>$txtFile
    echo Version incremented to `cat $txtFile`
    break
done

# Save all work

git add .
versionHtmlContent=`cat $txtFile`
version=$versionHtmlContent
dateVar=`date +%Y%m%d-%H%M%S`

git commit -m "NANOBOOT-2 : Released version $version ($dateVar)"
