## ssh配置和ssh操作
*trickyPi* 2019-11-21

### mac的ssh配置（轻量服务器）

备注：假设私钥名称为xxx.pem

1.首先从阿里云下载私钥，修改私钥属性（chmod 400 xxx.pem）

2.配置本地ssh目录下的config文件（config文件默认不存在）(本地ssh目录为～/.ssh)

3.连接服务器（ssh Host)

### 详细的config文件配置
```bash
Host customize // 自定义的服务器名字
HostName xxx.xxx.xxx.xxx //server ip
Port 22 //ssh port
User root //login username
IdentityFile ~/.ssh/xxx.pem //本地私钥地址
```
有些操作就可以用自定义的服务器名字代替服务器ip（例如：上传文件时的servername）

### 上传本地文件或本地目录到远程服务器

```bash
scp /path/local_filename username@servername:/path  //上传文件
scp  -r /tmp/local_dir username@servername:remote_dir //上传文件夹 
```