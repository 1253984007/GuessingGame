window.__require = function t(e, r, o) {
function n(i, s) {
if (!r[i]) {
if (!e[i]) {
var p = i.split("/");
p = p[p.length - 1];
if (!e[p]) {
var a = "function" == typeof __require && __require;
if (!s && a) return a(p, !0);
if (c) return c(p, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = p;
}
var u = r[i] = {
exports: {}
};
e[i][0].call(u.exports, function(t) {
return n(e[i][1][t] || t);
}, u, u.exports, t, e, r, o);
}
return r[i].exports;
}
for (var c = "function" == typeof __require && __require, i = 0; i < o.length; i++) n(o[i]);
return n;
}({
AddCard: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "7df71pie99OeLiDKSaoomSL", "AddCard");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), c = this && this.__decorate || function(t, e, r, o) {
var n, c = arguments.length, i = c < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (i = (c < 3 ? n(i) : c > 3 ? n(e, r, i) : n(e, r)) || i);
return c > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = cc._decorator, s = i.ccclass, p = i.property, a = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.card = null;
e.popup = null;
e.cd = null;
e.label = null;
e.cardss = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L" ];
e.position = null;
e.positionc = null;
e.touch = "0";
return e;
}
e.prototype.start = function() {
this.add();
};
e.prototype.add = function() {
for (var t = this, e = function(e) {
console.log(r.cardss[e]);
var o = cc.instantiate(r.card);
o.getComponent("CardTS").str = r.cardss[e];
o.setParent(r.node);
o.y = 0;
o.x = 60 * e - 330;
o.on(cc.Node.EventType.TOUCH_START, function(e) {
t.position = e.getLocation();
t.positionc = o.getPosition();
}, r);
o.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
var r = e.getLocation();
r.x = r.x - t.position.x;
r.y = r.y - t.position.y;
o.x = t.positionc.x + r.x;
o.y = t.positionc.y + r.y;
});
o.on(cc.Node.EventType.TOUCH_END, function() {
t.label.string = (parseInt(t.label.string) + 1).toString();
for (var r = 0; r < 12; r++) {
var n = t.cd.children[2 * r], c = o, i = n.x < c.x + 20 && n.x > c.x - 20, s = n.y < c.y - 220 && n.y > c.y - 260;
if (n.getComponent("CardTS").str === c.getComponent("CardTS").str && i && s) {
t.node.removeChild(o);
t.cd.children[2 * r + 1].active = !1;
if (0 == t.node.childrenCount) {
t.popup.getComponent("PopupTS").showPopup();
t.destroy();
}
return;
}
}
setTimeout(function() {
o.y = 0;
o.x = 60 * e - 330;
}, 300);
}, r);
}, r = this, o = 0; o < this.cardss.length; o++) e(o);
};
c([ p(cc.Prefab) ], e.prototype, "card", void 0);
c([ p(cc.Node) ], e.prototype, "popup", void 0);
c([ p(cc.Node) ], e.prototype, "cd", void 0);
c([ p(cc.Label) ], e.prototype, "label", void 0);
c([ p ], e.prototype, "cardss", void 0);
c([ p(cc.Vec2) ], e.prototype, "position", void 0);
c([ p(cc.Vec2) ], e.prototype, "positionc", void 0);
c([ p ], e.prototype, "touch", void 0);
return c([ s ], e);
}(cc.Component);
r.default = a;
cc._RF.pop();
}, {} ],
AddOther: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "1164f3aMPdBXLfmfRtuAu0d", "AddOther");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), c = this && this.__decorate || function(t, e, r, o) {
var n, c = arguments.length, i = c < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (i = (c < 3 ? n(i) : c > 3 ? n(e, r, i) : n(e, r)) || i);
return c > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = cc._decorator, s = i.ccclass, p = i.property, a = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.card = null;
e.bg = null;
e.cards1 = null;
e.result = null;
e.cardss = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L" ];
return e;
}
e.prototype.start = function() {
this.cardss = this.shuffleArray(this.cardss);
for (var t = 0; t < this.cardss.length; t++) {
var e = cc.instantiate(this.card), r = cc.instantiate(this.bg);
e.getComponent("CardTS").str = this.cardss[t];
e.setParent(this.node);
r.setParent(this.node);
if (t < 6) {
e.y = 55;
e.x = 80 * t - 240;
r.y = 55;
r.x = 80 * t - 240;
} else {
e.y = -55;
e.x = 80 * (t - 6) - 240;
r.y = -55;
r.x = 80 * (t - 6) - 240;
}
}
this.result.children[0].children[2].getComponent(cc.Label).string = (this.getNumber(this.cardss[0]) + this.getNumber(this.cardss[1]) + this.getNumber(this.cardss[2]) + this.getNumber(this.cardss[3]) + this.getNumber(this.cardss[4]) + this.getNumber(this.cardss[5])).toString();
this.result.children[1].children[2].getComponent(cc.Label).string = (this.getNumber(this.cardss[6]) + this.getNumber(this.cardss[7]) + this.getNumber(this.cardss[8]) + this.getNumber(this.cardss[9]) + this.getNumber(this.cardss[10]) + this.getNumber(this.cardss[11])).toString();
this.result.children[2].children[2].getComponent(cc.Label).string = (this.getNumber(this.cardss[0]) + this.getNumber(this.cardss[6])).toString();
this.result.children[3].children[2].getComponent(cc.Label).string = (this.getNumber(this.cardss[1]) + this.getNumber(this.cardss[7])).toString();
this.result.children[4].children[2].getComponent(cc.Label).string = (this.getNumber(this.cardss[2]) + this.getNumber(this.cardss[8])).toString();
this.result.children[5].children[2].getComponent(cc.Label).string = (this.getNumber(this.cardss[3]) + this.getNumber(this.cardss[9])).toString();
this.result.children[6].children[2].getComponent(cc.Label).string = (this.getNumber(this.cardss[4]) + this.getNumber(this.cardss[10])).toString();
this.result.children[7].children[2].getComponent(cc.Label).string = (this.getNumber(this.cardss[5]) + this.getNumber(this.cardss[11])).toString();
};
e.prototype.shuffleArray = function(t) {
for (var e, r = t.slice(), o = r.length - 1; o > 0; o--) {
var n = Math.floor(Math.random() * (o + 1));
e = [ r[n], r[o] ], r[o] = e[0], r[n] = e[1];
}
return r;
};
e.prototype.getNumber = function(t) {
return "A" === t.charAt(0) ? 1 : "B" === t.charAt(0) ? 2 : "C" === t.charAt(0) ? 3 : "D" === t.charAt(0) ? 4 : "E" === t.charAt(0) ? 5 : "F" === t.charAt(0) ? 6 : "G" === t.charAt(0) ? 7 : "H" === t.charAt(0) ? 8 : "I" === t.charAt(0) ? 9 : "J" === t.charAt(0) ? 10 : "K" === t.charAt(0) ? 11 : "L" === t.charAt(0) ? 12 : void 0;
};
c([ p(cc.Prefab) ], e.prototype, "card", void 0);
c([ p(cc.Prefab) ], e.prototype, "bg", void 0);
c([ p(cc.Node) ], e.prototype, "cards1", void 0);
c([ p(cc.Node) ], e.prototype, "result", void 0);
c([ p ], e.prototype, "cardss", void 0);
return c([ s ], e);
}(cc.Component);
r.default = a;
cc._RF.pop();
}, {} ],
Back: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "11a32mOR0tHVp+zhW3wrjpo", "Back");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), c = this && this.__decorate || function(t, e, r, o) {
var n, c = arguments.length, i = c < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (i = (c < 3 ? n(i) : c > 3 ? n(e, r, i) : n(e, r)) || i);
return c > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = cc._decorator, s = i.ccclass, p = (i.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_END, function() {
cc.director.loadScene("select");
}, this);
};
return c([ s ], e);
}(cc.Component));
r.default = p;
cc._RF.pop();
}, {} ],
CardTS: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "32b0fO+4CdAApq1wCaKBl2V", "CardTS");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), c = this && this.__decorate || function(t, e, r, o) {
var n, c = arguments.length, i = c < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (i = (c < 3 ? n(i) : c > 3 ? n(e, r, i) : n(e, r)) || i);
return c > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = cc._decorator, s = i.ccclass, p = i.property, a = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.str = "";
return e;
}
e.prototype.start = function() {
"" != this.str && this.addDate(this.str);
};
e.prototype.addDate = function(t) {
var e, r = this;
console.log("======>" + t);
"A" === t ? e = 0 : "B" === t ? e = 1 : "C" === t ? e = 2 : "D" === t ? e = 3 : "E" === t ? e = 4 : "F" === t ? e = 5 : "G" === t ? e = 6 : "H" === t ? e = 7 : "I" === t ? e = 8 : "J" === t ? e = 9 : "K" === t ? e = 10 : "L" === t ? e = 11 : "M" === t && (e = 12);
cc.loader.loadRes([ "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png" ][e], cc.SpriteFrame, function(t, e) {
t && console.error("Failed to Load sprite frame:", t);
r.node.getComponent(cc.Sprite).spriteFrame = e;
});
};
c([ p ], e.prototype, "str", void 0);
return c([ s ], e);
}(cc.Component);
r.default = a;
cc._RF.pop();
}, {} ],
OpenGame: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "5bac80u6GlI2ZilvTLMM+3I", "OpenGame");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), c = this && this.__decorate || function(t, e, r, o) {
var n, c = arguments.length, i = c < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (i = (c < 3 ? n(i) : c > 3 ? n(e, r, i) : n(e, r)) || i);
return c > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = cc._decorator, s = i.ccclass, p = (i.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_START, function() {
cc.director.loadScene("game");
}, this);
};
return c([ s ], e);
}(cc.Component));
r.default = p;
cc._RF.pop();
}, {} ],
OpenHelp: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "619272uw2BCVIYk5uf9omwH", "OpenHelp");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), c = this && this.__decorate || function(t, e, r, o) {
var n, c = arguments.length, i = c < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (i = (c < 3 ? n(i) : c > 3 ? n(e, r, i) : n(e, r)) || i);
return c > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = cc._decorator, s = i.ccclass, p = (i.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_END, function() {
jsb.reflection.callStaticMethod("Share", "Help");
}, this);
};
return c([ s ], e);
}(cc.Component));
r.default = p;
cc._RF.pop();
}, {} ],
OpenRanking: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "8e8a2qWu+xNCKXprYYng6oj", "OpenRanking");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), c = this && this.__decorate || function(t, e, r, o) {
var n, c = arguments.length, i = c < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (i = (c < 3 ? n(i) : c > 3 ? n(e, r, i) : n(e, r)) || i);
return c > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = cc._decorator, s = i.ccclass, p = (i.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_END, function() {
cc.director.loadScene("ranking");
}, this);
};
return c([ s ], e);
}(cc.Component));
r.default = p;
cc._RF.pop();
}, {} ],
PopupTS: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a0b18vVGKJFHKPt0jCut6VZ", "PopupTS");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), c = this && this.__decorate || function(t, e, r, o) {
var n, c = arguments.length, i = c < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (i = (c < 3 ? n(i) : c > 3 ? n(e, r, i) : n(e, r)) || i);
return c > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = cc._decorator, s = i.ccclass, p = i.property, a = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.popupPrefab = null;
e.label = null;
return e;
}
e.prototype.showPopup = function() {
var t = this, e = cc.instantiate(this.popupPrefab);
e.y = 40;
cc.loader.loadRes("win.png", cc.SpriteFrame, function(t, r) {
t && console.error("Failed to Load sprite frame:", t);
e.children[0].getComponent(cc.Sprite).spriteFrame = r;
});
e.parent = this.node;
e.children[1].on(cc.Node.EventType.TOUCH_END, function() {
t.closePopup();
cc.director.loadScene("select");
var e = JSON.parse(localStorage.getItem("myArray") || "[]");
e.push(parseInt(t.label.string));
(e = e.filter(function(t) {
return 0 !== t;
})).sort(function(t, e) {
return t - e;
});
var r = e.slice(0, 10), o = r.concat(Array(10 - r.length).fill(0));
localStorage.setItem("myArray", JSON.stringify(o));
}, this);
};
e.prototype.closePopup = function() {
this.node.removeAllChildren();
};
c([ p(cc.Prefab) ], e.prototype, "popupPrefab", void 0);
c([ p(cc.Label) ], e.prototype, "label", void 0);
return c([ s ], e);
}(cc.Component);
r.default = a;
cc._RF.pop();
}, {} ],
ranking: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "0ed67+j0RhEK4p3o2mVWFYk", "ranking");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), c = this && this.__decorate || function(t, e, r, o) {
var n, c = arguments.length, i = c < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (i = (c < 3 ? n(i) : c > 3 ? n(e, r, i) : n(e, r)) || i);
return c > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = cc._decorator, s = i.ccclass, p = (i.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
for (var t = JSON.parse(localStorage.getItem("myArray") || "[]"), e = t.concat(Array(10 - t.length).fill(0)), r = 0; r < this.node.childrenCount; r++) {
this.node.children[r].children[1].getComponent(cc.Label).string = e[r];
console.log(e[r]);
}
};
return c([ s ], e);
}(cc.Component));
r.default = p;
cc._RF.pop();
}, {} ]
}, {}, [ "AddCard", "AddOther", "Back", "CardTS", "PopupTS", "ranking", "OpenGame", "OpenHelp", "OpenRanking" ]);