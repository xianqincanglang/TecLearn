用于代码回退;

* 没有push

	发生在本地仓库，add、commit后发现出现问题，准备取消提交.

	`用法: git reset [--soft | --mixed | --hard] <commit...>`

	* 选项1:--mixed

		git reset 默认是 --mixed模式,即git reset == git reset --mixed;  
		会保留源码，只是将git commit 和index信息回退到了某个版本;
	* 选项2:--soft

		保留源码，只回退到commit信息到某个版本，不涉及index的回退,如果还需要提交，直接commit即可.
	* 选项3:--hard

		源码也会回退到某个版本，commit和index都会回退到某个版本.(这种只是改变本地仓库代码)

	此外，在push代码后，也可`reset --hard <commit...>` 回退代码到某个版本，但会出现一个问题，线上代码、commit和index都没有变，当把本地代码修改提交的时候会发现冲突;所以这种应该是属于已经push的情况

* 已经push

	`用法：git revert +commit号 `

	git revert用于反转提交，执行revert命令要求工作树是干净的.

	git revert用一个新提交来消除一个历史提交所做的任何修改;

	git revert和git reset区别:
	
		* 1.已经push到远程，reset删除指定的commit以后，git push可能会导致冲突，git revert不会;

		* 2.reset是在正常的commit历史中，删除了指定的commit，这时HEAD是向后移动，
		 而revert是在正常的commit历史中再commit一次,只不过是反向提交,HEAD是一直向前的;

		* 3.在日后现有分支和历史分支需要合并的时候，reset恢复部分的代码依然会出现在历史分支里，而revert方向提交的commit并不会出现在历史分支里.
		 