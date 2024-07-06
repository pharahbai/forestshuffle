import{F as k}from"./@fortawesome-6O_dDzom.js";import{_,u as c,F as S,a as f}from"./index-BDj-t-Rm.js";import{e as p}from"./vue-gtag-BUoqzPXJ.js";import{C as o,D as l,N as s,P as m,M as y,G as g,F as b,U as N,L as C,I,y as u,O,Z as P,_ as w}from"./@vue-nVQ0RcsF.js";import{O as F}from"./bootstrap-De39DNDK.js";import"./pinia-Cj4Lcor1.js";import"./vue-i18n-2F-3GSBZ.js";import"./@intlify-Y34EtYYP.js";import"./vue-router-AXQ5_F_T.js";import"./vue-toastification-BHb1mGnt.js";import"./register-service-worker-TYP_X6yW.js";import"./@popperjs-WhmJkuoZ.js";const B={name:"CardAmountEditor",components:{FontAwesomeIcon:k},props:{card:Object,forest:Object},computed:{playerName(){return this.forest.playerName}},methods:{addCard(){c().addCard(this.playerName,this.card.name);const e=this.$t(this.card.name,"en");p("cardAdded",{card:e})},removeCard(){c().removeCard(this.playerName,this.card.name)},paramAdd(e){e.type==="number"?c().addParam(this.playerName,this.card.name,e.name):e.type==="type"&&c().addSymbolCount(this.playerName,e.symbol)},paramSub(e){e.type==="number"?c().subParam(this.playerName,this.card.name,e.name):e.type==="type"&&c().subSymbolCount(this.playerName,e.symbol)}}},$={class:"row mt-2"},G={class:"fw-bold col-1"},j={key:0},L={class:"col-9 pe-0 text-nowrap overflow-x-hidden"},D=["src"],V=["src"],z={class:"ms-2"},M={class:"col-1 ps-0"},H={class:"col-1 text-start overflow-x-hidden"},T={key:0},U={class:"fw-bold offset-1 col-1"},q={key:0},K={key:1},R={class:"col-8 text-nowrap pe-0"},W=["onClick"],Z=["src","alt"],J={class:"ps-2"},Q={class:"col-1 ps-0"},X=["onClick"];function Y(e,r,n,v,h,t){return o(),l(b,null,[s("div",$,[s("div",G,[n.card.count>0?(o(),l("span",j,m(n.card.count)+"×",1)):y("",!0)]),s("div",L,[s("button",{onClick:r[0]||(r[0]=(...a)=>t.addCard&&t.addCard(...a)),class:g(["btn-"+n.card.symbols[0],"w-100 btn btn-primary btn-sm text-start"])},[(o(!0),l(b,null,N(n.card.symbols,(a,i)=>(o(),l("img",{src:"./img/symbols/"+a+".png",height:"20",class:g({"ms-1":i>0})},null,10,D))),256)),n.card.name.startsWith("roe")?(o(),l("img",{key:0,src:"./img/symbols/"+n.card.type+".png",height:"20",class:"ms-1"},null,8,V)):y("",!0),s("span",z,m(e.$t(n.card.name)),1)],2)]),s("div",M,[s("button",{class:"ms-1 btn btn-outline-danger btn-sm",onClick:r[1]||(r[1]=(...a)=>t.removeCard&&t.removeCard(...a))},"×")]),s("div",H,[n.card.count>0&&n.card.symbols.indexOf("butterfly")<0?(o(),l("span",T,m(n.card.points),1)):y("",!0)])]),(o(!0),l(b,null,N(n.card.params,(a,i)=>(o(),l("div",{class:g(["mt-1 row",{"mb-3":n.card.params.length===i+1}]),key:a.name},[s("div",U,[n.card.count>0&&a.type==="number"?(o(),l("span",q,m(a.value),1)):y("",!0),n.card.count>0&&a.type==="type"?(o(),l("span",K,m(n.forest[a.symbol+"Count"]),1)):y("",!0)]),s("div",R,[s("button",{onClick:d=>t.paramAdd(a),class:g(["btn-"+n.card.symbols[0],"btn btn-sm btn-primary text-start w-100"])},[a.type==="type"?(o(),l("img",{key:0,src:"./img/symbols/"+a.symbol+".png",alt:e.$t(a.symbol),height:"20"},null,8,Z)):y("",!0),s("span",J,m(e.$t(a.name)),1)],10,W)]),s("div",Q,[s("button",{class:"ms-1 btn btn-outline-danger btn-sm",onClick:d=>t.paramSub(a)},"×",8,X)])],2))),128))],64)}const A=_(B,[["render",Y],["__scopeId","data-v-76850f98"]]),ee={name:"SymbolAmountEditor",props:{playerName:String},computed:{forest(){return c().getForestByPlayerName(this.playerName)}},methods:{update(e,r){c().setSymbolCount(this.playerName,e,r)},add(e){c().addSymbolCount(this.playerName,e)}}},te={class:"d-flex justify-content-around"},se={class:"text-center"},re=["for","onClick"],ae=["src","alt"],ne=["id","value","onInput"];function oe(e,r,n,v,h,t){return o(),l("div",te,[(o(),l(b,null,N(["beech","linden","silverFir","horseChestnut","birch"],(a,i)=>s("div",se,[s("label",{for:"#"+a+"CountInput",onClick:d=>t.add(a)},[s("img",{src:"./img/symbols/"+a+".png",alt:a,width:"32",class:"img-fluid"},null,8,ae)],8,re),s("input",{id:a+"CountInput",value:t.forest[a+"Count"],onInput:d=>t.update(a,d.target.value),type:"number",class:"form-control amount-input",min:"0",onfocus:"this.select();",onclick:"this.select();"},null,40,ne)])),64))])}const le=_(ee,[["render",oe],["__scopeId","data-v-997b556a"]]),ie={name:"CardAmountEditorList",components:{SymbolAmountEditor:le,CardAmountEditor:A},props:{cards:Array,forest:S,symbol:String,symbol2:String,heading:String},computed:{totalPoints(){return this.symbol==="butterfly"?this.forest.butterflyPoints:this.cards.map(e=>e.points).reduce((e,r)=>r+=e,0)},filteredCards(){return f().alpineExpansion?this.cards:this.cards.filter(e=>e.symbols.indexOf("alps")<0)}}},de=["src","alt"],ce=["src","alt"],me={class:"ms-1 fs-5 flex-grow-1"},ue={class:"fs-5"};function fe(e,r,n,v,h,t){const a=C("CardAmountEditor");return o(),l(b,null,[s("div",I(e.$attrs,{class:"d-flex align-items-center"}),[s("img",{src:"./img/symbols/"+n.symbol+".png",height:"24",alt:e.$t(n.heading)},null,8,de),n.symbol2?(o(),l("img",{key:0,src:"./img/symbols/"+n.symbol2+".png",height:"24",alt:e.$t(n.heading)},null,8,ce)):y("",!0),s("div",me,m(e.$t(n.heading)),1),s("div",ue,m(t.totalPoints),1)],16),(o(!0),l(b,null,N(t.filteredCards,i=>(o(),l("div",{key:"cae_"+i.name,class:"d-block"},[u(a,{card:i,forest:n.forest},null,8,["card","forest"])]))),128))],64)}const ye=_(ie,[["render",fe]]),be={name:"PlayerNavigation",data(){return{editing:!1}},computed:{players(){return f().players.map(e=>({...e,points:c().getForestByPlayerName(e.name).points}))},currentPlayer(){return f().currentPlayer},points(){return c().getForestByPlayerName(this.currentPlayer.name).points}},methods:{addPlayer(){const e=this.$t("player")+" "+(this.players.length+1);c().addForest(e),f().addPlayer(e),f().selectPlayer(e),p("playerAdded",{totalPlayers:f().players.length})},selectPlayer(e){f().selectPlayer(e)},updatePlayerName(){this.editing=!1;const e=document.getElementById("playerNameInput").value,r=f().currentPlayer.name;c().getForestByPlayerName(r).playerName=e,f().currentPlayer.name=e,p("playerNameUpdated",{name:e})}}},he={class:"wrapper text-light"},pe={class:"player-nav d-flex"},ge=["onClick"],_e={class:"ms-2 fw-bold text-decoration-none"},ve={key:0,class:"current-player d-flex justify-content-between px-3 fs-1 fw-bold position-absolute w-100"},Ce={key:1,class:"d-flex"},Ne=["value"];function xe(e,r,n,v,h,t){return o(),l("div",he,[s("div",pe,[(o(!0),l(b,null,N(t.players,(a,i)=>(o(),l("div",{class:g(["player-nav-item border-light text-light",{"border-start":i>0}]),onClick:d=>t.selectPlayer(a.name)},[s("span",{class:g({"text-decoration-underline":a.name===t.currentPlayer.name})},m(a.name),3),s("span",_e,m(a.points),1)],10,ge))),256)),t.players.length<5?(o(),l("button",{key:0,class:"btn btn-sm btn-light py-0 ms-1 z-99",onClick:r[0]||(r[0]=(...a)=>t.addPlayer&&t.addPlayer(...a))},"+")):y("",!0)]),t.currentPlayer?(o(),l("div",ve,[h.editing?(o(),l("div",Ce,[s("input",{id:"playerNameInput",type:"text",value:t.currentPlayer.name,class:"form-control",onfocus:"this.select();",onclick:"this.select();"},null,8,Ne),s("button",{class:"btn btn-outline-light btn-sm ms-1",onClick:r[2]||(r[2]=(...a)=>t.updatePlayerName&&t.updatePlayerName(...a))},"OK")])):(o(),l("div",{key:0,onClick:r[1]||(r[1]=a=>h.editing=!0)},m(t.currentPlayer.name),1)),s("div",null,m(t.points),1)])):y("",!0)])}const ke=_(be,[["render",xe],["__scopeId","data-v-9860bbf3"]]),Pe="/forestshuffle/img/symbols/alps.png",we={name:"Navigation",components:{FontAwesomeIcon:k},computed:{alpineExpansion(){return f().alpineExpansion}},methods:{closeMenu(){F.getInstance(document.getElementById("navigation")).hide()},startNewGame(){c().reset(),this.closeMenu(),p("newGameStarted")},resetPlayers(){f().resetPlayers(),this.startNewGame(),this.closeMenu(),p("playerReset")},toggleAlpineExpansion(){f().toggleAlpineExpansion(),p("alpineExpansionToggled",{newState:this.alpineExpansion})}}},E=e=>(P("data-v-0eb69ba0"),e=e(),w(),e),Ae={class:"d-flex justify-content-center align-items-center burger-menu z-9999 bg-primary rounded-3 opacity-75","data-bs-toggle":"offcanvas","data-bs-target":"#navigation","aria-controls":"offcanvasExample"},Ee={id:"navigation",class:"offcanvas offcanvas-end z-9999",tabindex:"-1"},Se=E(()=>s("div",{class:"offcanvas-header"},[s("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),Ie={class:"offcanvas-body"},Oe=["checked"],Fe={class:"form-check-label ms-2 user-select-none"},Be=E(()=>s("img",{src:Pe,alt:"alps",height:"24"},null,-1)),$e={class:"d-flex justify-content-center w-100 mt-5"};function Ge(e,r,n,v,h,t){const a=C("font-awesome-icon");return o(),l(b,null,[s("div",Ae,[u(a,{class:"text-light",icon:"bars",role:"button"})]),s("div",Ee,[Se,s("div",Ie,[s("div",{class:"d-block btn btn-primary cursor-pointer",onClick:r[0]||(r[0]=(...i)=>t.startNewGame&&t.startNewGame(...i))},m(e.$t("startNewGame")),1),s("div",{class:"mt-2 d-block btn btn-warning",onClick:r[1]||(r[1]=(...i)=>t.resetPlayers&&t.resetPlayers(...i))},m(e.$t("resetPlayers")),1),s("div",{class:"d-flex mt-3 w-100 justify-content-center",onClick:r[3]||(r[3]=(...i)=>t.toggleAlpineExpansion&&t.toggleAlpineExpansion(...i))},[s("input",{class:"form-check form-check-input bg-primary",type:"checkbox",checked:t.alpineExpansion,onInput:r[2]||(r[2]=(...i)=>t.toggleAlpineExpansion&&t.toggleAlpineExpansion(...i))},null,40,Oe),s("div",Fe,[Be,O(m(e.$t("alpineExpansion")),1)])]),s("div",$e,[s("span",{class:"flag-icon flag-icon-gb-eng cursor-pointer",onClick:r[4]||(r[4]=i=>e.$i18n.locale="en")}),s("span",{class:"ms-2 flag-icon flag-icon-de cursor-pointer",onClick:r[5]||(r[5]=i=>e.$i18n.locale="de")}),s("span",{class:"ms-2 flag-icon flag-icon-fr cursor-pointer",onClick:r[6]||(r[6]=i=>e.$i18n.locale="fr")}),s("span",{class:"ms-2 flag-icon flag-icon-it cursor-pointer",onClick:r[7]||(r[7]=i=>e.$i18n.locale="it")})])])])],64)}const je=_(we,[["render",Ge],["__scopeId","data-v-0eb69ba0"]]),Le={components:{Navigation:je,PlayerNavigation:ke,CardAmountEditorList:ye,CardAmountEditor:A},computed:{playerName(){var e;return(e=f().currentPlayer)==null?void 0:e.name},forest(){return c().getForestByPlayerName(this.playerName)},cards(){return c().getForestByPlayerName(this.playerName).cards},trees(){return this.cards.filter(e=>e.symbols.indexOf("tree")>=0)},birds(){return this.cards.filter(e=>e.symbols.indexOf("bird")>=0)},butterflies(){return this.cards.filter(e=>e.symbols.indexOf("butterfly")>=0)},others(){return this.forest.cards.filter(e=>e.name==="redSquirrel")},plants(){return this.cards.filter(e=>e.symbols.indexOf("plant")>=0)},mushrooms(){return this.cards.filter(e=>e.symbols.indexOf("mushroom")>=0)},amphibians(){return this.cards.filter(e=>e.symbols.indexOf("amphibian")>=0)},insectsBottom(){return this.cards.filter(e=>e.symbols.indexOf("insect")>=0&&e.position==="bottom")},pawedBottom(){return this.cards.filter(e=>e.symbols.indexOf("pawedAnimal")>=0&&e.position==="bottom")},insectsSide(){return this.cards.filter(e=>e.symbols.indexOf("insect")>=0&&e.position==="side")},bats(){return this.cards.filter(e=>e.symbols.indexOf("bat")>=0)},deerAndCloven(){return this.cards.filter(e=>e.symbols.indexOf("deer")>=0||e.symbols.indexOf("clovenHoofedAnimal")>=0)},roeDeerPresent(){return this.forest.roeDeerPresent()},pawedSide(){return this.cards.filter(e=>e.symbols.indexOf("pawedAnimal")>=0&&e.position==="side")},points(){return c().getForestByPlayerName(this.playerName).points}},methods:{setCaveCount(e){c().setCaveCount(this.playerName,e)}},watch:{playerName:{handler(e){if(!e){const r=f();if(r.players.length===0){const n=this.$t("player")+" 1";r.addPlayer(n),r.selectPlayer(n),c().addForest(n)}else r.selectPlayer(r.players[0].name)}},immediate:!0}},mounted(){p("newGameStarted")}},De=e=>(P("data-v-93e361d0"),e=e(),w(),e),Ve={key:0,class:"container"},ze=De(()=>s("div",{class:"distance-keeper position-relative"},null,-1)),Me={class:"mt-4 fs-2 border-primary border-bottom"},He={class:"mt-4 fs-2 border-primary border-bottom"},Te={class:"mt-4 fs-2 border-primary border-bottom"},Ue={class:"mt-4 mb-5"},qe={class:"text-center"},Ke=["alt"],Re={class:"text-center"},We=["value"];function Ze(e,r,n,v,h,t){const a=C("PlayerNavigation"),i=C("Navigation"),d=C("CardAmountEditorList");return o(),l(b,null,[u(a),u(i),t.forest?(o(),l("div",Ve,[ze,u(d,{cards:t.trees,forest:t.forest,symbol:"tree",heading:"trees"},null,8,["cards","forest"]),s("div",Me,m(e.$t("tops")),1),u(d,{class:"mt-1",cards:t.birds,forest:t.forest,symbol:"bird",heading:"birds"},null,8,["cards","forest"]),u(d,{class:"mt-4",cards:t.butterflies,forest:t.forest,symbol:"butterfly",heading:"butterflies"},null,8,["cards","forest"]),u(d,{class:"mt-4",cards:t.others,forest:t.forest,symbol:"pawedAnimal",heading:"pawedAnimals"},null,8,["cards","forest"]),s("div",He,m(e.$t("bottoms")),1),u(d,{class:"mt-1",cards:t.plants,forest:t.forest,symbol:"plant",heading:"plants"},null,8,["cards","forest"]),u(d,{class:"mt-4",cards:t.mushrooms,forest:t.forest,symbol:"mushroom",heading:"mushrooms"},null,8,["cards","forest"]),u(d,{class:"mt-4",cards:t.amphibians,forest:t.forest,symbol:"amphibian",heading:"amphibians"},null,8,["cards","forest"]),u(d,{class:"mt-4",cards:t.insectsBottom,forest:t.forest,symbol:"insect",heading:"insects"},null,8,["cards","forest"]),u(d,{class:"mt-4",cards:t.pawedBottom,forest:t.forest,symbol:"pawedAnimal",heading:"pawedAnimals"},null,8,["cards","forest"]),s("div",Te,m(e.$t("sides")),1),u(d,{class:"mt-2",cards:t.insectsSide,forest:t.forest,symbol:"insect",heading:"insects"},null,8,["cards","forest"]),u(d,{class:"mt-4",cards:t.bats,forest:t.forest,symbol:"bat",heading:"bats"},null,8,["cards","forest"]),u(d,{class:"mt-4",cards:t.deerAndCloven,forest:t.forest,symbol:"deer",symbol2:"clovenHoofedAnimal",heading:"deerAndCloven"},null,8,["cards","forest"]),u(d,{class:"mt-4",cards:t.pawedSide,forest:t.forest,symbol:"pawedAnimal",heading:"pawedAnimals"},null,8,["cards","forest"]),s("div",Ue,[s("div",qe,[s("img",{src:"./img/cave.png",alt:e.$t("cave"),onClick:r[0]||(r[0]=x=>t.setCaveCount(t.forest.caveCount+1))},null,8,Ke)]),s("div",Re,[s("input",{value:t.forest.caveCount,onInput:r[1]||(r[1]=x=>t.setCaveCount(Number(x.target.value))),type:"number",class:"form-control text-center fs-5",min:"0",onfocus:"this.select();",onclick:"this.select();"},null,40,We)])])])):y("",!0)],64)}const it=_(Le,[["render",Ze],["__scopeId","data-v-93e361d0"]]);export{it as default};
