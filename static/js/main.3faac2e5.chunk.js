(this["webpackJsonpportfolio-website"]=this["webpackJsonpportfolio-website"]||[]).push([[0],{23:function(e,a,t){e.exports=t(36)},35:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(21),r=t.n(l),c=t(4),s=t(5),i=t(7),m=t(6),p=t(2),h=t(8),d=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"navbar"},o.a.createElement("ul",{className:"navbar__nav"},o.a.createElement("li",{className:"nav__item"},o.a.createElement(h.b,{className:"nav__link",to:"/photograph-portfolio"},"Home")),o.a.createElement("li",{className:"nav__item"},o.a.createElement(h.b,{className:"nav__link",to:"/photograph-portfolio/about"},"About")),o.a.createElement("li",{className:"nav__item"},o.a.createElement(h.b,{className:"nav__link",to:"/photograph-portfolio/works"},"Works")),o.a.createElement("li",{className:"nav__item"},o.a.createElement(h.b,{className:"nav__link",to:"/photograph-portfolio/contact"},"Contact"))))}}]),t}(n.Component),u=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"sidebar"},o.a.createElement("nav",{className:"lang"},o.a.createElement("ul",{className:"lang__nav"},o.a.createElement("li",{className:"lang__item"},"en"),o.a.createElement("li",{className:"lang__item"},"ch"))),o.a.createElement("nav",{className:"social-media-icon"},o.a.createElement("ul",{className:"social-media-icon__nav"},o.a.createElement("li",{className:"social-media-icon__item"},o.a.createElement(h.b,{to:"/facebook"},o.a.createElement("i",{className:"fab fa-facebook","aria-hidden":"true"}))),o.a.createElement("li",{className:"social-media-icon__item"},o.a.createElement(h.b,{to:"/instagram"},o.a.createElement("i",{className:"fab fa-instagram","aria-hidden":"true"}))),o.a.createElement("li",{className:"social-media-icon__item"},o.a.createElement(h.b,{to:"/twitter"},o.a.createElement("i",{className:"fab fa-twitter","aria-hidden":"true"}))),o.a.createElement("li",{className:"social-media-icon__item"},o.a.createElement(h.b,{to:"/tiktok"},o.a.createElement("i",{className:"fab fa-tiktok"}))),o.a.createElement("li",{className:"social-media-icon__item"},o.a.createElement(h.b,{to:"/behance"},o.a.createElement("i",{className:"fab fa-behance","aria-hidden":"true"}))),o.a.createElement("li",{className:"social-media-icon__item"},o.a.createElement(h.b,{to:"/pinterest"},o.a.createElement("i",{className:"fab fa-pinterest-p","aria-hidden":"true"}))),o.a.createElement("li",{className:"social-media-icon__item"},o.a.createElement(h.b,{to:"/dribble"},o.a.createElement("i",{className:"fab fa-dribbble","aria-hidden":"true"}))))))}}]),t}(n.Component),b=t(1),E=(t(32),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=a.call.apply(a,[this].concat(o))).state={showItems:5},e.handleWindowResize=function(){var a=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(window){var t=8;a<760?t=3:a<800?t=4:a<1050?t=5:a<1440?t=6:a<1980&&(t=7),e.setState({showItems:t})}},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){window&&(window.addEventListener("resize",this.handleWindowResize.bind(this)),this.handleWindowResize())}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.handleWindowResize.bind(this))}},{key:"render",value:function(){var e=this.state.showItems;return o.a.createElement(b.c,{naturalSlideWidth:100,naturalSlideHeight:120,totalSlides:10,orientation:"vertical",visibleSlides:e,className:"carousel-container"},o.a.createElement(b.a,{className:"carousel-button"},o.a.createElement("i",{className:"fa fa-angle-up","aria-hidden":"true"})),o.a.createElement(b.f,null,o.a.createElement(b.e,{index:0},o.a.createElement(b.d,{className:"slide__img",src:"/photograph-portfolio/image/be-kind.jpg",alt:"none"})),o.a.createElement(b.e,{index:1},o.a.createElement(b.d,{className:"slide__img",src:"https://images.pexels.com/photos/4843330/pexels-photo-4843330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"none"})),o.a.createElement(b.e,{index:2},o.a.createElement(b.d,{className:"slide__img",src:"/photograph-portfolio/image/green-plant-on-brown-glass-vase.jpg",alt:"none"})),o.a.createElement(b.e,{index:3},o.a.createElement(b.d,{className:"slide__img",src:"/photograph-portfolio/image/highway-covered-in-water.jpg",alt:"none"})),o.a.createElement(b.e,{index:4},o.a.createElement(b.d,{className:"slide__img",src:"https://images.pexels.com/photos/4584968/pexels-photo-4584968.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",alt:"none"})),o.a.createElement(b.e,{index:5},o.a.createElement(b.d,{className:"slide__img",src:"https://images.pexels.com/photos/4816503/pexels-photo-4816503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"none"})),o.a.createElement(b.e,{index:6},o.a.createElement(b.d,{className:"slide__img",src:"https://images.pexels.com/photos/3706642/pexels-photo-3706642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"none"})),o.a.createElement(b.e,{index:7},o.a.createElement(b.d,{className:"slide__img",src:"/photograph-portfolio/image/polaroid-photo-of-flowers.jpg",alt:"none"})),o.a.createElement(b.e,{index:8},o.a.createElement(b.d,{className:"slide__img",src:"https://images.pexels.com/photos/3328240/pexels-photo-3328240.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",alt:"none"})),o.a.createElement(b.e,{index:9},o.a.createElement(b.d,{className:"slide__img",src:"/photograph-portfolio/image/white-jellyfish.jpg",alt:"none"}))),o.a.createElement(b.b,{className:"carousel-button"},o.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})))}}]),t}(o.a.Component)),g=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"second-side-bar"},o.a.createElement(E,null))}}]),t}(n.Component),f=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"about-box container border"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-4"},o.a.createElement("img",{src:"/photograph-portfolio/image/highway-covered-in-water.jpg",alt:"none"})),o.a.createElement("div",{className:"col-lg-4"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12"},o.a.createElement("img",{src:"/photograph-portfolio/image/apartments-architecture-balcony-black-and-white.jpg",alt:"..."}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12"},o.a.createElement("img",{src:"/photograph-portfolio/image/a-pexels.jpg",alt:"..."})))),o.a.createElement("div",{className:"col-12 col-lg-4"},o.a.createElement("div",null,o.a.createElement("b",null,"About"),o.a.createElement("hr",null),o.a.createElement("p",null,"Lorem Ipsumer since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")))))}}]),t}(n.Component),w=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"home-container"},o.a.createElement("h3",null,"\u201cIn photography there is a reality so subtle that it becomes more real than reality.\u201d"))}}]),t}(n.Component),v=t(14),N=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).handleSubmit=function(e){e.preventDefault()},e.handleSubmit=e.handleSubmit.bind(Object(v.a)(e)),e}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"contact-box"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h3",{className:"card-title"},"Contact Us"),o.a.createElement("p",{className:"card-text"},"Feel free to leave us a message"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"mb-3"},o.a.createElement("label",{htmlFor:"email",className:"form-label"},"Email"),o.a.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"name@example.com",name:"email"})),o.a.createElement("div",{className:"mb-3"},o.a.createElement("label",{htmlFor:"message",className:"form-label"},"Message"),o.a.createElement("textarea",{className:"form-control",id:"message",rows:"3",name:"message"})),o.a.createElement("div",{className:"col-auto"},o.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary mb-3"},"Submit"))))))}}]),t}(n.Component),_=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"works-container container-md"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-6"},o.a.createElement("img",{src:"https://images.pexels.com/photos/2983327/pexels-photo-2983327.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",alt:"none"})),o.a.createElement("div",{className:"col-lg-3 h-50"},o.a.createElement("img",{src:"https://images.pexels.com/photos/4408468/pexels-photo-4408468.png?auto=compress&cs=tinysrgb&dpr=2&w=250",alt:"none"}),o.a.createElement("img",{src:"https://images.pexels.com/photos/2120110/pexels-photo-2120110.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=250",alt:"none"})),o.a.createElement("div",{className:"col-lg-3 h-50"},o.a.createElement("img",{src:"https://images.pexels.com/photos/4781409/pexels-photo-4781409.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",alt:"none"}),o.a.createElement("img",{src:"https://images.pexels.com/photos/4492525/pexels-photo-4492525.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",alt:"none"}))))}}]),t}(n.Component),y=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"flex-grid"},o.a.createElement(u,null),o.a.createElement(g,null),o.a.createElement("div",{className:"main-content"},o.a.createElement(d,null),o.a.createElement(p.c,null,o.a.createElement(p.a,{exact:!0,path:"/photograph-portfolio",component:w}),o.a.createElement(p.a,{path:"/photograph-portfolio/contact",component:N}),o.a.createElement(p.a,{path:"/photograph-portfolio/about",component:f}),o.a.createElement(p.a,{path:"/photograph-portfolio/works",component:_}),o.a.createElement(p.a,{path:"/facebook",component:function(e){return e.history.replace("/photograph-portfolio"),window.location.href="https://www.facebook.com/",null}}),o.a.createElement(p.a,{path:"/instagram",component:function(e){return e.history.replace("/photograph-portfolio"),window.location.href="https://www.instagram.com/",null}}),o.a.createElement(p.a,{path:"/twitter",component:function(e){return e.history.replace("/photograph-portfolio"),window.location.href="https://www.twitter.com/",null}}),o.a.createElement(p.a,{path:"/tiktok",component:function(e){return e.history.replace("/photograph-portfolio"),window.location.href="https://www.tiktok.com/",null}}),o.a.createElement(p.a,{path:"/behance",component:function(e){return e.history.replace("/photograph-portfolio"),window.location.href="https://www.behance.net/",null}}),o.a.createElement(p.a,{path:"/pinterest",component:function(e){return e.history.replace("/photograph-portfolio"),window.location.href="https://www.pinterest.com/",null}}),o.a.createElement(p.a,{path:"/dribble",component:function(e){return e.history.replace("/photograph-portfolio"),window.location.href="https://dribbble.com/",null}})))))}}]),t}(n.Component);t(33),t(34),t(35);r.a.render(o.a.createElement(h.a,null,o.a.createElement(y,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.3faac2e5.chunk.js.map