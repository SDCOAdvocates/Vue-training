(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{333:function(e,n,t){},370:function(e,n,t){"use strict";var o=t(0),r=t(23),s=t(12),a=t(1),i=t(32),l=[],c=l.sort,d=a((function(){l.sort(void 0)})),u=a((function(){l.sort(null)})),f=i("sort");o({target:"Array",proto:!0,forced:d||!u||!f},{sort:function(e){return void 0===e?c.call(s(this)):c.call(s(this),r(e))}})},371:function(e,n,t){"use strict";var o=t(333);t.n(o).a},375:function(e,n,t){"use strict";t.r(n);t(370);var o={name:"v-for-example-2",data:function(){return{todos:[{label:"See list transitions",done:!1},{label:"Learn Vue",done:!1},{label:"Use v-for",done:!0}]}},computed:{todos_after_sort:function(){return this.todos.sort((function(e,n){return+e.done-n.done}))}}},r=(t(371),t(25)),s=Object(r.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"demo"},[t("transition-group",{attrs:{name:"flip-list",tag:"ul"}},e._l(e.todos_after_sort,(function(n,o){return t("li",{key:n.label},[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:n.done,expression:"todo.done"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(n.done)?e._i(n.done,null)>-1:n.done},on:{change:function(t){var o=n.done,r=t.target,s=!!r.checked;if(Array.isArray(o)){var a=e._i(o,null);r.checked?a<0&&e.$set(n,"done",o.concat([null])):a>-1&&e.$set(n,"done",o.slice(0,a).concat(o.slice(a+1)))}else e.$set(n,"done",s)}}}),e._v("\n    Task "+e._s(o)+" : "+e._s(n.label)+"\n  ")]),e._v("\n  - "),t("i",[e._v(e._s(n.done?"DONE !":"in progress..."))])])})),0)],1)}),[],!1,null,null,null);n.default=s.exports}}]);