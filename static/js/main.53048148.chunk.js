(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{25:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a(10),r=a.n(o),i=a(6),l=a(5),s=a(1),c=Object(l.a)({root:{fontFamily:function(e){return"'".concat(e.font,"', sans-serif")},fontSize:".75rem"},select:{fontSize:"1em",fontFamily:"inherit",margin:"0px 5px 5px 10px"}}),m=function(e){var t=e.onChange,a=e.value,n=c({font:a});return Object(s.jsxs)("label",{htmlFor:"fonts",className:n.root,children:["Font:",Object(s.jsxs)("select",{className:n.select,id:"fonts",onChange:function(e){return t(e.target.value)},value:a,children:[Object(s.jsx)("option",{value:"Open Sans",children:"Open Sans"}),Object(s.jsx)("option",{value:"Montserrat",children:"Montserrat"}),Object(s.jsx)("option",{value:"Lato",children:"Lato"}),Object(s.jsx)("option",{value:"Raleway",children:"Raleway"})]})]})},u=a(2),d=a(4),b=a.n(d),f=Object(l.a)({label:{fontWeight:"bold"},showTimeValue:{marginBottom:"1em"}}),p=function(e){var t=e.label,a=e.value,o=f();return Object(s.jsxs)(n.Fragment,{children:[Object(s.jsxs)("div",{className:o.label,children:[t,":"]}),Object(s.jsx)("div",{className:o.showTimeValue,children:a})]})},j=Object(l.a)({timeContainer:{position:"relative","&:focus-within > $label":{position:"absolute",top:"-0.75em",left:"1em",fontSize:"0.5rem",zIndex:2,"&::before":{content:'""',position:"absolute",top:-10,left:"-.5em",right:"-.5em",bottom:"0.25em",background:"var(--main-bg-color)",zIndex:-1}}},time:{padding:5,fontSize:"inherit",fontFamily:"inherit",outline:"none",color:"white",backgroundColor:"var(--input-bg-color)",border:"2px solid var(--input-border-color)",borderRadius:"5px",marginBottom:"1em","&:focus":{border:"2px solid var(--input-focus-border-color)"}},label:function(e){var t={transition:"top 250ms ease, left 250ms ease, font-size 250ms ease"};return e.value?Object(u.a)(Object(u.a)({},t),{},{position:"absolute",top:"-0.75em",left:"1em",zIndex:2,fontSize:"0.5rem","&::before":{content:'""',position:"absolute",top:-10,left:"-.5em",right:"-.5em",bottom:"0.25em",background:"var(--main-bg-color)",zIndex:-1}}):Object(u.a)(Object(u.a)({},t),{},{position:"absolute",fontSize:"0.8rem",top:"0.5em",left:"1em"})}});var h=function(e){return function(t){var a=t.target.value;a.length>5&&(a=a.slice(0,a.length-1)),e(a)}},g=function(e){var t=e.value,a=e.onChange,n=e.label,o=j({value:t});return Object(s.jsxs)("div",{className:o.timeContainer,children:[Object(s.jsx)("div",{className:o.label,children:n}),Object(s.jsx)("input",{className:o.time,value:t,onChange:h(a)})]})},x=function(e){if(!e.isValid())return"";var t=Math.abs(e.minutes()),a=Math.abs(e.hours());return e.minutes()<0?"-"+a+":"+(t<10?"0"+t:t):e.hours()+":"+(e.minutes()<10?"0"+e.minutes():e.minutes())},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=Object(n.useState)(JSON.parse(localStorage.getItem(e))||t),o=Object(i.a)(a,2),r=o[0],l=o[1];return Object(n.useEffect)((function(){localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,l]},O=Object(l.a)({worktime_root:{display:"grid",gridTemplateColumns:"100%",gridTemplateAreas:"'title' 'timeInsert' 'timeShow'",fontFamily:function(e){return"'".concat(e.font,"', sans-serif")}},worktime_title:{gridArea:"title",margin:"1.25em 0",paggind:0},workTime:{gridArea:"timeInsert",display:"grid",gridTemplateColumns:"minmax(180px, 300px)",alignItems:"center",rowGap:"5px"},worktime_show_root:{gridArea:"timeShow",marginTop:"1.5em",display:"grid",gridTemplateColumns:"minmax(180px, 300px)"},"@media only screen and (min-width: 800px)":{worktime_root:{gridTemplateColumns:"1fr 30px 1fr",gridTemplateAreas:"'title title title'\n\t\t\t'timeInsert . timeShow'",borderRadius:8,boxShadow:"2px 2px 5px 0 var(--input-bg-color), -2px -2px 5px var(--input-border-color)",marginTop:"0.5rem",marginBottom:"0rem",padding:"1rem"}}}),w=function(e){var t=O(e),a=v("time",{morning:"",startPause:"",endPause:""}),o=Object(i.a)(a,2),r=o[0],l=o[1],c=Object(n.useState)({atTheMoment:"",normally:"",max:"",pause:""}),m=Object(i.a)(c,2),d=m[0],b=m[1];return Object(n.useEffect)((function(){k(r.morning,r.startPause,r.endPause,b)}),[r.endPause,r.morning,r.startPause]),function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){function e(){a.current()}if(null!==t){var n=setInterval(e,t);return function(){return clearInterval(n)}}}),[t])}((function(){k(r.morning,r.startPause,r.endPause,b)}),1e4),Object(s.jsxs)("div",{className:t.worktime_root,children:[Object(s.jsx)("h1",{className:t.worktime_title,children:"Work Time!"}),Object(s.jsxs)("div",{className:t.workTime,children:[Object(s.jsx)(g,{label:"Inizio:",value:r.morning,onChange:function(e){l(Object(u.a)(Object(u.a)({},r),{},{morning:e}))}}),Object(s.jsx)(g,{label:"Inizio pausa:",value:r.startPause,onChange:function(e){l(Object(u.a)(Object(u.a)({},r),{},{startPause:e}))}}),Object(s.jsx)(g,{label:"Fine pausa:",value:r.endPause,onChange:function(e){l(Object(u.a)(Object(u.a)({},r),{},{endPause:e}))}})]}),Object(s.jsxs)("div",{className:t.worktime_show_root,children:[Object(s.jsx)(p,{label:"Al momento hai fatto",value:d.atTheMoment}),Object(s.jsx)(p,{label:"Pausa pranzo",value:d.pause}),Object(s.jsx)(p,{label:"8h alle",value:d.normally}),Object(s.jsx)(p,{label:"P.f. finisci prima delle",value:d.max})]})]})},S=function(e){return e.isValid()?e.format("HH:mm"):""};function k(e,t,a,n){var o=b()(e,"HH:mm"),r=b()(t,"HH:mm"),i=r.clone().add(30,"m"),l=b()(a,"HH:mm"),s=b.a.max(i,l),c=b.a.duration(8,"hours"),m=b.a.duration(r.diff(o)),u=b.a.duration(b()().diff(s)).add(m),d=c.clone().subtract(m),f=s.clone().add(d),p=f.clone().add(b.a.duration(1,"hours").add(36,"m"));n({atTheMoment:x(u),normally:S(f),max:S(p),pause:x(b.a.duration(s.diff(r)))})}var y=Object(l.a)({"@global":{"*, *::after, *::before":{boxSizing:"border-box"},":root":{"--main-bg-color":"#3f3f3f","--default-color":"white","--input-bg-color":"#353535","--input-border-color":"#595959","--input-focus-border-color":"#8c8c8c"},body:{margin:"auto",backgroundColor:"var(--main-bg-color)",color:"var(--default-color)",width:"100%",maxWidth:600},"@media (min-width: 500px)":{html:{fontSize:"18px"}},"@media (min-width: 800px)":{html:{fontSize:"20px"}},"@media (min-width: 1300px)":{html:{fontSize:"26px"},body:{maxWidth:"1000px"}}},app_root:{margin:"1.5em 1.5em 0 1.5em"}});var z=function(){var e=v("defaultFont","Open Sans"),t=Object(i.a)(e,2),a=t[0],n=t[1],o=y();return Object(s.jsxs)("div",{className:o.app_root,children:[Object(s.jsx)(m,{value:a,onChange:n}),Object(s.jsx)(w,{font:a})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(s.jsx)(z,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);