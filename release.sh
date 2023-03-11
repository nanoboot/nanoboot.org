#! /bin/bash

versionFile=version.html
# Create version.html, if it does not yet exist
if [[ ! -e ./$versionFile ]]; then
    echo "0" >$versionFile
fi

# Increment version.html
#script, which increments the number in file version.txt
cat $versionFile | while read LINE; do
    versionNumber=$LINE
    newVersionNumber=$((versionNumber+1))
    echo $newVersionNumber>$versionFile
    echo Version incremented to `cat $versionFile`
    break
done

# Save all work

git add .
versionContent=`cat $versionFile`
version=$versionContent
dateVar=`date +%Y%m%d-%H%M%S`

git commit -m "NANOBOOT-2 : Released version $version ($dateVar)"
