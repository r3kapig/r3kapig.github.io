!
function(l, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(require("@antv/g6")) : "function" == typeof define && define.amd ? define(["@antv/g6"], e) : e((l = "undefined" != typeof globalThis ? globalThis: l || self).G6)
} (this, (function(l) {
	"use strict";
	function e(l) {
		return l && "object" == typeof l && "default" in l ? l: {
		default:
			l
		}
	}
	var a = e(l),
	b = {
		label: "r3kapig技能栈1.0",
		depth: 3,
		children: [{
			label: "CRYPTO",
			description: null,
			children: [{
				label: "数学基础",
				collapsed: !0,
				children: [{
					label: "基础代数",
					collapsed: !0,
					children: [{
						label: "群、环、域"
					},
					{
						label: "分式域、域扩张"
					},
					{
						label: "初等数论"
					},
					{
						label: "整环、代数数域"
					}]
				},
				{
					label: "计算数论",
					collapsed: !0,
					children: [{
						label: "（扩展）Euclid 算法"
					},
					{
						label: "中国剩余定理"
					},
					{
						label: "连分数"
					},
					{
						label: "Legendre-Jacobi-Kronecker Symbol"
					},
					{
						label: "模 p 平方根（Tonelli-Shanks）"
					},
					{
						label: "模 p 多项式方程（组）求解",
						children: [{
							label: "Hensel 引理"
						},
						{
							label: "Resultant"
						},
						{
							label: "Gröbner basis"
						}]
					},
					{
						label: "线性代数 & 格",
						children: [{
							label: "高斯消元"
						},
						{
							label: "Hermite & Smith Normal Forms"
						},
						{
							label: "LLL & BKZ"
						},
						{
							label: "CVP/SVP/SIS"
						},
						{
							label: "Babai nearest plane"
						}]
					},
					{
						label: "椭圆曲线",
						children: [{
							label: "群结构（加法公式，点的数量）"
						},
						{
							label: "不同曲线形式及相互转换"
						},
						{
							label: "除子"
						},
						{
							label: "Complex Multiplication"
						},
						{
							label: "Weil & Tate pairing"
						}]
					},
					{
						label: "整数分解",
						children: [{
							label: "p-1"
						},
						{
							label: "p+1"
						},
						{
							label: "连分数"
						},
						{
							label: "ECM"
						},
						{
							label: "(MP)QS"
						},
						{
							label: "NFS"
						}]
					},
					{
						label: "素性检验",
						children: [{
							label: "Fermat"
						},
						{
							label: "Lucas"
						},
						{
							label: "Miller Rabin"
						},
						{
							label: "分圆环"
						}]
					},
					{
						label: "离散对数",
						children: [{
							label: "Pohlig–Hellman"
						},
						{
							label: "BSGS"
						},
						{
							label: "Kangroo"
						},
						{
							label: "Pollard ρ"
						},
						{
							label: "特殊 ECC",
							children: [{
								label: "anomalous curve"
							},
							{
								label: "MOV attack"
							}]
						},
						{
							label: "有限域",
							children: [{
								label: "Index Calculus"
							},
							{
								label: "NFS"
							}]
						}]
					}]
				}]
			},
			{
				label: "密码理论",
				collapsed: !0,
				children: [{
					label: "Shannon Cipher & Computational Cipher"
				},
				{
					label: "计算复杂性"
				},
				{
					label: "OWF/PRG/PRF/PRP (Goldreich-Levin/Blum-Micali/Luby-Rackoff)"
				},
				{
					label: "Commitment schemes"
				},
				{
					label: "Random Oracle Model"
				}]
			},
			{
				label: "常见编码",
				collapsed: !0,
				children: [{
					label: "base64/base32"
				},
				{
					label: "hex"
				},
				{
					label: "uuencode"
				},
				{
					label: "urlencode"
				},
				{
					label: "shellcode"
				},
				{
					label: "Quoted-printable"
				},
				{
					label: "HTML实体编码"
				},
				{
					label: "Morse Code"
				}]
			},
			{
				label: "古典密码",
				collapsed: !0,
				children: [{
					label: "单表替代",
					children: [{
						label: "凯撒密码"
					},
					{
						label: "仿射密码"
					},
					{
						label: "移位密码"
					},
					{
						label: "简单替换密码"
					}]
				},
				{
					label: "多表替代",
					children: [{
						label: "维吉尼亚密码"
					},
					{
						label: "希尔密码"
					},
					{
						label: "一次一密"
					},
					{
						label: "Playfair"
					},
					{
						label: "卡西斯基试验"
					},
					{
						label: "弗里德曼试验"
					}]
				},
				{
					label: "其他",
					children: [{
						label: "培根密码"
					},
					{
						label: "栅栏密码"
					},
					{
						label: "键盘密码"
					},
					{
						label: "ADFGX"
					}]
				}]
			},
			{
				label: "序列密码",
				collapsed: !0,
				children: [{
					label: "常见序列密码算法",
					children: [{
						label: "RC4"
					},
					{
						label: "LFSR"
					},
					{
						label: "Salsa/Chacha"
					},
					{
						label: "Rabbit"
					},
					{
						label: "祖冲之（ZUC）"
					}]
				},
				{
					label: "(CS)PRNG",
					children: [{
						label: "LCG"
					},
					{
						label: "PCG"
					},
					{
						label: "MT19937"
					},
					{
						label: "xorshift"
					},
					{
						label: "HASH-DRBG/HMAC-DRBG/CTR-DRBG"
					},
					{
						label: "Duel-EC-DRBG(Backdoored)"
					}]
				},
				{
					label: "相关性攻击"
				},
				{
					label: "Berlekamp-Massey算法"
				},
				{
					label: "k错线性逼近序列"
				},
				{
					label: "差分、立方攻击等"
				},
				{
					label: "快速相关攻击"
				},
				{
					label: "故障注入、侧信道"
				},
				{
					label: "代数攻击"
				}]
			},
			{
				label: "分组密码",
				collapsed: !0,
				children: [{
					label: "常见分组密码算法",
					children: [{
						label: "DES"
					},
					{
						label: "AES (Rijndael)"
					},
					{
						label: "Twofish/Blowfish"
					},
					{
						label: "Serpent"
					},
					{
						label: "GOST"
					},
					{
						label: "SM4"
					}]
				},
				{
					label: "Block cipher 结构",
					children: [{
						label: "Feistel"
					},
					{
						label: "SPN"
					},
					{
						label: "Lai Massey"
					}]
				},
				{
					label: "分组模式",
					children: [{
						label: "(Adaptive) CPA/CCA 等攻击模型"
					},
					{
						label: "Padding Oracle"
					},
					{
						label: "Compression Oracle"
					},
					{
						label: "BEAST attack"
					}]
				},
				{
					label: "差分、积分等分析"
				},
				{
					label: "线性分析"
				},
				{
					label: "故障注入、侧信道"
				}]
			},
			{
				label: "哈希函数",
				collapsed: !0,
				children: [{
					label: "常见 Hash",
					children: [{
						label: "MD5"
					},
					{
						label: "SHA0/SHA1"
					},
					{
						label: "SHA2(SHA224/256/384/512)"
					},
					{
						label: "SHA3(Keccak)"
					},
					{
						label: "BLAKE2/BLAKE3"
					},
					{
						label: "Argon2(Password Hashing)"
					}]
				},
				{
					label: "彩虹表/暴力破解"
				},
				{
					label: "生日攻击/中间相遇攻击"
				},
				{
					label: "Hash 构造结构",
					children: [{
						label: "Merkle–Damgard",
						children: [{
							label: "长度扩展攻击"
						}]
					},
					{
						label: "Sponge Function"
					}]
				},
				{
					label: "MD5 fastcoll/chosen-prefix",
					children: [{
						label: "差分分析"
					},
					{
						label: "Tunnels"
					}]
				}]
			},
			{
				label: "认证与完整性",
				collapsed: !0,
				children: [{
					label: "MAC",
					children: [{
						label: "ANSI CBC-MAC"
					},
					{
						label: "Universal Hash Function & Carter-Wegman MAC"
					},
					{
						label: "HMAC"
					}]
				},
				{
					label: "Merkle Tree"
				},
				{
					label: "KDF",
					children: [{
						label: "HKDF"
					},
					{
						label: "PBKDF2"
					}]
				},
				{
					label: "MAC-then-Encrypt vs Encrypt-then-MAC"
				},
				{
					label: "AEAD",
					children: [{
						label: "GCM/OCB/SIV/Poly1305 及相关攻击（GCM nonce reuse、OCB2）"
					}]
				},
				{
					label: "Authenticated Cipher",
					children: [{
						label: "AEGIS"
					}]
				}]
			},
			{
				label: "公钥密码",
				collapsed: !0,
				children: [{
					label: "常见公钥加密算法",
					children: [{
						label: "RSA"
					},
					{
						label: "ElGamal"
					},
					{
						label: "ECIES/DHIES"
					},
					{
						label: "Rabin"
					},
					{
						label: "Paillier"
					}]
				},
				{
					label: "RSA 相关攻击",
					children: [{
						label: "共模攻击"
					},
					{
						label: "parity oracle"
					},
					{
						label: "Bleichenbacher’s Attack"
					},
					{
						label: "Hastad Broadcast"
					},
					{
						label: "FR related message"
					},
					{
						label: "Short pad attack"
					},
					{
						label: "Coppersmith 方法",
						children: [{
							label: "partial d/p/dp LSB/MSB/multiple-chunk exposure"
						},
						{
							label: "Boneh Durfee attack"
						}]
					}]
				},
				{
					label: "密钥协商",
					children: [{
						label: "(EC)DH"
					},
					{
						label: "(EC)MQV"
					},
					{
						label: "SIKE"
					}]
				},
				{
					label: "故障注入、侧信道"
				}]
			},
			{
				label: "签名",
				collapsed: !0,
				children: [{
					label: "常见签名算法",
					children: [{
						label: "Schnorr"
					},
					{
						label: "ECDSA/EdDSA"
					},
					{
						label: "ElGamal"
					},
					{
						label: "BLS"
					},
					{
						label: "Lamport"
					}]
				},
				{
					label: "(EC)DSA nonce 相关",
					children: [{
						label: "reuse nonce"
					},
					{
						label: "partial nonce exposure"
					},
					{
						label: "related nonce"
					}]
				},
				{
					label: "故障注入、侧信道"
				}]
			},
			{
				label: "其他公钥密码学相关算法",
				collapsed: !0,
				children: [{
					label: "(Ring)LWE"
				},
				{
					label: "NTRU"
				},
				{
					label: "GGH"
				},
				{
					label: "CKKS"
				},
				{
					label: "Knapsack"
				}]
			}]
		},
		{
			label: "MISC",
			description: null,
			children: [{
				label: "区块链",
				collapsed: !0,
				children: [{
					label: "以太坊智能合约",
					children: [{
						label: "Interger Overflow"
					},
					{
						label: "Re-Entrancy"
					},
					{
						label: "Randomness"
					},
					{
						label: "Airdrop Hunting"
					},
					{
						label: "Short Address Attack"
					},
					{
						label: "Delegatecall"
					},
					{
						label: "Uninitialized Storage Pointer"
					},
					{
						label: "Arbitrary Writing"
					},
					{
						label: "CREATE2"
					},
					{
						label: "Jump Oriented Programming"
					},
					{
						label: "Return Oriented Programming"
					},
					{
						label: "DeFi FLASHLOAN"
					}]
				},
				{
					label: "公链安全",
					children: [{
						label: "Double-spending attack",
						children: [{
							label: "51% attack"
						},
						{
							label: "Finney attack"
						},
						{
							label: "Race attack"
						},
						{
							label: "Vector76 attack"
						}]
					},
					{
						label: "Block withholding attack"
					},
					{
						label: "Selfish-Mining attack"
					}]
				}]
			},
			{
				label: "信息隐写",
				collapsed: !0,
				children: [{
					label: "文本隐写",
					children: [{
						label: "wbStego对txt、asc、pdf"
					}]
				},
				{
					label: "压缩包",
					children: [{
						label: "zip、rar伪加密"
					},
					{
						label: "zip 明文攻击"
					}]
				},
				{
					label: "图像隐写",
					children: [{
						label: "结构",
						children: [{
							label: "IHDR(width, height, crc, etc…)"
						},
						{
							label: "IDAT"
						},
						{
							label: "iDOT(special on apple)"
						},
						{
							label: "PLTE(in indexed type)"
						},
						{
							label: "other chunk…"
						},
						{
							label: "zlib(compress method)"
						},
						{
							label: "deflate"
						},
						{
							label: "filter(5 modes)"
						},
						{
							label: "interlace(nointerlace and adam7)"
						},
						{
							label: "special tools"
						}]
					},
					{
						label: "色域转换",
						children: [{
							label: "rgb转YCrCb"
						}]
					},
					{
						label: "空域隐写",
						children: [{
							label: "lsb"
						},
						{
							label: "lsb with plte"
						},
						{
							label: "LSBM"
						},
						{
							label: "tools like stegpy, cloaked-pixel and so on"
						},
						{
							label: "AI"
						}]
					},
					{
						label: "频域隐写",
						children: [{
							label: "F3/F4/F5(jpeg compress only)"
						},
						{
							label: "DCT"
						},
						{
							label: "FFT"
						},
						{
							label: "DWT"
						},
						{
							label: "lifting scheme"
						},
						{
							label: "SVD"
						},
						{
							label: "sepcial bwm tools(res = src + α * secret_img)"
						},
						{
							label: "AI"
						}]
					},
					{
						label: "其他图片格式",
						children: [{
							label: "bmp(wbStego)"
						},
						{
							label: "bpg"
						}]
					}]
				},
				{
					label: "音频隐写",
					children: [{
						label: "结构",
						children: [{
							label: "WAV"
						},
						{
							label: "MP3(block reserved word)"
						},
						{
							label: "tools"
						}]
					},
					{
						label: "时域隐写",
						children: [{
							label: "lsb"
						},
						{
							label: "amplitude"
						},
						{
							label: "echo"
						}]
					},
					{
						label: "频域隐写",
						children: [{
							label: "lsb"
						},
						{
							label: "DCT"
						},
						{
							label: "FFT"
						},
						{
							label: "DWT"
						},
						{
							label: "lifting scheme"
						},
						{
							label: "bwm(res = src + α * secret_img/wav)"
						}]
					},
					{
						label: "MP3stego"
					},
					{
						label: "silenteye"
					},
					{
						label: "音频morse"
					},
					{
						label: "频谱图"
					},
					{
						label: "Velato language"
					}]
				},
				{
					label: "视频隐写",
					children: [{
						label: "GIF convert"
					},
					{
						label: "apng"
					},
					{
						label: "Potplayer 逐帧"
					},
					{
						label: "sstv"
					},
					{
						label: "时间线隐写"
					}]
				},
				{
					label: "其他隐写",
					children: [{
						label: "snow"
					},
					{
						label: "NTFS"
					},
					{
						label: "pyc"
					},
					{
						label: "base64 stego"
					},
					{
						label: "unicode 0宽度"
					}]
				}]
			},
			{
				label: "流量分析",
				collapsed: !0,
				children: [{
					label: "usb流量",
					children: [{
						label: "键盘流量"
					},
					{
						label: "鼠标流量"
					},
					{
						label: "其他usb流量"
					},
					{
						label: "手柄流量"
					}]
				},
				{
					label: "蓝牙流量"
				},
				{
					label: "wifi流量"
				},
				{
					label: "恶意攻击流量"
				}]
			},
			{
				label: "取证",
				collapsed: !0,
				children: [{
					label: "磁盘取证"
				},
				{
					label: "内存取证",
					children: [{
						label: "profile 制作"
					}]
				},
				{
					label: "MacOS 取证",
					children: [{
						label: "Keychain 取证"
					}]
				},
				{
					label: "Windows 取证",
					children: [{
						label: "注册表取证"
					},
					{
						label: "系统日志(event logs)取证"
					},
					{
						label: "时间线取证"
					}]
				},
				{
					label: "Linux 取证",
					children: [{
						label: "docker 取证"
					},
					{
						label: "网站日志分析"
					},
					{
						label: "挖矿软件取证"
					}]
				},
				{
					label: "数据恢复"
				},
				{
					label: "无人机取证"
				},
				{
					label: "Android 取证",
					children: [{
						label: "apk 逆向"
					},
					{
						label: "signal backup取证"
					}]
				},
				{
					label: "iOS 取证",
					children: [{
						label: "Manifest.plist 解析"
					}]
				},
				{
					label: "浏览器取证",
					children: [{
						label: "已保存的账号"
					},
					{
						label: "浏览记录"
					},
					{
						label: "IndexedDB 取证"
					}]
				}]
			}]
		},
		{
			label: "PWN",
			status: 1,
			children: [{
				label: "传统 pwn",
				collapsed: !0,
				children: [{
					label: "栈溢出",
					children: [{
						label: "基础ROP",
						children: [{
							label: "ret2text"
						},
						{
							label: "ret2shellcode"
						},
						{
							label: "ret2syscall"
						},
						{
							label: "ret2libc"
						}]
					},
					{
						label: "中级ROP",
						children: [{
							label: "ret2csu"
						},
						{
							label: "ret2reg"
						},
						{
							label: "BROP"
						}]
					},
					{
						label: "花式ROP",
						children: [{
							label: "stack pivoting"
						},
						{
							label: "frame faking"
						},
						{
							label: "stack smash"
						}]
					},
					{
						label: "高级ROP",
						children: [{
							label: "ret2dl_runtime_resolve"
						},
						{
							label: "SROP"
						},
						{
							label: "ret2VDSO"
						},
						{
							label: "JOP"
						}]
					}]
				},
				{
					label: "格式化字符串",
					children: [{
						label: "栈上的格式化字符串"
					},
					{
						label: "堆上的格式化字符串"
					}]
				},
				{
					label: "整数溢出",
					children: [{
						label: "上界溢出"
					},
					{
						label: "下界溢出"
					}]
				},
				{
					label: "类型混淆"
				},
				{
					label: "条件竞争"
				},
				{
					label: "glibc 堆攻击",
					children: [{
						label: "基础堆漏洞",
						children: [{
							label: "heap overflow"
						},
						{
							label: "UAF"
						},
						{
							label: "off-by-one"
						},
						{
							label: "off-by-null"
						},
						{
							label: "double-free"
						},
						{
							label: "use-after-free"
						}]
					},
					{
						label: "基础堆利用",
						children: [{
							label: "overlapping"
						},
						{
							label: "unlink"
						},
						{
							label: "tcache attack"
						},
						{
							label: "fastbin attack"
						},
						{
							label: "largebin attack"
						},
						{
							label: "unsortedbin attack"
						}]
					},
					{
						label: "高级堆利用",
						children: [{
							label: "house-of-spirit"
						},
						{
							label: "house-of-lore"
						},
						{
							label: "house-of-force"
						},
						{
							label: "house-of-einherjar"
						},
						{
							label: "hosue-of-orange"
						},
						{
							label: "house-of-roman"
						},
						{
							label: "house-of-storm"
						},
						{
							label: "house-of-botcake"
						}]
					}]
				},
				{
					label: "musl libc 堆利用"
				},
				{
					label: "IO_File攻击"
				}]
			},
			{
				label: "内核利用",
				collapsed: !0,
				children: [{
					label: "前置知识",
					children: [{
						label: "操作系统"
					},
					{
						label: "计算机组成原理"
					}]
				},
				{
					label: "基础概念",
					children: [{
						label: "ring model"
					},
					{
						label: "LKM"
					},
					{
						label: "syscall"
					},
					{
						label: "ioctl"
					},
					{
						label: "cred结构"
					}]
				},
				{
					label: "内核保护及绕过",
					children: [{
						label: "KASLR"
					},
					{
						label: "SMEP"
					},
					{
						label: "SMAP"
					},
					{
						label: "KPTI"
					},
					{
						label: "堆块隔离"
					},
					{
						label: "FGkASLR"
					}]
				},
				{
					label: "Linux内核利用",
					children: [{
						label: "常用堆喷",
						children: [{
							label: "userfault fd"
						},
						{
							label: "shm_file_data"
						},
						{
							label: "timerfd_ctx"
						},
						{
							label: "setxattr"
						},
						{
							label: "sendmsg"
						},
						{
							label: "msg_msg"
						},
						{
							label: "seq_operations"
						}]
					},
					{
						label: "ret2usr"
					},
					{
						label: "kernel UAF"
					},
					{
						label: "kernel ROP"
					},
					{
						label: "Double Fetch"
					}]
				},
				{
					label: "Windows内核利用"
				},
				{
					label: "OSX内核利用"
				},
				{
					label: "android内核利用"
				}]
			},
			{
				label: "浏览器利用",
				collapsed: !0,
				children: [{
					label: "JS引擎internal",
					children: [{
						label: "mujs"
					},
					{
						label: "qjs"
					},
					{
						label: "V8"
					},
					{
						label: "SpiderMonkey"
					},
					{
						label: "JSC"
					},
					{
						label: "CharaCore"
					},
					{
						label: "JerryScript"
					}]
				},
				{
					label: "JS引擎利用",
					children: [{
						label: "数组越界"
					},
					{
						label: "JIT优化"
					},
					{
						label: "FakeObj和AddrOf利用原语"
					},
					{
						label: "Use-After-Free"
					},
					{
						label: "WASM"
					},
					{
						label: "堆风水"
					}]
				},
				{
					label: "沙盒逃逸",
					children: [{
						label: "Chrome Sandbox",
						children: [{
							label: "mojo"
						},
						{
							label: "IPC"
						}]
					},
					{
						label: "IE Sandbox",
						children: [{
							label: "LPC port"
						},
						{
							label: "RPC message"
						}]
					},
					{
						label: "Firefox Sandbox"
					}]
				}]
			},
			{
				label: "虚拟机逃逸",
				collapsed: !0,
				children: [{
					label: "Libc虚拟机"
				},
				{
					label: "Unicorn虚拟机"
				},
				{
					label: "Qemu"
				},
				{
					label: "VMware"
				},
				{
					label: "VBox"
				},
				{
					label: "HyperV"
				},
				{
					label: "Parallel"
				}]
			},
			{
				label: "IoT hacking",
				collapsed: !0,
				children: [{
					label: "嵌入式指令集",
					children: [{
						label: "ARM"
					},
					{
						label: "MIPS"
					},
					{
						label: "RISC-V"
					}]
				},
				{
					label: "硬件调试知识"
				},
				{
					label: "近场无线协议",
					children: [{
						label: "蓝牙"
					},
					{
						label: "Zigbee"
					},
					{
						label: "WIFI"
					}]
				},
				{
					label: "固件分析知识"
				}]
			},
			{
				label: "沙盒逃逸",
				collapsed: !0,
				children: [{
					label: "Seccomp"
				},
				{
					label: "Ptrace"
				},
				{
					label: "chroot"
				},
				{
					label: "docker"
				}]
			},
			{
				label: "Web Pwn",
				collapsed: !0,
				children: [{
					label: "Cgi pwn"
				},
				{
					label: "php pwn"
				}]
			}]
		},
		{
			label: "WEB",
			children: [{
				label: "SQL 注入",
				collapsed: !0,
				children: [{
					label: "联合查询"
				},
				{
					label: "时间盲注"
				},
				{
					label: "报错注入"
				},
				{
					label: "OOB"
				}]
			},
			{
				label: "XSS",
				collapsed: !0,
				children: [{
					label: "反射 XSS"
				},
				{
					label: "存储 XSS"
				},
				{
					label: "DOM-XSS"
				},
				{
					label: "CSP Bypass"
				},
				{
					label: "RPO"
				}]
			},
			{
				label: "SSRF",
				collapsed: !0,
				children: [{
					label: "正则绕过"
				},
				{
					label: "302 Redirect"
				},
				{
					label: "DNS Rebinding"
				},
				{
					label: "Gopher"
				},
				{
					label: "FTP"
				}]
			},
			{
				label: "RCE",
				collapsed: !0
			},
			{
				label: "XXE",
				collapsed: !0
			},
			{
				label: "代码审计",
				collapsed: !0,
				children: [{
					label: "PHP",
					children: [{
						label: "LFI"
					},
					{
						label: "反序列化"
					},
					{
						label: "文件上传"
					}]
				},
				{
					label: "Python",
					children: [{
						label: "SSTI"
					},
					{
						label: "反序列化"
					}]
				},
				{
					label: "Nodejs",
					children: [{
						label: "原型链污染"
					}]
				},
				{
					label: "Java",
					children: [{
						label: "反序列化"
					}]
				}]
			}]
		},
		{
			label: "REVERSE",
			children: [{
				label: "基础知识",
				children: [{
					label: "汇编与反汇编",
					collapsed: !0,
					children: [{
						label: "x86"
					},
					{
						label: "arm"
					},
					{
						label: "mips"
					}]
				},
				{
					label: "可执行文件格式",
					collapsed: !0,
					children: [{
						label: "PE",
						children: [{
							label: "NT头"
						},
						{
							label: "段表"
						},
						{
							label: "导入表"
						},
						{
							label: "导出表"
						}]
					},
					{
						label: "ELF",
						children: [{
							label: "段表"
						},
						{
							label: "符号表"
						}]
					},
					{
						label: "APK",
						children: [{
							label: "打包与签名"
						}]
					}]
				},
				{
					label: "调试原理",
					collapsed: !0,
					children: [{
						label: "断点原理",
						children: [{
							label: "软件断点"
						},
						{
							label: "硬件断点"
						},
						{
							label: "内存断点"
						},
						{
							label: "单步断点"
						}]
					},
					{
						label: "调试接口"
					},
					{
						label: "反调试检测"
					},
					{
						label: "调试符号"
					}]
				},
				{
					label: "编译原理",
					collapsed: !0,
					children: [{
						label: "语法树"
					},
					{
						label: "中间代码生成"
					},
					{
						label: "代码优化"
					},
					{
						label: "机器码生成"
					},
					{
						label: "控制流程图"
					},
					{
						label: "数据结构与虚函数表"
					}]
				},
				{
					label: "操作系统",
					collapsed: !0,
					children: [{
						label: "程序加载"
					},
					{
						label: "进程线程"
					},
					{
						label: "系统调用"
					},
					{
						label: "栈与堆"
					},
					{
						label: "CPU虚拟化"
					},
					{
						label: "保护模式"
					}]
				}],
                children: [{
					label: "工具使用",
					collapsed: !0,
					children: [{
						label: "静态分析"
					},
					{
						label: "工具",
						children: [{
							label: "ida"
						},
						{
							label: "ghidra"
						},
						{
							label: "jeb"
						}]
					},
					{
						label: "交互分析"
					},
					{
						label: "分析脚本"
					}]
				},
				{
					label: "动态分析",
					collapsed: !0,
					children: [{
						label: "工具",
						children: [{
							label: "x64dbg"
						},
						{
							label: "gdb"
						},
						{
							label: "windbg"
						},
						{
							label: "frida"
						}]
					},
					{
						label: "断点设置"
					},
					{
						label: "跟踪运行"
					},
					{
						label: "调试脚本"
					}]
				},
				{
					label: "模拟执行与符号执行",
					collapsed: !0,
					children: [{
						label: "unicorn"
					},
					{
						label: "miasm"
					},
					{
						label: "triton"
					},
					{
						label: "pin"
					}]
				}],
				children: [{
					label: "语言特征",
					collapsed: !0,
					children: [{
						label: "cpp"
					},
					{
						label: "golang"
					},
					{
						label: "wasm"
					},
					{
						label: "dot net"
					}]
				}],
				children: [{
					label: "常见框架",
					collapsed: !0,
					children: [{
						label: "socket"
					},
					{
						label: "多线程"
					},
					{
						label: "调试器"
					},
					{
						label: "MFC"
					},
					{
						label: "内核驱动"
					}]
				}],
				children: [{
					label: "混淆对抗",
					collapsed: !0,
					children: [{
						label: "垃圾指令"
					},
					{
						label: "控制流平坦化"
					},
					{
						label: "代码虚拟化"
					}]
				}],
				children: [{
					label: "常见算法",
					collapsed: !0,
					children: [{
						label: "编码算法",
						children: [{
							label: "base64"
						},
						{
							label: "hex"
						},
						{
							label: "urlencode"
						}]
					},
					{
						label: "加密算法",
						children: [{
							label: "AES"
						},
						{
							label: "RSA"
						},
						{
							label: "DES"
						}]
					},
					{
						label: "压缩算法",
						children: [{
							label: "lzma"
						},
						{
							label: "Huffman"
						}]
					}]
				}]
			}]
		}]
	},
	r = 12,
	n = 22,
	i = 0,
	t = 16,
	c = 4,
	d = 18;
	a.
default.registerNode("treeNode", {
		draw: function(l, e) {
			l.id;
			var a = l.label,
			b = l.collapsed,
			r = l.selected,
			o = l.children,
			h = 0 === l.depth,
			s = o && 0 !== o.length,
			p = n,
			u = i,
			f = t,
			g = c,
			S = d,
			m = 0;
			m = (m = e.addShape("text", {
				attrs: {
					text: a,
					x: 0,
					y: -14,
					textAlign: "left",
					textBaseline: "top",
					fontFamily: "PingFangSC-Regular"
				},
				cursor: "pointer",
				name: "name-text-shape"
			}).getBBox().width + f + g) < 60 ? 60 : m,
			!h && s && (m += u, m += p);
			var C = {
				x: 0,
				y: -14,
				width: m,
				height: 28,
				radius: 4
			};
			h && r && (C.fill = "#e8f7ff", C.stroke = "#e8f7ff");
			var A = e.addShape("rect", {
				attrs: C,
				name: "root-key-shape-rect-shape"
			});
			h || e.addShape("path", {
				attrs: {
					path: [["M", -1, 0], ["L", m, 0]],
					stroke: "#AAB7C4",
					lineWidth: 1
				},
				name: "node-path-shape"
			});
			var x = -10;
			h && e.addShape("rect", {
				attrs: {
					x: x,
					y: -13,
					width: m + 12,
					height: 28,
					radius: 14,
					fill: "#e8f7ff",
					cursor: "pointer"
				},
				name: "main-shape"
			});
			var y = "rgba(0, 0, 0, .65)";
			if (r && (y = "#40A8FF"), h ? e.addShape("text", {
				attrs: {
					text: a,
					x: x + S,
					y: 1,
					textAlign: "left",
					textBaseline: "middle",
					fill: y,
					fontSize: 12,
					fontFamily: "PingFangSC-Regular",
					cursor: "pointer"
				},
				name: "root-text-shape"
			}) : e.addShape("text", {
				attrs: {
					text: a,
					x: r ? -4 + g: -4,
					y: -19,
					textAlign: "start",
					textBaseline: "top",
					fill: y,
					fontSize: 12,
					fontFamily: "PingFangSC-Regular",
					cursor: "pointer"
				},
				name: "not-root-text-shape"
			}), s && !h) {
				var P = m - p;
				e.addShape("rect", {
					attrs: {
						width: p,
						height: 12,
						stroke: b ? "#1890ff": "#5CDBD3",
						fill: b ? "#fff": "#E6FFFB",
						x: P,
						y: -6,
						radius: 6,
						cursor: "pointer"
					},
					name: "child-count-rect-shape"
				}),
				e.addShape("text", {
					attrs: {
						text: "".concat(null == o ? void 0 : o.length),
						fill: "rgba(0, 0, 0, .65)",
						x: P + p / 2,
						y: 6,
						fontSize: 10,
						width: p,
						textAlign: "center",
						cursor: "pointer"
					},
					name: "child-count-text-shape"
				})
			}
			return A
		}
	}),
	a.
default.registerEdge("smooth", {
		draw: function(l, e) {
			var a = l.startPoint,
			b = l.endPoint,
			r = Math.abs(b.x - a.x),
			n = [["M", a.x, a.y], ["C", a.x + r / 4, a.y, b.x - r / 2, b.y, b.x, b.y]];
			return e.addShape("path", {
				attrs: {
					stroke: "#AAB7C4",
					path: n
				},
				name: "smooth-path-shape"
			})
		}
	});
	var o = "container_tree",
	h = document.getElementById(o),
	s = h.scrollWidth,
	p = h.scrollHeight || 500,
	u = new a.
default.Tooltip({
		offsetX:
		10,
		offsetY: 20,
		getContent: function(l) {
			var e = document.createElement("div");
			return e.style.width = "auto",
			e.style.height = "auto",
			e.style.minHeight = "20px",
			e.innerHTML = "\n      <p> ".concat(l.item.getModel().tooltip || l.item.getModel().label, "</p>"),
			e
		},
		itemTypes: ["node"]
	}),
	f = new a.
default.TreeGraph({
		container:
		o,
		width: s,
		height: p,
		modes: {
		default:
			[{
				type:
				"collapse-expand",
				trigger: "click"
			},
			"drag-canvas", "zoom-canvas"]
		},
		plugins: [u],
		defaultNode: {
			type: "treeNode",
			anchorPoints: [[0, .5], [1, .5]]
		},
		defaultEdge: {
			type: "cubic-horizontal"
		},
		layout: {
			type: "compactBox",
			direction: "LR",
			getId: function(l) {
				return l.id
			},
			getHeight: function() {
				return 16
			},
			getWidth: function(l) {
				var e = a.
			default.Util.getTextSize(l.label, r)[0];
				return t + c + e + d + n
			},
			getVGap: function() {
				return 15
			},
			getHGap: function() {
				return 30
			}
		}
	});
	a.
default.Util.traverseTree(b, (function(l) {
		l.id = "".concat(l.label, "_").concat(function() {
			for (var l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21, e = "", a = crypto.getRandomValues(new Uint8Array(l)); l--;) {
				var b = 63 & a[l];
				e += b < 36 ? b.toString(36) : b < 62 ? (b - 26).toString(36).toUpperCase() : b < 63 ? "_": "-"
			}
			return e
		} ())
	})),
	f.data(b),
	f.render(),
	f.fitView(),
	"undefined" != typeof window && (window.onresize = function() {
		f && !f.get("destroyed") && h && h.scrollWidth && h.scrollHeight && f.changeSize(h.scrollWidth, h.scrollHeight)
	})
}));
