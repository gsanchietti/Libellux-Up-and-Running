"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[489],{5173:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-05c87ea8",path:"/wireguard/",title:"WireGuard Secure VPN Tunnel",lang:"en-US",frontmatter:{lang:"en-US",title:"WireGuard Secure VPN Tunnel",description:"WireGuard is an extremely simple yet fast and modern VPN that utilizes state-of-the-art cryptography."},excerpt:"",headers:[{level:2,title:"Configuration files",slug:"configuration-files",children:[]},{level:2,title:"Prerequisites",slug:"prerequisites",children:[]},{level:2,title:"Installation",slug:"installation",children:[]},{level:2,title:"Master server",slug:"master-server",children:[]},{level:2,title:"Client servers",slug:"client-servers",children:[]},{level:2,title:"Firewall settings",slug:"firewall-settings",children:[]},{level:2,title:"Troubleshooting",slug:"troubleshooting",children:[]},{level:2,title:"Recommended services",slug:"recommended-services",children:[{level:3,title:"Mullvad VPN",slug:"mullvad-vpn",children:[]}]}],filePathRelative:"wireguard/README.md",git:{updatedTime:163379062e4,contributors:[{name:"Libellux",email:"fredrik@libellux.com",commits:19}]}}},4714:(e,n,s)=>{s.r(n),s.d(n,{default:()=>Re});var a=s(6252);const t={id:"wireguard-secure-vpn-tunnel",tabindex:"-1"},l=(0,a._)("a",{class:"header-anchor",href:"#wireguard-secure-vpn-tunnel","aria-hidden":"true"},"#",-1),r=(0,a.Uk)(" WireGuard Secure VPN Tunnel "),o=(0,a._)("p",null,"WireGuard is an extremely simple yet fast and modern VPN that utilizes state-of-the-art cryptography. WireGuard is designed as a general purpose VPN for running on embedded interfaces and super computers alike, fit for many different circumstances. Initially released for the Linux kernel, it is now cross-platform (Windows, macOS, BSD, iOS, Android) and widely deployable.",-1),i={href:"https://www.wireguard.com/",target:"_blank",rel:"noopener noreferrer"},c=(0,a.Uk)("WireGuard website"),u=(0,a.Uk)(),p={href:"https://www.wireguard.com/repositories/",target:"_blank",rel:"noopener noreferrer"},d=(0,a.Uk)("Git"),k=(0,a.Uk)(),b={href:"https://www.wireguard.com/quickstart/",target:"_blank",rel:"noopener noreferrer"},h=(0,a.Uk)("Quick start guide"),g=(0,a._)("p",null,"Setup and configuration have been tested on following OS with version:",-1),_=(0,a._)("ul",null,[(0,a._)("li",null,"Ubuntu- 18.04, 20.04 (Focal Fossa), Rocky 8.4 (Green Obsidian)"),(0,a._)("li",null,"WireGuard- 1.0.2~")],-1),m={href:"https://ko-fi.com/B0B31BJU3",target:"_blank",rel:"noopener noreferrer"},f=(0,a._)("img",{src:"https://www.ko-fi.com/img/githubbutton_sm.svg",alt:"ko-fi"},null,-1),v=(0,a._)("h2",{id:"configuration-files",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#configuration-files","aria-hidden":"true"},"#"),(0,a.Uk)(" Configuration files")],-1),U={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/wireguard/config/wg0.conf_server",target:"_blank",rel:"noopener noreferrer"},y=(0,a.Uk)("wg0.conf"),w=(0,a.Uk)(" (server)"),x={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/wireguard/config/wg0.conf_client",target:"_blank",rel:"noopener noreferrer"},W=(0,a.Uk)("wg0.conf"),P=(0,a.Uk)(" (client)"),G=(0,a.uE)('<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2><ul><li><code>epel-release</code> (Rocky)</li><li><code>elrepo-release</code> (Rocky)</li><li><code>net-tools</code> (optional)</li></ul><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>In this example we will be configuring WireGuard on our servers to communicate securely over an encrypted virtual private network (VPN). This approach can be useful to secure communication in both cloud environments or any non-trusted network. We will set up one so called master server (<code>192.168.8.1</code>) along with two client servers (<code>192.168.8.2</code>, <code>192.168.8.3</code>). The public subnet (endpoint) is <code>192.168.0.0/24</code>.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>WireGuard is now included in the Linux kernel since the 5.6 release.</p></div><h2 id="master-server" tabindex="-1"><a class="header-anchor" href="#master-server" aria-hidden="true">#</a> Master server</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>WireGuard are not available on the default <strong>Rocky 8.4</strong> repositories. To install them EPEL repositories are required.</p></div><div class="language-bash ext-sh"><pre class="language-bash"><code>server@rocky:~$ <span class="token function">sudo</span> yum -y <span class="token function">install</span> epel-release <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>\n<span class="token function">sudo</span> yum -y <span class="token function">install</span> elrepo-release\n</code></pre></div><p>Next proceed to install WireGuard on <strong>Ubuntu 20.04</strong> (Focal Fossa) or <strong>Rocky 8.4</strong> (Green Obsidian).</p>',9),N=(0,a._)("div",{class:"language-bash ext-sh"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a.Uk)("server@ubuntu:~$ "),(0,a._)("span",{class:"token function"},"sudo"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"apt-get"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"install"),(0,a.Uk)(" wireguard\n")])])],-1),R=(0,a._)("div",{class:"language-bash ext-sh"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a.Uk)("server@rocky:~$ "),(0,a._)("span",{class:"token function"},"sudo"),(0,a.Uk)(" yum -y "),(0,a._)("span",{class:"token function"},"install"),(0,a.Uk)(" kmod-wireguard wireguard-tools\n")])])],-1),I=(0,a._)("p",null,"Generate a private and public key as root user for the WireGuard server.",-1),$=(0,a._)("div",{class:"language-bash ext-sh"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a.Uk)("server@ubuntu:~$ "),(0,a._)("span",{class:"token function"},"sudo"),(0,a.Uk)(" -i\nroot@ubuntu:~$ "),(0,a._)("span",{class:"token builtin class-name"},"cd"),(0,a.Uk)(" /etc/wireguard/ "),(0,a._)("span",{class:"token operator"},"&&"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"\\"),(0,a.Uk)("\nwg genkey "),(0,a._)("span",{class:"token operator"},"|"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"tee"),(0,a.Uk)(" private.key "),(0,a._)("span",{class:"token operator"},"|"),(0,a.Uk)(" wg pubkey "),(0,a._)("span",{class:"token operator"},">"),(0,a.Uk)(" public.key "),(0,a._)("span",{class:"token operator"},"&&"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"\\"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token function"},"chmod"),(0,a.Uk)(" 077 private.key public.key\n")])]),(0,a._)("div",{class:"highlight-lines"},[(0,a._)("div",{class:"highlight-line"}," "),(0,a._)("br"),(0,a._)("br"),(0,a._)("br")])],-1),O=(0,a._)("div",{class:"language-bash ext-sh"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a.Uk)("server@rocky:~$ "),(0,a._)("span",{class:"token function"},"sudo"),(0,a.Uk)(" -i\nroot@rocky:~$ "),(0,a._)("span",{class:"token builtin class-name"},"cd"),(0,a.Uk)(" /etc/wireguard/ "),(0,a._)("span",{class:"token operator"},"&&"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"\\"),(0,a.Uk)("\nwg genkey "),(0,a._)("span",{class:"token operator"},"|"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"tee"),(0,a.Uk)(" private.key "),(0,a._)("span",{class:"token operator"},"|"),(0,a.Uk)(" wg pubkey "),(0,a._)("span",{class:"token operator"},">"),(0,a.Uk)(" public.key "),(0,a._)("span",{class:"token operator"},"&&"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"\\"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token function"},"chmod"),(0,a.Uk)(" 077 private.key public.key\n")])]),(0,a._)("div",{class:"highlight-lines"},[(0,a._)("div",{class:"highlight-line"}," "),(0,a._)("br"),(0,a._)("br"),(0,a._)("br")])],-1),q=(0,a._)("p",null,"Copy the private key and create the WireGuard configuration file (wg0.conf) as root.",-1),T=(0,a._)("div",{class:"language-bash ext-sh"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a.Uk)("root@ubuntu:~$ "),(0,a._)("span",{class:"token function"},"cat"),(0,a.Uk)(" private.key\n"),(0,a._)("span",{class:"token assign-left variable"},"INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ"),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)("\nroot@ubuntu:~$ "),(0,a._)("span",{class:"token function"},"nano"),(0,a.Uk)(" wg0.conf\n")])]),(0,a._)("div",{class:"highlight-lines"},[(0,a._)("br"),(0,a._)("div",{class:"highlight-line"}," "),(0,a._)("br")])],-1),K=(0,a._)("div",{class:"language-bash ext-sh"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a.Uk)("root@rocky:~$ "),(0,a._)("span",{class:"token function"},"cat"),(0,a.Uk)(" private.key\n"),(0,a._)("span",{class:"token assign-left variable"},"INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ"),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)("\nroot@rocky:~$ "),(0,a._)("span",{class:"token function"},"nano"),(0,a.Uk)(" wg0.conf\n")])]),(0,a._)("div",{class:"highlight-lines"},[(0,a._)("br"),(0,a._)("div",{class:"highlight-line"}," "),(0,a._)("br")])],-1),S=(0,a.uE)('<p>In the configuration file proceed and define the subnet, port and private key for the VPN network.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>Interface<span class="token punctuation">]</span>\nAddress <span class="token operator">=</span> <span class="token number">10.0</span>.0.1/24\nListenPort <span class="token operator">=</span> <span class="token number">51820</span>\nPrivateKey <span class="token operator">=</span> <span class="token assign-left variable">INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ</span><span class="token operator">=</span>\n</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Proceed to enable WireGuard on boot and start it.</p>',3),V=(0,a._)("div",{class:"language-bash ext-sh"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a.Uk)("root@ubuntu:~$ "),(0,a._)("span",{class:"token builtin class-name"},"exit"),(0,a.Uk)("\nserver@ubuntu:~$ "),(0,a._)("span",{class:"token function"},"sudo"),(0,a.Uk)(" systemctl "),(0,a._)("span",{class:"token builtin class-name"},"enable"),(0,a.Uk)(" wg-quick@wg0 "),(0,a._)("span",{class:"token operator"},"&&"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"\\"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token function"},"sudo"),(0,a.Uk)(" systemctl start wg-quick@wg0\n")])])],-1),B=(0,a._)("div",{class:"language-bash ext-sh"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a.Uk)("root@rocky:~$ "),(0,a._)("span",{class:"token builtin class-name"},"exit"),(0,a.Uk)("\nserver@rocky:~$ "),(0,a._)("span",{class:"token function"},"sudo"),(0,a.Uk)(" systemctl "),(0,a._)("span",{class:"token builtin class-name"},"enable"),(0,a.Uk)(" wg-quick@wg0 "),(0,a._)("span",{class:"token operator"},"&&"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"\\"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token function"},"sudo"),(0,a.Uk)(" systemctl start wg-quick@wg0\n")])])],-1),J=(0,a._)("p",null,[(0,a.Uk)("Next check if the interface is up using "),(0,a._)("code",null,"ifconfig"),(0,a.Uk)(" (requires "),(0,a._)("code",null,"net-tools"),(0,a.Uk)(") or "),(0,a._)("code",null,"ip"),(0,a.Uk)(".")],-1),M=(0,a._)("div",{class:"language-bash ext-sh"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a.Uk)("server@ubuntu:~$ "),(0,a._)("span",{class:"token function"},"ifconfig"),(0,a.Uk)(" -a wg0\nwg0: "),(0,a._)("span",{class:"token assign-left variable"},"flags"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token number"},"20"),(0,a._)("span",{class:"token operator"},[(0,a._)("span",{class:"token file-descriptor important"},"9"),(0,a.Uk)("<")]),(0,a.Uk)("UP,POINTOPOINT,RUNNING,NOARP"),(0,a._)("span",{class:"token operator"},">"),(0,a.Uk)("  mtu "),(0,a._)("span",{class:"token number"},"1420"),(0,a.Uk)("\n        inet "),(0,a._)("span",{class:"token number"},"10.0"),(0,a.Uk)(".0.1  netmask "),(0,a._)("span",{class:"token number"},"255.255"),(0,a.Uk)(".255.0  destination "),(0,a._)("span",{class:"token number"},"10.0"),(0,a.Uk)(".0.1\n        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen "),(0,a._)("span",{class:"token number"},"1000"),(0,a.Uk)("  "),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("UNSPEC"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n        RX packets "),(0,a._)("span",{class:"token number"},"0"),(0,a.Uk)("  bytes "),(0,a._)("span",{class:"token number"},"0"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token number"},"0.0"),(0,a.Uk)(" B"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n        RX errors "),(0,a._)("span",{class:"token number"},"0"),(0,a.Uk)("  dropped "),(0,a._)("span",{class:"token number"},"0"),(0,a.Uk)("  overruns "),(0,a._)("span",{class:"token number"},"0"),(0,a.Uk)("  frame "),(0,a._)("span",{class:"token number"},"0"),(0,a.Uk)("\n        TX packets "),(0,a._)("span",{class:"token number"},"0"),(0,a.Uk)("  bytes "),(0,a._)("span",{class:"token number"},"0"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token number"},"0.0"),(0,a.Uk)(" B"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n        TX errors "),(0,a._)("span",{class:"token number"},"0"),(0,a.Uk)("  dropped "),(0,a._)("span",{class:"token number"},"0"),(0,a.Uk)(" overruns "),(0,a._)("span",{class:"token number"},"0"),(0,a.Uk)("  carrier "),(0,a._)("span",{class:"token number"},"0"),(0,a.Uk)("  collisions "),(0,a._)("span",{class:"token number"},"0"),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"highlight-lines"},[(0,a._)("div",{class:"highlight-line"}," "),(0,a._)("br"),(0,a._)("br"),(0,a._)("br"),(0,a._)("br"),(0,a._)("br"),(0,a._)("br"),(0,a._)("br")])],-1),C=(0,a._)("div",{class:"language-bash ext-sh"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a.Uk)("server@rocky:~$ "),(0,a._)("span",{class:"token function"},"ifconfig"),(0,a.Uk)(" -a wg0\nwg0: "),(0,a._)("span",{class:"token assign-left variable"},"flags"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token number"},"20"),(0,a._)("span",{class:"token operator"},[(0,a._)("span",{class:"token file-descriptor important"},"9"),(0,a.Uk)("<")]),(0,a.Uk)("UP,POINTOPOINT,RUNNING,NOARP"),(0,a._)("span",{class:"token operator"},">"),(0,a.Uk)("  mtu "),(0,a._)("span",{class:"token number"},"1420"),(0,a.Uk)("\n        inet "),(0,a._)("span",{class:"token number"},"10.0"),(0,a.Uk)(".0.1  netmask "),(0,a._)("span",{class:"token number"},"255.255"),(0,a.Uk)(".255.0  destination "),(0,a._)("span",{class:"token number"},"10.0"),(0,a.Uk)(".0.1\n        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen "),(0,a._)("span",{class:"token number"},"1000"),(0,a.Uk)("  "),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("UNSPEC"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n        RX packets "),(0,a._)("span",{class:"token number"},"0"),(0,a.Uk)("  bytes "),(0,a._)("span",{class:"token number"},"0"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token number"},"0.0"),(0,a.Uk)(" B"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n        RX errors "),(0,a._)("span",{class:"token number"},"0"),(0,a.Uk)("  dropped "),(0,a._)("span",{class:"token number"},"0"),(0,a.Uk)("  overruns "),(0,a._)("span",{class:"token number"},"0"),(0,a.Uk)("  frame "),(0,a._)("span",{class:"token number"},"0"),(0,a.Uk)("\n        TX packets "),(0,a._)("span",{class:"token number"},"0"),(0,a.Uk)("  bytes "),(0,a._)("span",{class:"token number"},"0"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token number"},"0.0"),(0,a.Uk)(" B"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n        TX errors "),(0,a._)("span",{class:"token number"},"0"),(0,a.Uk)("  dropped "),(0,a._)("span",{class:"token number"},"0"),(0,a.Uk)(" overruns "),(0,a._)("span",{class:"token number"},"0"),(0,a.Uk)("  carrier "),(0,a._)("span",{class:"token number"},"0"),(0,a.Uk)("  collisions "),(0,a._)("span",{class:"token number"},"0"),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"highlight-lines"},[(0,a._)("div",{class:"highlight-line"}," "),(0,a._)("br"),(0,a._)("br"),(0,a._)("br"),(0,a._)("br"),(0,a._)("br"),(0,a._)("br"),(0,a._)("br")])],-1),D=(0,a._)("h2",{id:"client-servers",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#client-servers","aria-hidden":"true"},"#"),(0,a.Uk)(" Client servers")],-1),F=(0,a._)("p",null,"Install WireGuard at the first client machine.",-1),L=(0,a._)("div",{class:"language-bash ext-sh"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a.Uk)("client@ubuntu:~$ "),(0,a._)("span",{class:"token function"},"sudo"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"apt-get"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"install"),(0,a.Uk)(" wireguard\n")])])],-1),A=(0,a._)("div",{class:"language-bash ext-sh"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,"server@rocky:~$\n")])],-1),E=(0,a._)("p",null,"As root generate the private and public key.",-1),Q=(0,a._)("div",{class:"language-bash ext-sh"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a.Uk)("client@ubuntu:~$ "),(0,a._)("span",{class:"token function"},"sudo"),(0,a.Uk)(" -i\nroot@ubuntu:~$ "),(0,a._)("span",{class:"token builtin class-name"},"cd"),(0,a.Uk)(" /etc/wireguard/ "),(0,a._)("span",{class:"token operator"},"&&"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"\\"),(0,a.Uk)("\nwg genkey "),(0,a._)("span",{class:"token operator"},"|"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"tee"),(0,a.Uk)(" private.key "),(0,a._)("span",{class:"token operator"},"|"),(0,a.Uk)(" wg pubkey "),(0,a._)("span",{class:"token operator"},">"),(0,a.Uk)(" public.key "),(0,a._)("span",{class:"token operator"},"&&"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"\\"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token function"},"chmod"),(0,a.Uk)(" 077 private.key public.key\n")])])],-1),X=(0,a._)("div",{class:"language-bash ext-sh"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,"server@rocky:~$\n")])],-1),j=(0,a._)("p",null,"Copy the private key and create the WireGuard configuration file.",-1),z=(0,a._)("div",{class:"language-bash ext-sh"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a.Uk)("root@ubuntu:~$ "),(0,a._)("span",{class:"token function"},"cat"),(0,a.Uk)(" private.key\n"),(0,a._)("span",{class:"token assign-left variable"},"INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ"),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)("\nroot@ubuntu:~$ "),(0,a._)("span",{class:"token function"},"nano"),(0,a.Uk)(" wg0.conf\n")])]),(0,a._)("div",{class:"highlight-lines"},[(0,a._)("br"),(0,a._)("div",{class:"highlight-line"}," "),(0,a._)("br")])],-1),H=(0,a._)("div",{class:"language-bash ext-sh"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,"server@rocky:~$\n")])],-1),Z=(0,a.uE)('<p>In the configuration file proceed and define the IP address and private key for the VPN client. In the peer section define the public key (<code>cat public.key</code>) from the master server along with the subnet and public endpoint.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>Interface<span class="token punctuation">]</span>\nAddress <span class="token operator">=</span> <span class="token number">192.168</span>.8.2/24\nPrivateKey <span class="token operator">=</span> <span class="token assign-left variable">INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ</span><span class="token operator">=</span>\n\n<span class="token punctuation">[</span>Peer<span class="token punctuation">]</span>\nPublicKey <span class="token operator">=</span> <span class="token assign-left variable">R688QTGKkMCGpJpwrHJ9yXBY5CxriqLGQLy6Agse2DE</span><span class="token operator">=</span>\nAllowedIPs <span class="token operator">=</span> <span class="token number">192.168</span>.8.0/24\nEndpoint <span class="token operator">=</span> <span class="token number">192.168</span>.0.1:51820\nPersistentKeepalive <span class="token operator">=</span> <span class="token number">15</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Next copy the public key from the client machine and update the master server&#39;s WireGuard configuration (<code>wg0.conf</code>).</p>',3),Y=(0,a._)("div",{class:"language-bash ext-sh"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a.Uk)("root@ubuntu:~$ "),(0,a._)("span",{class:"token function"},"cat"),(0,a.Uk)(" public.key\nJ3+KjJXJDKN9UVLpdlo3UBrBVU1JOdahGQYqpRxbe00"),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"highlight-lines"},[(0,a._)("br"),(0,a._)("div",{class:"highlight-line"}," ")])],-1),ee=(0,a._)("div",{class:"language-bash ext-sh"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,"server@rocky:~$\n")])],-1),ne=(0,a.uE)('<p>In the master server&#39;s configuration file at the public key of the client machine under its peer section.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>Interface<span class="token punctuation">]</span>\nAddress <span class="token operator">=</span> <span class="token number">192.168</span>.8.1/24\nListenPort <span class="token operator">=</span> <span class="token number">51820</span>\nPrivateKey <span class="token operator">=</span> <span class="token assign-left variable">INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ</span><span class="token operator">=</span>\n\n<span class="token punctuation">[</span>Peer<span class="token punctuation">]</span>\nPublicKey <span class="token operator">=</span> J3+KjJXJDKN9UVLpdlo3UBrBVU1JOdahGQYqpRxbe00<span class="token operator">=</span>\nAllowedIPs <span class="token operator">=</span> <span class="token number">192.168</span>.8.2/32\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line"> </div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Proceed to enable WireGuard on boot and start it.</p>',3),se=(0,a._)("div",{class:"language-bash ext-sh"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a.Uk)("root@ubuntu:~$ "),(0,a._)("span",{class:"token builtin class-name"},"exit"),(0,a.Uk)("\nclient@ubuntu:~$ "),(0,a._)("span",{class:"token function"},"sudo"),(0,a.Uk)(" systemctl "),(0,a._)("span",{class:"token builtin class-name"},"enable"),(0,a.Uk)(" wg-quick@wg0 "),(0,a._)("span",{class:"token operator"},"&&"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"\\"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token function"},"sudo"),(0,a.Uk)(" systemctl start wg-quick@wg0\n")])])],-1),ae=(0,a._)("div",{class:"language-bash ext-sh"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,"server@rocky:~$\n")])],-1),te=(0,a.uE)('<p>Before we add the second client machine you can quickly test if the set up is working by sending a ping (ICMP) request between the client and server and vice versa. First make sure that you did open the required ports in your firewall (see <a href="#firewall-settings">Firewall settings</a>).</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>client@ubuntu:~$ ping 192.168.8.1\nPING 192.168.8.1 (192.168.8.1) 56(84) bytes of data.\n64 bytes from 192.168.8.1: icmp_seq=1 ttl=64 time=0.646 ms\nserver@ubuntu:~$ ping 192.168.8.2\nPING 192.168.8.2 (192.168.8.2) 56(84) bytes of data.\n64 bytes from 192.168.8.2: icmp_seq=1 ttl=64 time=0.424 ms\n</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Once you&#39;ve confirmed that the connection between the master server and client works, proceed to set up your second client using the same approach as for the first client. Make sure to add the new client (peer) under the master server&#39;s WireGuard configuration.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>Interface<span class="token punctuation">]</span>\nAddress <span class="token operator">=</span> <span class="token number">192.168</span>.8.1/24\nListenPort <span class="token operator">=</span> <span class="token number">51820</span>\nPrivateKey <span class="token operator">=</span> <span class="token assign-left variable">INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ</span><span class="token operator">=</span>\n\n<span class="token punctuation">[</span>Peer<span class="token punctuation">]</span>\nPublicKey <span class="token operator">=</span> J3+KjJXJDKN9UVLpdlo3UBrBVU1JOdahGQYqpRxbe00<span class="token operator">=</span>\nAllowedIPs <span class="token operator">=</span> <span class="token number">192.168</span>.8.2/32\n\n<span class="token punctuation">[</span>Peer<span class="token punctuation">]</span>\nPublicKey <span class="token operator">=</span> l2+KjJXJDKN8UbLadlz3U4rBxU1JOdahXFfqpRi0QrP<span class="token operator">=</span>\nAllowedIPs <span class="token operator">=</span> <span class="token number">192.168</span>.8.3/32\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="firewall-settings" tabindex="-1"><a class="header-anchor" href="#firewall-settings" aria-hidden="true">#</a> Firewall settings</h2>',5),le=(0,a.Uk)("The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW "),re={href:"https://help.ubuntu.com/community/UFW",target:"_blank",rel:"noopener noreferrer"},oe=(0,a.Uk)("here"),ie=(0,a.Uk)("."),ce=(0,a.uE)('<details class="custom-container details"><summary>UFW Settings</summary><div class="language-console ext-console line-numbers-mode"><pre class="language-console"><code>server@ubuntu:~$ sudo ufw default deny incoming\nserver@ubuntu:~$ sudo ufw default allow outgoing\nserver@ubuntu:~$ sudo ufw allow 22\nserver@ubuntu:~$ sudo ufw enable\nCommand may disrupt existing ssh connections. Proceed with operation (y|n)? y\nFirewall is active and enabled on system startup\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details><div class="language-console ext-console line-numbers-mode"><pre class="language-console"><code>server@ubuntu:~$ sudo ufw allow proto udp from 192.168.8.0/32 to any port 51820 comment &quot;WireGuard&quot;\nclient@ubuntu:~§ sudo ufw allow proto udp from 192.168.8.1 to any port 51820 comment &quot;WireGuard server&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h2>',3),ue=(0,a.Uk)("In case you'll need help troubleshooting your WireGuard set up you can always ask help at the "),pe=(0,a._)("code",null,"#wireguard",-1),de=(0,a.Uk)(" IRC channel on "),ke={href:"https://webchat.freenode.net/#wireguard",target:"_blank",rel:"noopener noreferrer"},be=(0,a.Uk)("Freenode"),he=(0,a.Uk)("."),ge=(0,a._)("h2",{id:"recommended-services",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#recommended-services","aria-hidden":"true"},"#"),(0,a.Uk)(" Recommended services")],-1),_e={id:"mullvad-vpn",tabindex:"-1"},me=(0,a._)("a",{class:"header-anchor",href:"#mullvad-vpn","aria-hidden":"true"},"#",-1),fe=(0,a.Uk)(" Mullvad VPN "),ve=(0,a._)("p",null,"Mullvad is a VPN service that helps keep your online activity, identity, and location private. They keep no activity logs, do not ask for personal information, and even encourage anonymous payments via cash or one of the cryptocurrencies they accept. Your IP address is replaced by one of theirs, ensuring that your device's activity and location are not linked to you.",-1),Ue={href:"https://mullvad.net/en/",target:"_blank",rel:"noopener noreferrer"},ye=(0,a.Uk)("Mullvad VPN"),we=(0,a.Uk)("What we like about "),xe={href:"https://mullvad.net/en/",target:"_blank",rel:"noopener noreferrer"},We=(0,a.Uk)("Mullvad VPN"),Pe=(0,a.Uk)(" is how easy it is to select which VPN protocol you prefer to use e.g. WireGuard and set custom DNS servers along with a very resonable price of only 5 EUR per month. It's also a great product and probably cheaper and faster than an internet provider where you'll still have to pay for your data."),Ge=["src"],Ne={},Re=(0,s(3744).Z)(Ne,[["render",function(e,n){const s=(0,a.up)("Badge"),Ne=(0,a.up)("OutboundLink"),Re=(0,a.up)("CodeGroupItem"),Ie=(0,a.up)("CodeGroup");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("h1",t,[l,r,(0,a.Wm)(s,{text:"Rev 2",type:"tip"})]),o,(0,a._)("p",null,[(0,a._)("a",i,[c,(0,a.Wm)(Ne)]),u,(0,a._)("a",p,[d,(0,a.Wm)(Ne)]),k,(0,a._)("a",b,[h,(0,a.Wm)(Ne)])]),g,_,(0,a._)("p",null,[(0,a._)("a",m,[f,(0,a.Wm)(Ne)])]),v,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",U,[y,(0,a.Wm)(Ne)]),w]),(0,a._)("li",null,[(0,a._)("a",x,[W,(0,a.Wm)(Ne)]),P])]),G,(0,a.Wm)(Ie,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Re,{title:"Ubuntu"},{default:(0,a.w5)((()=>[N])),_:1}),(0,a.Wm)(Re,{title:"Rocky"},{default:(0,a.w5)((()=>[R])),_:1})])),_:1}),I,(0,a.Wm)(Ie,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Re,{title:"Ubuntu"},{default:(0,a.w5)((()=>[$])),_:1}),(0,a.Wm)(Re,{title:"Rocky"},{default:(0,a.w5)((()=>[O])),_:1})])),_:1}),q,(0,a.Wm)(Ie,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Re,{title:"Ubuntu"},{default:(0,a.w5)((()=>[T])),_:1}),(0,a.Wm)(Re,{title:"Rocky"},{default:(0,a.w5)((()=>[K])),_:1})])),_:1}),S,(0,a.Wm)(Ie,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Re,{title:"Ubuntu"},{default:(0,a.w5)((()=>[V])),_:1}),(0,a.Wm)(Re,{title:"Rocky"},{default:(0,a.w5)((()=>[B])),_:1})])),_:1}),J,(0,a.Wm)(Ie,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Re,{title:"Ubuntu"},{default:(0,a.w5)((()=>[M])),_:1}),(0,a.Wm)(Re,{title:"Rocky"},{default:(0,a.w5)((()=>[C])),_:1})])),_:1}),D,F,(0,a.Wm)(Ie,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Re,{title:"Ubuntu"},{default:(0,a.w5)((()=>[L])),_:1}),(0,a.Wm)(Re,{title:"Rocky"},{default:(0,a.w5)((()=>[A])),_:1})])),_:1}),E,(0,a.Wm)(Ie,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Re,{title:"Ubuntu"},{default:(0,a.w5)((()=>[Q])),_:1}),(0,a.Wm)(Re,{title:"Rocky"},{default:(0,a.w5)((()=>[X])),_:1})])),_:1}),j,(0,a.Wm)(Ie,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Re,{title:"Ubuntu"},{default:(0,a.w5)((()=>[z])),_:1}),(0,a.Wm)(Re,{title:"Rocky"},{default:(0,a.w5)((()=>[H])),_:1})])),_:1}),Z,(0,a.Wm)(Ie,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Re,{title:"Ubuntu"},{default:(0,a.w5)((()=>[Y])),_:1}),(0,a.Wm)(Re,{title:"Rocky"},{default:(0,a.w5)((()=>[ee])),_:1})])),_:1}),ne,(0,a.Wm)(Ie,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Re,{title:"Ubuntu"},{default:(0,a.w5)((()=>[se])),_:1}),(0,a.Wm)(Re,{title:"Rocky"},{default:(0,a.w5)((()=>[ae])),_:1})])),_:1}),te,(0,a._)("p",null,[le,(0,a._)("a",re,[oe,(0,a.Wm)(Ne)]),ie]),ce,(0,a._)("p",null,[ue,pe,de,(0,a._)("a",ke,[be,(0,a.Wm)(Ne)]),he]),ge,(0,a._)("h3",_e,[me,fe,(0,a.Wm)(s,{text:"non-affiliate",type:"tip"})]),ve,(0,a._)("p",null,[(0,a._)("a",Ue,[ye,(0,a.Wm)(Ne)])]),(0,a._)("p",null,[we,(0,a._)("a",xe,[We,(0,a.Wm)(Ne)]),Pe]),(0,a._)("img",{class:"zoom-custom-imgs",src:"/img/wireguard/mullvad.png",alt:"mullvad"},null,8,Ge)],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{const s=e.__vccOpts||e;for(const[e,a]of n)s[e]=a;return s}}}]);