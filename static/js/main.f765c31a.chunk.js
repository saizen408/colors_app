(this["webpackJsonpcolors-app"]=this["webpackJsonpcolors-app"]||[]).push([[0],{309:function(e,a,t){e.exports=t.p+"static/media/bg4.802beda6.svg"},311:function(e,a,t){e.exports=t.p+"static/media/bg.83fc06a1.svg"},316:function(e,a,t){e.exports=t.p+"static/media/bg2.5b81fc60.svg"},390:function(e,a,t){e.exports=t(773)},395:function(e,a,t){},584:function(e,a,t){},64:function(e,a,t){e.exports=t.p+"static/media/bg3.c7607c2e.svg"},773:function(e,a,t){"use strict";t.r(a);var o,n=t(0),r=t.n(n),l=t(12),i=t.n(l),c=t(41),s=(t(395),t(56)),m=t(27),d=t(9),u=t(29),h=t(28),p=t(3),g=t(30),b=t(66),f=t(778),v=t(777),C=t(5),y=t(303),E=t.n(y),x=t(7),j=t.n(x),k=t(45),w=t.n(k),O=function(e){return"@media (max-width: ".concat({xs:"576px",sm:"768px",md:"991px",lg:"1200px",xl:"1600px"}[e],")")},S={ColorBox:(o={width:"20%",height:function(e){return e.showingFullPalette?"25%":"50%"},margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover button":{opacity:1}},Object(C.a)(o,O("lg"),{width:"25%",height:function(e){return e.showingFullPalette?"20%":"33.3333%"}}),Object(C.a)(o,O("md"),{width:"50%",height:function(e){return e.showingFullPalette?"10%":"20%"}}),Object(C.a)(o,O("xs"),{width:"100%",height:function(e){return e.showingFullPalette?"5%":"10%"}}),o),boxContent:{position:"absolute",width:"100%",left:" 0px",bottom:" 0px",padding:"10px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},copyOverlay:{opacity:"0",zIndex:"0",width:"100%",height:"100%",transition:"transform 0.6s ease-in-out",transform:"scale(0.1)"},showOverlay:{opacity:"1",transform:"scale(50)",zIndex:"10",position:"absolute"},copyMessage:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"4rem",transform:"scale(0.1)",opacity:" 0",zIndex:"-5",color:"white","& h1":Object(C.a)({fontWeight:"400px",textShadow:"1px 2px black",background:"rgba(255, 255, 255, 0.2)",width:"100%",textAlign:"center",marginBottom:" 0",padding:"1rem"},O("xs"),{fontSize:"5rem"}),"& p":{fontSize:"2rem",fontWeight:"100"}},showMessage:{opacity:"1",transform:"scale(1)",zIndex:"25",transition:"all 0.4s ease-in-out",transitionDelay:"0.3s"},copyText:{color:function(e){return w()(e.background).luminance()>=.65?"black":"white"}},colorName:{color:function(e){return w()(e.background).luminance()<=.08?"white":"black"}},seeMore:{color:function(e){return w()(e.background).luminance()>=.65?"rgba(0, 0, 0, 0.5)":"white"},background:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:"0px",bottom:"0px",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase"},copyButton:{color:function(e){return w()(e.background).luminance()>=.65?"rgba(0, 0, 0, 0.5)":"white"},width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none",opacity:0}},N=t(53),P=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={copied:!1},t.changeCopyState=t.changeCopyState.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"changeCopyState",value:function(){var e=this;this.setState({copied:!0},(function(){setTimeout((function(){return e.setState({copied:!1})}),1500)}))}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.background,o=e.moreUrl,n=e.showingFullPalette,l=e.classes,i=this.state.copied;return r.a.createElement(E.a,{text:t,onCopy:this.changeCopyState},r.a.createElement("div",{style:{background:t},className:l.ColorBox},r.a.createElement("div",{style:{background:t},className:j()(l.copyOverlay,Object(C.a)({},l.showOverlay,i))}),r.a.createElement("div",{className:j()(l.copyMessage,Object(C.a)({},l.showMessage,i))},r.a.createElement("h1",null,"Copied!"),r.a.createElement("p",{className:l.copyText},t)),r.a.createElement("div",{className:l.boxContent},r.a.createElement("span",{className:l.colorName},a)),r.a.createElement("button",{className:l.copyButton,style:{transition:"all 0.3s ease-in-out"}},"Copy"),n&&r.a.createElement(c.b,{to:o,onClick:function(e){return e.stopPropagation()}},r.a.createElement("span",{className:l.seeMore},"More"))))}}]),a}(n.Component),F=Object(N.a)(S)(P),B=t(305),D=t(33),I=t(112),A=t.n(I),L=t(92),T=t.n(L),G=t(144),R=t.n(G),M=t(156),z=t.n(M),U=t(63),H=t.n(U),V=t(224),W=t(158),q=(t(471),t(64)),J=t.n(q),Y=t(309),K=t.n(Y),_={Navbar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh",backgroundColor:"#e4e8e9",backgroundImage:"url(".concat(J.a,")")},logo:Object(C.a)({marginRight:"15px",padding:"0 13px",backgroundColor:"#e4e8e9",backgroundImage:"url(".concat(K.a,")"),fontFamily:"Roboto",fontWeight:500,height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},O("xs"),{display:"none"}),slider:Object(C.a)({width:"340px",margin:"0 10px",display:"inline-block","& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-rail":{height:"8px"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover":{backgroundColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",width:"13px",height:"13px",marginLeft:"-7px",marginTop:"-3px"}},O("sm"),{width:"150px"}),selectContainer:{marginLeft:"auto",marginRight:"1rem"}},Q=V.a.Handle,X=function(e){var a=e.value,t=e.dragging,o=e.index,n=Object(B.a)(e,["value","dragging","index"]);return r.a.createElement(W.a,{prefixCls:"rc-slider-tooltip",overlay:a,visible:t,placement:"top",key:o},r.a.createElement(Q,Object.assign({value:a},n)))},Z={width:340,margin:7},$=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={format:"hex",open:!1},t.handleFormatChange=t.handleFormatChange.bind(Object(p.a)(t)),t.closeSnackbar=t.closeSnackbar.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"handleFormatChange",value:function(e){this.setState({format:e.target.value,open:!0}),this.props.handleChange(e.target.value)}},{key:"closeSnackbar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,a=e.level,t=e.changeLevel,o=e.showingAllColors,n=e.showingLevels,l=e.classes,i=this.state,s=i.format,m=i.open;return r.a.createElement("header",{className:l.Navbar},r.a.createElement("div",{className:l.logo},r.a.createElement(c.b,{to:"/"},"reactColorPicker")),n&&r.a.createElement("span",null,"Level: ",a),o&&r.a.createElement("div",{style:Z},r.a.createElement("div",null,r.a.createElement(V.a,{defaultValue:a,handle:X,min:100,max:900,step:100,onAfterChange:t,handleStyle:{backgroundColor:"#130e3a",outline:"none",border:"2px solid #130e3"},railStyle:{backgroundColor:"#d6d8db"}}))),r.a.createElement("div",{className:l.selectContainer},r.a.createElement(A.a,{value:s,onChange:this.handleFormatChange},r.a.createElement(T.a,{value:"hex"},"HEX - #ffffff"),r.a.createElement(T.a,{value:"rgb"},"RGB - rgb(255,255,255)"),r.a.createElement(T.a,{value:"rgba"},"RGBA - rgba(255,255,255, 1.0)"))),r.a.createElement(R.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:m,autoHideDuration:3e3,message:r.a.createElement("span",{id:"mesage-id"},"Format changed to ",s.toUpperCase()),ContentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackbar,action:[r.a.createElement(H.a,{onClick:this.closeSnackbar,color:"inherit",key:"close","aria-label":"close"},r.a.createElement(z.a,null))]}))}}]),a}(n.Component),ee=Object(D.withStyles)(_)($),ae={PaletteFooter:{backgroundColor:"#ffffff",backgroundImage:"url(".concat(J.a,")"),height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.5rem",margin:"1rem"}};var te,oe,ne,re=Object(N.a)(ae)((function(e){var a=e.paletteName,t=e.emoji,o=e.classes;return r.a.createElement("footer",{className:o.PaletteFooter},a,r.a.createElement("span",{className:o.emoji},t))})),le={Palette:{height:"100vh",display:"flex",flexDirection:"column"},colors:{height:"90%"},goBack:(te={width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px",opacity:1,backgroundColor:"black","& a":{color:"white",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none"}},Object(C.a)(te,O("lg"),{width:"25%",height:"33.3333%"}),Object(C.a)(te,O("md"),{width:"50%",height:"20%"}),Object(C.a)(te,O("xs"),{width:"100%",height:"10%"}),te)},ie=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={level:500,format:"hex"},t.changeLevel=t.changeLevel.bind(Object(p.a)(t)),t.changeFormat=t.changeFormat.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.palette,a=e.colors,t=e.paletteName,o=e.emoji,n=e.id,l=this.props.classes,i=this.state,c=i.level,s=i.format,m=a[c].map((function(e){return r.a.createElement(F,{background:e[s],name:e.name,key:e.id,moreUrl:"/palette/".concat(n,"/").concat(e.id),showingFullPalette:!0})}));return r.a.createElement("div",{className:l.Palette},r.a.createElement(ee,{level:c,changeLevel:this.changeLevel,handleChange:this.changeFormat,showingAllColors:!0,showingLevels:!0}),r.a.createElement("div",{className:l.colors},m),r.a.createElement(re,{paletteName:t,emoji:o}))}}]),a}(n.Component),ce=Object(N.a)(le)(ie),se=t(157),me=t.n(se),de=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).deletePalette=t.deletePalette.bind(Object(p.a)(t)),t.handleClick=t.handleClick.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"deletePalette",value:function(e){e.stopPropagation(),this.props.openDialog(this.props.id)}},{key:"handleClick",value:function(){this.props.goToPalette(this.props.id)}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.paletteName,o=e.emoji,n=e.colors.map((function(e){return r.a.createElement("div",{className:a.miniColor,style:{backgroundColor:e.color},key:e.name})}));return r.a.createElement("div",{className:a.root,onClick:this.handleClick},r.a.createElement(me.a,{className:a.deleteIcon,style:{transition:"all 0.3s ease-in-out"},onClick:this.deletePalette}),r.a.createElement("div",{className:a.colors},n),r.a.createElement("h5",{className:a.title},t," ",r.a.createElement("span",{className:a.emoji},o)))}}]),a}(n.PureComponent),ue=Object(D.withStyles)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:1}},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"},deleteIcon:{color:"white",backgroundColor:"#eb3d30",width:"20px",height:"20px",position:"absolute",right:"0px",top:"0px",padding:"10px",zIndex:"10",opacity:"0"}})(de),he=t(76),pe=t.n(he),ge=t(113),be=t.n(ge),fe=t(90),ve=t.n(fe),Ce=t(114),ye=t.n(Ce),Ee=t(115),xe=t.n(Ee),je=t(116),ke=t.n(je),we=t(312),Oe=t.n(we),Se=t(77),Ne=t.n(Se),Pe=t(223),Fe=t.n(Pe),Be=t(155),De=t.n(Be),Ie=t(311),Ae={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 500ms ease-out"}},root:{height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center",overflow:"scroll",backgroundColor:"#ffffff",backgroundImage:"url(".concat(t.n(Ie).a,")")},heading:{fontSize:"1.7rem"},container:(oe={width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},Object(C.a)(oe,O("xl"),{width:"70%"}),Object(C.a)(oe,O("xs"),{width:"65%"}),oe),nav:{display:"flex",width:"100%",justifyContent:"space-between",color:"white",alignItems:"center","& a":{color:"white"}},palettes:(ne={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"2.5rem"},Object(C.a)(ne,O("md"),{gridTemplateColumns:"repeat(2, 50%)"}),Object(C.a)(ne,O("xs"),{gridTemplateColumns:"repeat(1, 100%)",gridGap:"1.3rem"}),ne)},Le=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={openDeleteDialog:!1,deletingId:""},t.openDialog=t.openDialog.bind(Object(p.a)(t)),t.closeDialog=t.closeDialog.bind(Object(p.a)(t)),t.handleDelete=t.handleDelete.bind(Object(p.a)(t)),t.goToPalette=t.goToPalette.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"openDialog",value:function(e){this.setState({openDeleteDialog:!0,deletingId:e})}},{key:"closeDialog",value:function(){this.setState({openDeleteDialog:!1,deletingId:""})}},{key:"goToPalette",value:function(e){this.props.history.push("/palette/".concat(e))}},{key:"handleDelete",value:function(){this.props.deletePalette(this.state.deletingId),this.closeDialog()}},{key:"render",value:function(){var e=this,a=this.props,t=a.palettes,o=a.classes,n=this.state.openDeleteDialog;return r.a.createElement("div",{className:o.root},r.a.createElement("div",{className:o.container},r.a.createElement("nav",{className:o.nav},r.a.createElement("h1",{className:o.heading},"React Colors"),r.a.createElement(c.b,{to:"/palette/new"},"Create Palette")),r.a.createElement(f.a,{className:o.palettes},t.map((function(a){return r.a.createElement(v.a,{key:a.id,classNames:"fade",timeout:500},r.a.createElement(ue,Object.assign({},a,{goToPalette:e.goToPalette,openDialog:e.openDialog,key:a.id,id:a.id})))})))),r.a.createElement(pe.a,{open:n,"aria-labelledby":"delete-dialog-title",onClose:this.closeDialog},r.a.createElement(Ne.a,{id:"delete-dialog-title"},"Delete This Palette?"),r.a.createElement(be.a,null,r.a.createElement(ve.a,{button:!0,onClick:this.handleDelete},r.a.createElement(ye.a,null,r.a.createElement(xe.a,{style:{backgroundColor:Fe.a[100],color:Fe.a[600]}},r.a.createElement(Oe.a,null))),r.a.createElement(ke.a,{primary:"Delete"})),r.a.createElement(ve.a,{button:!0,onClick:this.closeDialog},r.a.createElement(ye.a,null,r.a.createElement(xe.a,{style:{backgroundColor:De.a[100],color:De.a[600]}},r.a.createElement(z.a,null))),r.a.createElement(ke.a,{primary:"Cancel"})))))}}]),a}(n.Component),Te=Object(D.withStyles)(Ae)(Le),Ge=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e)))._shades=t.gatherShades(t.props.palette,t.props.colorId),t.state={format:"hex"},t.changeFormat=t.changeFormat.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"gatherShades",value:function(e,a){var t=[],o=e.colors;for(var n in o)t=t.concat(o[n].filter((function(e){return e.id===a})));return t.slice(1)}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.state.format,a=this.props.palette,t=a.paletteName,o=a.emoji,n=a.id,l=this.props.classes,i=this._shades.map((function(a){return r.a.createElement(F,{key:a.name,name:a.name,background:a[e],showingFullPalette:!1})}));return r.a.createElement("div",{className:l.Palette},r.a.createElement(ee,{handleChange:this.changeFormat,showingAllColors:!1,showingLevel:!1}),r.a.createElement("div",{className:l.colors},i,r.a.createElement("div",{className:l.goBack},r.a.createElement(c.b,{to:"/palette/".concat(n)},"GO BACK"))),r.a.createElement(re,{paletteName:t,emoji:o}))}}]),a}(n.Component),Re=Object(N.a)(le)(Ge);t(584);var Me,ze=function(e){var a=e.children;return r.a.createElement("section",{className:"page"},a)},Ue=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],He=t(91),Ve=t.n(He),We=t(147),qe=t.n(We),Je=t(145),Ye=t.n(Je),Ke=t(146),_e=t.n(Ke),Qe=t(54),Xe=(t(600),t(319)),Ze=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).handleClickOpen=function(){t.setState({open:!0})},t.handleClose=function(){t.setState({open:!1})},t.state={stage:"form",newPaletteName:""},t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.showEmojiPicker=t.showEmojiPicker.bind(Object(p.a)(t)),t.savePalette=t.savePalette.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;Qe.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(a){return e.props.palettes.every((function(e){return e.paletteName.toLowerCase()!==a.toLowerCase()}))})),Qe.ValidatorForm.addValidationRule("blockedPaletteName",(function(e){return"new"!==e.toLowerCase()}))}},{key:"handleChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"showEmojiPicker",value:function(){this.setState({stage:"emoji"})}},{key:"savePalette",value:function(e){var a={paletteName:this.state.newPaletteName,emoji:e.native};this.props.handleSubmit(a),this.setState({stage:""})}},{key:"render",value:function(){var e=this.state,a=e.newPaletteName,t=e.stage,o=this.props.hideForm;return r.a.createElement("div",null,r.a.createElement(pe.a,{open:"emoji"===t,onClose:o},r.a.createElement(Ne.a,{id:"form-dialog-title"},"Choose a Palette Emoji"),r.a.createElement(Xe.a,{title:"Pick a Palette Emoji",onSelect:this.savePalette})),r.a.createElement(pe.a,{open:"form"===t,"aria-labelledby":"form-dialog-title",onClose:o},r.a.createElement(Ne.a,{id:"form-dialog-title"},"Choose a Palette Name"),r.a.createElement(Qe.ValidatorForm,{onSubmit:this.showEmojiPicker},r.a.createElement(Ye.a,null,r.a.createElement(_e.a,null,"Please enter a name for your new beautiful palette. Make sure it's unique!"),r.a.createElement(Qe.TextValidator,{label:"Palette Name",value:a,name:"newPaletteName",onChange:this.handleChange,fullWidth:!0,margin:"normal",validators:["required","isPaletteNameUnique","blockedPaletteName"],errorMessages:["Enter Palette Name","Name already in use","Please choose a different name"]})),r.a.createElement(qe.a,null,r.a.createElement(Ve.a,{onClick:o,color:"primary"},"Cancel"),r.a.createElement(Ve.a,{variant:"contained",color:"primary",type:"submit"},"Save Palette")))))}}]),a}(n.Component),$e=t(148),ea=t.n($e),aa=t(149),ta=t.n(aa),oa=t(150),na=t.n(oa),ra=t(52),la=t.n(ra),ia=t(314),ca=t.n(ia),sa=t(65),ma=function(e){return{root:{display:"flex"},hide:{display:"none"},appBar:{backgroundColor:"#e4e8e9",backgroundImage:"url(".concat(J.a,")"),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"64px","& h6":{fontWeight:700}},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},navBtns:Object(C.a)({marginRight:"1rem","& a":{textDecoration:"none"}},O("xs"),{marginRight:"0.5rem"}),button:Object(C.a)({margin:"0 0.5rem"},O("xs"),{margin:"0, 0.2rem",padding:"0.3rem"})}},da=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={newPaletteName:"",formShowing:!1},t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.showForm=t.showForm.bind(Object(p.a)(t)),t.hideForm=t.hideForm.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"showForm",value:function(){this.setState({formShowing:!0})}},{key:"hideForm",value:function(){this.setState({formShowing:!1})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.open,o=e.palettes,n=e.handleSubmit,l=e.handleDrawerOpen,i=this.state.formShowing;return r.a.createElement("div",null,r.a.createElement(ea.a,null),r.a.createElement(ta.a,{position:"fixed",color:"default",className:j()(a.appBar,Object(C.a)({},a.appBarShift,t))},r.a.createElement(na.a,{disableGutters:!t},r.a.createElement(H.a,{color:"inherit","aria-label":"Open drawer",onClick:l,className:j()(a.menuButton,Object(C.a)({},a.hide,t))},r.a.createElement(ca.a,null)),r.a.createElement(la.a,{variant:"h6",color:"inherit",noWrap:!0},"Create A Palette")),r.a.createElement("div",{className:a.navBtns},r.a.createElement(c.b,{to:"/"},r.a.createElement(sa.a,{variant:"contained",color:"secondary",className:a.button},"Go Back")),r.a.createElement(sa.a,{variant:"contained",color:"primary",onClick:this.showForm,className:a.button},"Save"))),i&&r.a.createElement(Ze,{palettes:o,handleSubmit:n,hideForm:this.hideForm}))}}]),a}(n.Component),ua=Object(D.withStyles)(ma,{withTheme:!0})(da),ha=t(151),pa=t.n(ha),ga=t(152),ba=t.n(ga),fa=t(318),va=t.n(fa),Ca=t(315),ya={picker:{width:"100% !important",marginTop:"2rem"},addColor:{width:"100%",padding:"1rem",marginTop:"1rem",fontSize:"2rem"},colorNameInput:{width:"100%",height:"70px"}},Ea=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={currentColor:"teal",newColorName:""},t.updateCurrentColor=t.updateCurrentColor.bind(Object(p.a)(t)),t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;Qe.ValidatorForm.addValidationRule("isColorNameUnique",(function(a){return e.props.colors.every((function(e){return e.name.toLowerCase()!==a.toLowerCase()}))})),Qe.ValidatorForm.addValidationRule("isColorUnique",(function(a){return e.props.colors.every((function(a){return a.color!==e.state.currentColor}))}))}},{key:"updateCurrentColor",value:function(e){this.setState({currentColor:e.hex})}},{key:"handleChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e={color:this.state.currentColor,name:this.state.newColorName};this.props.addNewColor(e),this.setState({newColorName:""})}},{key:"render",value:function(){var e=this.props,a=e.paletteIsFull,t=e.classes,o=this.state,n=o.currentColor,l=o.newColorName;return r.a.createElement("div",null,r.a.createElement(Ca.ChromePicker,{color:n,onChangeComplete:this.updateCurrentColor,className:t.picker}),r.a.createElement(Qe.ValidatorForm,{onSubmit:this.handleSubmit,ref:"form",instantValidate:!1},r.a.createElement(Qe.TextValidator,{value:l,className:t.colorNameInput,label:"Color Name",name:"newColorName",variant:"filled",margin:"normal",onChange:this.handleChange,validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["Enter a color name","Color name must be unique!","Color already in use!"]}),r.a.createElement(sa.a,{variant:"contained",type:"submit",color:"primary",disabled:a,className:t.addColor,style:{backgroundColor:a?"Grey":n}},a?"Palette Full":"Add Color")))}}]),a}(n.Component),xa=Object(D.withStyles)(ya)(Ea),ja=t(94),ka={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 500ms ease-out"}},root:(Me={width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover svg":{color:"white",transform:"scale(1.5)"}},Object(C.a)(Me,O("lg"),{width:"25%",height:"20%"}),Object(C.a)(Me,O("md"),{width:"50%",height:"10%"}),Object(C.a)(Me,O("sm"),{width:"100%",height:"5%"}),Me),boxContent:{position:"absolute",width:"100%",left:" 0px",bottom:" 0px",padding:"10px",color:function(e){return w()(e.color).luminance()<=.08?"rgba(255,255,255,0.8)":"rgba(0,0,0,0.6)"},letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between"},deleteIcon:{transition:"all 0.3s ease-in-out"}},wa=Object(ja.b)((function(e){var a=e.classes,t=e.handleClick,o=e.name,n=e.color;return r.a.createElement("div",{className:a.root,style:{backgroundColor:n}},r.a.createElement("div",{className:a.boxContent},r.a.createElement("span",null,o),r.a.createElement(me.a,{className:a.deleteIcon,onClick:t})))})),Oa=Object(N.a)(ka)(wa),Sa=t(316),Na=t.n(Sa),Pa=Object(ja.a)((function(e){var a=e.colors,t=e.removeColor;return r.a.createElement(f.a,{style:{height:"100%",backgroundColor:"#000000",backgroundImage:"url(".concat(Na.a,")")}},a.map((function(e,a){return r.a.createElement(v.a,{key:e.name,classNames:"fade",timeout:250},r.a.createElement(Oa,{index:a,key:e.name,color:e.color,name:e.name,handleClick:function(){return t(e.name)}}))})))})),Fa=t(317),Ba=function(e){return{root:{display:"flex"},hide:{display:"none"},drawer:{width:400,flexShrink:0},drawerPaper:{width:400,display:"flex",alignItems:"center",backgroundColor:"#ffffff",backgroundImage:"url(".concat(J.a,")")},drawerHeader:Object(Fa.a)({display:"flex",alignItems:"center",width:"100%",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center","& h4":{fontWeight:500}},buttons:{width:"100%"},button:{width:"45%",margin:"5px"}}},Da=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).handleDrawerOpen=function(){t.setState({open:!0})},t.handleDrawerClose=function(){t.setState({open:!1})},t.onSortEnd=function(e){var a=e.oldIndex,o=e.newIndex;t.setState((function(e){var t=e.colors;return{colors:Object(ja.c)(t,a,o)}}))},t.state={open:!0,colors:Ue[0].colors},t.addNewColor=t.addNewColor.bind(Object(p.a)(t)),t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(t)),t.removeColor=t.removeColor.bind(Object(p.a)(t)),t.clearColors=t.clearColors.bind(Object(p.a)(t)),t.addRandomColor=t.addRandomColor.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"addNewColor",value:function(e){this.setState({colors:[].concat(Object(s.a)(this.state.colors),[e]),newColorName:""})}},{key:"handleChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"clearColors",value:function(){this.setState({colors:[]})}},{key:"addRandomColor",value:function(){for(var e=Ue.map((function(e){return e.colors})).flat(),a=function(){return Math.floor(Math.random()*e.length)},t=e[a()],o=!0;o;)o=this.state.colors.some((function(e){return e.name===t.name})),this.state.colors.length>0&&(t=e[a()]);this.setState({colors:[].concat(Object(s.a)(this.state.colors),[t])})}},{key:"handleSubmit",value:function(e){e.id=e.paletteName.toLowerCase().replace(/ /g,"-"),e.colors=this.state.colors,this.props.savePalette(e),this.props.history.push("/")}},{key:"removeColor",value:function(e){this.setState({colors:this.state.colors.filter((function(a){return a.name!==e}))})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.maxColors,o=e.palettes,n=this.state,l=n.open,i=n.colors,c=i.length>t;return r.a.createElement("div",{className:a.root},r.a.createElement(ua,{open:l,palettes:o,handleSubmit:this.handleSubmit,handleDrawerOpen:this.handleDrawerOpen}),r.a.createElement(pa.a,{className:a.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(H.a,{onClick:this.handleDrawerClose},r.a.createElement(va.a,null))),r.a.createElement(ba.a,null),r.a.createElement("div",{className:a.container},r.a.createElement(la.a,{variant:"h4",gutterBottom:!0},"Design Your Palette"),r.a.createElement("div",{className:a.buttons},r.a.createElement(sa.a,{variant:"contained",color:"secondary",onClick:this.clearColors,className:a.button},"Clear Palette"),r.a.createElement(sa.a,{variant:"contained",className:a.button,color:"primary",onClick:this.addRandomColor,disabled:c},"Random Color")),r.a.createElement(xa,{paletteIsFull:c,addNewColor:this.addNewColor,colors:i}))),r.a.createElement("main",{className:j()(a.content,Object(C.a)({},a.contentShift,l))},r.a.createElement("div",{className:a.drawerHeader}),r.a.createElement(Pa,{colors:i,removeColor:this.removeColor,axis:"xy",onSortEnd:this.onSortEnd,distance:20})))}}]),a}(n.Component);Da.defaultProps={maxColors:20};var Ia=Object(D.withStyles)(Ba,{withTheme:!0})(Da),Aa=[50,100,200,300,400,500,600,700,800,900];function La(e){var a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},t=!0,o=!1,n=void 0;try{for(var r,l=Aa[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){var i=r.value;a.colors[i]=[]}}catch(v){o=!0,n=v}finally{try{t||null==l.return||l.return()}finally{if(o)throw n}}var c,s,m=!0,d=!1,u=void 0;try{for(var h,p=e.colors[Symbol.iterator]();!(m=(h=p.next()).done);m=!0){var g=h.value,b=(c=g.color,s=10,w.a.scale(function(e){return[w()(e).darken(1.4).hex(),e,"#fff"]}(c)).mode("lab").colors(s)).reverse();for(var f in b)a.colors[Aa[f]].push({name:"".concat(g.name," ").concat(Aa[f]),id:g.name.toLowerCase().replace(/ /g,"-"),hex:b[f],rgb:w()(b[f]).css(),rgba:w()(b[f]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(v){d=!0,u=v}finally{try{m||null==p.return||p.return()}finally{if(d)throw u}}return a}var Ta=function(e){function a(e){var t;Object(m.a)(this,a),t=Object(u.a)(this,Object(h.a)(a).call(this,e));var o=JSON.parse(window.localStorage.getItem("palettes"));return t.state={palettes:o||Ue},t.savePalette=t.savePalette.bind(Object(p.a)(t)),t.findPalette=t.findPalette.bind(Object(p.a)(t)),t.deletePalette=t.deletePalette.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"findPalette",value:function(e){return this.state.palettes.find((function(a){return a.id===e}))}},{key:"deletePalette",value:function(e){this.setState((function(a){return{palettes:a.palettes.filter((function(a){return a.id!==e}))}}),this.syncLocalStorage)}},{key:"savePalette",value:function(e){console.log(e),this.setState({palettes:[].concat(Object(s.a)(this.state.palettes),[e])},this.syncLocalStorage)}},{key:"syncLocalStorage",value:function(){window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"render",value:function(){var e=this;return r.a.createElement(b.a,{render:function(a){var t=a.location;return r.a.createElement(f.a,null,r.a.createElement(v.a,{key:t.key,classNames:"page",timeout:500},r.a.createElement(b.c,{location:t},r.a.createElement(b.a,{exact:!0,path:"/palette/new",render:function(a){return r.a.createElement(ze,null,r.a.createElement(Ia,Object.assign({savePalette:e.savePalette,palettes:e.state.palettes},a)))}}),r.a.createElement(b.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return r.a.createElement(ze,null,r.a.createElement(Re,{colorId:a.match.params.colorId,palette:La(e.findPalette(a.match.params.paletteId))}))}}),r.a.createElement(b.a,{exact:!0,path:"/",render:function(a){return r.a.createElement(ze,null,r.a.createElement(Te,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette},a)))}}),r.a.createElement(b.a,{exact:!0,path:"/palette/:id",render:function(a){return r.a.createElement(ze,null,r.a.createElement(ce,{palette:La(e.findPalette(a.match.params.id))}))}}),r.a.createElement(b.a,{render:function(a){return r.a.createElement(ze,null,r.a.createElement(Te,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette},a)))}}))))}})}}]),a}(n.Component);i.a.render(r.a.createElement(c.a,null,r.a.createElement(Ta,null)),document.getElementById("root"))}},[[390,1,2]]]);
//# sourceMappingURL=main.f765c31a.chunk.js.map