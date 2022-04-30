"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2962],{32962:(k,r,g)=>{g.r(r),g.d(r,{SettingsPageModule:()=>M});var o=g(70653),s=g(19426),l=g(69808),e=g(87587),u=g(10372),p=g(71155),h=g(24762),d=g(68306);let f=(()=>{class t{constructor(n){this.themeSwitcher=n,this.isDarkMode=new d.y}ngOnInit(){this.isDarkMode=this.themeSwitcher.isDarkModeObservable}toggleDarkTheme(n){this.themeSwitcher.changeThemeMode(n.target.checked)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u.t))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-dark-mode-toggle"]],decls:3,vars:3,consts:[[3,"checked","ionChange"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-toggle",0),e.NdJ("ionChange",function(c){return i.toggleDarkTheme(c)}),e.ALo(1,"async"),e._uU(2,"Test"),e.qZA()),2&n&&e.Q6J("checked",e.lcZ(1,1,i.isDarkMode))},directives:[o.ho,o.w],pipes:[l.Ov],encapsulation:2}),t})();function v(t,a){if(1&t&&(e.TgZ(0,"ion-select-option",3),e._uU(1),e.qZA()),2&t){const n=a.$implicit;e.s9C("value",n.value),e.xp6(1),e.hij(" ",n.flag+" "+n.name,"")}}let S=(()=>{class t{constructor(n){this.languageService=n,this.countries=[{name:"English",flag:"\u{1f1ec}\u{1f1e7}",value:"en"},{name:"Spanish",flag:"\u{1f1ea}\u{1f1f8}",value:"es"}]}ngOnInit(){this.selectedLanguage=this.languageService.selectedLanguage}changeLanguage(n){this.languageService.setLanguage(n.target.value)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(p.T))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-language-selector"]],decls:6,vars:1,consts:[["slot","start","name","language-outline"],["slot","end","ok-text","Okay","cancel-text","Dismiss",3,"ionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-item"),e._UZ(1,"ion-icon",0),e.TgZ(2,"ion-label"),e._uU(3,"Language"),e.qZA(),e.TgZ(4,"ion-select",1),e.NdJ("ionChange",function(c){return i.changeLanguage(c)}),e.YNc(5,v,2,2,"ion-select-option",2),e.qZA()()),2&n&&(e.xp6(5),e.Q6J("ngForOf",i.countries))},directives:[o.Ie,o.gu,o.Q$,o.t9,o.QI,l.sg,o.n0],styles:[""]}),t})(),m=(()=>{class t{constructor(n,i){this.themeSwitcher=n,this.languageService=i}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u.t),e.Y36(p.T))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-settings-page"]],decls:13,vars:2,consts:[[3,"translucent"],[3,"fullscreen"],["name","Tab 3 page"],["slot","start","name","moon-outline"],["slot","end"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3," Settings "),e.qZA()()(),e.TgZ(4,"ion-content",1),e._UZ(5,"app-explore-container",2),e.TgZ(6,"ion-list")(7,"ion-item"),e._UZ(8,"ion-icon",3),e.TgZ(9,"ion-label"),e._uU(10," Dark Mode "),e.qZA(),e._UZ(11,"app-dark-mode-toggle",4),e.qZA(),e._UZ(12,"app-language-selector"),e.qZA()()),2&n&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0))},directives:[o.Gu,o.sr,o.wd,o.W2,h.Z,o.q_,o.Ie,o.gu,o.Q$,f,S],styles:[""]}),t})();var T=g(581);const Z=[{path:"",component:m}];let C=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.Bz.forChild(Z)],s.Bz]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[o.Pc,l.ez,T.e,s.Bz.forChild([{path:"",component:m}]),C]]}),t})()}}]);