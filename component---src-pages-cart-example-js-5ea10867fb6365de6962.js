(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{L4PV:function(e,t,n){"use strict";n.r(t);n("E9XD");var a=n("o0o1"),r=n.n(a),o=(n("ls82"),n("HaE+")),c=n("q1tI"),l=n.n(c),s=(n("LM7b"),n("r6Hh"),n("wXFE")),i=(n("YwZP"),n("Zttt")),u=n("wtQ5"),w=(n("bEg/"),n("F6po")),p=(n("z8k1"),n("QetY"),n("MqQV"),n("v4r+")),b=function(){var e=Object(p.a)("pk_test_51IGhToG3l6YaloTgAakGvMYVjrveEMs7oFJF7akytn6gyne2Lq0GDYmAYxh0iqFMPIclDMwQ1PtGqhq26WvwHYGw001BbrEVn0");return React.createElement(w.a,{mode:"client-only",stripe:e,successUrl:isBrowser&&window.location.origin+"/page-2/",cancelUrl:isBrowser&&window.location.origin+"/",currency:"USD",allowedCountries:["US","GB","CA"],billingAddressCollection:!0},React.createElement(CartOverview,null))},v=n("LUOC");Object(p.a)("pk_test_51IGhToG3l6YaloTgAakGvMYVjrveEMs7oFJF7akytn6gyne2Lq0GDYmAYxh0iqFMPIclDMwQ1PtGqhq26WvwHYGw001BbrEVn0"),t.default=function(e){var t=e.location,n=Object(c.useState)(!0),a=(n[0],n[1]),w=Object(c.useState)([]),p=(w[0],w[1]),E=Object(c.useState)(!1),g=(E[0],E[1],Object(c.useState)({})),m=(g[0],g[1]),d=Object(c.useState)({}),f=(d[0],d[1]);Object(c.useContext)(s.a).updateCartCount;function h(){return(h=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("mcart");case 2:return t=e.sent,console.log(t),e.next=6,v.getCartItems(t).then((function(e){var n=e.data,r=e.meta;console.log(n),p(n),f(t),m(r),a(!1)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[]);return l.a.createElement(i.a,{location:t},l.a.createElement(u.a,{title:"Cart Example"}),l.a.createElement("h1",{style:{paddingTop:"60px"}},"Cart Overview"),l.a.createElement(b,null))}}}]);
//# sourceMappingURL=component---src-pages-cart-example-js-5ea10867fb6365de6962.js.map