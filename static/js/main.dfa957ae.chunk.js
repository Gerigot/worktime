(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{25:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(10),r=n.n(o),i=n(5),l=n(4),s=n(1),c=Object(l.a)({root:{fontFamily:function(e){return"'".concat(e.font,"', sans-serif")},fontSize:".75rem"},select:{fontSize:"1em",fontFamily:"inherit",margin:"0px 5px 5px 10px"}}),m=function(e){var t=e.onChange,n=e.value,a=c({font:n});return Object(s.jsxs)("label",{htmlFor:"fonts",className:a.root,children:["Font:",Object(s.jsxs)("select",{className:a.select,id:"fonts",onChange:function(e){return t(e.target.value)},value:n,children:[Object(s.jsx)("option",{value:"Open Sans",children:"Open Sans"}),Object(s.jsx)("option",{value:"Montserrat",children:"Montserrat"}),Object(s.jsx)("option",{value:"Lato",children:"Lato"}),Object(s.jsx)("option",{value:"Raleway",children:"Raleway"})]})]})},u=n(6),d=n(3),b=n.n(d),f=Object(l.a)({label:{fontWeight:"bold"},showTimeValue:{marginBottom:"1em"}}),p=function(e){var t=e.label,n=e.value,o=f();return Object(s.jsxs)(a.Fragment,{children:[Object(s.jsxs)("div",{className:o.label,children:[t,":"]}),Object(s.jsx)("div",{className:o.showTimeValue,children:n})]})},j=Object(l.a)({timeContainer:{position:"relative","&:focus-within > $label":{transform:"translate(-.15em, -1em) scale(0.75, 0.75)",zIndex:2,"&::before":{opacity:1}}},time:{padding:5,fontSize:"inherit",fontFamily:"inherit",outline:"none",color:"white",backgroundColor:"var(--input-bg-color)",border:"2px solid var(--input-border-color)",borderRadius:"5px",marginBottom:"1em","&:focus":{border:"2px solid var(--input-focus-border-color)"}},label:{transition:"transform 250ms ease",position:"absolute",top:"0.25em",left:".35em",zIndex:2,pointerEvents:"none",transformOrigin:"left",transform:function(e){return e.value?"translate(-.15em, -1em) scale(0.75, 0.75)":""},"&::before":{content:'""',position:"absolute",top:"0",left:"0",right:"0",bottom:"0",background:"linear-gradient(180deg, var(--main-bg-color), var(--input-bg-color))",zIndex:-1,transition:"opacity 300ms ease",opacity:function(e){return e.value?1:0}}}});var h=function(e){return function(t){var n=t.target.value;n.length>5&&(n=n.slice(0,n.length-1)),e(n)}},g=function(e){var t=e.value,n=e.onChange,a=e.label,o=j({value:t});return Object(s.jsxs)("div",{className:o.timeContainer,children:[Object(s.jsx)("div",{className:o.label,children:a}),Object(s.jsx)("input",{className:o.time,value:t,onChange:h(n)})]})},x=function(e){if(!e.isValid())return"";var t=Math.abs(e.minutes()),n=Math.abs(e.hours());return e.minutes()<0?"-"+n+":"+(t<10?"0"+t:t):e.hours()+":"+(e.minutes()<10?"0"+e.minutes():e.minutes())},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Object(a.useState)(JSON.parse(localStorage.getItem(e))||t),o=Object(i.a)(n,2),r=o[0],l=o[1];return Object(a.useEffect)((function(){localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,l]},O=Object(l.a)({worktime_root:{display:"grid",gridTemplateColumns:"100%",gridTemplateAreas:"'title' 'timeInsert' 'timeShow'",fontFamily:function(e){return"'".concat(e.font,"', sans-serif")}},worktime_title:{gridArea:"title",margin:"1.25em 0",paggind:0},workTime:{gridArea:"timeInsert",display:"grid",gridTemplateColumns:"minmax(180px, 300px)",alignItems:"center",rowGap:"5px"},worktime_show_root:{gridArea:"timeShow",marginTop:"1.5em",display:"grid",gridTemplateColumns:"minmax(180px, 300px)"},"@media only screen and (min-width: 800px)":{worktime_root:{gridTemplateColumns:"1fr 30px 1fr",gridTemplateAreas:"'title title title'\n\t\t\t'timeInsert . timeShow'",borderRadius:8,boxShadow:"2px 2px 5px 0 var(--input-bg-color), -2px -2px 5px var(--input-border-color)",marginTop:"0.5rem",marginBottom:"0rem",padding:"1rem"}}}),w=function(e){var t=O(e),n=v("time",{morning:"",startPause:"",endPause:""}),o=Object(i.a)(n,2),r=o[0],l=o[1],c=Object(a.useState)({atTheMoment:"",normally:"",max:"",pause:""}),m=Object(i.a)(c,2),d=m[0],b=m[1];return Object(a.useEffect)((function(){S(r.morning,r.startPause,r.endPause,b)}),[r.endPause,r.morning,r.startPause]),function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){function e(){n.current()}if(null!==t){var a=setInterval(e,t);return function(){return clearInterval(a)}}}),[t])}((function(){S(r.morning,r.startPause,r.endPause,b)}),1e4),Object(s.jsxs)("div",{className:t.worktime_root,children:[Object(s.jsx)("h1",{className:t.worktime_title,children:"Work Time!"}),Object(s.jsxs)("div",{className:t.workTime,children:[Object(s.jsx)(g,{label:"Inizio:",value:r.morning,onChange:function(e){l(Object(u.a)(Object(u.a)({},r),{},{morning:e}))}}),Object(s.jsx)(g,{label:"Inizio pausa:",value:r.startPause,onChange:function(e){l(Object(u.a)(Object(u.a)({},r),{},{startPause:e}))}}),Object(s.jsx)(g,{label:"Fine pausa:",value:r.endPause,onChange:function(e){l(Object(u.a)(Object(u.a)({},r),{},{endPause:e}))}})]}),Object(s.jsxs)("div",{className:t.worktime_show_root,children:[Object(s.jsx)(p,{label:"Al momento hai fatto",value:d.atTheMoment}),Object(s.jsx)(p,{label:"Pausa pranzo",value:d.pause}),Object(s.jsx)(p,{label:"8h alle",value:d.normally}),Object(s.jsx)(p,{label:"P.f. finisci prima delle",value:d.max})]})]})},y=function(e){return e.isValid()?e.format("HH:mm"):""};function S(e,t,n,a){var o=b()(e,"HH:mm"),r=b()(t,"HH:mm"),i=r.clone().add(30,"m"),l=b()(n,"HH:mm"),s=b.a.max(i,l),c=b.a.duration(8,"hours"),m=b.a.duration(r.diff(o)),u=b.a.duration(b()().diff(s)).add(m),d=c.clone().subtract(m),f=s.clone().add(d),p=f.clone().add(b.a.duration(1,"hours").add(36,"m"));a({atTheMoment:x(u),normally:y(f),max:y(p),pause:x(b.a.duration(s.diff(r)))})}var k=Object(l.a)({"@global":{"*, *::after, *::before":{boxSizing:"border-box"},":root":{"--main-bg-color":"#3f3f3f","--default-color":"white","--input-bg-color":"#353535","--input-border-color":"#595959","--input-focus-border-color":"#8c8c8c"},body:{margin:"auto",backgroundColor:"var(--main-bg-color)",color:"var(--default-color)",width:"100%",maxWidth:700},"@media (min-width: 500px)":{html:{fontSize:"18px"}},"@media (min-width: 800px)":{html:{fontSize:"20px"}},"@media (min-width: 1300px)":{html:{fontSize:"26px"},body:{maxWidth:"1000px"}}},app_root:{margin:"1.5em 1.5em 0 1.5em"}});var C=function(){var e=v("defaultFont","Open Sans"),t=Object(i.a)(e,2),n=t[0],a=t[1],o=k();return Object(s.jsxs)("div",{className:o.app_root,children:[Object(s.jsx)(m,{value:n,onChange:a}),Object(s.jsx)(w,{font:n})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(s.jsx)(C,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);