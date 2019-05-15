# webEx- [webEx](#webex)
  - [resources url](#resources-url)
  - [submodule commands](#submodule-commands)
  - [submodule reading](#submodule-reading)
  - [git diff commands](#git-diff-commands)

## resources url
- [x] [file link](http://license.youngjin.com/artyboard/mboard.asp?Action=view&strBoardID=Pds_g&intPage=1&intCategory=0&strSearchCategory=|s_name|s_subject|&strSearchWord=&intSeq=75663)
- [ ] [course lecture](http://license.youngjin.com/free_edu/free_edu_mp4.asp?elc_cd=2379&cate_cd=2087)
- [ ] aiegoo vaio*** 
- [ ] [submodule howto](https://www.vogella.com/tutorials/GitSubmodules/article.html) 

## submodule commands

| when   | command   | when   | command   |
|:---|:--:|:---|:--:|
|  clone a repo w/ modules  | git clone --recursive [URL to Git repo]   | load into existing repo   | git submodule update --init --recursive   |
| job 8   |  git submodule update --init --recursive --jobs 8  |    | git clone --recursive --jobs 8 [URL to Git repo]   |
|  [sample](#sample)  | git submodule update --init --recursive -j 8   |    |    |
| inc/ changes in module   | git pull --recurse-submodules   | only 4 module   | git submodule update --remote   |
| # add submodule and define the master branch as the one you want to track   | git submodule add -b master [URL to Git repo]    |    | git submodule init    |


## submodule reading
[submodule file](./submodule.txt)
***
## git diff commands
|  command  | actions   |
|:---|:---|
| git diff path   |  # uncommited file to HEAD  |
|  git diff HEAD^ -- path  |  # uncommited file to before last commit  |
| git diff HEAD^ HEAD -- path   | #last commit to before last commit   |
| git diff HEAD~n HEAD -- path   |   #difference between HEAD and n-th grandparent |
| git whatchanged -- path   | #Another cool feature is whatchanged command   |

## git diff
- git diff
- git difftool -d commit1 commit2
- git diff {commit1,commit2}:path/to/file.cpp
- git diff commit1 commit2 -- path/to/file.cpp path/to/anotherfile.cpp path/to/subdir
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

## sample

> sample
> 
> $ git submodule update --init --recursive \
Submodule 'web-design-license' (https://github.com/onofflink/web-design-license.git) registered for path 'web-design-license'
Cloning into 'D:/repo/school/webtest/web-design-license'...
Submodule path 'web-design-license': checked out '174edcd2488bdaba5ba9c0984fd92e43174ffe6e'

> [re-add submodule](https://stackoverflow.com/questions/36386667/how-to-make-an-existing-directory-within-a-git-repository-a-git-submodule) 

> [How to create git submodule from repository subdirectory](http://blog.davidecoppola.com/2015/02/how-to-create-git-submodule-from-repository-subdirectory/)
> 