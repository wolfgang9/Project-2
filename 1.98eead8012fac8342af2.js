(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+F3d":function(n,r,t){"use strict";t.d(r,"a",function(){return b});var e=t("CcnG"),o=t("lIz8"),i=t("qza0"),u=t("z+um"),s=t("GDim"),l=t("r6Rv"),c=t("KzPs"),a=t("UQit"),f=t("XF9X"),h=t("ZYCi"),p=t("D6yi"),m=e.nb({encapsulation:2,styles:[],data:{}});function v(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"formio-alerts",[],null,null,null,o.b,o.a)),e.ob(1,114688,null,0,i.a,[],{alerts:[0,"alerts"]},null),(n()(),e.pb(2,0,null,null,1,"formio-grid",[],null,[[null,"rowSelect"],[null,"error"],[null,"createItem"]],function(n,r,t){var e=!0,o=n.component;return"rowSelect"===r&&(e=!1!==o.onSelect(t)&&e),"error"===r&&(e=!1!==o.service.onError(t)&&e),"createItem"===r&&(e=!1!==o.onCreateItem()&&e),e},u.b,u.a)),e.ob(3,4833280,null,0,s.a,[l.a,c.a,e.j,e.h],{src:[0,"src"],onForm:[1,"onForm"],query:[2,"query"],createText:[3,"createText"]},{rowSelect:"rowSelect",createItem:"createItem",error:"error"})],function(n,r){var t=r.component;n(r,1,0,t.service.alerts),n(r,3,0,t.gridSrc,t.service.formLoaded,t.gridQuery,t.createText)},null)}function d(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"ng-component",[],null,null,null,v,m)),e.ob(1,114688,null,0,a.a,[f.a,h.a,h.k,p.a],null,null)],function(n,r){n(r,1,0)},null)}var b=e.lb("ng-component",a.a,d,{},{},[])},"5YvF":function(n,r,t){"use strict";t.d(r,"a",function(){return e}),t("XF9X");var e=function(){function n(n,r,t){this.service=n,this.route=r,this.router=t}return n.prototype.onDelete=function(){var n=this;this.service.remove().then(function(){n.router.navigate(["../../"],{relativeTo:n.route})})},n.prototype.onCancel=function(){this.router.navigate(["../","view"],{relativeTo:this.route})},n}()},D6yi:function(n,r,t){"use strict";t.d(r,"a",function(){return e});var e=function(){return function(){this.name="",this.form="",this.parents=[]}}()},Et9f:function(n,r,t){"use strict";t.d(r,"a",function(){return o});var e=t("CcnG"),o=(t("XF9X"),t("D6yi"),function(){function n(n,r,t,o){this.service=n,this.route=r,this.router=t,this.config=o,this.triggerError=new e.m}return n.prototype.onSubmit=function(n){var r=this,t=this.service.resource;t.data=n.data,this.service.save(t).then(function(){r.router.navigate(["../","view"],{relativeTo:r.route})}).catch(function(n){return r.triggerError.emit(n)})},n}())},Fysl:function(n,r,t){"use strict";t.d(r,"a",function(){return e}),t("LWLj"),t("XF9X");var e=function(){function n(n,r,t){this.service=n,this.route=r,this.auth=t,this.perms={delete:!1,edit:!1}}return n.prototype.ngOnInit=function(){var n=this;this.service.loadResource(this.route),this.service.formLoaded.then(function(r){n.auth.ready.then(function(){n.service.resourceLoaded.then(function(t){n.service.formFormio.userPermissions(n.auth.user,r,t).then(function(r){n.perms.delete=r.delete,n.perms.edit=r.edit})})})})},n}()},OLPT:function(n,r,t){"use strict";t.d(r,"a",function(){return b});var e=t("CcnG"),o=t("ZYCi"),i=t("Ip0R"),u=t("Yi/Q"),s=t("S8Yu"),l=t("r6Rv"),c=t("rJcy"),a=t("QMXP"),f=t("XF9X"),h=t("D6yi"),p=e.nb({encapsulation:0,styles:[".back-button[_ngcontent-%COMP%] { font-size: 0.8em; }"],data:{}});function m(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,4,"h3",[["style","margin-top:0;"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,2,"a",[["class","back-button"],["routerLink","../"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,r,t){var o=!0;return"click"===r&&(o=!1!==e.zb(n,2).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e.ob(2,671744,null,0,o.n,[o.k,o.a,i.h],{routerLink:[0,"routerLink"]},null),(n()(),e.pb(3,0,null,null,0,"i",[["class","fa fa-chevron-left glyphicon glyphicon-chevron-left"]],null,null,null,null,null)),(n()(),e.Hb(4,null,[" | New "," "]))],function(n,r){n(r,2,0,"../")},function(n,r){var t=r.component;n(r,1,0,e.zb(r,2).target,e.zb(r,2).href),n(r,4,0,t.service.form.title)})}function v(n){return e.Jb(0,[(n()(),e.eb(16777216,null,null,1,null,m)),e.ob(1,16384,null,0,i.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(2,0,null,null,1,"formio",[],null,[[null,"submit"]],function(n,r,t){var e=!0;return"submit"===r&&(e=!1!==n.component.onSubmit(t)&&e),e},u.c,u.b)),e.ob(3,770048,null,0,s.a,[l.a,[2,c.a]],{form:[0,"form"],submission:[1,"submission"],refresh:[2,"refresh"],error:[3,"error"],success:[4,"success"]},{submit:"submit"})],function(n,r){var t=r.component;n(r,1,0,t.service.form),n(r,3,0,t.service.form,t.service.resource,t.service.refresh,t.onError,t.onSuccess)},null)}function d(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"ng-component",[],null,null,null,v,p)),e.ob(1,114688,null,0,a.a,[f.a,o.a,o.k,h.a],null,null)],function(n,r){n(r,1,0)},null)}var b=e.lb("ng-component",a.a,d,{},{},[])},QMXP:function(n,r,t){"use strict";t.d(r,"a",function(){return o});var e=t("CcnG"),o=(t("XF9X"),t("D6yi"),function(){function n(n,r,t,o){this.service=n,this.route=r,this.router=t,this.config=o,this.onError=new e.m,this.onSuccess=new e.m}return n.prototype.ngOnInit=function(){this.service.setContext(this.route)},n.prototype.onSubmit=function(n){var r=this;this.service.save(n).then(function(){r.router.navigate(["../",r.service.resource._id,"view"],{relativeTo:r.route})}).catch(function(n){return r.onError.emit(n)})},n}())},U43M:function(n,r,t){"use strict";t.d(r,"a",function(){return v});var e=t("CcnG"),o=t("Yi/Q"),i=t("S8Yu"),u=t("r6Rv"),s=t("rJcy"),l=t("Et9f"),c=t("XF9X"),a=t("ZYCi"),f=t("D6yi"),h=e.nb({encapsulation:2,styles:[],data:{}});function p(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"formio",[],null,[[null,"submit"]],function(n,r,t){var e=!0;return"submit"===r&&(e=!1!==n.component.onSubmit(t)&&e),e},o.c,o.b)),e.ob(1,770048,null,0,i.a,[u.a,[2,s.a]],{form:[0,"form"],submission:[1,"submission"],refresh:[2,"refresh"],error:[3,"error"]},{submit:"submit"})],function(n,r){var t=r.component;n(r,1,0,t.service.form,t.service.resource,t.service.refresh,t.triggerError)},null)}function m(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"ng-component",[],null,null,null,p,h)),e.ob(1,49152,null,0,l.a,[c.a,a.a,a.k,f.a],null,null)],null,null)}var v=e.lb("ng-component",l.a,m,{},{},[])},UQit:function(n,r,t){"use strict";t.d(r,"a",function(){return o}),t("XF9X"),t("D6yi");var e=t("Tt8Z"),o=function(){function n(n,r,t,e){this.service=n,this.route=r,this.router=t,this.config=e}return n.prototype.ngOnInit=function(){var n=this;this.gridQuery={},this.service.setContext(this.route),this.service.formLoaded.then(function(){n.service&&n.config.parents&&n.config.parents.length?n.service.loadParents().then(function(r){Object(e.each)(r,function(r){r&&r.filter&&(n.gridQuery["data."+r.name+"._id"]=r.resource._id)}),n.gridSrc=n.service.formUrl,n.createText="New "+n.service.form.title}):n.service.formUrl&&(n.gridSrc=n.service.formUrl,n.createText="New "+n.service.form.title)})},n.prototype.onSelect=function(n){this.router.navigate([n._id,"view"],{relativeTo:this.route})},n.prototype.onCreateItem=function(){this.router.navigate(["new"],{relativeTo:this.route})},n}()},XF9X:function(n,r,t){"use strict";t.d(r,"a",function(){return a});var e=t("CcnG"),o=(t("D6yi"),t("Di7c"),t("KzPs")),i=(t("r6Rv"),t("rJcy"),t("CFBA")),u=t.n(i),s=t("Mr5W"),l=t("Tt8Z"),c=t.n(l),a=function(){function n(n,r,t,i){var s=this;this.appConfig=n,this.config=r,this.loader=t,this.resourcesService=i,this.initialized=!1,this.alerts=new o.a,this.refresh=new e.m,this.formLoaded=new u.a(function(n,r){s.formResolve=n,s.formReject=r}),this.init()}return n.prototype.initialize=function(){console.warn("FormioResourceService.initialize() has been deprecated.")},n.prototype.init=function(){if(!this.initialized)return this.initialized=!0,this.appConfig&&this.appConfig.appUrl?(s.Formio.setBaseUrl(this.appConfig.apiUrl),s.Formio.setProjectUrl(this.appConfig.appUrl),s.Formio.formOnly=this.appConfig.formOnly):console.error("You must provide an AppConfig within your application!"),this.formUrl=this.appConfig.appUrl+"/"+this.config.form,this.resource={data:{}},this.resourcesService&&(this.resources=this.resourcesService.resources,this.resources[this.config.name]=this),this.loadForm()},n.prototype.onError=function(n){throw this.alerts.setAlert({type:"danger",message:n.message||n}),this.resourcesService&&this.resourcesService.error.emit(n),n},n.prototype.onFormError=function(n){this.formReject(n),this.onError(n)},n.prototype.setContext=function(n){this.resourceId=n.snapshot.params.id,this.resource={data:{}},this.resourceUrl=this.appConfig.appUrl+"/"+this.config.form,this.resourceId&&(this.resourceUrl+="/submission/"+this.resourceId),this.formio=new s.Formio(this.resourceUrl),this.resourcesService&&(this.resources[this.config.name]=this),this.loadParents()},n.prototype.loadForm=function(){var n=this;return this.formFormio=new s.Formio(this.formUrl),this.loader.loading=!0,this.formLoading=this.formFormio.loadForm().then(function(r){return n.form=r,n.formResolve(r),n.loader.loading=!1,n.loadParents(),r},function(r){return n.onFormError(r)}).catch(function(r){return n.onFormError(r)}),this.formLoading},n.prototype.loadParents=function(){var n=this;return this.config.parents&&this.config.parents.length?this.resourcesService?this.formLoading.then(function(r){var t=[];return n.config.parents.forEach(function(e){var o=e.resource||e,i=e.field||e,u=!e.hasOwnProperty("filter")||e.filter;n.resources.hasOwnProperty(o)&&n.resources[o].resourceLoaded&&t.push(n.resources[o].resourceLoaded.then(function(t){var e="";return s.Utils.eachComponent(r.components,function(r,o){if(r.key===i)return r.hidden=!0,r.clearOnHide=!1,c.a.set(n.resource.data,o,t),e=o,!0}),{name:e,filter:u,resource:t}}))}),u.a.all(t).then(function(t){return n.refresh.emit({form:r,submission:n.resource}),t})}):(console.warn("You must provide the FormioResources within your application to use nested resources."),u.a.resolve([])):u.a.resolve([])},n.prototype.onSubmissionError=function(n){this.onError(n)},n.prototype.loadResource=function(n){var r=this;return this.setContext(n),this.loader.loading=!0,this.resourceLoading=this.resourceLoaded=this.formio.loadSubmission(null,{ignoreCache:!0}).then(function(n){return r.resource=n,r.loader.loading=!1,r.refresh.emit({property:"submission",value:r.resource}),n},function(n){return r.onSubmissionError(n)}).catch(function(n){return r.onSubmissionError(n)}),this.resourceLoading},n.prototype.save=function(n){var r=this;return(n._id?this.formio:this.formFormio).saveSubmission(n).then(function(n){return r.resource=n,n},function(n){return r.onError(n)}).catch(function(n){return r.onError(n)})},n.prototype.remove=function(){var n=this;return this.formio.deleteSubmission().then(function(){n.resource=null},function(r){return n.onError(r)}).catch(function(r){return n.onError(r)})},n}()},"pP+O":function(n,r,t){"use strict";t.d(r,"a",function(){return i}),t("ikog"),t("KzPs"),t("YCyN"),t("Fysl"),t("wLq9"),t("Et9f"),t("5YvF"),t("QMXP"),t("UQit");var e=t("uFmT"),o=t("f/UD"),i=function(){function n(){}return n.forChild=function(r){return Object(o.a)(n,r,e.a)},n.forRoot=function(r){return Object(o.a)(n,r,e.a)},n}()},rbuc:function(n,r,t){"use strict";t.d(r,"a",function(){return a});var e=t("CcnG"),o=t("5YvF"),i=t("XF9X"),u=t("ZYCi"),s=e.nb({encapsulation:2,styles:[],data:{}});function l(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Are you sure you wish to delete this record?"])),(n()(),e.pb(2,0,null,null,4,"div",[["class","btn-toolbar"]],null,null,null,null,null)),(n()(),e.pb(3,0,null,null,1,"button",[["class","btn btn-danger"],["style","margin-right: 10px;"],["type","button"]],null,[[null,"click"]],function(n,r,t){var e=!0;return"click"===r&&(e=!1!==n.component.onDelete()&&e),e},null,null)),(n()(),e.Hb(-1,null,["Yes"])),(n()(),e.pb(5,0,null,null,1,"button",[["class","btn btn-danger"],["type","button"]],null,[[null,"click"]],function(n,r,t){var e=!0;return"click"===r&&(e=!1!==n.component.onCancel()&&e),e},null,null)),(n()(),e.Hb(-1,null,["No"]))],null,null)}function c(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"ng-component",[],null,null,null,l,s)),e.ob(1,49152,null,0,o.a,[i.a,u.a,u.k],null,null)],null,null)}var a=e.lb("ng-component",o.a,c,{},{},[])},uFmT:function(n,r,t){"use strict";t.d(r,"a",function(){return c});var e=t("Fysl"),o=t("wLq9"),i=t("Et9f"),u=t("5YvF"),s=t("QMXP"),l=t("UQit");function c(n){return[{path:"",component:n&&n.index?n.index:l.a},{path:"new",component:n&&n.create?n.create:s.a},{path:":id",component:n&&n.resource?n.resource:e.a,children:[{path:"",redirectTo:"view",pathMatch:"full"},{path:"view",component:n&&n.view?n.view:o.a},{path:"edit",component:n&&n.edit?n.edit:i.a},{path:"delete",component:n&&n.delete?n.delete:u.a}]}]}},wLq9:function(n,r,t){"use strict";t.d(r,"a",function(){return e}),t("XF9X"),t("D6yi");var e=function(){return function(n,r){this.service=n,this.config=r}}()}}]);