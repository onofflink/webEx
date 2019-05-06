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
|  in short  | git submodule update --init --recursive -j 8   |    |    |
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
