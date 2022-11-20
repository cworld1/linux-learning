# Shell 脚本

## SHELL 变量与环境

Shell 变量大致可以分为三类：

- 内部变量：由系统提供，用户只能使用不能修改。
- 用户变量：由用户建立和修改，在 Shell 脚本编写中会经常用到。
- 环境变量：这些变量决定了用户工作的环境，它们不需要用户去定义，可以直接在 Shell 中使用，其中某些变量用户可以修改。

### 用户自定义变量

变量赋值（定义变量）：

```bash
varName=Value
export varName=Value # 全局变量
```

引用变量：

```bash
$varName
```

注意：

- 所有的赋值对 shell 变量都解释为字符串。
- 没有数据类型。
- 当变量的值仅仅包含数字时才允许进行数值计算。
- 等号赋值两边不能有空格。

### 强引用与弱引用

强引用：单引号对是强引用。单引号对中的字符都将作为普通字符，但不允许出现另外的单引号。
弱引用：双引号对是弱引用。双引号对中的部分字符仍保留特殊含义：

| 符号 | 符号名    | 特殊含义         |
| ---- | --------- | ---------------- |
| $    | dollar 符 | 变量替换         |
| `    | 反引号    | 命令替换         |
| \    | 反斜线    | 禁止单个字符扩展 |
| !    | 叹号      | 历史命令替换     |

### export 命令详解

Shell 变量的作用域

- 局部变量的作用范围仅仅限制在其命令行所在的 Shell 或 Shell 脚本文件中；
- 全局变量的作用范围则包括本 Shell 进程及其所有子进程。

但我们可以使用 export 命令设置作用域，将局部变量与全局变量互相转换。

如：

```bash
# 显示当前Shell可见的全局变量
export -p
# 定义变量值的同时声明为全局变量
export <变量名1=值1>  [<变量名2=值2> ...]
# 声明已经赋值的某个（些）局部变量为全局变量
export <变量名1> [<变量名2> ...]
# 声明已经赋值的某个（些）全局变量为局部变量
export -n <变量名1> [<变量名2> ...]
```

### Shell 变量及其作用域

打印当前进程号：echo $$
启动新的进程：bash
退出当前进程：exit
设置文件可执行权限: chmod a+x myfile
在新的进程中运行程序：./myfile 或者绝对路径
在当前 shell 运行程序:

- `myfile`
- `./myfile`
- `文件绝对路径`

其中第一个.可以替换为 source。

如：

```bash
var1 = hello
export var2 = world
echo $$
vi myfile
echo $$
echo "var1=$var1"
echo "var2=$var2"
```

### Shell 环境变量

环境变量定义 Shell 的运行环境，保证 Shell 命令的正确执行。

Shell 用环境变量来确定查找路径、注册目录、终端类型、终端名称、用户名等。

所有环境变量都是全局变量（即可以传递给 Shell 的子进程），并可以由用户重新设置。

常见的 Shell 环境变量：

| 变量名   | 含义                                    |
| -------- | --------------------------------------- |
| HOME     | 用户主目录                              |
| LOGNAME  | 登录名                                  |
| USER     | 用户名，与登录名相同                    |
| PWD      | 当前目录/工作目录名                     |
| MAIL     | 用户的邮箱路径名                        |
| HOSTNAME | 计算机的主机名                          |
| INPUTRC  | 默认的键盘映像                          |
| SHELL    | 用户所使用的 shell 的路径名             |
| LANG     | 默认语言                                |
| HISTSIZE | history 所能记住的命令的最多个数        |
| PATH     | shell 查找用户输入命令的路径 (目录列表) |
| PS1、PS2 | shell 一级、二级命令提示符              |

### Shell 变量的查询、显示和取消

显示当前已经定义的所有变量：

- 所有环境变量：`env`
- 所有变量和函数（包括环境变量）：`set`

显示某（些）个变量的值：`echo $NAME1 [$NAME2 ……]`

取消变量的声明或赋值：`unset <NAME>`

### 用户工作环境

用户登录系统时，Shell 为用户自动定义唯一的工作环境并对该环境进行维护直至用户注销。该环境将定义如身份、工作场所和正在运行的进程等特性。这些特性由指定的环境变量值定义。

用户工作环境有登录环境和非登录环境之分：

- 登录环境是指用户登录系统时的工作环境，此时的 Shell 对登录用户而言是主 Shell。
- 非登录环境是指用户再调用子 Shell 时所使用的用户环境。

#### 设置用户工作环境

对所有用户进行设置：

- /etc/profile
- /etc/bashrc

只对当前用户进行设置：

- ~/.bash_profile
- ~/.bashrc

> 一般来说，个人 bash 环境设置都定义在 ~/.bashrc 文件里

### 登录 shell 和非登录 shell 的启动过程

Login shell：

<kbd>/etc/profile</kbd> → <kbd>/etc/profile.d/\*.sh</kbd>
↓
<kbd>`$HOME/.bash_profile`</kbd>
↓
<kbd>$HOME/.bashrc</kbd> → <kbd>/etc/bashrc</kbd>

Non-Login shell：

<kbd>$HOME/.bashrc</kbd> → <kbd>/etc/bashrc</kbd>

### 引用

在 bash 中，有些字符具有特殊含义，如果需要忽略这些字符的特殊含义，就必须使用引用技术。

引用可以通过下面三种方式实现：

- 使用转义字符：\
- 使用单引号：‘ ’
- 使用双引号：“ ”

转义字符的引用方法就是直接在字符前加反斜杠。如：`、$`，`\'`，`\“`，`\\`，`\,`，`\!`

## SHELL 基础运算

shell 脚本：一堆命令集合，这些命令完成一件特定的事情。

Shell 脚本的一般后缀是 .sh。

### Shell 解释器

在写 Shell 脚本时，往往第一行要注明用什么解释器来解释这个脚本。

如 `#!/bin/bash` 即用 /bin/bash 这个解释器来解释接下来的语句。同理还有 `#!/bin/csh` 等。

> 以下列出相对流行的 shell，但不是全部：
>
> 1. sh（全称 Bourne Shell），是 UNIX 最初使用的 shell，而且在每种 UNIX 上都可以使用。
>
>    Bourne Shell 在 shell 编程方便相当优秀，但在处理与用户的交互方便作得不如其他几种 shell。
>
> 2. bash（全称 Bourne Again Shell），LinuxOS 默认的，它是 Bourne Shell 的扩展。
>
>    与 Bourne Shell 完全兼容，并且在 Bourne Shell 的基础上增加了很多特性。可以提供命令补全，命令编辑和命令历史等功能。它还包含了很多 C Shell 和 Korn Shell 中的优点，有灵活和强大的编辑接口，同时又很友好的用户界面。
>
> 3. csh（全称 C Shell），是一种比 Bourne Shell 更适合的变种 Shell，它的语法与 C 语言很相似。
>
> 4. Tcsh 是 Linux 提供的 C Shell 的一个扩展版本。
>
>    Tcsh 包括命令行编辑，可编程单词补全，拼写校正，历史命令替换，作业控制和类似 C 语言的语法，他不仅和 Bash Shell 提示符兼容，而且还提供比 Bash Shell 更多的提示符参数。
>
> 5. ksh（全称 Korn Shell），集合了 C Shell 和 Bourne Shell 的优点并且和 Bourne Shell 完全兼容。
>
> 6. pdksh，是 Linux 系统提供的 ksh 的扩展。
>
>    pdksh 支持人物控制，可以在命令行上挂起，后台执行，唤醒或终止程序。
>

### Shell 的简单编写

1. 创建变量：

   ```bash
   varName=Value
   export varName=Value # 全局变量
   ```

2. 变量赋值：

   ```bash
   var1=$var2
   ```

3. 变量输入：

   ```bash
   # 注意内容会因为包含空格断开，类似c语言
   read var1
   read var1 var2
   ```

4. 变量输出：

   ```bash
   echo "var1 = $var1"
   # 使用 `` 写入公式
   echo `head -1 /etc/passwd | cut -d ":" -f 1,3,4`
   # 不想换行时使用 -n
   echo -n "Input your name: "
   ```

### 数值运算

在 shell 里只能计算整数，小数会向下取整。

可供运算的运算符：

- `+`：加法
- `-`：减法
- `\*`：乘法（注意转义的斜杠需要保留）
- `/`：除法（取整数）
- `%`：取模（取余数）

如：

```bash
a=1
b=2

# 法1：用 expr
c=`expr $a \* $b`
echo `expr 0 / 1`

# 法2：用 $(())
d=$((a + b)) # 注意括号里边的表达式没有$
```

## 控制语句

### 条件语句的判断比较

1. 字符串类型：

   - `==`：等于

   - `!=`：不等于

   - `-z`：判断长度为零

   - `-n`：判断长度不为零

     如：

     ```bash
     if [[ -z “$string” ]]
     if [[ “$A” == “abcdef” ]]
     ```

2. 数值类型：

   - `-eq`：等于

   - `-ne`：不等于

   - `-gt`：大于

   - `-lt`：小于

   - `-ge`：大于或等于

   - `-le`：小于或等于

   如：

   ```bash
   if [ $data -ge 256 ]
   ```

3. 文件类型（文件属性）：
   - `-d`：是否存在此路径
   - `-f`：是否为普通文件
   - `-r`、`-w`、`-x`：当前的执行用户是否拥有对应文件的读、写、执行权限

### 判别语句 if

```bash
if [ 判断的对象 ]
then
   命令
elif [ 判断的对象 ]
then
   命令
else
   命令
fi
```

其中对于多个条件判断：

- `-a`：表示且（并）

- `-o`：表示或

有时在复杂条件时可以使用 `[[ ]]` 条件判断结构，而不是 `[ ]`，能够防止脚本中的一些逻辑错误。

比如使用 &&、||、> 操作符能够正常存在于 `[[ ]]` 条件判断结构中，但是如果出现在 `[ ]` 结构中的话，会报错。

比如，可以直接使用 `if [[ $a != 1 && $a != 2 ]]`。如果不使用双括号, 则为 `if [ $a -ne 1 -a $a -ne 2 ]`，或者 `if [ $a != 1 -a $a != 2 ]`。

一般来说：

- 字符串比较使用 `[[ ]]`
- 数值比较使用 `[ ]`
- 数值运算使用 `(( ))`

事实上，只要括号中的运算符、表达式符合 C 语言运算规则，都可用在$((exp))中，甚至是三目运算符。

> 例如：输入一个成绩，用 if-lese 语句判断成绩的等级：
>
> - [80-100]：A
> - [60-80)：B
> - [0-60)：C
>
> 如果成绩非法不是[0-100]，则提示用户输入的成绩是非法的成绩
>
> 答案：
>
> ```bash
> echo -n "Input a score : "
> read score
>
> if [ $score -lt 0 -o $score -gt 100 ]
> then
>  echo "Invalid score: $score"
> else
>  echo -n "Your score is: "
>  if [ $score -ge 80 -a $score -le 100 ]
>  then
>     echo "A"
>  elif [ $score -ge 60 -a $score -lt 80 ]
>  then
>     echo "B"
>  else
>     echo "C"
>  fi
> fi
> ```

### 条件语句 case

```bash
case [变量] in
   匹配项1)
      命令
      ;;
   匹配项2)
      命令
      ;;
   *)
      命令
      ;;
esac
```

如：

```bash
case $number in
   6|7|8)
      echo “6,7,8”
      ;;
   4|5|6)
      echo “4,5,6”
      ;;
   *)
      ;;
esac
```

### 循环语句 while

```bash
while [ 表达式 ]
do
   命令
done
```

注意只有在表达式为真的时候，才执行命令；如果为假，循环结束。

### 循环语句 for

```bash
for 变量 in 单词表
do
   命令
done
```

循环的次数由单词表中单词的个数来决定，变量每次从单词表取一个单词，然后执行循环体，直到将所有的单词全部取完。如：

```bash
i=1 
weekdays="Mon Tue Wed Thu Fri Sat Sun"
for day in $weekdays
do
   echo "Weekday $((i++)) : $day"
done
```

如果 `in 单词表` 省略，此时变量从位置参数中取单词：

```bash
for 变量
do
   命令
done
```

如：

```bash
num=1
for i
do
   echo "The ${num}th argument is: $i"
   ((num++))
done
```

## 函数

为了避免大型脚本变得复杂、晦涩，我们将大型脚本代码分割成小块，将这些被命名的代码块称为函数。

一个函数就是一个子程序，用于完成特定的任务，如：添加一个用户、判断用户是否为管理员等。

函数定义之后可以被使用它的主程序调用，调用函数的方法与执行Shell命令无异。我们可以：

- 可以在 Shell 脚本中调用（函数需先定义而后调用）
- 在命令行上直接调用（定义函数的文件需先加载）

### 合理使用 Shell 函数的优点

1. **简化程序代码，实现代码重用。**如：`is_root_user()` 函数可以由不同的shell脚本重复使用。
2. **实现结构化编程。**使脚本内容更加简洁，增强程序的易读性
3. **提高执行效率。**将常用的功能定义为多个函数并将其保存在一个文件中（类似其他语言的“模块”文件），在 ~/bashrc 或命令行上使用 source 命令调用这个文件，此文件中定义的多个函数一次性地调入内存，从而加快运行速度。

### 函数的定义

```bash
function 函数名()
{
   commands
}

# 或者写作：
函数名()
{
   commands
}
```

### 函数的存储和查询

函数的存储：

- 函数和被调用程序在同一个文件中：函数的定义必须出现在调用之前

- 函数和被调用程序在不同的文件中：保存函数的文件必须先使用 source 命令执行之后，才能调用其中的函数

函数的显示：

```bash
# 显示当前 Shell 可见的所有函数名
declare -F

# 显示当前 Shell 可见的所有（指定）的函数定义：
declare -f
declare -f <functionName> # 指定函数名
```

### 函数的调用和载入

调用方法一：只需输入函数名即可调用函数。但注意函数必须在调用之前定义。

```bash
函数名
# 对于有参数的函数：
函数名 参数1 参数2
```

- 通过 $?（上一个函数或者命令返回的结果），获得函数的返回值。函数本身要在屏幕上输出结果。

  适合返回的是一个整数，并且只能够返回 0-255 之间的整数。

- 在函数内部通过位置变量 `$1`, `$2`, `$3`... 来获得传递的参数。

调用方法二：将函数的标准输出返回给一个变量（使用反向单引号），函数本身不再在屏幕上输出结果。相当于是把函数的输出赋值给一个变量，而并没有使用函数本身的返回值。

```bash
value=`函数名 参数1 参数2 ...`
```

无论函数定义中有没有返回值，这种调用方式函数返回值始终是0。

适合函数输出/返回的是一个字符串。

> 注意：在 shell 中变量的作用域默认是整个文件的，即使是在函数内部定义的函数，其它函数也可以使用。如果需要变量只在函数内部有效，需要用 local 修饰变量。

函数的载入：使用 `source` 命令。如：show 函数写在了 function.sh 里面了，我们可以用 source 命令 `source function.sh` 载入到程序中。

如：

```bash
#!/bin/bash
### User define Function (UDF) ###
sql_bak() { echo "Running mysqldump tool..."; }
sync_bak() { echo "Running rsync tool..."; }
git_bak() { echo "Running gistore tool..."; }
tar_bak() { echo "Running tar tool..."; }

### Main script starts here ###
PS3="Please choose a backup tools : "
select ss in mysqldump rsync gistore tar quit; 
do
  case $REPLY in
       1) sql_bak  ;;
       2) sync_bak ;;
       3) git_bak  ;;
       4) tar_bak  ;;
       5) exit     ;;
  esac
done
```

- PS3 环境变量定义 Shell 脚本中使用 select 时的提示符，如果不选择默认为 `(#?)`
- do 和 done 之间的是循环体
- select 语句会从后面的单词表中自动构建一个带数字的菜单
- 每次循环，用户任何的输入值会自动保存（覆盖）在 REPLY 变量中
- select 之后的那个变量没有实际作用，可以使用任何字符占位

### 函数参数与变量

参数（Arguments）：

- 调用函数时，使用位置参数的形式为函数传递参数
- 函数内的 `$1-${n}`、`$*` 和 `$@` 表示其接收的参数
- 在主程序和函数中，`$0` 始终代表脚本名

参考：[Shell特殊变量：Shell \$#、\$*、\$@、\$?、\$\$ (biancheng.net)](http://c.biancheng.net/view/806.html)

| 变量      | 含义                                                         |
| --------- | ------------------------------------------------------------ |
| $0        | 当前脚本的文件名。                                           |
| $n（n≥1） | 传递给脚本或函数的参数。n 是一个数字，表示第几个参数。例如，第一个参数是 `$1`，第二个参数是 `$2`。 |
| $#        | 传递给脚本或函数的参数个数。                                 |
| $*        | 传递给脚本或函数的所有参数。                                 |
| $@        | 传递给脚本或函数的所有参数。当被双引号 `" "` 包裹时，`$@` 与 `$*` 稍有不同 |
| $?        | 上个命令的退出状态，或函数的返回值                           |
| $$        | 当前 Shell 进程 ID。对于 Shell 脚本，就是这些脚本所在的进程 ID。 |

如：

```bash
#!/bin/bash

# 得到两个数相加的和
function add(){
    return `expr $1 + $2`
}
add 23 50  #调用函数
echo $?  #获取函数返回值
```

变量（Variables）：

- 函数内使用 local 声明的变量是局部（Local）变量。局部变量的作用域是当前函数以及其调用的所有函数。
- 函数内未使用 local 声明的变量是普通变量，作用域是整个文件，即主程序和函数中的同名变量是一个变量（地址一致）

如：

```bash
# User define Function (UDF)
usage() {
  echo "List the MAX of the positive integers in command line. "
  echo "Usage: `basename $0` <num1> <num2> [ <num3> ... ]" # basename 命令用于打印显示去掉路径之后的文件名
  exit
}

max() {
  [[ -z $1 || -z $2 ]] && usage
  largest=0
  for i; do  ((i>largest)) && largest=$i; done
}

### Main script starts here ###
max "$@"
echo "The largest of the numbers is $largest."
```

调用：`./function_max.sh 10 58 111 32768 66`

由于 largest 变量在函数 max 内没有使用 local 声明，所以它是全局的。
