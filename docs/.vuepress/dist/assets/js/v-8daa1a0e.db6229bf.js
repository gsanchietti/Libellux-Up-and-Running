"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[509],{6464:(e,t,r)=>{r.r(t),r.d(t,{data:()=>n});const n={key:"v-8daa1a0e",path:"/",title:"Libellux: Up & Running",lang:"en-US",frontmatter:{lang:"en-US",title:"Libellux: Up & Running",description:"Libellux: Up & Running provides documentation on how-to install open-source software from source. The focus is Zero Trust Network to enhance the security for existing applications or install tools to detect and prevent threats."},excerpt:"",headers:[{level:2,title:"Credits",slug:"credits",children:[]},{level:2,title:"Table of contents",slug:"table-of-contents",children:[]},{level:2,title:"Feedback",slug:"feedback",children:[]},{level:2,title:"Road map",slug:"road-map",children:[]},{level:2,title:"Release notes",slug:"release-notes",children:[]}],filePathRelative:"README.md",git:{updatedTime:1634571545e3,contributors:[{name:"Libellux",email:"fredrik@libellux.com",commits:117},{name:"Fredrik Hilmersson",email:"42895973+libellux@users.noreply.github.com",commits:1}]}}},1061:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Yr});var n=r(6252);const o=(0,n._)("h1",{id:"introduction",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),(0,n.Uk)(" Introduction")],-1),l=(0,n._)("p",null,"Libellux: Up & Running provides documentation on how-to install open-source software from source. The focus is Zero Trust Network to enhance the security for existing applications or install tools to detect and prevent threats.",-1),a={href:"https://ko-fi.com/B0B31BJU3",target:"_blank",rel:"noopener noreferrer"},i=(0,n._)("img",{src:"https://www.ko-fi.com/img/githubbutton_sm.svg",alt:"ko-fi"},null,-1),s=(0,n.uE)('<p><img src="/img/icons/1500x500.svg" alt="Banner"></p><div class="custom-container warning"><p class="custom-container-title">DISCLAIMER</p><p>It is understood that this documentation, and any configurations may contain errors and are provided for education purposes only. The documentation, and any configurations are provided &quot;as is&quot; without warranty of any kind, whether express, implied, statutory, or otherwise.</p></div><h2 id="credits" tabindex="-1"><a class="header-anchor" href="#credits" aria-hidden="true">#</a> Credits</h2>',3),u=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"Role"),(0,n._)("th",null,"Names")])],-1),d=(0,n._)("td",null,"Lead Authors:",-1),c=(0,n.Uk)("Fredrik Hilmersson "),h={href:"https://github.com/libellux",target:"_blank",rel:"noopener noreferrer"},p=(0,n.Uk)("@libellux"),m=(0,n._)("td",null,"Contributors:",-1),b=(0,n.Uk)("Damir Kucic "),k={href:"https://github.com/dkucic",target:"_blank",rel:"noopener noreferrer"},g=(0,n.Uk)("@dkucic"),f=(0,n._)("td",null,"Reviewers:",-1),_=(0,n.Uk)("Scott Shinn "),U={href:"https://github.com/atomicturtle",target:"_blank",rel:"noopener noreferrer"},w=(0,n.Uk)("@atomicturtle"),v=(0,n.Uk)(", Cornelius Kölbel "),x={href:"https://github.com/cornelinux",target:"_blank",rel:"noopener noreferrer"},y=(0,n.Uk)("@cornelinux"),W=(0,n.Uk)(", Adam Hilmersson "),S={href:"https://github.com/cnsta",target:"_blank",rel:"noopener noreferrer"},R=(0,n.Uk)("@cnsta"),A=(0,n.Uk)(", Björn Ricks "),C={href:"https://github.com/bjoernricks",target:"_blank",rel:"noopener noreferrer"},N=(0,n.Uk)("@bjoernricks"),T=(0,n._)("td",null,"Supporters:",-1),P={href:"https://hyperqube.io/",target:"_blank",rel:"noopener noreferrer"},V=(0,n.Uk)("HyperQube"),M=(0,n.Uk)(", "),I={href:"https://atomisystems.com/activepresenter/",target:"_blank",rel:"noopener noreferrer"},L=(0,n.Uk)("Atomi Systems"),E=(0,n.Uk)(", "),D={href:"https://mullvad.net/en/",target:"_blank",rel:"noopener noreferrer"},G=(0,n.Uk)("Mullvad VPN"),F=(0,n.Uk)(", "),O={href:"https://www.jetbrains.com/",target:"_blank",rel:"noopener noreferrer"},H=(0,n.Uk)("JetBrains"),j=(0,n.uE)('<details class="custom-container details"><summary>Conventions</summary><table><thead><tr><th>Type</th><th>Convention</th><th>Description</th></tr></thead><tbody><tr><td>Environment</td><td>server@ubuntu</td><td>Suffix determine operating system</td></tr><tr><td>Server CLI</td><td>server@rocky</td><td>Commands executed from server command-line</td></tr><tr><td>Client CLI</td><td>client@ubuntu</td><td>Commands executed from client command-line</td></tr><tr><td>Server IP</td><td>192.168.0.1</td><td>Server IP address</td></tr><tr><td>Client IP</td><td>192.168.0.2</td><td>Client IP address</td></tr><tr><td>VPN server</td><td>192.168.8.1</td><td>WireGuard VPN server IP address</td></tr><tr><td>VPN client</td><td>192.168.8.2</td><td>WireGuard VPN client IP address</td></tr></tbody></table></details><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h4 id="part-1-zero-trust-network" tabindex="-1"><a class="header-anchor" href="#part-1-zero-trust-network" aria-hidden="true">#</a> PART 1: ZERO TRUST NETWORK</h4>',3),B=(0,n.Uk)("1.0: WireGuard Secure VPN Tunnel"),K=(0,n.Uk)(),z=(0,n.Uk)("1.1: Two-factor authentication w/ privacyIDEA and YubiKey"),Z=(0,n.Uk)(),q=(0,n._)("a",{href:""},"1.2: Universal 2nd Factor with YubiKey",-1),Y=(0,n.Uk)(),J=(0,n._)("h4",{id:"part-2-intrustion-detection-and-prevention",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#part-2-intrustion-detection-and-prevention","aria-hidden":"true"},"#"),(0,n.Uk)(" PART 2: INTRUSTION DETECTION AND PREVENTION")],-1),Q=(0,n.Uk)("2.0: OSSEC Host Intrusion Detection System"),X=(0,n.Uk)(),$=(0,n.Uk)("2.1: PSAD Intrusion Detection with Log Analysis"),ee=(0,n.Uk)(),te=(0,n.Uk)("2.2: Greenbone Vulnerability Manager"),re=(0,n.Uk)(),ne=(0,n.Uk)("2.3: Snort Network Intrusion Detection & Prevention System "),oe=(0,n.Uk)("2.4: ClamAV Antivirus Server"),le=(0,n.Uk)(),ae=(0,n._)("h4",{id:"part-3-monitoring-and-management",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#part-3-monitoring-and-management","aria-hidden":"true"},"#"),(0,n.Uk)(" PART 3: MONITORING AND MANAGEMENT")],-1),ie=(0,n.Uk)("3.0: AWX Ansible Tower "),se=(0,n.Uk)("3.1: M/Monit System Monitoring"),ue=(0,n.Uk)(),de=(0,n._)("a",{href:""},"3.2: Performance Co-Pilot Grafana",-1),ce=(0,n.Uk)(),he=(0,n.Uk)("3.3: Rsyslog Log Processing"),pe=(0,n.Uk)(),me=(0,n.Uk)("3.4: Graylog Centralized Log Management"),be=(0,n.Uk)(),ke=(0,n._)("h2",{id:"feedback",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#feedback","aria-hidden":"true"},"#"),(0,n.Uk)(" Feedback")],-1),ge={href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},fe=(0,n.Uk)("Questions"),_e=(0,n.Uk)(", "),Ue={href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},we=(0,n.Uk)("comments"),ve=(0,n.Uk)(", or "),xe={href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},ye=(0,n.Uk)("problems"),We=(0,n.Uk)(" regarding this service? Create an issue "),Se={href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},Re=(0,n.Uk)("here"),Ae=(0,n.Uk)(" or contact "),Ce=(0,n._)("a",{href:"mailto:webmaster@libellux.com"},"webmaster@libellux.com",-1),Ne=(0,n.Uk)("."),Te=(0,n._)("h2",{id:"road-map",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#road-map","aria-hidden":"true"},"#"),(0,n.Uk)(" Road map")],-1),Pe=(0,n.Uk)("To follow the process and prioritization check out the project "),Ve={href:"https://github.com/libellux/Libellux-Up-and-Running/projects/1",target:"_blank",rel:"noopener noreferrer"},Me=(0,n.Uk)("road map"),Ie=(0,n.Uk)(". Feel free to create a "),Le={href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},Ee=(0,n.Uk)("feature request"),De=(0,n.Uk)(" if there's any documentation or software you would like us to cover."),Ge=(0,n._)("h2",{id:"release-notes",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#release-notes","aria-hidden":"true"},"#"),(0,n.Uk)(" Release notes")],-1),Fe=(0,n._)("p",null,[(0,n._)("strong",null,[(0,n.Uk)("Libellux: Up and Running changelog (2.0.0) "),(0,n._)("a",{href:"mailto:fredrik@libellux.com"},"fredrik@libellux.com")])],-1),Oe=(0,n._)("p",null,[(0,n._)("strong",null,"Release Maintainers")],-1),He=(0,n._)("p",null,"Fredrik Hilmersson @libellux",-1),je=(0,n._)("p",null,[(0,n._)("strong",null,"Contributors on this release")],-1),Be=(0,n.Uk)("Scott Shinn "),Ke={href:"https://github.com/atomicturtle",target:"_blank",rel:"noopener noreferrer"},ze=(0,n.Uk)("@atomicturtle"),Ze=(0,n._)("br",null,null,-1),qe=(0,n.Uk)(" Björn Ricks "),Ye={href:"https://github.com/bjoernricks",target:"_blank",rel:"noopener noreferrer"},Je=(0,n.Uk)("@bjoernricks"),Qe=(0,n._)("br",null,null,-1),Xe=(0,n.Uk)(" Adam Hilmersson "),$e={href:"https://github.com/cnsta",target:"_blank",rel:"noopener noreferrer"},et=(0,n.Uk)("@cnsta"),tt=(0,n._)("p",null,[(0,n._)("strong",null,"Release notes")],-1),rt=(0,n._)("p",null,"Special thanks on this release go out to:",-1),nt=(0,n.Uk)("Full credit to Greenbone's official documentation. For more details please visit and read the documentation "),ot={href:"https://greenbone.github.io/docs/gvm-21.04/index.html",target:"_blank",rel:"noopener noreferrer"},lt=(0,n.Uk)("here"),at=(0,n.Uk)("."),it={href:"https://mullvad.net/en",target:"_blank",rel:"noopener noreferrer"},st=(0,n.Uk)("Mullvad VPN"),ut=(0,n.Uk)(" letting us use their fast, trustworthy and easy-to-use VPN with a focus on privacy."),dt={href:"https://www.jetbrains.com/",target:"_blank",rel:"noopener noreferrer"},ct=(0,n.Uk)("JetBrains"),ht=(0,n.Uk)(" for enabling us to use their Open Source development license."),pt=(0,n.uE)("<p>This is a <em>major</em> release where we&#39;ve upgraded the framework to VuePress Next (v2). So far we&#39;ve updated all the sections under Intrusion Detection and Prevention to make it easier for readers to copy &amp; paste segments. We also updated documentation for the latest version of the Greebone Vulnerability Manager (GVM) community edition. OSSEC has also be revisted and now cover source build on Rocky 8.4.</p><p><strong>What&#39;s New:</strong></p><p>Migration from VuePress v1.x to VuePress Next (v2.x) with PWA support<br> Greenbone Vulnerability Manager (GVM) revision 6. Latest GVM release (21.4.2) for Ubuntu 20.04 (Focal Fossa)<br> OSSEC Host Intrusion Detection System revision 2. Updated documentation for both Ubuntu 20.04 (Focal Fossa) and Rocky 8.4 (Green Obsidian)<br> WireGuard revision 2.<br> ClamAV Antivirus Server revision 2. Updated documentation for Ubuntu 20.04 (Focal Fossa) and how to build from source.<br> PSAD Intrusion Detection revision 2. Updated documentation for Ubuntu 20.04 (Focal Fossa).</p><p><strong>General</strong></p>",4),mt={href:"https://github.com/Kri5h123",target:"_blank",rel:"noopener noreferrer"},bt=(0,n.Uk)("@Kri5h123"),kt=(0,n.Uk)(),gt={href:"https://github.com/libellux/Libellux-Up-and-Running/issues/18#issuecomment-921301089",target:"_blank",rel:"noopener noreferrer"},ft=(0,n.Uk)("921301089"),_t=(0,n.Uk)(" and "),Ut={href:"https://github.com/johndoeisavailable",target:"_blank",rel:"noopener noreferrer"},wt=(0,n.Uk)("@johndoeisavailable"),vt=(0,n.Uk)(),xt={href:"https://github.com/libellux/Libellux-Up-and-Running/issues/50",target:"_blank",rel:"noopener noreferrer"},yt=(0,n.Uk)("#50"),Wt={class:"custom-container details"},St=(0,n._)("summary",null,"Prior releases",-1),Rt=(0,n._)("p",null,[(0,n._)("strong",null,[(0,n.Uk)("Libellux: Up and Running changelog (1.1.0) "),(0,n._)("a",{href:"mailto:fredrik@libellux.com"},"fredrik@libellux.com")])],-1),At=(0,n._)("p",null,[(0,n._)("strong",null,"Release Maintainers")],-1),Ct=(0,n.Uk)("Fredrik Hilmersson "),Nt={href:"https://github.com/libellux",target:"_blank",rel:"noopener noreferrer"},Tt=(0,n.Uk)("@libellux"),Pt=(0,n._)("p",null,[(0,n._)("strong",null,"Contributors on this release")],-1),Vt=(0,n.Uk)("Cornelius Kölbel "),Mt={href:"https://github.com/cornelinux",target:"_blank",rel:"noopener noreferrer"},It=(0,n.Uk)("@cornelinux"),Lt=(0,n._)("br",null,null,-1),Et=(0,n.Uk)(" Scott Shinn "),Dt={href:"https://github.com/atomicturtle",target:"_blank",rel:"noopener noreferrer"},Gt=(0,n.Uk)("@atomicturtle"),Ft=(0,n._)("br",null,null,-1),Ot=(0,n.Uk)(" Adam Hilmersson "),Ht={href:"https://github.com/cnsta",target:"_blank",rel:"noopener noreferrer"},jt=(0,n.Uk)("@cnst"),Bt=(0,n._)("p",null,[(0,n._)("strong",null,"Release notes")],-1),Kt=(0,n._)("p",null,"Special thanks on this release go out to:",-1),zt={href:"https://hyperqube.io/",target:"_blank",rel:"noopener noreferrer"},Zt=(0,n.Uk)("HyperQube"),qt=(0,n.Uk)(" for providing their great software to replicate entire cloud networks with the click of a button."),Yt={href:"https://atomisystems.com/",target:"_blank",rel:"noopener noreferrer"},Jt=(0,n.Uk)("Atomi Systems"),Qt=(0,n.Uk)(" for giving access to their powerful screen recording software ActivePresenter."),Xt={href:"https://mullvad.net/en",target:"_blank",rel:"noopener noreferrer"},$t=(0,n.Uk)("Mullvad VPN"),er=(0,n.Uk)(" letting us use their fast, trustworthy and easy-to-use VPN with a focus on privacy."),tr=(0,n.Uk)("Cornelius Kölbel "),rr={href:"https://github.com/cornelinux",target:"_blank",rel:"noopener noreferrer"},nr=(0,n.Uk)("@cornelinux"),or=(0,n.Uk)(" from "),lr={href:"https://netknights.it/en/",target:"_blank",rel:"noopener noreferrer"},ar=(0,n.Uk)("NetKnights"),ir=(0,n.Uk)("."),sr=(0,n.uE)('<p>This is the first <em>minor</em> release of Libellux: Up and Running. Where we start combining the services to enhance the security in the Zero Trust Network. We added documentation how-to set up a virtual private network (VPN) using WireGuard. privacyIDEA will act as our central authentication server to both enforce two-factor authentication (using YubiKey 5 NFC) but also to apply an role-based access control (RBAC) approach. We also added a new section on how-to set up a server/client relationship with ClamAV Antivirus. Additionally we added the possiblity to comment using Gitalk.</p><p><strong>What&#39;s New:</strong></p><p>Two-factor authentiction w/ PrivacyIDEA FreeRADIUS plugin and YubiKey 5 NFC<br> Greenbone Vulnerability Manager (GVM) revision 5 w/ update for latest GVM release (21.04)<br> WireGuard Secure VPN Tunnel<br> ClamAV Antivirus Server<br> Scheduled jobs for GVM 21.04 to keep community feed up-to-date<br> Comments with Gitalk</p><hr><p><strong>Libellux: Up and Running changelog (1.0.1) <a href="mailto:fredrik@libellux.com">fredrik@libellux.com</a></strong></p><p><strong>Release Maintainers</strong></p>',6),ur=(0,n.Uk)("Fredrik Hilmersson "),dr={href:"https://github.com/libellux",target:"_blank",rel:"noopener noreferrer"},cr=(0,n.Uk)("@libellux"),hr=(0,n._)("p",null,[(0,n._)("strong",null,"Contributors on this release")],-1),pr=(0,n.Uk)("Scott Shinn "),mr={href:"https://github.com/atomicturtle",target:"_blank",rel:"noopener noreferrer"},br=(0,n.Uk)("@atomicturtle"),kr=(0,n._)("br",null,null,-1),gr=(0,n.Uk)(" Adam Hilmersson "),fr={href:"https://github.com/cnsta",target:"_blank",rel:"noopener noreferrer"},_r=(0,n.Uk)("@cnsta"),Ur=(0,n.uE)('<p><strong>Release notes</strong></p><p>The second release of Libellux: Up and Running mostly contain updates to already existing chapters. There is a few new additions to each chapter e.g. Agentless monitoring and Windows Server 2019 agent installation for OSSEC. The OpenVAS chapter has also been revised and updated with new features such as basic vulnerability scans to give a first hands-on experience. We&#39;ve also completed the first revision for M/Monit System Monitoring.</p><p><strong>What&#39;s New:</strong></p><p>M/Monit System Monitoring (3.7.5) with Monit (5.27.0)<br> Agentless monitoring chapter to OSSEC Host Intrusion Detection (3.6.0)<br> Windows Server 2019 agent installation (OSSEC 3.6.0)<br> Basic authenticated and unauthenticated scan to OpenVAS Vulnerability Scanner (OpenVAS 20.08)</p><hr><p><strong>Libellux: Up and Running changelog (1.0.0) <a href="mailto:fredrik@libellux.com">fredrik@libellux.com</a></strong></p><p><strong>Release Maintainers</strong></p>',7),wr=(0,n.Uk)("Fredrik Hilmersson "),vr={href:"https://github.com/libellux",target:"_blank",rel:"noopener noreferrer"},xr=(0,n.Uk)("@libellux"),yr=(0,n._)("p",null,[(0,n._)("strong",null,"Contributors on this release")],-1),Wr=(0,n.Uk)("Damir Kucic "),Sr={href:"https://github.com/dkucic",target:"_blank",rel:"noopener noreferrer"},Rr=(0,n.Uk)("@dkucic"),Ar=(0,n._)("br",null,null,-1),Cr=(0,n.Uk)(" Scott Shinn "),Nr={href:"https://github.com/atomicturtle",target:"_blank",rel:"noopener noreferrer"},Tr=(0,n.Uk)("@atomicturtle"),Pr=(0,n._)("br",null,null,-1),Vr=(0,n.Uk)(" Adam Hilmersson "),Mr={href:"https://github.com/cnsta",target:"_blank",rel:"noopener noreferrer"},Ir=(0,n.Uk)("@cnsta"),Lr=(0,n._)("br",null,null,-1),Er=(0,n.Uk)(" Zeny Palac "),Dr={href:"https://twitter.com/doczenzen",target:"_blank",rel:"noopener noreferrer"},Gr=(0,n.Uk)("@doczenzen"),Fr=(0,n._)("br",null,null,-1),Or=(0,n.Uk)(" Falk "),Hr={href:"https://github.com/falkowich",target:"_blank",rel:"noopener noreferrer"},jr=(0,n.Uk)("@falkowich"),Br=(0,n._)("p",null,[(0,n._)("strong",null,"Release notes")],-1),Kr=(0,n._)("p",null,"This is the first release of Libellux: Up and Running. The initial release contain documentation and configuration for the software specified below (see What's New). Libellux: Up and Running is a collection of personal notes and documentation regarding open-source software configuration. The focus is to build a so called Zero Trust Network using a central authentication server to enhance the security for our existing applications. We will manage our network using an open-source software tool for provisioning and configuration management to automate and speed up productivity.",-1),zr=(0,n._)("p",null,[(0,n._)("strong",null,"What's New:")],-1),Zr=(0,n._)("p",null,[(0,n.Uk)("OSSEC Host Intrusion Detection (3.6.0)"),(0,n._)("br"),(0,n.Uk)(" PSAD Intrusion Detection (2.4.6)"),(0,n._)("br"),(0,n.Uk)(" OpenVAS Vulnerability Scanner (OpenVAS 20.08, Atomicorp 20.08)")],-1),qr={},Yr=(0,r(3744).Z)(qr,[["render",function(e,t){const r=(0,n.up)("OutboundLink"),qr=(0,n.up)("RouterLink"),Yr=(0,n.up)("Badge");return(0,n.wg)(),(0,n.iD)(n.HY,null,[o,l,(0,n._)("p",null,[(0,n._)("a",a,[i,(0,n.Wm)(r)])]),s,(0,n._)("table",null,[u,(0,n._)("tbody",null,[(0,n._)("tr",null,[d,(0,n._)("td",null,[c,(0,n._)("a",h,[p,(0,n.Wm)(r)])])]),(0,n._)("tr",null,[m,(0,n._)("td",null,[b,(0,n._)("a",k,[g,(0,n.Wm)(r)])])]),(0,n._)("tr",null,[f,(0,n._)("td",null,[_,(0,n._)("a",U,[w,(0,n.Wm)(r)]),v,(0,n._)("a",x,[y,(0,n.Wm)(r)]),W,(0,n._)("a",S,[R,(0,n.Wm)(r)]),A,(0,n._)("a",C,[N,(0,n.Wm)(r)])])]),(0,n._)("tr",null,[T,(0,n._)("td",null,[(0,n._)("a",P,[V,(0,n.Wm)(r)]),M,(0,n._)("a",I,[L,(0,n.Wm)(r)]),E,(0,n._)("a",D,[G,(0,n.Wm)(r)]),F,(0,n._)("a",O,[H,(0,n.Wm)(r)])])])])]),j,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Wm)(qr,{to:"/wireguard/"},{default:(0,n.w5)((()=>[B])),_:1}),K,(0,n.Wm)(Yr,{text:"stable",type:"tip"})]),(0,n._)("li",null,[(0,n.Wm)(qr,{to:"/privacyidea/"},{default:(0,n.w5)((()=>[z])),_:1}),Z,(0,n.Wm)(Yr,{text:"stable",type:"tip"})]),(0,n._)("li",null,[q,Y,(0,n.Wm)(Yr,{text:"incomplete",type:"warning"})])]),J,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Wm)(qr,{to:"/ossec/"},{default:(0,n.w5)((()=>[Q])),_:1}),X,(0,n.Wm)(Yr,{text:"stable",type:"tip"})]),(0,n._)("li",null,[(0,n.Wm)(qr,{to:"/psad/"},{default:(0,n.w5)((()=>[$])),_:1}),ee,(0,n.Wm)(Yr,{text:"stable",type:"tip"})]),(0,n._)("li",null,[(0,n.Wm)(qr,{to:"/openvas/"},{default:(0,n.w5)((()=>[te])),_:1}),re,(0,n.Wm)(Yr,{text:"stable",type:"tip"})]),(0,n._)("li",null,[ne,(0,n.Wm)(Yr,{text:"TBA",type:"warning"})]),(0,n._)("li",null,[(0,n.Wm)(qr,{to:"/clamav/"},{default:(0,n.w5)((()=>[oe])),_:1}),le,(0,n.Wm)(Yr,{text:"stable",type:"tip"})])]),ae,(0,n._)("ul",null,[(0,n._)("li",null,[ie,(0,n.Wm)(Yr,{text:"TBA",type:"warning"})]),(0,n._)("li",null,[(0,n.Wm)(qr,{to:"/mmonit/"},{default:(0,n.w5)((()=>[se])),_:1}),ue,(0,n.Wm)(Yr,{text:"stable",type:"tip"})]),(0,n._)("li",null,[de,ce,(0,n.Wm)(Yr,{text:"incomplete",type:"warning"})]),(0,n._)("li",null,[(0,n.Wm)(qr,{to:"/rsyslog/"},{default:(0,n.w5)((()=>[he])),_:1}),pe,(0,n.Wm)(Yr,{text:"incomplete",type:"warning"})]),(0,n._)("li",null,[(0,n.Wm)(qr,{to:"/graylog/"},{default:(0,n.w5)((()=>[me])),_:1}),be,(0,n.Wm)(Yr,{text:"incomplete",type:"warning"})])]),ke,(0,n._)("p",null,[(0,n._)("a",ge,[fe,(0,n.Wm)(r)]),_e,(0,n._)("a",Ue,[we,(0,n.Wm)(r)]),ve,(0,n._)("a",xe,[ye,(0,n.Wm)(r)]),We,(0,n._)("a",Se,[Re,(0,n.Wm)(r)]),Ae,Ce,Ne]),Te,(0,n._)("p",null,[Pe,(0,n._)("a",Ve,[Me,(0,n.Wm)(r)]),Ie,(0,n._)("a",Le,[Ee,(0,n.Wm)(r)]),De]),Ge,Fe,Oe,He,je,(0,n._)("p",null,[Be,(0,n._)("a",Ke,[ze,(0,n.Wm)(r)]),Ze,qe,(0,n._)("a",Ye,[Je,(0,n.Wm)(r)]),Qe,Xe,(0,n._)("a",$e,[et,(0,n.Wm)(r)])]),tt,rt,(0,n._)("ul",null,[(0,n._)("li",null,[nt,(0,n._)("a",ot,[lt,(0,n.Wm)(r)]),at]),(0,n._)("li",null,[(0,n._)("a",it,[st,(0,n.Wm)(r)]),ut]),(0,n._)("li",null,[(0,n._)("a",dt,[ct,(0,n.Wm)(r)]),ht])]),pt,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("a",mt,[bt,(0,n.Wm)(r)]),kt,(0,n._)("a",gt,[ft,(0,n.Wm)(r)]),_t,(0,n._)("a",Ut,[wt,(0,n.Wm)(r)]),vt,(0,n._)("a",xt,[yt,(0,n.Wm)(r)])])]),(0,n._)("details",Wt,[St,Rt,At,(0,n._)("p",null,[Ct,(0,n._)("a",Nt,[Tt,(0,n.Wm)(r)])]),Pt,(0,n._)("p",null,[Vt,(0,n._)("a",Mt,[It,(0,n.Wm)(r)]),Lt,Et,(0,n._)("a",Dt,[Gt,(0,n.Wm)(r)]),Ft,Ot,(0,n._)("a",Ht,[jt,(0,n.Wm)(r)])]),Bt,Kt,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("a",zt,[Zt,(0,n.Wm)(r)]),qt]),(0,n._)("li",null,[(0,n._)("a",Yt,[Jt,(0,n.Wm)(r)]),Qt]),(0,n._)("li",null,[(0,n._)("a",Xt,[$t,(0,n.Wm)(r)]),er]),(0,n._)("li",null,[tr,(0,n._)("a",rr,[nr,(0,n.Wm)(r)]),or,(0,n._)("a",lr,[ar,(0,n.Wm)(r)]),ir])]),sr,(0,n._)("p",null,[ur,(0,n._)("a",dr,[cr,(0,n.Wm)(r)])]),hr,(0,n._)("p",null,[pr,(0,n._)("a",mr,[br,(0,n.Wm)(r)]),kr,gr,(0,n._)("a",fr,[_r,(0,n.Wm)(r)])]),Ur,(0,n._)("p",null,[wr,(0,n._)("a",vr,[xr,(0,n.Wm)(r)])]),yr,(0,n._)("p",null,[Wr,(0,n._)("a",Sr,[Rr,(0,n.Wm)(r)]),Ar,Cr,(0,n._)("a",Nr,[Tr,(0,n.Wm)(r)]),Pr,Vr,(0,n._)("a",Mr,[Ir,(0,n.Wm)(r)]),Lr,Er,(0,n._)("a",Dr,[Gr,(0,n.Wm)(r)]),Fr,Or,(0,n._)("a",Hr,[jr,(0,n.Wm)(r)])]),Br,Kr,zr,Zr])],64)}]])},3744:(e,t)=>{t.Z=(e,t)=>{for(const[r,n]of t)e[r]=n;return e}}}]);