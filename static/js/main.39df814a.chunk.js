(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(41)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(22),i=n.n(s),c=(n(30),n(3)),l=n(4),u=n(6),o=n(5),p=n(7),h=(n(31),n(32),n(33),n(34),n(35),n(1)),m=n.n(h),f=n(8),d=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(o.a)(t).call(this))).state={},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"hasNewsLimit",value:function(){return this.props.newsLimit>0}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"news"},r.a.createElement("div",{className:"news-image",style:{backgroundImage:"url(".concat(this.props.article.urlToImage,")")}}),r.a.createElement("h1",null,this.props.article.title),r.a.createElement("p",null,this.props.article.description)))}}]),t}(a.Component),v=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(o.a)(t).call(this))).toggleArticles=function(){e.state.isOpen?(e.setDisplayedArticles(),window.scrollTo(0,0)):e.setState({displayedArticles:e.state.articles,isOpen:!0})},e.toggleArticlesButtonText=function(){return e.state.isOpen?"See Less Articles":"See All Articles"},e.state={articles:[],displayedArticles:[],isOpen:!1},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"getAppleNews",value:function(){var e=Object(f.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=cb83495bb9724d3c80337804facdd7de").then(function(e){return e.json()});case 2:return t=e.sent,e.abrupt("return",t.articles);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(f.a)(m.a.mark(function e(){var t=this;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.getAppleNews().then(function(e){return t.setState({articles:e})}).then(function(){t.setDisplayedArticles()});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"hasNewsLimit",value:function(){return this.props.newsLimit>0}},{key:"setDisplayedArticles",value:function(){this.hasNewsLimit()?this.setState({isOpen:!1,displayedArticles:this.state.articles.slice(0,this.props.newsLimit)}):this.setState({displayedArticles:this.state.articles})}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.displayedArticles.map(function(e,t){return r.a.createElement(d,{article:e,key:t})}),r.a.createElement("button",{className:"button-all",onClick:this.toggleArticles},this.toggleArticlesButtonText()))}}]),t}(a.Component),y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(o.a)(t).call(this))).toggleArticles=function(){e.state.isOpen?(e.setDisplayedArticles(),window.scrollTo(0,0)):e.setState({displayedArticles:e.state.articles,isOpen:!0})},e.toggleArticlesButtonText=function(){return e.state.isOpen?"See Less Articles":"See All Articles"},e.state={articles:[],displayedArticles:[],isOpen:!1},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"getNews",value:function(){var e=Object(f.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=cb83495bb9724d3c80337804facdd7de").then(function(e){return e.json()});case 2:return t=e.sent,e.abrupt("return",t.articles);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(f.a)(m.a.mark(function e(){var t=this;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.getNews().then(function(e){return t.setState({articles:e})}).then(function(){t.setDisplayedArticles()});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"hasNewsLimit",value:function(){return this.props.newsLimit>0}},{key:"setDisplayedArticles",value:function(){this.hasNewsLimit()?this.setState({isOpen:!1,displayedArticles:this.state.articles.slice(0,this.props.newsLimit)}):this.setState({displayedArticles:this.state.articles})}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.displayedArticles.map(function(e,t){return r.a.createElement(d,{article:e,key:t})}),r.a.createElement("button",{className:"button-all",onClick:this.toggleArticles},this.toggleArticlesButtonText()))}}]),t}(a.Component),w=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(o.a)(t).call(this))).state={weather:[],icon:"",city:""},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"getWeather",value:function(){var e=Object(f.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?id=4299276&APPID=6ca05d91658fd6349adc797a8d6acb2a&units=imperial").then(function(e){return e.json()}).catch(function(e){console.log(e)});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=this;this.getWeather().then(function(t){e.setState({weather:t.main,icon:t.weather[0].icon,city:t.name})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"weather"},r.a.createElement("h2",null,this.state.weather.temp+"\xb0F"),r.a.createElement("img",{className:"icon",alt:"weather icon",src:"http://openweathermap.org/img/wn/".concat(this.state.icon,".png")}),r.a.createElement("p",{className:"city"},this.state.city+", KY"))}}]),t}(a.Component),b=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(o.a)(t).call(this))).state={quotes:{}},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"getQuotes",value:function(){var e=Object(f.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://favqs.com/api/qotd").then(function(e){return e.json()}).catch(function(e){console.log(e)});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=this;this.getQuotes().then(function(t){return e.setState({quotes:t.quote})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,'"'+this.state.quotes.body+'"'),r.a.createElement("p",{className:"author"},"\u2014 "+this.state.quotes.author))}}]),t}(a.Component),O=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(o.a)(t).call(this))).toggleArticles=function(){e.state.isOpen?(e.setDisplayedArticles(),window.scrollTo(0,0)):e.setState({displayedArticles:e.state.articles,isOpen:!0})},e.toggleArticlesButtonText=function(){return e.state.isOpen?"See Less Articles":"See All Articles"},e.state={articles:[],displayedArticles:[],isOpen:!1},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"getWallstreet",value:function(){var e=Object(f.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=cb83495bb9724d3c80337804facdd7de").then(function(e){return e.json()});case 2:return t=e.sent,e.abrupt("return",t.articles);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(f.a)(m.a.mark(function e(){var t=this;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.getWallstreet().then(function(e){return t.setState({articles:e})}).then(function(){t.setDisplayedArticles()});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"hasNewsLimit",value:function(){return this.props.newsLimit>0}},{key:"setDisplayedArticles",value:function(){this.hasNewsLimit()?this.setState({isOpen:!1,displayedArticles:this.state.articles.slice(0,this.props.newsLimit)}):this.setState({displayedArticles:this.state.articles})}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.displayedArticles.map(function(e,t){return r.a.createElement(d,{article:e,key:t})}),r.a.createElement("button",{className:"button-all",onClick:this.toggleArticles},this.toggleArticlesButtonText()))}}]),t}(a.Component),g=n(15),A=n(12),E=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",{className:"headline"},"Top US News"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(g.b,{exact:!0,to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/wallstreet/"},"Wallstreet Journal")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/apple/"},"Apple News")))),r.a.createElement("div",null,r.a.createElement(w,null))),r.a.createElement(A.a,{path:"/wallstreet/",exact:!0,component:function(){return r.a.createElement("div",{className:"articles"},r.a.createElement(O,{newsLimit:3}))}}),r.a.createElement(A.a,{path:"/apple/",exact:!0,component:function(){return r.a.createElement("div",{className:"articles"},r.a.createElement(v,{newsLimit:3}))}}),r.a.createElement(A.a,{path:"/",render:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"articles"},r.a.createElement(y,{newsLimit:3})),r.a.createElement("div",{className:"quotes"},r.a.createElement(b,null)))}}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.39df814a.chunk.js.map