# r3kapig技能栈1.0

* [CRYPTO](#crypto)
* [MISC](#misc)
* [PWN](#pwn)
* [WEB](#web)
* [REVERSE](#reverse)

## CRYPTO

### 数学基础

* 基础代数
  * 群、环、域
  * 分式域、域扩张
  * 初等数论
  * 整环、代数数域
* 计算数论
  * （扩展）Euclid 算法
  * 中国剩余定理
  * 连分数
  * Legendre-Jacobi-Kronecker Symbol
  * 模 p 平方根（Tonelli-Shanks）
  * 模 p 多项式方程（组）求解
    * Hensel 引理
    * Resultant
    * Gröbner basis
  * 线性代数 & 格
    * 高斯消元
    * Hermite & Smith Normal Forms
    * LLL & BKZ
    * CVP/SVP/SIS
    * Babai nearest plane
  * 椭圆曲线
    * 群结构（加法公式，点的数量）
    * 不同曲线形式及相互转换
    * 除子
    * Complex Multiplication
    * Weil & Tate pairing
  * 整数分解
    * p-1
    * p+1
    * 连分数
    * ECM
    * (MP)QS
    * NFS
  * 素性检验
    * Fermat
    * Lucas
    * Miller Rabin
    * 分圆环
  * 离散对数
    * Pohlig–Hellman
    * BSGS
    * Kangroo
    * Pollard ρ
    * 特殊 ECC
      * anomalous curve
      * MOV attack
    * 有限域
      * Index Calculus
      * NFS

### 密码理论

* Shannon Cipher & Computational Cipher
* 计算复杂性
* OWF/PRG/PRF/PRP (Goldreich-Levin/Blum-Micali/Luby-Rackoff)
* Commitment schemes
* Random Oracle Model

### 常见编码

* base64/base32
* hex
* uuencode
* urlencode
* shellcode
* Quoted-printable
* HTML实体编码
* Morse Code

### 古典密码

* 单表替代
  * 凯撒密码
  * 仿射密码
  * 移位密码
  * 简单替换密码
* 多表替代
  * 维吉尼亚密码
  * 希尔密码
  * 一次一密
  * Playfair
  * 卡西斯基试验
  * 弗里德曼试验
* 其他
  * 培根密码
  * 栅栏密码
  * 键盘密码
  * ADFGX

### 序列密码

* 常见序列密码算法
    * RC4
    * LFSR
    * Salsa/Chacha
    * Rabbit
    * 祖冲之（ZUC）
* (CS)PRNG
    * LCG
    * PCG
    * MT19937
    * xorshift
    * HASH-DRBG/HMAC-DRBG/CTR-DRBG
    * Duel-EC-DRBG(Backdoored)
* 相关性攻击
* Berlekamp-Massey算法
* k错线性逼近序列
* 差分、立方攻击等
* 快速相关攻击
* 故障注入、侧信道
* 代数攻击

### 分组密码

* 常见分组密码算法
  * DES
  * AES (Rijndael)
  * Twofish/Blowfish
  * Serpent
  * GOST
  * SM4
* Block cipher 结构
  * Feistel
  * SPN
  * Lai Massey
* 分组模式
  * (Adaptive) CPA/CCA 等攻击模型
  * Padding Oracle
  * Compression Oracle
  * BEAST attack
* 差分、积分等分析
* 线性分析
* 故障注入、侧信道

### 哈希函数

* 常见 Hash
  * MD5
  * SHA0/SHA1
  * SHA2(SHA224/256/384/512)
  * SHA3(Keccak)
  * BLAKE2/BLAKE3
  * Argon2(Password Hashing)
* 彩虹表/暴力破解
* 生日攻击/中间相遇攻击
* Hash 构造结构
  * Merkle–Damgard
    * 长度扩展攻击
  * Sponge Function
* MD5 fastcoll/chosen-prefix
  * 差分分析
  * Tunnels

### 认证与完整性

* MAC
  * ANSI CBC-MAC
  * Universal Hash Function & Carter-Wegman MAC
  * HMAC
* Merkle Tree
* KDF
  * HKDF
  * PBKDF2
* MAC-then-Encrypt vs Encrypt-then-MAC
* AEAD
  * GCM/OCB/SIV/Poly1305 及相关攻击（GCM nonce reuse、OCB2）
* Authenticated Cipher
  * AEGIS

### 公钥密码

* 常见公钥加密算法
  * RSA
  * ElGamal
  * ECIES/DHIES
  * Rabin
  * Paillier
* RSA 相关攻击
  * 共模攻击
  * parity oracle
  * Bleichenbacher's Attack
  * Hastad Broadcast
  * FR related message
  * Short pad attack
  * Coppersmith 方法
    * partial d/p/dp LSB/MSB/multiple-chunk exposure
    * Boneh Durfee attack
* 密钥协商
  * (EC)DH
  * (EC)MQV
  * SIKE
* 故障注入、侧信道

### 签名

* 常见签名算法
  * Schnorr
  * ECDSA/EdDSA
  * ElGamal
  * BLS
  * Lamport
* (EC)DSA nonce 相关
  * reuse nonce
  * partial nonce exposure
  * related nonce
* 故障注入、侧信道

### 其他公钥密码学相关算法

* (Ring)LWE
* NTRU
* GGH
* CKKS
* Knapsack

## MISC<br><br>

### 区块链

* 以太坊智能合约
  * Interger Overflow
  * Re-Entrancy
  * Randomness
  * Airdrop Hunting
  * Short Address Attack
  * Delegatecall
  * Uninitialized Storage Pointer
  * Arbitrary Writing
  * CREATE2
  * Jump Oriented Programming
  * Return Oriented Programming
  * DeFi FLASHLOAN
* 公链安全
  * Double-spending attack
    * 51% attack
    * Finney attack
    * Race attack
    * Vector76 attack
  * Block withholding attack
  * Selfish-Mining attack
### 信息隐写
* 文本隐写
  * wbStego对txt、asc、pdf
* 压缩包
  * zip、rar伪加密
  * zip 明文攻击
* 图像隐写
  * 结构
    * IHDR(width, height, crc, etc...)
    * IDAT
    * iDOT(special on apple)
    * PLTE(in indexed type)
    * other chunk...
    * zlib(compress method)
    * deflate
    * filter(5 modes)
    * interlace(nointerlace and adam7)
    * special tools
  * 色域转换
    * rgb转YCrCb
  * 空域隐写
    * lsb
    * lsb with plte
    * LSBM
    * tools like stegpy, cloaked-pixel and so on
    * AI
  * 频域隐写
    * F3/F4/F5(jpeg compress only)
    * DCT
    * FFT
    * DWT
    * lifting scheme
    * SVD
    * sepcial bwm tools(res = src + α * secret_img)
    * AI
  * 其他图片格式
    * bmp(wbStego)
    * bpg
* 音频隐写
  * 结构
    * WAV
    * MP3(block reserved word)
    * tools
  * 时域隐写
    * lsb
    * amplitude
    * echo
  * 频域隐写
    * lsb
    * DCT
    * FFT
    * DWT
    * lifting scheme
    * bwm(res = src + α * secret_img/wav)
  * MP3stego
  * silenteye
  * 音频morse
  * 频谱图
  * Velato language
* 视频隐写
  * GIF convert
  * apng
  * Potplayer 逐帧
  * sstv
  * 时间线隐写
* 其他隐写
  * snow
  * NTFS
  * pyc
  * base64 stego
  * unicode 0宽度
### 流量分析
* usb流量
  * 键盘流量
  * 鼠标流量
  * 其他usb流量
  * 手柄流量
* 蓝牙流量
* wifi流量
* 恶意攻击流量
### 取证
* 磁盘取证
* 内存取证
  * profile 制作
* MacOS 取证
  * Keychain 取证
* Windows 取证
  * 注册表取证
  * 系统日志(event logs)取证
  * 时间线取证
* Linux 取证
  * docker 取证
  * 网站日志分析
  * 挖矿软件取证
* 数据恢复
* 无人机取证
* Android 取证
  * apk 逆向
  * signal backup取证
* iOS 取证
  * Manifest.plist 解析
* 浏览器取证
  * 已保存的账号
  * 浏览记录
  * IndexedDB 取证
## PWN<br><br>
### 传统 pwn
* 栈溢出
  * 基础ROP
    * ret2text
    * ret2shellcode
    * ret2syscall
    * ret2libc
  * 中级ROP
    * ret2csu
    * ret2reg
    * BROP
  * 花式ROP
    * stack pivoting
    * frame faking
    * stack smash
  * 高级ROP
    * ret2dl_runtime_resolve
    * SROP
    * ret2VDSO
    * JOP
* 格式化字符串
  * 栈上的格式化字符串
  * 堆上的格式化字符串
* 整数溢出
  * 上界溢出
  * 下界溢出
* 类型混淆
* 条件竞争
* glibc 堆攻击
  * 基础堆漏洞
    * heap overflow
    * UAF
    * off-by-one
    * off-by-null
    * double-free
  * 基础堆利用
    * overlapping
    * unlink
    * tcache attack
    * fastbin attack
    * largebin attack
    * unsortedbin attack
  * 高级堆利用
    * house-of-spirit
    * house-of-lore
    * house-of-force
    * house-of-einherjar
    * hosue-of-orange
    * house-of-roman
    * house-of-storm
    * house-of-botcake
* musl libc 堆利用
* IO_File攻击
### 内核利用
* 前置知识
  * 操作系统
  * 计算机组成原理
* 基础概念
  * ring model
  * LKM
  * syscall
  * ioctl
  * cred结构
* 内核保护及绕过
  * KASLR
  * SMEP
  * SMAP
  * KPTI
  * 堆块隔离
  * FGkASLR
* Linux内核利用
  * 常用堆喷
    * userfault fd
    * shm_file_data
    * timerfd_ctx
    * setxattr
    * sendmsg
    * msg_msg
    * seq_operations
  * ret2usr
  * kernel UAF
  * kernel ROP
  * Double Fetch
* Windows内核利用
* OSX内核利用
* android内核利用
### 浏览器利用
* JS引擎internal
  * mujs
  * qjs
  * V8
  * SpiderMonkey
  * JSC
  * CharaCore
  * JerryScript
* JS引擎利用
  * 数组越界
  * JIT优化
  * FakeObj和AddrOf利用原语
  * Use-After-Free
  * WASM
  * 堆风水
* 沙盒逃逸
  * Chrome Sandbox
    * mojo
    * IPC
  * IE Sandbox
    * LPC port
    * RPC message
  * Firefox Sandbox
### 虚拟机逃逸
* Libc虚拟机
* Unicorn虚拟机
* Qemu
* VMware
* VBox
* HyperV
* Parallel
### IoT hacking
* 嵌入式指令集
  * ARM
  * MIPS
  * RISC-V 
* 硬件调试知识
* 近场无线协议
  * 蓝牙
  * Zigbee
  * WIFI
* 固件分析知识
### 沙盒逃逸
* Seccomp
* Ptrace
* chroot
* docker
### Web Pwn
* Cgi pwn
* php pwn

## WEB<br><br>
### SQL 注入
* 联合查询
* 时间盲注
* 报错注入
* OOB
### XSS
* 反射 XSS
* 存储 XSS
* DOM-XSS
* CSP Bypass
* RPO
### SSRF
* 正则绕过
* 302 Redirect
* DNS Rebinding
* Gopher
* FTP
### RCE
### XXE
### 代码审计
* PHP
  * LFI
  * 反序列化
  * 文件上传
* Python
  * SSTI
  * 反序列化
* Nodejs
  * 原型链污染
* Java
  * 反序列化
## REVERSE<br><br>
### 基础知识
* 汇编与反汇编
  * x86
  * arm
  * mips
* 可执行文件格式
  * PE
    * NT头
    * 段表
    * 导入表
    * 导出表
  * ELF
    * 段表
    * 符号表
  * APK
    * 打包与签名
### 调试原理
* 断点原理
  * 软件断点
  * 硬件断点
  * 内存断点
  * 单步断点
* 调试接口
* 反调试检测
* 调试符号
### 编译原理
* 语法树
* 中间代码生成
* 代码优化
* 机器码生成
* 控制流程图
* 数据结构与虚函数表
### 操作系统
* 程序加载
* 进程线程
* 系统调用
* 栈与堆
* CPU虚拟化
* 保护模式
### 工具使用
* 静态分析
* 工具
  * ida
  * ghidra
  * jeb
* 交互分析
* 分析脚本
* 动态分析
* 工具
  * x64dbg
  * gdb
  * windbg
  * frida
* 断点设置
* 跟踪运行
* 调试脚本
* 模拟执行与符号执行
* unicorn
* miasm
* triton
* pin
### 语言特征
* cpp
* golang
* wasm
* dot net
### 常见框架
* socket
* 多线程
* 调试器
* MFC
* 内核驱动
### 混淆对抗
* 垃圾指令
* 控制流平坦化
* 代码虚拟化
### 常见算法
* 编码算法
  * base64
  * hex
  * urlencode
* 加密算法
  * AES
  * RSA
  * DES
* 压缩算法
  * lzma
  * Huffman

# Author
bibi,Lime,01dwang,Ne0,crazyman,Anciety,pikachu,7rph,swing,th31nk,pizza,lowkey,soyasauceking
