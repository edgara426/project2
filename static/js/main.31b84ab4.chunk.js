(this.webpackJsonpproject2=this.webpackJsonpproject2||[]).push([[0],{22:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(14),r=c.n(a),i=(c(21),c(6)),o=c(2),j=(c(22),c(5)),u=c.n(j),l=c(8),d=c.p+"static/media/Norris.31d2421d.jpeg",b=c(0);var h=function(e){var t=Object(n.useState)({}),c=Object(i.a)(t,2),s=c[0],a=c[1],r="https://api.chucknorris.io/jokes/random",o=function(){var e=Object(l.a)(u.a.mark((function e(t){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,a(n),console.log(n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){e.setBackgroundImage(d),o(r)}),[]),Object(b.jsx)("div",{className:"Dad",children:Object(b.jsxs)("div",{class:"card",children:[Object(b.jsx)("div",{class:"card-content",children:Object(b.jsx)("p",{class:"subtitle",children:s.value})}),Object(b.jsx)("p",{class:"buttons is-centered",onClick:function(e){e.preventDefault(),o(r)},children:Object(b.jsx)("button",{class:"button is-large",children:Object(b.jsx)("span",{class:"icon is-large",children:Object(b.jsx)("i",{class:"fas fa-heading fa-2x",children:Object(b.jsx)("img",{src:s.icon_url,alt:"Norris"})})})})})]})})},x=c.p+"static/media/snow.0ad311c1.svg";var O=function(e){var t=Object(n.useState)({}),c=Object(i.a)(t,2),s=c[0],a=c[1],r="https://favqs.com/api/qotd",o=function(){var e=Object(l.a)(u.a.mark((function e(t){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,a(n.quote);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){e.setBackgroundImage(x),o(r)}),[]),console.log(s),Object(b.jsx)("div",{className:"Home",children:Object(b.jsxs)("div",{class:"card",children:[Object(b.jsxs)("div",{class:"card-content",children:[Object(b.jsx)("p",{class:"subtitle",children:s.body}),Object(b.jsxs)("p",{class:"subtitle",children:["~",s.author]})]}),Object(b.jsx)("button",{className:"button is-link is-hovered is-rounded is-centered",onClick:function(e){e.preventDefault(),o(r)},children:Object(b.jsx)("span",{children:"Next Quote"})})]})})};var p=function(e){var t=e.quote;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{className:"title",children:t.anime}),Object(b.jsx)("p",{className:"subtitle",children:t.quote}),Object(b.jsxs)("p",{className:"subtitle",children:["~",t.character]})]})},f=c.p+"static/media/anime.5ef7bca9.jpeg";var m=function(e){var t=Object(n.useState)({}),c=Object(i.a)(t,2),s=c[0],a=c[1],r="https://animechan.vercel.app/api/random",o=function(){var e=Object(l.a)(u.a.mark((function e(t){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,a(n),console.log(n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){e.setBackgroundImage(f),o(r)}),[]),console.log(s),Object(b.jsx)("div",{className:"Anime",children:Object(b.jsxs)("div",{class:"card",children:[Object(b.jsx)("div",{class:"card-content",children:Object(b.jsx)(p,{anime:s,quote:s,character:s})}),Object(b.jsx)("button",{className:"button is-link is-hovered is-rounded is-centered",onClick:function(e){e.preventDefault(),o(r)},children:Object(b.jsx)("span",{children:"Next Quote"})})]})})},v=c(7);var g=function(){return Object(b.jsx)("nav",{className:"navbar is-transparent",children:Object(b.jsxs)("div",{className:"navbar-start",children:[Object(b.jsx)("a",{className:"navbar-item",href:"link",children:Object(b.jsx)(v.b,{to:"/",children:"Home"})}),Object(b.jsx)("a",{className:"navbar-item",href:"link",children:Object(b.jsx)(v.b,{to:"/anime",children:"Anime"})}),Object(b.jsx)("a",{className:"navbar-item",href:"link",children:Object(b.jsx)(v.b,{to:"/norris",children:"Norris"})})]})})};var k=function(){var e=Object(n.useState)(x),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(b.jsx)("div",{className:"container",style:{backgroundImage:"url(".concat(c,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"100vh"},children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(g,{}),Object(b.jsxs)("div",{className:"content is-vcentered",children:[Object(b.jsx)(o.a,{exact:!0,path:"/",render:function(){return Object(b.jsx)(O,{backgroundImage:c,setBackgroundImage:s})}}),Object(b.jsx)(o.a,{exact:!0,path:"/anime",render:function(){return Object(b.jsx)(m,{backgroundImage:c,setBackgroundImage:s})}}),Object(b.jsx)(o.a,{exact:!0,path:"/norris",render:function(){return Object(b.jsx)(h,{backgroundImage:c,setBackgroundImage:s})}})]})]})})};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(v.a,{children:Object(b.jsx)(k,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.31b84ab4.chunk.js.map