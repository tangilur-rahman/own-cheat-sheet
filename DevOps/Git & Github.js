/*
❤️❤️❤️ Git & Github ❤️❤️❤️

  
#️⃣ Git & Github

  🌿 Git : It is a free and open source distributed version control system designed to handle everything from small to very large projects efficiency.


  🌿 Github : It is an online software development platform used for storing, tracking and collaborating on software projects.

    👉 Host Git


  ⭐ Git & Github aren't same things but work together.



#️⃣ Git

   ⭕ Software

   ⭕ Installed and maintained locally from our PC.

   ⭕ Keep track of Changes.

   ⭕ Help to Version Control.

   ⭕ Provides CLI [Command Line Interface].

     
     
#️⃣ Github 

   ⭕ Service

   ⭕ Maintained on Cloud/Web.

   ⭕ Host Git.

   ⭕ Help to share Source Code publicly.

   ⭕ Multiple person can Collaboration on a Project from anywhere.

   ⭕ Provides GUI Interface.



#️⃣ Environment Setup & Configuration

   👉 Install Git Software on our PC

   > git --version


 🌿 Configuration

  🟢 Best Practice : Github account Info & Configuration Info have to be same.

   👉 clarify Owner.


  ⭕ SET USER-NAME GLOBALLY => git config --global user.name "Tangilur Rahman"

  ⭕ SET USER-EMAIL GLOBALLY => git config --global user.email "tangilurrahaman@gmail.com"

   👉 We can rename user name & email same way ANYTIME.

   👉 If we don't want to set user name & email globally then just remove "--global" word.


  ⭕ DISPLAY USER-INFO IN DETAILS => git config --list

  ⭕ DISPLAY USER-INFO SPECIFICALLY => 
    > git config user.name
    > git config user.email



 ⭐ Git & Github procedure complete within 4 states

  1️⃣ Working Directory

  2️⃣ Stage

  3️⃣ Local Repository

    👉 [Git]

  4️⃣ Cloud Repository [Github]



❤️ Working Directory ❗ Create Git Folder [1st State]

  ⭕ INSIDE A SPECIFIC FOLDER => git init

    👉 create hidden ".git" folder which is Git initialization.



❤️ Add files in Stage [2nd State]

  👉 That state for given permission to Git for tracking our files within any Changes.

  👉 Preparation state before Local Repository


  ⭕ CHECK CURRENT STATUS => git status

    👉 Display which files are in Stage state & which are not.


 🌿 Add files in Stage state

   ⭕ WHEN ONLY ONE FILE => git add fileName.extension

   ⭕ WHEN CURRENT DIRECTORY & SUB-DIRECTORIES'S ALL FILES => git add --all ❗ -A

   ⭕ WHEN ONLY CURRENT DIRECTORY'S ALL FILES WITHOUT SUB-DIRECTORIES => git add .

   ⭕ WHEN SPECIFIC EXTENSION'S ALL FILES => git *.extension


 🌿 When edit any Stage's Files

  👉 When we edited any Stage's file then it convert to Unstage state again.

  ⭕ IF WE WANT DISCARD CHANGES => git restore fileName.extension

  ⭕ IF WE WANT TO SEE ALL CHANGES => git diff 

   👉 diff => different


 🌿 Convert Stage files to Unstage 

  ⭕ WHEN ALL FILES => git reset

  ⭕ WHEN WANT TO SPECIFIC FILE => git rm --cached fileName.extension




❤️ Local Repository [3rd State]

  ⭐ Files must be in STAGE state.


 🌿 Make Commit

  ⭕ WHEN WANT TO MOVING STAGE FILES TO LOCAL REPOSITORY  => git commit -m "commit message" 

    👉 Message should be clear and understandable.

    👉 Cause, Commit Message works like comment or version number,
     after a long time, it help to understand when what was happened,
     We can also jump any commit.


  ⭕ WHEN WANT OT ALL UNSTAGE FILES STAGING & COMMIT TOGETHER  => git commit -am "commit message"  ❗  git add --all  && git commit -m "commit message"


  ⭕ TO SEE ONLY ALL COMMIT HISTORY IN DETAILS => git log

  ⭕ TO SEE ONLY ALL COMMIT HISTORY IN SHORTCUT => git log --oneline
   

  👉 When we edited any Local Repository's file then it convert to Unstage state again.


 🌿 Reset Commit
  
  ⭕ WHEN WANT TO CONVERT COMMIT TO STAGE STATE => git reset --soft HEAD~[number]

  ⭕ WHEN WANT TO CONVERT COMMIT TO WORKING DIRECTORY[1st] => git reset HEAD~[number]


  ⭕ WHEN WANT TO CONVERT CURRENT COMMIT TO PREVIOUS COMMIT  => git reset --hard HEAD~[number]

    👉 number => Commit number which start with 1️⃣ [LATEST COMMIT]
  
    ⭐ BEST PRACTICE : Avoid to used "reset" command for that case, ⚠️
     cause it delete Commit.

    🌿 BEST ALTERNATIVE : git checkout commit_id ❗ HEAD~[number]



#️⃣ Head & Undo

  ⭐ Latest Commit always current Head.

  ⭕ TO SEE HEAD COMMIT'S ALL CHANGES IN DETAILS => git show 

  ⭕ TO SEE SPECIFIC COMMIT'S ALL CHANGES IN DETAILS  => git show commit_id ❗ git show HEAD~[number]
  
  ⭕ JUMP ANY COMMIT => git checkout commit_id ❗ git checkout HEAD~[number]

  ⭕ JUMP MASTER COMMIT => git checkout master 
    


#️⃣ .gitignore file

  ⭐ Into that file we can declare multiple folders & files which them never ever passed into Stage state and go no.


  🌿 Declaration : 

    🎯 test.txt  =>  Only that file

    🎯 .evn   =>  Only that file also

    🎯 *.txt  =>  That extension's all files

    🎯 !main.txt =>  without main.txt file

    🎯 text?.txt =>  text1.txt, text2.txt,... 

    🎯 temp/  =>  That folder's all files



❤️ Cloud Repository (Github)  [4th State]

  ⭐ Git's all procedures we can do into Github with Graphical Interface.


#️⃣ README.md  file

  👉 That file is description for our github repository.


  Markdown Syntax  :  🧬

    ⭐ All HTML syntax support Markdown file 
     so, we can easily used them & create README.md file.


   🎯 inline code block

    > `any code`


   🎯 multiple line code block

    > ```programming-language
     
       codes
    
      ``` 


#️⃣ Connecting Local and Remote Repository

  ⭕ CHECK REMOTE CONNECTION ALREADY ESTABLISH OR NOT => git remote

  ⭕ CHECK REMOTE CONNECTION ALREADY ESTABLISH OR NOT IN DETAILS => git remote -v

  ⭕ CONNECT REMOTE REPOSITORY WITH LOCAL REPOSITORY => git remote add urlReferenceName URL
  

  ⭕ CLONE REMOTE REPOSITORY TO LOCAL REPOSITORY  => git clone URL



#️⃣ Push & Pull

  ⭐ For Push, that files must be in Local Repository [3rd state].
  

  ⭕ COMMIT SUBMIT LOCAL REPOSITORY TO REMOTE REPOSITORY => git push -u urlReferenceName branchName


  ⭕ COMMIT GET REMOTE REPOSITORY TO LOCAL REPOSITORY => git pull urlReferenceName branchName



#️⃣ Branch & Merge

 🌿 Branch : It is a new and separate section of the master repository.
   In other words, copy master repository's all items in a new & separate branch then modify them and again merge them with master repository.


   ⭕ CHECK ALL BRANCH & ACTIVE BRANCH => git branch

   ⭕ CREATE NEW BRANCH => git branch branchName

   ⭕ DELETE BRANCH  => git branch -d branchName

      👉 From Another Branch.

   ⭕ JUMP SPECIFIC BRANCH => git checkout branchName

   ⭕ CREATE & JUMP SPECIFIC BRANCH => git checkout -b branchName


  ⭐ Same way can do all procedures with that Branch.



 🌿 Merge : Compare & attach Changes anyBranch to anyBranch

   👉 At first switch that parent Branch

   ⭕ git merge branchName



  ⭐ Both same things we can do into Github with Graphical-Interface



#️⃣ Issue

  🌿 We can create & solve issue on Github.

  ✒️ commit : #2 issue solved



#️⃣ Merge Conflict 

  🌿 Into Same file modify from separate Branch when merge which modify will be attach with that file, it's call Merge conflict 

  👉 That situation, git can't merge automatically, we need to do that manually through remove one Branch modified.
  

#️⃣ Contribute On Other Project

  🌿 A fork is a copy of other's public repository. This is useful when we want to contribute to someone else's project or start our own project based on theirs.

  👉 Forking own repository is not possible.

 

#️⃣ Multiple People Collaboration On A Project 

  🌿 A Repository Owner can give access permission to multiple people & also can set multiple roles for specific Branch.

  👉 No need to fork.


  😊END😊

*/