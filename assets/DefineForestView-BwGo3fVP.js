import{F as k}from"./@fortawesome-DsAnq1QW.js";import{_,u as m,F,a as b}from"./index-cICwnQbH.js";import{C as o,D as d,F as y,U as C,N as s,P as c,M as f,G as g,Z as N,_ as P,L as h,I,y as l}from"./@vue-nVQ0RcsF.js";import"./bootstrap-DGAcMehd.js";import"./@popperjs-WhmJkuoZ.js";import"./pinia-Cj4Lcor1.js";import"./vue-i18n-2F-3GSBZ.js";import"./@intlify-Y34EtYYP.js";import"./vue-router-AXQ5_F_T.js";import"./vue-toastification-BHb1mGnt.js";import"./vue-gtag-C-InrC_z.js";import"./register-service-worker-TYP_X6yW.js";const O={name:"SymbolAmountEditor",props:{playerName:String},computed:{forest(){return m().getForestByPlayerName(this.playerName)}},methods:{update(e,a){m().setSymbolCount(this.playerName,e,a)},add(e){m().addSymbolCount(this.playerName,e)}}},E={class:"d-flex justify-content-around"},B={class:"text-center"},$=["for","onClick"],j=["src","alt"],G=["id","value","onInput"];function D(e,a,n,v,p,t){return o(),d("div",E,[(o(),d(y,null,C(["beech","linden","silverFir","horseChestnut","birch"],(r,u)=>s("div",B,[s("label",{for:"#"+r+"CountInput",onClick:i=>t.add(r)},[s("img",{src:"./img/symbols/"+r+".png",alt:r,width:"32",class:"img-fluid"},null,8,j)],8,$),s("input",{id:r+"CountInput",value:t.forest[r+"Count"],onInput:i=>t.update(r,i.target.value),type:"number",class:"form-control amount-input",min:"0",onfocus:"this.select();",onclick:"this.select();"},null,40,G)])),64))])}const w=_(O,[["render",D],["__scopeId","data-v-997b556a"]]),L={name:"CardAmountEditor",components:{SymbolAmountEditor:w,FontAwesomeIcon:k},props:{card:Object,forest:Object},computed:{playerName(){return this.forest.playerName}},methods:{addCard(){m().addCard(this.playerName,this.card.name)},removeCard(){m().removeCard(this.playerName,this.card.name)},paramAdd(e){m().addParam(this.playerName,this.card.name,e)},paramSub(e){m().subParam(this.playerName,this.card.name,e)}}},z=e=>(N("data-v-d430584b"),e=e(),P(),e),V={class:"d-flex mt-2"},H={class:"fw-bold card-amount"},q={key:0},M={class:"flex-grow-1"},T=["src"],U={class:"ms-2"},Z={key:0},J={key:0,class:"mt-1 mb-3 d-flex align-items-center"},K=z(()=>s("div",{class:"card-amount"},null,-1)),Q={class:"fw-bold card-amount"},R={key:0},W={class:"flex-grow-1"},X=["onClick"],Y={class:"ms-2"},ee=["onClick"];function te(e,a,n,v,p,t){return o(),d(y,null,[s("div",V,[s("div",H,[n.card.count>0?(o(),d("span",q,c(n.card.count)+"×",1)):f("",!0)]),s("div",M,[s("button",{onClick:a[0]||(a[0]=(...r)=>t.addCard&&t.addCard(...r)),class:g(["btn-"+n.card.symbols[0],"btn btn-primary btn-sm btn-card"])},[s("img",{src:"./img/symbols/"+n.card.symbols[0]+".png",height:"20"},null,8,T),s("span",U,c(e.$t(n.card.name)),1)],2),s("button",{class:"ms-1 btn btn-outline-danger btn-sm",onClick:a[1]||(a[1]=(...r)=>t.removeCard&&t.removeCard(...r))},"×")]),s("div",null,[n.card.count>0&&n.card.symbols.indexOf("butterfly")<0?(o(),d("span",Z,c(n.card.points),1)):f("",!0)])]),(o(!0),d(y,null,C(n.card.params,r=>(o(),d("div",{class:"mt-1 mb-2",key:r.name},[r.type==="number"?(o(),d("div",J,[K,s("div",Q,[n.card.count>0?(o(),d("span",R,c(r.value),1)):f("",!0)]),s("div",W,[s("button",{onClick:u=>t.paramAdd(r.name),class:g(["btn-"+n.card.symbols[0],"btn btn-sm btn-primary btn-card"])},[s("span",Y,c(e.$t(r.name)),1)],10,X),s("button",{class:"ms-1 btn btn-outline-danger btn-sm",onClick:u=>t.paramSub(r.name)},"×",8,ee)])])):f("",!0)]))),128))],64)}const A=_(L,[["render",te],["__scopeId","data-v-d430584b"]]),se={name:"CardAmountEditorList",components:{SymbolAmountEditor:w,CardAmountEditor:A},props:{cards:Array,forest:F,symbol:String,symbol2:String,heading:String},computed:{totalPoints(){return this.symbol==="butterfly"?this.forest.butterflyPoints:this.cards.map(e=>e.points).reduce((e,a)=>a+=e,0)}}},re=["src","alt"],ae=["src","alt"],ne={class:"ms-1 fs-5 flex-grow-1"},oe={class:"fs-5"};function de(e,a,n,v,p,t){const r=h("CardAmountEditor");return o(),d(y,null,[s("div",I(e.$attrs,{class:"d-flex align-items-center"}),[s("img",{src:"./img/symbols/"+n.symbol+".png",height:"24",alt:e.$t(n.heading)},null,8,re),n.symbol2?(o(),d("img",{key:0,src:"./img/symbols/"+n.symbol2+".png",height:"24",alt:e.$t(n.heading)},null,8,ae)):f("",!0),s("div",ne,c(e.$t(n.heading)),1),s("div",oe,c(t.totalPoints),1)],16),(o(!0),d(y,null,C(n.cards,u=>(o(),d("div",{key:"cae_"+u.name,class:"d-block"},[l(r,{card:u,forest:n.forest},null,8,["card","forest"])]))),128))],64)}const le=_(se,[["render",de]]),ie={name:"PlayerNavigation",computed:{players(){return b().players.map(e=>({...e,points:m().getForestByPlayerName(e.name).points}))},currentPlayer(){return b().currentPlayer},points(){return m().getForestByPlayerName(this.currentPlayer.name).points}},methods:{addPlayer(){const e=this.$t("player")+" "+(this.players.length+1);m().addForest(e),b().addPlayer(e),b().selectPlayer(e)},selectPlayer(e){b().selectPlayer(e)}}},ce={class:"wrapper text-light"},me={class:"player-nav d-flex"},ue=["onClick"],fe={class:"ms-2 fw-bold text-decoration-none"},be={key:0,class:"current-player d-flex justify-content-between px-3 fs-1 fw-bold position-absolute w-100"};function ye(e,a,n,v,p,t){return o(),d("div",ce,[s("div",me,[(o(!0),d(y,null,C(t.players,(r,u)=>(o(),d("div",{class:g(["player-nav-item border-light text-light",{"border-start":u>0}]),onClick:i=>t.selectPlayer(r.name)},[s("span",{class:g({"text-decoration-underline":r.name===t.currentPlayer.name})},c(r.name),3),s("span",fe,c(r.points),1)],10,ue))),256)),t.players.length<5?(o(),d("button",{key:0,class:"btn btn-sm btn-light py-0 ms-1 z-99",onClick:a[0]||(a[0]=(...r)=>t.addPlayer&&t.addPlayer(...r))},"+")):f("",!0)]),t.currentPlayer?(o(),d("div",be,[s("div",null,c(t.currentPlayer.name),1),s("div",null,c(t.points),1)])):f("",!0)])}const he=_(ie,[["render",ye],["__scopeId","data-v-3e5e9593"]]),_e={name:"Navigation",components:{FontAwesomeIcon:k},methods:{startNewGame(){m().reset()},resetPlayers(){b().resetPlayers(),this.startNewGame()}}},ve=e=>(N("data-v-4447aeb0"),e=e(),P(),e),pe={class:"position-fixed bottom-0 d-flex justify-content-center w-100 z-9999 bottom-nav"},ge={id:"navigation",class:"offcanvas offcanvas-bottom z-9999",tabindex:"-1"},Ce=ve(()=>s("div",{class:"offcanvas-header"},[s("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),Ne={class:"offcanvas-body"},Pe={class:"d-flex justify-content-center"};function we(e,a,n,v,p,t){const r=h("font-awesome-icon");return o(),d(y,null,[s("div",pe,[l(r,{class:"text-info aligned-bottom",icon:"caret-up",size:"5x",role:"button","data-bs-toggle":"offcanvas","data-bs-target":"#navigation","aria-controls":"offcanvasExample"})]),s("div",ge,[Ce,s("div",Ne,[s("div",Pe,[s("div",{class:"btn btn-primary",onClick:a[0]||(a[0]=(...u)=>t.startNewGame&&t.startNewGame(...u))},c(e.$t("startNewGame")),1),s("div",{class:"ms-2 btn btn-warning",onClick:a[1]||(a[1]=(...u)=>t.resetPlayers&&t.resetPlayers(...u))},c(e.$t("resetPlayers")),1)])])])],64)}const xe=_(_e,[["render",we],["__scopeId","data-v-4447aeb0"]]),ke={components:{Navigation:xe,PlayerNavigation:he,SymbolAmountEditor:w,CardAmountEditorList:le,CardAmountEditor:A},computed:{playerName(){var e;return(e=b().currentPlayer)==null?void 0:e.name},forest(){return m().getForestByPlayerName(this.playerName)},cards(){return m().getForestByPlayerName(this.playerName).cards},trees(){return this.cards.filter(e=>e.symbols.indexOf("tree")>=0)},birds(){return this.cards.filter(e=>e.symbols.indexOf("bird")>=0)},butterflies(){return this.cards.filter(e=>e.symbols.indexOf("butterfly")>=0)},others(){return this.forest.cards.filter(e=>e.name==="redSquirrel")},plants(){return this.cards.filter(e=>e.symbols.indexOf("plant")>=0)},mushrooms(){return this.cards.filter(e=>e.symbols.indexOf("mushroom")>=0)},amphibians(){return this.cards.filter(e=>e.symbols.indexOf("amphibian")>=0)},insectsBottom(){return this.cards.filter(e=>e.symbols.indexOf("insect")>=0&&e.position==="bottom")},pawedBottom(){return this.cards.filter(e=>e.symbols.indexOf("pawedAnimal")>=0&&e.position==="bottom")},insectsSide(){return this.cards.filter(e=>e.symbols.indexOf("insect")>=0&&e.position==="side")},bats(){return this.cards.filter(e=>e.symbols.indexOf("bat")>=0)},deerAndCloven(){return this.cards.filter(e=>e.symbols.indexOf("deer")>=0||e.symbols.indexOf("clovenHoofedAnimal")>=0)},roeDeerPresent(){return this.forest.roeDeerPresent()},pawedSide(){return this.cards.filter(e=>e.symbols.indexOf("pawedAnimal")>=0&&e.position==="side")},points(){return m().getForestByPlayerName(this.playerName).points}},methods:{setCaveCount(e){m().setCaveCount(this.playerName,e)}},watch:{playerName:{handler(e){if(!e){const a=b();if(a.players.length===0){const n=this.$t("player")+" 1";a.addPlayer(n),a.selectPlayer(n),m().addForest(n)}else a.selectPlayer(a.players[0].name)}},immediate:!0}}},Ae=e=>(N("data-v-e1bf6df0"),e=e(),P(),e),Se={key:0,class:"container"},Fe=Ae(()=>s("div",{class:"distance-keeper position-relative"},null,-1)),Ie={class:"mt-4 fs-2 border-primary border-bottom"},Oe={class:"mt-4 fs-2 border-primary border-bottom"},Ee={class:"mt-4 fs-2 border-primary border-bottom"},Be={key:0,class:"d-flex justify-content-center align-items-center"},$e={class:"fs-5 d-none d-md-flex me-md-2"},je={class:"mt-4 mb-5"},Ge={class:"text-center"},De=["alt"],Le={class:"text-center"},ze=["value"];function Ve(e,a,n,v,p,t){const r=h("PlayerNavigation"),u=h("Navigation"),i=h("CardAmountEditorList"),S=h("SymbolAmountEditor");return o(),d(y,null,[l(r),l(u),t.forest?(o(),d("div",Se,[Fe,l(i,{cards:t.trees,forest:t.forest,symbol:"tree",heading:"trees"},null,8,["cards","forest"]),s("div",Ie,c(e.$t("tops")),1),l(i,{class:"mt-1",cards:t.birds,forest:t.forest,symbol:"bird",heading:"birds"},null,8,["cards","forest"]),l(i,{class:"mt-4",cards:t.butterflies,forest:t.forest,symbol:"butterfly",heading:"butterflies"},null,8,["cards","forest"]),l(i,{class:"mt-4",cards:t.others,forest:t.forest,symbol:"pawedAnimal",heading:"pawedAnimals"},null,8,["cards","forest"]),s("div",Oe,c(e.$t("bottoms")),1),l(i,{class:"mt-1",cards:t.plants,forest:t.forest,symbol:"plant",heading:"plants"},null,8,["cards","forest"]),l(i,{class:"mt-4",cards:t.mushrooms,forest:t.forest,symbol:"mushroom",heading:"mushrooms"},null,8,["cards","forest"]),l(i,{class:"mt-4",cards:t.amphibians,forest:t.forest,symbol:"amphibian",heading:"amphibians"},null,8,["cards","forest"]),l(i,{class:"mt-4",cards:t.insectsBottom,forest:t.forest,symbol:"insect",heading:"insects"},null,8,["cards","forest"]),l(i,{class:"mt-4",cards:t.pawedBottom,forest:t.forest,symbol:"pawedAnimal",heading:"pawedAnimals"},null,8,["cards","forest"]),s("div",Ee,c(e.$t("sides")),1),l(i,{class:"mt-2",cards:t.insectsSide,forest:t.forest,symbol:"insect",heading:"insects"},null,8,["cards","forest"]),l(i,{class:"mt-4",cards:t.bats,forest:t.forest,symbol:"bat",heading:"bats"},null,8,["cards","forest"]),l(i,{class:"mt-4",cards:t.deerAndCloven,forest:t.forest,symbol:"deer",symbol2:"clovenHoofedAnimal",heading:"deerAndCloven"},null,8,["cards","forest"]),t.roeDeerPresent?(o(),d("div",Be,[s("div",$e,c(e.$t("treeTypeCount")),1),l(S,{class:"mt-2","player-name":t.playerName},null,8,["player-name"])])):f("",!0),l(i,{class:"mt-4",cards:t.pawedSide,forest:t.forest,symbol:"pawedAnimal",heading:"pawedAnimals"},null,8,["cards","forest"]),s("div",je,[s("div",Ge,[s("img",{src:"./img/cave.png",alt:e.$t("cave"),onClick:a[0]||(a[0]=x=>t.setCaveCount(t.forest.caveCount+1))},null,8,De)]),s("div",Le,[s("input",{value:t.forest.caveCount,onInput:a[1]||(a[1]=x=>t.setCaveCount(Number(x.target.value))),type:"number",class:"form-control text-center fs-5",min:"0",onfocus:"this.select();",onclick:"this.select();"},null,40,ze)])])])):f("",!0)],64)}const Ye=_(ke,[["render",Ve],["__scopeId","data-v-e1bf6df0"]]);export{Ye as default};
