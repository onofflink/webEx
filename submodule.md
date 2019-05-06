# webEx

## resources url
- [x] [file link](http://license.youngjin.com/artyboard/mboard.asp?Action=view&strBoardID=Pds_g&intPage=1&intCategory=0&strSearchCategory=|s_name|s_subject|&strSearchWord=&intSeq=75663)
- [ ] [course lecture](http://license.youngjin.com/free_edu/free_edu_mp4.asp?elc_cd=2379&cate_cd=2087)
- [ ] aiegoo vaio*** 
- [ ] [submodule howto](https://www.vogella.com/tutorials/GitSubmodules/article.html) 

| when   | command   | when   | command   |
|:---|:--:|:---|:--:|
|  clone a repo w/ modules  | git clone --recursive [URL to Git repo]   | load into existing repo   | git submodule update --init --recursive   |
| job 8   |  git submodule update --init --recursive --jobs 8  |    | git clone --recursive --jobs 8 [URL to Git repo]   |
|  in short  | git submodule update --init --recursive -j 8   |    |    |
| inc/ changes in module   | git pull --recurse-submodules   | only 4 module   | git submodule update --remote   |
| # add submodule and define the master branch as the one you want to track   | git submodule add -b master [URL to Git repo]    |    | git submodule init    |
