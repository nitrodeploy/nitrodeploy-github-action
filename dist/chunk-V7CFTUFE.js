const require = (await import('node:module')).createRequire(import.meta.url);const __filename = (await import('node:url')).fileURLToPath(import.meta.url);const __dirname = (await import('node:path')).dirname(__filename);
var uD=Object.create;var b=Object.defineProperty;var tD=Object.getOwnPropertyDescriptor;var FD=Object.getOwnPropertyNames;var eD=Object.getPrototypeOf,rD=Object.prototype.hasOwnProperty;var tu=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(u,F)=>(typeof require<"u"?require:u)[F]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var Fu=(t,u)=>()=>(t&&(u=t(t=0)),u);var eu=(t,u)=>()=>(u||t((u={exports:{}}).exports,u),u.exports),ru=(t,u)=>{for(var F in u)b(t,F,{get:u[F],enumerable:!0})},M=(t,u,F,r)=>{if(u&&typeof u=="object"||typeof u=="function")for(let e of FD(u))!rD.call(t,e)&&e!==F&&b(t,e,{get:()=>u[e],enumerable:!(r=tD(u,e))||r.enumerable});return t};var ou=(t,u,F)=>(F=t!=null?uD(eD(t)):{},M(u||!t||!t.__esModule?b(F,"default",{value:t,enumerable:!0}):F,t)),Cu=t=>M(b({},"__esModule",{value:!0}),t);import{formatWithOptions as gD}from"node:util";import{sep as AD}from"node:path";import*as L from"node:tty";import c from"node:process";var d=(await import("node:module")).createRequire(import.meta.url),oD=(await import("node:url")).fileURLToPath(import.meta.url),su=(await import("node:path")).dirname(oD),CD=Object.create,O=Object.defineProperty,ED=Object.getOwnPropertyDescriptor,sD=Object.getOwnPropertyNames,iD=Object.getPrototypeOf,nD=Object.prototype.hasOwnProperty,iu=(t=>typeof d<"u"?d:typeof Proxy<"u"?new Proxy(t,{get:(u,F)=>(typeof d<"u"?d:u)[F]}):t)(function(t){if(typeof d<"u")return d.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')}),nu=(t,u)=>()=>(t&&(u=t(t=0)),u),lu=(t,u)=>()=>(u||t((u={exports:{}}).exports,u),u.exports),au=(t,u)=>{for(var F in u)O(t,F,{get:u[F],enumerable:!0})},W=(t,u,F,r)=>{if(u&&typeof u=="object"||typeof u=="function")for(let e of sD(u))!nD.call(t,e)&&e!==F&&O(t,e,{get:()=>u[e],enumerable:!(r=ED(u,e))||r.enumerable});return t},Bu=(t,u,F)=>(F=t!=null?CD(iD(t)):{},W(u||!t||!t.__esModule?O(F,"default",{value:t,enumerable:!0}):F,t)),pu=t=>W(O({},"__esModule",{value:!0}),t),n={silent:Number.NEGATIVE_INFINITY,fatal:0,error:0,warn:1,log:2,info:3,success:3,fail:3,ready:3,start:3,box:3,debug:4,trace:5,verbose:Number.POSITIVE_INFINITY},P={silent:{level:-1},fatal:{level:n.fatal},error:{level:n.error},warn:{level:n.warn},log:{level:n.log},info:{level:n.info},success:{level:n.success},fail:{level:n.fail},ready:{level:n.info},start:{level:n.info},box:{level:n.info},debug:{level:n.debug},trace:{level:n.trace},verbose:{level:n.verbose}};function R(t){return t!==null&&typeof t=="object"}function x(t,u,F=".",r){if(!R(u))return x(t,{},F,r);let e=Object.assign({},u);for(let o in t){if(o==="__proto__"||o==="constructor")continue;let D=t[o];D!=null&&(r&&r(e,o,D,F)||(Array.isArray(D)&&Array.isArray(e[o])?e[o]=[...D,...e[o]]:R(D)&&R(e[o])?e[o]=x(D,e[o],(F?`${F}.`:"")+o.toString(),r):e[o]=D))}return e}function lD(t){return(...u)=>u.reduce((F,r)=>x(F,r,"",t),{})}var aD=lD();function BD(t){return Object.prototype.toString.call(t)==="[object Object]"}function pD(t){return!(!BD(t)||!t.message&&!t.args||t.stack)}var S=!1,U=[],a=class Y{constructor(u={}){let F=u.types||P;this.options=aD({...u,defaults:{...u.defaults},level:w(u.level,F),reporters:[...u.reporters||[]]},{types:P,throttle:1e3,throttleMin:5,formatOptions:{date:!0,colors:!1,compact:!0}});for(let r in F){let e={type:r,...this.options.defaults,...F[r]};this[r]=this._wrapLogFn(e),this[r].raw=this._wrapLogFn(e,!0)}this.options.mockFn&&this.mockTypes(),this._lastLog={}}get level(){return this.options.level}set level(u){this.options.level=w(u,this.options.types,this.options.level)}prompt(u,F){if(!this.options.prompt)throw new Error("prompt is not supported!");return this.options.prompt(u,F)}create(u){let F=new Y({...this.options,...u});return this._mockFn&&F.mockTypes(this._mockFn),F}withDefaults(u){return this.create({...this.options,defaults:{...this.options.defaults,...u}})}withTag(u){return this.withDefaults({tag:this.options.defaults.tag?this.options.defaults.tag+":"+u:u})}addReporter(u){return this.options.reporters.push(u),this}removeReporter(u){if(u){let F=this.options.reporters.indexOf(u);if(F>=0)return this.options.reporters.splice(F,1)}else this.options.reporters.splice(0);return this}setReporters(u){return this.options.reporters=Array.isArray(u)?u:[u],this}wrapAll(){this.wrapConsole(),this.wrapStd()}restoreAll(){this.restoreConsole(),this.restoreStd()}wrapConsole(){for(let u in this.options.types)console["__"+u]||(console["__"+u]=console[u]),console[u]=this[u].raw}restoreConsole(){for(let u in this.options.types)console["__"+u]&&(console[u]=console["__"+u],delete console["__"+u])}wrapStd(){this._wrapStream(this.options.stdout,"log"),this._wrapStream(this.options.stderr,"log")}_wrapStream(u,F){u&&(u.__write||(u.__write=u.write),u.write=r=>{this[F].raw(String(r).trim())})}restoreStd(){this._restoreStream(this.options.stdout),this._restoreStream(this.options.stderr)}_restoreStream(u){u&&u.__write&&(u.write=u.__write,delete u.__write)}pauseLogs(){S=!0}resumeLogs(){S=!1;let u=U.splice(0);for(let F of u)F[0]._logFn(F[1],F[2])}mockTypes(u){let F=u||this.options.mockFn;if(this._mockFn=F,typeof F=="function")for(let r in this.options.types)this[r]=F(r,this.options.types[r])||this[r],this[r].raw=this[r]}_wrapLogFn(u,F){return(...r)=>{if(S){U.push([this,u,r,F]);return}return this._logFn(u,r,F)}}_logFn(u,F,r){if((u.level||0)>this.level)return!1;let e={date:new Date,args:[],...u,level:w(u.level,this.options.types)};!r&&F.length===1&&pD(F[0])?Object.assign(e,F[0]):e.args=[...F],e.message&&(e.args.unshift(e.message),delete e.message),e.additional&&(Array.isArray(e.additional)||(e.additional=e.additional.split(`
`)),e.args.push(`
`+e.additional.join(`
`)),delete e.additional),e.type=typeof e.type=="string"?e.type.toLowerCase():"log",e.tag=typeof e.tag=="string"?e.tag:"";let o=(E=!1)=>{let i=(this._lastLog.count||0)-this.options.throttleMin;if(this._lastLog.object&&i>0){let s=[...this._lastLog.object.args];i>1&&s.push(`(repeated ${i} times)`),this._log({...this._lastLog.object,args:s}),this._lastLog.count=1}E&&(this._lastLog.object=e,this._log(e))};clearTimeout(this._lastLog.timeout);let D=this._lastLog.time&&e.date?e.date.getTime()-this._lastLog.time.getTime():0;if(this._lastLog.time=e.date,D<this.options.throttle)try{let E=JSON.stringify([e.type,e.tag,e.args]),i=this._lastLog.serialized===E;if(this._lastLog.serialized=E,i&&(this._lastLog.count=(this._lastLog.count||0)+1,this._lastLog.count>this.options.throttleMin)){this._lastLog.timeout=setTimeout(o,this.options.throttle);return}}catch{}o(!0)}_log(u){for(let F of this.options.reporters)F.log(u,{options:this.options})}};function w(t,u={},F=3){return t===void 0?F:typeof t=="number"?t:u[t]&&u[t].level!==void 0?u[t].level:F}a.prototype.add=a.prototype.addReporter;a.prototype.remove=a.prototype.removeReporter;a.prototype.clear=a.prototype.removeReporter;a.prototype.withScope=a.prototype.withTag;a.prototype.mock=a.prototype.mockTypes;a.prototype.pause=a.prototype.pauseLogs;a.prototype.resume=a.prototype.resumeLogs;function cD(t={}){return new a(t)}function V(t){let u=process.cwd()+AD;return t.split(`
`).splice(1).map(F=>F.trim().replace("file://","").replace(u,""))}function hD(t,u){return(u.__write||u.write).call(u,t)}var N=t=>t?`[${t}]`:"",Z=class{formatStack(t,u){return"  "+V(t).join(`
  `)}formatArgs(t,u){let F=t.map(r=>r&&typeof r.stack=="string"?r.message+`
`+this.formatStack(r.stack,u):r);return gD(u,...F)}formatDate(t,u){return u.date?t.toLocaleTimeString():""}filterAndJoin(t){return t.filter(Boolean).join(" ")}formatLogObj(t,u){let F=this.formatArgs(t.args,u);return t.type==="box"?`
`+[N(t.tag),t.title&&t.title,...F.split(`
`)].filter(Boolean).map(r=>" > "+r).join(`
`)+`
`:this.filterAndJoin([N(t.type),N(t.tag),F])}log(t,u){let F=this.formatLogObj(t,{columns:u.options.stdout.columns||0,...u.options.formatOptions});return hD(F+`
`,t.level<2?u.options.stderr||process.stderr:u.options.stdout||process.stdout)}},{env:h={},argv:H=[],platform:fD=""}=typeof process>"u"?{}:process,dD="NO_COLOR"in h||H.includes("--no-color"),mD="FORCE_COLOR"in h||H.includes("--color"),yD=fD==="win32",K=h.TERM==="dumb",_D=L&&L.isatty&&L.isatty(1)&&h.TERM&&!K,vD="CI"in h&&("GITHUB_ACTIONS"in h||"GITLAB_CI"in h||"CIRCLECI"in h),bD=!dD&&(mD||yD&&!K||_D||vD);function z(t,u,F,r,e=u.slice(0,Math.max(0,t))+r,o=u.slice(Math.max(0,t+F.length)),D=o.indexOf(F)){return e+(D<0?o:z(D,o,F,r))}function ID(t,u,F,r,e){return t<0?F+u+r:F+z(t,u,r,e)+r}function LD(t,u,F=t,r=t.length+1){return e=>e||!(e===""||e===void 0)?ID((""+e).indexOf(u,r),e,t,u,F):""}function C(t,u,F){return LD(`\x1B[${t}m`,`\x1B[${u}m`,F)}var $={reset:C(0,0),bold:C(1,22,"\x1B[22m\x1B[1m"),dim:C(2,22,"\x1B[22m\x1B[2m"),italic:C(3,23),underline:C(4,24),inverse:C(7,27),hidden:C(8,28),strikethrough:C(9,29),black:C(30,39),red:C(31,39),green:C(32,39),yellow:C(33,39),blue:C(34,39),magenta:C(35,39),cyan:C(36,39),white:C(37,39),gray:C(90,39),bgBlack:C(40,49),bgRed:C(41,49),bgGreen:C(42,49),bgYellow:C(43,49),bgBlue:C(44,49),bgMagenta:C(45,49),bgCyan:C(46,49),bgWhite:C(47,49),blackBright:C(90,39),redBright:C(91,39),greenBright:C(92,39),yellowBright:C(93,39),blueBright:C(94,39),magentaBright:C(95,39),cyanBright:C(96,39),whiteBright:C(97,39),bgBlackBright:C(100,49),bgRedBright:C(101,49),bgGreenBright:C(102,49),bgYellowBright:C(103,49),bgBlueBright:C(104,49),bgMagentaBright:C(105,49),bgCyanBright:C(106,49),bgWhiteBright:C(107,49)};function TD(t=bD){return t?$:Object.fromEntries(Object.keys($).map(u=>[u,String]))}var p=TD();function OD(t,u="reset"){return p[t]||p[u]}var RD=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");function m(t){return t.replace(new RegExp(RD,"g"),"")}var j={solid:{tl:"\u250C",tr:"\u2510",bl:"\u2514",br:"\u2518",h:"\u2500",v:"\u2502"},double:{tl:"\u2554",tr:"\u2557",bl:"\u255A",br:"\u255D",h:"\u2550",v:"\u2551"},doubleSingle:{tl:"\u2553",tr:"\u2556",bl:"\u2559",br:"\u255C",h:"\u2500",v:"\u2551"},doubleSingleRounded:{tl:"\u256D",tr:"\u256E",bl:"\u2570",br:"\u256F",h:"\u2500",v:"\u2551"},singleThick:{tl:"\u250F",tr:"\u2513",bl:"\u2517",br:"\u251B",h:"\u2501",v:"\u2503"},singleDouble:{tl:"\u2552",tr:"\u2555",bl:"\u2558",br:"\u255B",h:"\u2550",v:"\u2502"},singleDoubleRounded:{tl:"\u256D",tr:"\u256E",bl:"\u2570",br:"\u256F",h:"\u2550",v:"\u2502"},rounded:{tl:"\u256D",tr:"\u256E",bl:"\u2570",br:"\u256F",h:"\u2500",v:"\u2502"}},SD={borderColor:"white",borderStyle:"rounded",valign:"center",padding:2,marginLeft:1,marginTop:1,marginBottom:1};function wD(t,u={}){let F={...u,style:{...SD,...u.style}},r=t.split(`
`),e=[],o=OD(F.style.borderColor),D={...typeof F.style.borderStyle=="string"?j[F.style.borderStyle]||j.solid:F.style.borderStyle};if(o)for(let l in D)D[l]=o(D[l]);let E=F.style.padding%2===0?F.style.padding:F.style.padding+1,i=r.length+E,s=Math.max(...r.map(l=>l.length))+E,g=s+E,B=F.style.marginLeft>0?" ".repeat(F.style.marginLeft):"";if(F.style.marginTop>0&&e.push("".repeat(F.style.marginTop)),F.title){let l=D.h.repeat(Math.floor((s-m(F.title).length)/2)),v=D.h.repeat(s-m(F.title).length-m(l).length+E);e.push(`${B}${D.tl}${l}${F.title}${v}${D.tr}`)}else e.push(`${B}${D.tl}${D.h.repeat(g)}${D.tr}`);let f=F.style.valign==="center"?Math.floor((i-r.length)/2):F.style.valign==="top"?i-r.length-E:i-r.length;for(let l=0;l<i;l++)if(l<f||l>=f+r.length)e.push(`${B}${D.v}${" ".repeat(g)}${D.v}`);else{let v=r[l-f],Q=" ".repeat(E),DD=" ".repeat(s-m(v).length);e.push(`${B}${D.v}${Q}${v}${DD}${D.v}`)}return e.push(`${B}${D.bl}${D.h.repeat(g)}${D.br}`),F.style.marginBottom>0&&e.push("".repeat(F.style.marginBottom)),e.join(`
`)}var ND=[["APPVEYOR"],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:!0}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:!1}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:!1}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"]];function xD(t){for(let u of ND){let F=u[1]||u[0];if(t[F])return{name:u[0].toLowerCase(),...u[2]}}return t.SHELL&&t.SHELL==="/bin/jsh"?{name:"stackblitz",ci:!1}:{name:"",ci:!1}}var T=typeof process<"u"?process:{},y=T.env||{},J=xD(y),MD=typeof process<"u"&&process.env&&process.env.NODE_ENV||"";T.platform;J.name;var PD=_(y.CI)||J.ci!==!1,hu=_(T.stdout&&T.stdout.isTTY),UD=_(y.DEBUG),q=MD==="test"||_(y.TEST);_(y.MINIMAL);function _(t){return t?t!=="false":!1}function $D({onlyFirst:t=!1}={}){let u=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(u,t?void 0:"g")}var jD=$D();function kD(t){if(typeof t!="string")throw new TypeError(`Expected a \`string\`, got \`${typeof t}\``);return t.replace(jD,"")}function GD(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var X={exports:{}};(function(t){var u={};t.exports=u,u.eastAsianWidth=function(r){var e=r.charCodeAt(0),o=r.length==2?r.charCodeAt(1):0,D=e;return 55296<=e&&e<=56319&&56320<=o&&o<=57343&&(e&=1023,o&=1023,D=e<<10|o,D+=65536),D==12288||65281<=D&&D<=65376||65504<=D&&D<=65510?"F":D==8361||65377<=D&&D<=65470||65474<=D&&D<=65479||65482<=D&&D<=65487||65490<=D&&D<=65495||65498<=D&&D<=65500||65512<=D&&D<=65518?"H":4352<=D&&D<=4447||4515<=D&&D<=4519||4602<=D&&D<=4607||9001<=D&&D<=9002||11904<=D&&D<=11929||11931<=D&&D<=12019||12032<=D&&D<=12245||12272<=D&&D<=12283||12289<=D&&D<=12350||12353<=D&&D<=12438||12441<=D&&D<=12543||12549<=D&&D<=12589||12593<=D&&D<=12686||12688<=D&&D<=12730||12736<=D&&D<=12771||12784<=D&&D<=12830||12832<=D&&D<=12871||12880<=D&&D<=13054||13056<=D&&D<=19903||19968<=D&&D<=42124||42128<=D&&D<=42182||43360<=D&&D<=43388||44032<=D&&D<=55203||55216<=D&&D<=55238||55243<=D&&D<=55291||63744<=D&&D<=64255||65040<=D&&D<=65049||65072<=D&&D<=65106||65108<=D&&D<=65126||65128<=D&&D<=65131||110592<=D&&D<=110593||127488<=D&&D<=127490||127504<=D&&D<=127546||127552<=D&&D<=127560||127568<=D&&D<=127569||131072<=D&&D<=194367||177984<=D&&D<=196605||196608<=D&&D<=262141?"W":32<=D&&D<=126||162<=D&&D<=163||165<=D&&D<=166||D==172||D==175||10214<=D&&D<=10221||10629<=D&&D<=10630?"Na":D==161||D==164||167<=D&&D<=168||D==170||173<=D&&D<=174||176<=D&&D<=180||182<=D&&D<=186||188<=D&&D<=191||D==198||D==208||215<=D&&D<=216||222<=D&&D<=225||D==230||232<=D&&D<=234||236<=D&&D<=237||D==240||242<=D&&D<=243||247<=D&&D<=250||D==252||D==254||D==257||D==273||D==275||D==283||294<=D&&D<=295||D==299||305<=D&&D<=307||D==312||319<=D&&D<=322||D==324||328<=D&&D<=331||D==333||338<=D&&D<=339||358<=D&&D<=359||D==363||D==462||D==464||D==466||D==468||D==470||D==472||D==474||D==476||D==593||D==609||D==708||D==711||713<=D&&D<=715||D==717||D==720||728<=D&&D<=731||D==733||D==735||768<=D&&D<=879||913<=D&&D<=929||931<=D&&D<=937||945<=D&&D<=961||963<=D&&D<=969||D==1025||1040<=D&&D<=1103||D==1105||D==8208||8211<=D&&D<=8214||8216<=D&&D<=8217||8220<=D&&D<=8221||8224<=D&&D<=8226||8228<=D&&D<=8231||D==8240||8242<=D&&D<=8243||D==8245||D==8251||D==8254||D==8308||D==8319||8321<=D&&D<=8324||D==8364||D==8451||D==8453||D==8457||D==8467||D==8470||8481<=D&&D<=8482||D==8486||D==8491||8531<=D&&D<=8532||8539<=D&&D<=8542||8544<=D&&D<=8555||8560<=D&&D<=8569||D==8585||8592<=D&&D<=8601||8632<=D&&D<=8633||D==8658||D==8660||D==8679||D==8704||8706<=D&&D<=8707||8711<=D&&D<=8712||D==8715||D==8719||D==8721||D==8725||D==8730||8733<=D&&D<=8736||D==8739||D==8741||8743<=D&&D<=8748||D==8750||8756<=D&&D<=8759||8764<=D&&D<=8765||D==8776||D==8780||D==8786||8800<=D&&D<=8801||8804<=D&&D<=8807||8810<=D&&D<=8811||8814<=D&&D<=8815||8834<=D&&D<=8835||8838<=D&&D<=8839||D==8853||D==8857||D==8869||D==8895||D==8978||9312<=D&&D<=9449||9451<=D&&D<=9547||9552<=D&&D<=9587||9600<=D&&D<=9615||9618<=D&&D<=9621||9632<=D&&D<=9633||9635<=D&&D<=9641||9650<=D&&D<=9651||9654<=D&&D<=9655||9660<=D&&D<=9661||9664<=D&&D<=9665||9670<=D&&D<=9672||D==9675||9678<=D&&D<=9681||9698<=D&&D<=9701||D==9711||9733<=D&&D<=9734||D==9737||9742<=D&&D<=9743||9748<=D&&D<=9749||D==9756||D==9758||D==9792||D==9794||9824<=D&&D<=9825||9827<=D&&D<=9829||9831<=D&&D<=9834||9836<=D&&D<=9837||D==9839||9886<=D&&D<=9887||9918<=D&&D<=9919||9924<=D&&D<=9933||9935<=D&&D<=9953||D==9955||9960<=D&&D<=9983||D==10045||D==10071||10102<=D&&D<=10111||11093<=D&&D<=11097||12872<=D&&D<=12879||57344<=D&&D<=63743||65024<=D&&D<=65039||D==65533||127232<=D&&D<=127242||127248<=D&&D<=127277||127280<=D&&D<=127337||127344<=D&&D<=127386||917760<=D&&D<=917999||983040<=D&&D<=1048573||1048576<=D&&D<=1114109?"A":"N"},u.characterLength=function(r){var e=this.eastAsianWidth(r);return e=="F"||e=="W"||e=="A"?2:1};function F(r){return r.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g)||[]}u.length=function(r){for(var e=F(r),o=0,D=0;D<e.length;D++)o=o+this.characterLength(e[D]);return o},u.slice=function(r,e,o){textLen=u.length(r),e=e||0,o=o||1,e<0&&(e=textLen+e),o<0&&(o=textLen+o);for(var D="",E=0,i=F(r),s=0;s<i.length;s++){var g=i[s],B=u.length(g);if(E>=e-(B==2?1:0))if(E+B<=o)D+=g;else break;E+=B}return D}})(X);var WD=X.exports,YD=GD(WD),VD=()=>/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC08\uDC26](?:\u200D\u2B1B)?|[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;function ZD(t,u){if(typeof t!="string"||t.length===0||(u={ambiguousIsNarrow:!0,countAnsiEscapeCodes:!1,...u},u.countAnsiEscapeCodes||(t=kD(t)),t.length===0))return 0;let F=u.ambiguousIsNarrow?1:2,r=0;for(let{segment:e}of new Intl.Segmenter().segment(t)){let o=e.codePointAt(0);if(!(o<=31||o>=127&&o<=159||o>=768&&o<=879)){if(VD().test(e)){r+=2;continue}switch(YD.eastAsianWidth(e)){case"F":case"W":{r+=2;break}case"A":{r+=F;break}default:r+=1}}}return r}function HD(){return c.platform!=="win32"?c.env.TERM!=="linux":!!c.env.CI||!!c.env.WT_SESSION||!!c.env.TERMINUS_SUBLIME||c.env.ConEmuTask==="{cmd::Cmder}"||c.env.TERM_PROGRAM==="Terminus-Sublime"||c.env.TERM_PROGRAM==="vscode"||c.env.TERM==="xterm-256color"||c.env.TERM==="alacritty"||c.env.TERMINAL_EMULATOR==="JetBrains-JediTerm"}var KD={info:"cyan",fail:"red",success:"green",ready:"green",start:"magenta"},zD={0:"red",1:"yellow"},JD=HD(),A=(t,u)=>JD?t:u,k={error:A("\u2716","\xD7"),fatal:A("\u2716","\xD7"),ready:A("\u2714","\u221A"),warn:A("\u26A0","\u203C"),info:A("\u2139","i"),success:A("\u2714","\u221A"),debug:A("\u2699","D"),trace:A("\u2192","\u2192"),fail:A("\u2716","\xD7"),start:A("\u25D0","o"),log:""};function G(t){return Intl.Segmenter?ZD(t):m(t).length}var qD=class extends Z{formatStack(t){return`
`+V(t).map(u=>"  "+u.replace(/^at +/,F=>p.gray(F)).replace(/\((.+)\)/,(F,r)=>`(${p.cyan(r)})`)).join(`
`)}formatType(t,u,F){let r=KD[t.type]||zD[t.level]||"gray";if(u)return QD(r)(p.black(` ${t.type.toUpperCase()} `));let e=typeof k[t.type]=="string"?k[t.type]:t.icon||t.type;return e?XD(r)(e):""}formatLogObj(t,u){let[F,...r]=this.formatArgs(t.args,u).split(`
`);if(t.type==="box")return wD(I(F+(r.length>0?`
`+r.join(`
`):"")),{title:t.title?I(t.title):void 0,style:t.style});let e=this.formatDate(t.date,u),o=e&&p.gray(e),D=t.badge??t.level<2,E=this.formatType(t,D,u),i=t.tag?p.gray(t.tag):"",s,g=this.filterAndJoin([E,I(F)]),B=this.filterAndJoin(u.columns?[i,o]:[i]),f=(u.columns||0)-G(g)-G(B)-2;if(s=f>0&&(u.columns||0)>=80?g+" ".repeat(f)+B:(B?`${p.gray(`[${B}]`)} `:"")+g,s+=I(r.length>0?`
`+r.join(`
`):""),t.type==="trace"){let l=new Error("Trace: "+t.message);s+=this.formatStack(l.stack||"")}return D?`
`+s+`
`:s}};function I(t){return t.replace(/`([^`]+)`/gm,(u,F)=>p.cyan(F)).replace(/\s+_([^_]+)_\s+/gm,(u,F)=>` ${p.underline(F)} `)}function XD(t="white"){return p[t]||p.white}function QD(t="bgWhite"){return p[`bg${t[0].toUpperCase()}${t.slice(1)}`]||p.bgWhite}function Du(t={}){let u=uu();return process.env.CONSOLA_LEVEL&&(u=Number.parseInt(process.env.CONSOLA_LEVEL)??u),cD({level:u,defaults:{level:u},stdout:process.stdout,stderr:process.stderr,prompt:(...F)=>import("./prompt-RXWYKIU6-2SA66DOF.js").then(r=>r.prompt(...F)),reporters:t.reporters||[t.fancy??!(PD||q)?new qD:new Z],...t})}function uu(){return UD?n.debug:q?n.warn:n.info}var fu=Du();export{tu as a,Fu as b,eu as c,ru as d,ou as e,Cu as f,iu as g,nu as h,lu as i,au as j,Bu as k,pu as l,p as m,GD as n,HD as o,fu as p};