

## git diff
- git difftool -d commit1 commit2
- compare the previous committed state from HEAD with the state branch1 was 3 commits ago \
- git diff HEAD^ branch1~3 filepath
- git diff HEAD^ --  web-design-license/js-sample/
- git diff branch1 branch2 filepath
- Only if the name is the same and you want to compare your current working directory to some branch:
- git diff ..branch2 full/path/to/foo.txt
- git diff branch1:./relative/path/to/foo.txt branch2:./relative/path/to/foo-another.txt
- git diff HEAD:./sample/index4.html web-design-license/js_sample/index4.html

## win difftool
- git difftool -d 5ec655c 20d4e15
- diff -qrN ./sample web-design-license/js_sample/
- diff -qr ./sample web-design-license/js_sample/
- diff fileA.php fileB.php (or vimdiff if you want side by side comparison)

git rm --cached filename (to remove from the staging area)