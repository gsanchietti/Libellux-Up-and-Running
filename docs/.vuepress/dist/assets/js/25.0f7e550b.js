(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{405:function(e,t,r){"use strict";r.r(t);var a=r(11),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"wireguard-secure-vpn-tunnel"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wireguard-secure-vpn-tunnel"}},[e._v("#")]),e._v(" WireGuard Secure VPN Tunnel")]),e._v(" "),r("TagLinks"),e._v(" "),r("p",[e._v("WireGuard is an extremely simple yet fast and modern VPN that utilizes state-of-the-art cryptography. WireGuard is designed as a general purpose VPN for running on embedded interfaces and super computers alike, fit for many different circumstances. Initially released for the Linux kernel, it is now cross-platform (Windows, macOS, BSD, iOS, Android) and widely deployable.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.wireguard.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WireGuard website"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://www.wireguard.com/repositories/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Setup and configuration has been tested on following OS with version:")]),e._v(" "),r("ul",[r("li",[e._v("Ubuntu- 18.04, 20.04")]),e._v(" "),r("li",[e._v("WireGuard 1.0.2~")])]),e._v(" "),r("h2",{attrs:{id:"configuration-files"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration-files"}},[e._v("#")]),e._v(" Configuration files")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/wireguard/config/wg0.conf_server",target:"_blank",rel:"noopener noreferrer"}},[e._v("wg0.conf"),r("OutboundLink")],1),e._v(" (server)")])]),e._v(" "),r("h2",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("h2",{attrs:{id:"installation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),r("p",[e._v("In this example we will be configuring WireGuard on our servers to communicate securely over an encrypted virtual private network (VPN). This approach can be useful to secure communication in both cloud environments or any non-trusted network. We will set up one so called master server ("),r("code",[e._v("192.168.8.1/24")]),e._v(") along with two client servers ("),r("code",[e._v("192.168.8.2/24")]),e._v(", "),r("code",[e._v("192.168.8.3/24")]),e._v(").")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),r("p",[e._v("WireGuard is now included in the Linux kernel since the 5.6 release.")])]),e._v(" "),r("h2",{attrs:{id:"master-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#master-server"}},[e._v("#")]),e._v(" Master server")]),e._v(" "),r("p",[e._v("First install WireGuard.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("server@ubuntu:~$ sudo apt-get install wireguard\n")])])]),r("p",[e._v("Next generate a private and public key for the WireGuard server.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("div",{staticClass:"highlight-lines"},[r("br"),r("br"),r("div",{staticClass:"highlighted"},[e._v(" ")]),r("br"),r("br")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("server@ubuntu:~$ sudo -i\nroot@ubuntu:~$ cd /etc/wireguard/\nroot@ubuntu:~$ wg genkey | tee private.key | wg pubkey > public.key\nroot@ubuntu:~$ chmod 077 private.key public.key\n")])])]),r("p",[e._v("Copy the private key and create the WireGuard configuration file (wg0.conf).")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("div",{staticClass:"highlight-lines"},[r("br"),r("div",{staticClass:"highlighted"},[e._v(" ")]),r("br"),r("br")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("root@ubuntu:~$ cat private.key\nINroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ=\nroot@ubuntu:~$ nano wg0.conf\n")])])]),r("p",[e._v("In the configuration file proceed and define the subnet, port and private key for the VPN network.")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("div",{staticClass:"highlight-lines"},[r("br"),r("div",{staticClass:"highlighted"},[e._v(" ")]),r("div",{staticClass:"highlighted"},[e._v(" ")]),r("div",{staticClass:"highlighted"},[e._v(" ")]),r("br")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Interface"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\nAddress "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".8.1/24\nListenPort "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("51820")]),e._v("\nPrivateKey "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n")])])]),r("p",[e._v("Proceed to enable WireGuard on boot and start it.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("root@ubuntu:~$ exit\nserver@ubuntu:~$ sudo systemctl enable wg-quick@wg0\nserver@ubuntu:~$ sudo systemctl start wg-quick@wg0\n")])])]),r("p",[e._v("Next check if the interface is up using "),r("code",[e._v("ifconfig")]),e._v(" (requires net-tools) or "),r("code",[e._v("ip")]),e._v(".")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("div",{staticClass:"highlight-lines"},[r("div",{staticClass:"highlighted"},[e._v(" ")]),r("div",{staticClass:"highlighted"},[e._v(" ")]),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("div",{staticClass:"highlighted"},[e._v(" ")]),r("div",{staticClass:"highlighted"},[e._v(" ")]),r("br"),r("br"),r("br"),r("br")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("server@ubuntu:~$ sudo ifconfig -a wg0\nwg0: flags=209<UP,POINTOPOINT,RUNNING,NOARP>  mtu 1420\n        inet 192.168.8.1  netmask 255.255.255.0  destination 192.168.8.1\n        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 1000  (UNSPEC)\n        RX packets 0  bytes 0 (0.0 B)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 0  bytes 0 (0.0 B)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\nserver@ubuntu:~$ sudo ip a show wg0\n3: wg0: <POINTOPOINT,NOARP,UP,LOWER_UP> mtu 1420 qdisc noqueue state UNKNOWN group default qlen 1000\n    link/none\n    inet 192.168.8.1/24 scope global wg0\n       valid_lft forever preferred_lft forever\n")])])]),r("h2",{attrs:{id:"client-servers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#client-servers"}},[e._v("#")]),e._v(" Client servers")]),e._v(" "),r("h2",{attrs:{id:"firewall-settings"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#firewall-settings"}},[e._v("#")]),e._v(" Firewall settings")]),e._v(" "),r("p",[e._v("The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW "),r("a",{attrs:{href:"https://help.ubuntu.com/community/UFW",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("UFW Settings")]),e._v(" "),r("div",{staticClass:"language-console extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("server@ubuntu:~$ sudo ufw default deny incoming\nserver@ubuntu:~$ sudo ufw default allow outgoing\nserver@ubuntu:~$ sudo ufw allow 22\nserver@ubuntu:~$ sudo ufw enable\nCommand may disrupt existing ssh connections. Proceed with operation (y|n)? y\nFirewall is active and enabled on system startup\n")])])])]),e._v(" "),r("div",{staticClass:"language-console extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('server@ubuntu:~$ sudo ufw allow proto udp from 192.168.8.2 to any port 51820 comment "WireGuard client 1"\nserver@ubuntu:~$ sudo ufw allow proto udp from 192.168.8.3 to any port 51820 comment "WireGuard client 2"\n')])])]),r("h2",{attrs:{id:"recommended-services"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recommended-services"}},[e._v("#")]),e._v(" Recommended services "),r("Badge",{attrs:{text:"non-sponsored",type:"default"}})],1),e._v(" "),r("h3",{attrs:{id:"mullvad-vpn"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mullvad-vpn"}},[e._v("#")]),e._v(" Mullvad VPN "),r("Badge",{attrs:{text:"non-affiliate",type:"default"}})],1),e._v(" "),r("p",[e._v("Mullvad is a VPN service that helps keep your online activity, identity, and location private. They keep no activity logs, do not ask for personal information, and even encourage anonymous payments via cash or one of the cryptocurrencies they accept. Your IP address is replaced by one of theirs, ensuring that your device's activity and location are not linked to you. What we like about "),r("a",{attrs:{href:"https://mullvad.net/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mullvad VPN"),r("OutboundLink")],1),e._v(" is how easy it is to select which VPN protocol you prefer to use e.g. WireGuard and set custom DNS servers along with a very resonable price of 5 EUR per month.")]),e._v(" "),r("img",{staticClass:"zoom-custom-imgs",attrs:{src:"/img/wireguard/mullvad.png",alt:"mullvad"}}),e._v(" "),r("p",[r("a",{attrs:{href:"https://mullvad.net/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mullvad VPN"),r("OutboundLink")],1)]),e._v(" "),r("social-share")],1)}),[],!1,null,null,null);t.default=s.exports}}]);