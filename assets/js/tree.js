(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@antv/g6')) :
  typeof define === 'function' && define.amd ? define(['@antv/g6'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.G6));
})(this, (function (G6) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var G6__default = /*#__PURE__*/_interopDefaultLegacy(G6);

  var label = "r3kapig技能栈1.0";
  var depth = 3;
  var children = [
  	{
  		label: "CRYPTO",
  		description: null,
  		children: [
  			{
  				label: "数学基础",
  				collapsed: true,
  				children: [
  					{
  						label: "基础代数",
  						collapsed: true,
  						children: [
  							{
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
  							}
  						]
  					},
  					{
  						label: "计算数论",
  						collapsed: true,
  						children: [
  							{
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
  								children: [
  									{
  										label: "Hensel 引理"
  									},
  									{
  										label: "Resultant"
  									},
  									{
  										label: "Gröbner basis"
  									}
  								]
  							},
  							{
  								label: "线性代数 & 格",
  								children: [
  									{
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
  									}
  								]
  							},
  							{
  								label: "椭圆曲线",
  								children: [
  									{
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
  									}
  								]
  							},
  							{
  								label: "整数分解",
  								children: [
  									{
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
  									}
  								]
  							},
  							{
  								label: "素性检验",
  								children: [
  									{
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
  									}
  								]
  							},
  							{
  								label: "离散对数",
  								children: [
  									{
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
  										children: [
  											{
  												label: "anomalous curve"
  											},
  											{
  												label: "MOV attack"
  											}
  										]
  									},
  									{
  										label: "有限域",
  										children: [
  											{
  												label: "Index Calculus"
  											},
  											{
  												label: "NFS"
  											}
  										]
  									}
  								]
  							}
  						]
  					}
  				]
  			},
  			{
  				label: "密码理论",
  				collapsed: true,
  				children: [
  					{
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
  					}
  				]
  			},
  			{
  				label: "常见编码",
  				collapsed: true,
  				children: [
  					{
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
  					}
  				]
  			},
  			{
  				label: "古典密码",
  				collapsed: true,
  				children: [
  					{
  						label: "单表替代",
  						children: [
  							{
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
  							}
  						]
  					},
  					{
  						label: "多表替代",
  						children: [
  							{
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
  							}
  						]
  					},
  					{
  						label: "其他",
  						children: [
  							{
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
  							}
  						]
  					}
  				]
  			},
  			{
  				label: "序列密码",
  				collapsed: true,
  				children: [
  					{
  						label: "常见序列密码算法",
  						children: [
  							{
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
  							}
  						]
  					},
  					{
  						label: "(CS)PRNG",
  						children: [
  							{
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
  							}
  						]
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
  					}
  				]
  			},
  			{
  				label: "分组密码",
  				collapsed: true,
  				children: [
  					{
  						label: "常见分组密码算法",
  						children: [
  							{
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
  							}
  						]
  					},
  					{
  						label: "Block cipher 结构",
  						children: [
  							{
  								label: "Feistel"
  							},
  							{
  								label: "SPN"
  							},
  							{
  								label: "Lai Massey"
  							}
  						]
  					},
  					{
  						label: "分组模式",
  						children: [
  							{
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
  							}
  						]
  					},
  					{
  						label: "差分、积分等分析"
  					},
  					{
  						label: "线性分析"
  					},
  					{
  						label: "故障注入、侧信道"
  					}
  				]
  			},
  			{
  				label: "哈希函数",
  				collapsed: true,
  				children: [
  					{
  						label: "常见 Hash",
  						children: [
  							{
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
  							}
  						]
  					},
  					{
  						label: "彩虹表/暴力破解"
  					},
  					{
  						label: "生日攻击/中间相遇攻击"
  					},
  					{
  						label: "Hash 构造结构",
  						children: [
  							{
  								label: "Merkle–Damgard",
  								children: [
  									{
  										label: "长度扩展攻击"
  									}
  								]
  							},
  							{
  								label: "Sponge Function"
  							}
  						]
  					},
  					{
  						label: "MD5 fastcoll/chosen-prefix",
  						children: [
  							{
  								label: "差分分析"
  							},
  							{
  								label: "Tunnels"
  							}
  						]
  					}
  				]
  			},
  			{
  				label: "认证与完整性",
  				collapsed: true,
  				children: [
  					{
  						label: "MAC",
  						children: [
  							{
  								label: "ANSI CBC-MAC"
  							},
  							{
  								label: "Universal Hash Function & Carter-Wegman MAC"
  							},
  							{
  								label: "HMAC"
  							}
  						]
  					},
  					{
  						label: "Merkle Tree"
  					},
  					{
  						label: "KDF",
  						children: [
  							{
  								label: "HKDF"
  							},
  							{
  								label: "PBKDF2"
  							}
  						]
  					},
  					{
  						label: "MAC-then-Encrypt vs Encrypt-then-MAC"
  					},
  					{
  						label: "AEAD",
  						children: [
  							{
  								label: "GCM/OCB/SIV/Poly1305 及相关攻击（GCM nonce reuse、OCB2）"
  							}
  						]
  					},
  					{
  						label: "Authenticated Cipher",
  						children: [
  							{
  								label: "AEGIS"
  							}
  						]
  					}
  				]
  			},
  			{
  				label: "公钥密码",
  				collapsed: true,
  				children: [
  					{
  						label: "常见公钥加密算法",
  						children: [
  							{
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
  							}
  						]
  					},
  					{
  						label: "RSA 相关攻击",
  						children: [
  							{
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
  								children: [
  									{
  										label: "partial d/p/dp LSB/MSB/multiple-chunk exposure"
  									},
  									{
  										label: "Boneh Durfee attack"
  									}
  								]
  							}
  						]
  					},
  					{
  						label: "密钥协商",
  						children: [
  							{
  								label: "(EC)DH"
  							},
  							{
  								label: "(EC)MQV"
  							},
  							{
  								label: "SIKE"
  							}
  						]
  					},
  					{
  						label: "故障注入、侧信道"
  					}
  				]
  			},
  			{
  				label: "签名",
  				collapsed: true,
  				children: [
  					{
  						label: "常见签名算法",
  						children: [
  							{
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
  							}
  						]
  					},
  					{
  						label: "(EC)DSA nonce 相关",
  						children: [
  							{
  								label: "reuse nonce"
  							},
  							{
  								label: "partial nonce exposure"
  							},
  							{
  								label: "related nonce"
  							}
  						]
  					},
  					{
  						label: "故障注入、侧信道"
  					}
  				]
  			},
  			{
  				label: "其他公钥密码学相关算法",
  				collapsed: true,
  				children: [
  					{
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
  					}
  				]
  			}
  		]
  	},
  	{
  		label: "MISC",
  		description: null,
  		children: [
  			{
  				label: "区块链",
  				collapsed: true,
  				children: [
  					{
  						label: "以太坊智能合约",
  						children: [
  							{
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
  							}
  						]
  					},
  					{
  						label: "公链安全",
  						children: [
  							{
  								label: "Double-spending attack",
  								children: [
  									{
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
  									}
  								]
  							},
  							{
  								label: "Block withholding attack"
  							},
  							{
  								label: "Selfish-Mining attack"
  							}
  						]
  					}
  				]
  			},
  			{
  				label: "信息隐写",
  				collapsed: true,
  				children: [
  					{
  						label: "文本隐写",
  						children: [
  							{
  								label: "wbStego对txt、asc、pdf"
  							}
  						]
  					},
  					{
  						label: "压缩包",
  						children: [
  							{
  								label: "zip、rar伪加密"
  							},
  							{
  								label: "zip 明文攻击"
  							}
  						]
  					},
  					{
  						label: "图像隐写",
  						children: [
  							{
  								label: "结构",
  								children: [
  									{
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
  									}
  								]
  							},
  							{
  								label: "色域转换",
  								children: [
  									{
  										label: "rgb转YCrCb"
  									}
  								]
  							},
  							{
  								label: "空域隐写",
  								children: [
  									{
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
  									}
  								]
  							},
  							{
  								label: "频域隐写",
  								children: [
  									{
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
  									}
  								]
  							},
  							{
  								label: "其他图片格式",
  								children: [
  									{
  										label: "bmp(wbStego)"
  									},
  									{
  										label: "bpg"
  									}
  								]
  							}
  						]
  					},
  					{
  						label: "音频隐写",
  						children: [
  							{
  								label: "结构",
  								children: [
  									{
  										label: "WAV"
  									},
  									{
  										label: "MP3(block reserved word)"
  									},
  									{
  										label: "tools"
  									}
  								]
  							},
  							{
  								label: "时域隐写",
  								children: [
  									{
  										label: "lsb"
  									},
  									{
  										label: "amplitude"
  									},
  									{
  										label: "echo"
  									}
  								]
  							},
  							{
  								label: "频域隐写",
  								children: [
  									{
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
  									}
  								]
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
  							}
  						]
  					},
  					{
  						label: "视频隐写",
  						children: [
  							{
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
  							}
  						]
  					},
  					{
  						label: "其他隐写",
  						children: [
  							{
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
  							}
  						]
  					}
  				]
  			},
  			{
  				label: "流量分析",
  				collapsed: true,
  				children: [
  					{
  						label: "usb流量",
  						children: [
  							{
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
  							}
  						]
  					},
  					{
  						label: "蓝牙流量"
  					},
  					{
  						label: "wifi流量"
  					},
  					{
  						label: "恶意攻击流量"
  					}
  				]
  			},
  			{
  				label: "取证",
  				collapsed: true,
  				children: [
  					{
  						label: "磁盘取证"
  					},
  					{
  						label: "内存取证",
  						children: [
  							{
  								label: "profile 制作"
  							}
  						]
  					},
  					{
  						label: "MacOS 取证",
  						children: [
  							{
  								label: "Keychain 取证"
  							}
  						]
  					},
  					{
  						label: "Windows 取证",
  						children: [
  							{
  								label: "注册表取证"
  							},
  							{
  								label: "系统日志(event logs)取证"
  							},
  							{
  								label: "时间线取证"
  							}
  						]
  					},
  					{
  						label: "Linux 取证",
  						children: [
  							{
  								label: "docker 取证"
  							},
  							{
  								label: "网站日志分析"
  							},
  							{
  								label: "挖矿软件取证"
  							}
  						]
  					},
  					{
  						label: "数据恢复"
  					},
  					{
  						label: "无人机取证"
  					},
  					{
  						label: "Android 取证",
  						children: [
  							{
  								label: "apk 逆向"
  							},
  							{
  								label: "signal backup取证"
  							}
  						]
  					},
  					{
  						label: "iOS 取证",
  						children: [
  							{
  								label: "Manifest.plist 解析"
  							}
  						]
  					},
  					{
  						label: "浏览器取证",
  						children: [
  							{
  								label: "已保存的账号"
  							},
  							{
  								label: "浏览记录"
  							},
  							{
  								label: "IndexedDB 取证"
  							}
  						]
  					}
  				]
  			}
  		]
  	},
  	{
  		label: "PWN",
  		status: 1,
  		children: [
  			{
  				label: "传统 pwn",
  				collapsed: true,
  				children: [
  					{
  						label: "栈溢出",
  						children: [
  							{
  								label: "基础ROP",
  								children: [
  									{
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
  									}
  								]
  							},
  							{
  								label: "中级ROP",
  								children: [
  									{
  										label: "ret2csu"
  									},
  									{
  										label: "ret2reg"
  									},
  									{
  										label: "BROP"
  									}
  								]
  							},
  							{
  								label: "花式ROP",
  								children: [
  									{
  										label: "stack pivoting"
  									},
  									{
  										label: "frame faking"
  									},
  									{
  										label: "stack smash"
  									}
  								]
  							},
  							{
  								label: "高级ROP",
  								children: [
  									{
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
  									}
  								]
  							}
  						]
  					},
  					{
  						label: "格式化字符串",
  						children: [
  							{
  								label: "栈上的格式化字符串"
  							},
  							{
  								label: "堆上的格式化字符串"
  							}
  						]
  					},
  					{
  						label: "整数溢出",
  						children: [
  							{
  								label: "上界溢出"
  							},
  							{
  								label: "下界溢出"
  							}
  						]
  					},
  					{
  						label: "类型混淆"
  					},
  					{
  						label: "条件竞争"
  					},
  					{
  						label: "glibc 堆攻击",
  						children: [
  							{
  								label: "基础堆漏洞",
  								children: [
  									{
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
  									}
  								]
  							},
  							{
  								label: "基础堆利用",
  								children: [
  									{
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
  									}
  								]
  							},
  							{
  								label: "高级堆利用",
  								children: [
  									{
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
  									}
  								]
  							}
  						]
  					},
  					{
  						label: "musl libc 堆利用"
  					},
  					{
  						label: "IO_File攻击"
  					}
  				]
  			},
  			{
  				label: "内核利用",
  				collapsed: true,
  				children: [
  					{
  						label: "前置知识",
  						children: [
  							{
  								label: "操作系统"
  							},
  							{
  								label: "计算机组成原理"
  							}
  						]
  					},
  					{
  						label: "基础概念",
  						children: [
  							{
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
  							}
  						]
  					},
  					{
  						label: "内核保护及绕过",
  						children: [
  							{
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
  							}
  						]
  					},
  					{
  						label: "Linux内核利用",
  						children: [
  							{
  								label: "常用堆喷",
  								children: [
  									{
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
  									}
  								]
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
  							}
  						]
  					},
  					{
  						label: "Windows内核利用"
  					},
  					{
  						label: "OSX内核利用"
  					},
  					{
  						label: "android内核利用"
  					}
  				]
  			},
  			{
  				label: "浏览器利用",
  				collapsed: true,
  				children: [
  					{
  						label: "JS引擎internal",
  						children: [
  							{
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
  							}
  						]
  					},
  					{
  						label: "JS引擎利用",
  						children: [
  							{
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
  							}
  						]
  					},
  					{
  						label: "沙盒逃逸",
  						children: [
  							{
  								label: "Chrome Sandbox",
  								children: [
  									{
  										label: "mojo"
  									},
  									{
  										label: "IPC"
  									}
  								]
  							},
  							{
  								label: "IE Sandbox",
  								children: [
  									{
  										label: "LPC port"
  									},
  									{
  										label: "RPC message"
  									}
  								]
  							},
  							{
  								label: "Firefox Sandbox"
  							}
  						]
  					}
  				]
  			},
  			{
  				label: "虚拟机逃逸",
  				collapsed: true,
  				children: [
  					{
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
  					}
  				]
  			},
  			{
  				label: "IoT hacking",
  				collapsed: true,
  				children: [
  					{
  						label: "嵌入式指令集",
  						children: [
  							{
  								label: "ARM"
  							},
  							{
  								label: "MIPS"
  							},
  							{
  								label: "RISC-V"
  							}
  						]
  					},
  					{
  						label: "硬件调试知识"
  					},
  					{
  						label: "近场无线协议",
  						children: [
  							{
  								label: "蓝牙"
  							},
  							{
  								label: "Zigbee"
  							},
  							{
  								label: "WIFI"
  							}
  						]
  					},
  					{
  						label: "固件分析知识"
  					}
  				]
  			},
  			{
  				label: "沙盒逃逸",
  				collapsed: true,
  				children: [
  					{
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
  					}
  				]
  			},
  			{
  				label: "Web Pwn",
  				collapsed: true,
  				children: [
  					{
  						label: "Cgi pwn"
  					},
  					{
  						label: "php pwn"
  					}
  				]
  			}
  		]
  	},
  	{
  		label: "WEB",
  		children: [
  			{
  				label: "SQL 注入",
  				collapsed: true,
  				children: [
  					{
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
  					}
  				]
  			},
  			{
  				label: "XSS",
  				collapsed: true,
  				children: [
  					{
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
  					}
  				]
  			},
  			{
  				label: "SSRF",
  				collapsed: true,
  				children: [
  					{
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
  					}
  				]
  			},
  			{
  				label: "RCE",
  				collapsed: true
  			},
  			{
  				label: "XXE",
  				collapsed: true
  			},
  			{
  				label: "代码审计",
  				collapsed: true,
  				children: [
  					{
  						label: "PHP",
  						children: [
  							{
  								label: "LFI"
  							},
  							{
  								label: "反序列化"
  							},
  							{
  								label: "文件上传"
  							}
  						]
  					},
  					{
  						label: "Python",
  						children: [
  							{
  								label: "SSTI"
  							},
  							{
  								label: "反序列化"
  							}
  						]
  					},
  					{
  						label: "Nodejs",
  						children: [
  							{
  								label: "原型链污染"
  							}
  						]
  					},
  					{
  						label: "Java",
  						children: [
  							{
  								label: "反序列化"
  							}
  						]
  					}
  				]
  			}
  		]
  	},
  	{
  		label: "REVERSE",
  		children: [
  			{
  				label: "基础知识",
  				children: [
  					{
  						label: "汇编与反汇编",
  						collapsed: true,
  						children: [
  							{
  								label: "x86"
  							},
  							{
  								label: "arm"
  							},
  							{
  								label: "mips"
  							}
  						]
  					},
  					{
  						label: "可执行文件格式",
  						collapsed: true,
  						children: [
  							{
  								label: "PE",
  								children: [
  									{
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
  									}
  								]
  							},
  							{
  								label: "ELF",
  								children: [
  									{
  										label: "段表"
  									},
  									{
  										label: "符号表"
  									}
  								]
  							},
  							{
  								label: "APK",
  								children: [
  									{
  										label: "打包与签名"
  									}
  								]
  							}
  						]
  					},
  					{
  						label: "调试原理",
  						collapsed: true,
  						children: [
  							{
  								label: "断点原理",
  								children: [
  									{
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
  									}
  								]
  							},
  							{
  								label: "调试接口"
  							},
  							{
  								label: "反调试检测"
  							},
  							{
  								label: "调试符号"
  							}
  						]
  					},
  					{
  						label: "编译原理",
  						collapsed: true,
  						children: [
  							{
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
  							}
  						]
  					},
  					{
  						label: "操作系统",
  						collapsed: true,
  						children: [
  							{
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
  							}
  						]
  					},
  					{
  						label: "工具使用",
  						collapsed: true,
  						children: [
  							{
  								label: "静态分析"
  							},
  							{
  								label: "工具",
  								children: [
  									{
  										label: "ida"
  									},
  									{
  										label: "ghidra"
  									},
  									{
  										label: "jeb"
  									}
  								]
  							},
  							{
  								label: "交互分析"
  							},
  							{
  								label: "分析脚本"
  							}
  						]
  					},
  					{
  						label: "动态分析",
  						collapsed: true,
  						children: [
  							{
  								label: "工具",
  								children: [
  									{
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
  									}
  								]
  							},
  							{
  								label: "断点设置"
  							},
  							{
  								label: "跟踪运行"
  							},
  							{
  								label: "调试脚本"
  							}
  						]
  					},
  					{
  						label: "模拟执行与符号执行",
  						collapsed: true,
  						children: [
  							{
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
  							}
  						]
  					},
  					{
  						label: "语言特征",
  						collapsed: true,
  						children: [
  							{
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
  							}
  						]
  					},
  					{
  						label: "常见框架",
  						collapsed: true,
  						children: [
  							{
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
  							}
  						]
  					},
  					{
  						label: "混淆对抗",
  						collapsed: true,
  						children: [
  							{
  								label: "垃圾指令"
  							},
  							{
  								label: "控制流平坦化"
  							},
  							{
  								label: "代码虚拟化"
  							}
  						]
  					},
  					{
  						label: "常见算法",
  						collapsed: true,
  						children: [
  							{
  								label: "编码算法",
  								children: [
  									{
  										label: "base64"
  									},
  									{
  										label: "hex"
  									},
  									{
  										label: "urlencode"
  									}
  								]
  							},
  							{
  								label: "加密算法",
  								children: [
  									{
  										label: "AES"
  									},
  									{
  										label: "RSA"
  									},
  									{
  										label: "DES"
  									}
  								]
  							},
  							{
  								label: "压缩算法",
  								children: [
  									{
  										label: "lzma"
  									},
  									{
  										label: "Huffman"
  									}
  								]
  							}
  						]
  					}
  				]
  			}
  		]
  	}
  ];
  var data = {
  	label: label,
  	depth: depth,
  	children: children
  };

  var minWidth = 60;
  var BaseConfig = {
    nameFontSize: 12,
    childCountWidth: 22,
    countMarginLeft: 0,
    itemPadding: 16,
    nameMarginLeft: 4,
    rootPadding: 18
  };
  G6__default["default"].registerNode('treeNode', {
    draw: function draw(cfg, group) {
      cfg.id;
          var label = cfg.label,
          collapsed = cfg.collapsed,
          selected = cfg.selected,
          children = cfg.children,
          depth = cfg.depth;
      var rootNode = depth === 0;
      var hasChildren = children && children.length !== 0;
      var childCountWidth = BaseConfig.childCountWidth,
          countMarginLeft = BaseConfig.countMarginLeft,
          itemPadding = BaseConfig.itemPadding,
          nameMarginLeft = BaseConfig.nameMarginLeft,
          rootPadding = BaseConfig.rootPadding;
      var width = 0;
      var height = 28;
      var x = 0;
      var y = -height / 2; // 名称文本

      var text = group.addShape('text', {
        attrs: {
          text: label,
          x: x * 2,
          y: y,
          textAlign: 'left',
          textBaseline: 'top',
          fontFamily: 'PingFangSC-Regular'
        },
        cursor: 'pointer',
        name: 'name-text-shape'
      });
      var textWidth = text.getBBox().width;
      width = textWidth + itemPadding + nameMarginLeft;
      width = width < minWidth ? minWidth : width;

      if (!rootNode && hasChildren) {
        width += countMarginLeft;
        width += childCountWidth;
      }

      var keyShapeAttrs = {
        x: x,
        y: y,
        width: width,
        height: height,
        radius: 4
      }; // keyShape根节点选中样式

      if (rootNode && selected) {
        keyShapeAttrs.fill = '#e8f7ff';
        keyShapeAttrs.stroke = '#e8f7ff';
      }

      var keyShape = group.addShape('rect', {
        attrs: keyShapeAttrs,
        name: 'root-key-shape-rect-shape'
      });

      if (!rootNode) {
        // 底部横线
        group.addShape('path', {
          attrs: {
            path: [['M', x - 1, 0], ['L', width, 0]],
            stroke: '#AAB7C4',
            lineWidth: 1
          },
          name: 'node-path-shape'
        });
      }

      var mainX = x - 10;
      var mainY = -height + 15;

      if (rootNode) {
        group.addShape('rect', {
          attrs: {
            x: mainX,
            y: mainY,
            width: width + 12,
            height: height,
            radius: 14,
            fill: '#e8f7ff',
            cursor: 'pointer'
          },
          name: 'main-shape'
        });
      }

      var nameColor = 'rgba(0, 0, 0, .65)';

      if (selected) {
        nameColor = '#40A8FF';
      } // 名称


      if (rootNode) {
        group.addShape('text', {
          attrs: {
            text: label,
            x: mainX + rootPadding,
            y: 1,
            textAlign: 'left',
            textBaseline: 'middle',
            fill: nameColor,
            fontSize: 12,
            fontFamily: 'PingFangSC-Regular',
            cursor: 'pointer'
          },
          name: 'root-text-shape'
        });
      } else {
        group.addShape('text', {
          attrs: {
            text: label,
            x: selected ? mainX + 6 + nameMarginLeft : mainX + 6,
            y: y - 5,
            textAlign: 'start',
            textBaseline: 'top',
            fill: nameColor,
            fontSize: 12,
            fontFamily: 'PingFangSC-Regular',
            cursor: 'pointer'
          },
          name: 'not-root-text-shape'
        });
      } // 子类数量


      if (hasChildren && !rootNode) {
        var childCountHeight = 12;
        var childCountX = width - childCountWidth;
        var childCountY = -childCountHeight / 2;
        group.addShape('rect', {
          attrs: {
            width: childCountWidth,
            height: 12,
            stroke: collapsed ? '#1890ff' : '#5CDBD3',
            fill: collapsed ? '#fff' : '#E6FFFB',
            x: childCountX,
            y: childCountY,
            radius: 6,
            cursor: 'pointer'
          },
          name: 'child-count-rect-shape'
        });
        group.addShape('text', {
          attrs: {
            text: "".concat(children === null || children === void 0 ? void 0 : children.length),
            fill: 'rgba(0, 0, 0, .65)',
            x: childCountX + childCountWidth / 2,
            y: childCountY + 12,
            fontSize: 10,
            width: childCountWidth,
            textAlign: 'center',
            cursor: 'pointer'
          },
          name: 'child-count-text-shape'
        });
      }

      return keyShape;
    }
  });
  G6__default["default"].registerEdge('smooth', {
    draw: function draw(cfg, group) {
      var startPoint = cfg.startPoint,
          endPoint = cfg.endPoint;
      var hgap = Math.abs(endPoint.x - startPoint.x);
      var path = [['M', startPoint.x, startPoint.y], ['C', startPoint.x + hgap / 4, startPoint.y, endPoint.x - hgap / 2, endPoint.y, endPoint.x, endPoint.y]];
      var shape = group.addShape('path', {
        attrs: {
          stroke: '#AAB7C4',
          path: path
        },
        name: 'smooth-path-shape'
      });
      return shape;
    }
  });
  var idx = 'container_tree';
  var container = document.getElementById(idx);
  var width = container.scrollWidth;
  var height = container.scrollHeight || 500;
  var tooltip = new G6__default["default"].Tooltip({
    offsetX: 10,
    offsetY: 20,
    getContent: function getContent(e) {
      var outDiv = document.createElement('div');
      outDiv.style.width = 'auto';
      outDiv.style.height = 'auto';
      outDiv.style.minHeight = '20px';
      outDiv.innerHTML = "\n      <p> ".concat(e.item.getModel().tooltip || e.item.getModel().label, "</p>");
      return outDiv;
    },
    itemTypes: ['node']
  });
  var graph = new G6__default["default"].TreeGraph({
    container: idx,
    width: width,
    height: height,
    modes: {
      default: [{
        type: 'collapse-expand',
        trigger: 'click'
      }, 'drag-canvas', 'zoom-canvas']
    },
    plugins: [tooltip],
    defaultNode: {
      type: 'treeNode',
      anchorPoints: [[0, 0.5], [1, 0.5]]
    },
    defaultEdge: {
      type: "cubic-horizontal"
    },
    layout: {
      type: 'compactBox',
      direction: 'LR',
      getId: function getId(d) {
        return d.id;
      },
      getHeight: function getHeight() {
        return 16;
      },
      getWidth: function getWidth(d) {
        var labelWidth = G6__default["default"].Util.getTextSize(d.label, BaseConfig.nameFontSize)[0];
        var width = BaseConfig.itemPadding + BaseConfig.nameMarginLeft + labelWidth + BaseConfig.rootPadding + BaseConfig.childCountWidth;
        return width;
      },
      getVGap: function getVGap() {
        return 15;
      },
      getHGap: function getHGap() {
        return 30;
      }
    }
  });
  graph.data(data);
  graph.render();
  graph.fitView();
  if (typeof window !== 'undefined') window.onresize = function () {
    if (!graph || graph.get('destroyed')) return;
    if (!container || !container.scrollWidth || !container.scrollHeight) return;
    graph.changeSize(container.scrollWidth, container.scrollHeight);
  };

}));
