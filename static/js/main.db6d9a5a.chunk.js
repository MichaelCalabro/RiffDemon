(this.webpackJsonpriffbot=this.webpackJsonpriffbot||[]).push([[0],{696:function(e,t,a){e.exports=a(713)},701:function(e,t,a){},702:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},703:function(e,t,a){},713:function(e,t,a){"use strict";a.r(t);var n=a(8),s=a.n(n),r=a(535),c=a.n(r),o=(a(701),a(702),a(703),a(22)),l=a(7),i=a(0),u=a(1),h=a(5),d=a(3),f=a(2),m=[["E4","F4","F#4","G4","G#4","A4","Bb4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","Bb5","B5","C6","C#6","D6","D#6","E6"],["B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","Bb4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","Bb5","B5"],["G3","G#3","A3","Bb3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","Bb4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5"],["D3","D#3","E3","F3","F#3","G3","G#3","A3","Bb3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","Bb4","B4","C5","C#5","D5"],["A2","Bb2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","Bb3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4"],["E2","F2","F#2","G2","G#2","A2","Bb2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","Bb3","B3","C4","C#4","D4","D#4","E4"]],p=["1n","2n","4n","8n","8t","16n","16t"],N={"1n":"\ud834\udd5d","2n":"\ud834\udd5e","4n":"\ud834\udd5f","8n":"\ud834\udd60\ud834\udd60","8t":"\ud834\udd60\ud834\udd60\ud834\udd60","16n":"\ud834\udd61\ud834\udd61\ud834\udd61\ud834\udd61","16t":"\ud834\udd61\ud834\udd61\ud834\udd61\ud834\udd61\ud834\udd61\ud834\udd61"},v={"1n":"                ","2n":"        ","4n":"    ","8n":"  ","8t":"  ","16n":" ","16t":" "},g={"1n":.25,"2n":.5,"4n":1,"8n":2,"8t":3,"16n":4,"16t":6};function b(e){return e.replace("#","\u266f").replace("b","\u266d")}function y(e){return N[e]}function E(e){if(e){if(Array.isArray(e)){var t=[];return e.forEach((function(e){var a=e.split(":");t.push(m[a[0]-1][a[1]])})),t}var a=e.split(":");return m[a[0]-1][a[1]]}return e}function k(e){return e?e.split(",").map((function(e,t){return s.a.createElement("p",{key:e+t,className:"noteSymbol"},b(E(e)),s.a.createElement("sub",null,e.split(":")[0]))})):e}var C=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={synth:e.synth},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;this.selectNote=this.props.selectNote,this.deselectNote=this.props.deselectNote;var t=m[0].map((function(t,a){return s.a.createElement(j,{key:t+":1",note:t,string:1,fret:a,synth:e.state.synth,selectNote:e.selectNote,deselectNote:e.deselectNote})})),a=m[1].map((function(t,a){return s.a.createElement(j,{key:t+":2",note:t,string:2,fret:a,synth:e.state.synth,selectNote:e.selectNote,deselectNote:e.deselectNote})})),n=m[2].map((function(t,a){return s.a.createElement(j,{key:t+":3",note:t,string:3,fret:a,synth:e.state.synth,selectNote:e.selectNote,deselectNote:e.deselectNote})})),r=m[3].map((function(t,a){return s.a.createElement(j,{key:t+":4",note:t,string:4,fret:a,synth:e.state.synth,selectNote:e.selectNote,deselectNote:e.deselectNote})})),c=m[4].map((function(t,a){return s.a.createElement(j,{key:t+":5",note:t,string:5,fret:a,synth:e.state.synth,selectNote:e.selectNote,deselectNote:e.deselectNote})})),o=m[5].map((function(t,a){return s.a.createElement(j,{key:t+":6",note:t,string:6,fret:a,synth:e.state.synth,selectNote:e.selectNote,deselectNote:e.deselectNote})})),l=m[0].map((function(e,t){return s.a.createElement("th",{key:"fret"+t,className:"fret"},t)}));return s.a.createElement("div",{className:"notePicker"},s.a.createElement("table",{className:"guitarNeck"},s.a.createElement("tbody",null,s.a.createElement("tr",{className:"guitarString"},s.a.createElement("th",{className:"fret"},"1"),t),s.a.createElement("tr",{className:"guitarString"},s.a.createElement("th",{className:"fret"},"2"),a),s.a.createElement("tr",{className:"guitarString"},s.a.createElement("th",{className:"fret"},"3"),n),s.a.createElement("tr",{className:"guitarString"},s.a.createElement("th",{className:"fret"},"4"),r),s.a.createElement("tr",{className:"guitarString"},s.a.createElement("th",{className:"fret"},"5"),c),s.a.createElement("tr",{className:"guitarString"},s.a.createElement("th",{className:"fret"},"6"),o),s.a.createElement("tr",null,s.a.createElement("th",{className:"fret"}),l))))}}]),a}(s.a.Component),j=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={note:e.note,synth:e.synth},n}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("td",{className:"fret"},s.a.createElement("label",{className:"fret"},s.a.createElement("input",{type:"checkbox",id:"pick_"+this.props.string+":"+this.props.fret,onChange:this.handleCheck.bind(this)}),s.a.createElement("span",null,b(this.state.note))))}},{key:"handleCheck",value:function(e){e.target.checked?(this.props.selectNote(this.props.string+":"+this.props.fret),this.playNote()):this.props.deselectNote(this.props.string+":"+this.props.fret)}},{key:"playNote",value:function(){this.state.synth.triggerAttackRelease(this.state.note,"2n")}}]),a}(s.a.Component),R=C,O=a(11),B=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={identifier:e.identifier,sliderRef:s.a.createRef()},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=null;return this.props.deselectNote&&(t=s.a.createElement("button",{className:"altButton",onClick:function(){return e.props.deselectNote(e.state.identifier)}},"X")),s.a.createElement("li",null,s.a.createElement("span",null,this.props.symbolConverter(this.state.identifier)),s.a.createElement("input",{type:"range",min:"0",max:"100",className:this.props.classRef,defaultValue:this.props.defaultWeight,step:"0.01",onInput:this.handleSlide.bind(this),ref:this.state.sliderRef}),s.a.createElement("label",{className:"lock"},s.a.createElement("input",{type:"checkbox",className:"lock",onChange:this.handleCheck.bind(this)}),s.a.createElement("i",{id:"lockToggle-"+this.props.id,className:"fa fa-unlock lock"})),t)}},{key:"handleCheck",value:function(e){e.target.checked?(this.state.sliderRef.current.disabled=!0,document.getElementById("lockToggle-"+this.props.id).className="fa fa-lock lock"):(this.state.sliderRef.current.disabled=!1,e.target.className="unlock",document.getElementById("lockToggle-"+this.props.id).className="fa fa-unlock lock")}},{key:"handleSlide",value:function(e){var t=Array.from(document.getElementsByClassName(this.props.classRef)),a=Object(O.a)(t),n=a.indexOf(e.target);n>-1&&a.splice(n,1);var s=0;a.forEach((function(e){s+=parseFloat(e.value)}));var r=s+parseFloat(e.target.value)>100,c=[];a.forEach((function(e){0==e.disabled&&c.push(e)}));for(var o=Math.abs(100-s-e.target.value),l=c.length;l>0;l--){var i=r?parseFloat(c[l-1].value):100-parseFloat(c[l-1].value),u=Math.min(o/l,i);c[l-1].value=parseFloat(c[l-1].value)+(r?-u:u),o-=Math.abs(u)}var h=0;t.forEach((function(e){h+=parseFloat(e.value)})),100!=h&&(e.target.value=100-s),"function"===typeof this.props.updateWeights&&this.props.updateWeights()}}]),a}(s.a.Component),S=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){var n;Object(i.a)(this,a),(n=t.call(this,e)).updateWeights=n.updateWeights.bind(Object(h.a)(n)),n.selectionRefs=[];for(var r=0;r<n.props.collection.length;r++)n.selectionRefs.push(s.a.createRef());return n.state={},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;if(this.selectionRefs.length<this.props.collection.length)for(var t=this.props.collection.length-this.selectionRefs.length,a=0;a<t;a++)this.selectionRefs.push(s.a.createRef());else if(this.selectionRefs.length>this.props.collection.length)for(t=this.selectionRefs.length-this.props.collection.length,a=0;a<t;a++)this.selectionRefs.pop();var n=this.props.collection.map((function(t,a){return s.a.createElement(B,{key:t+":"+a,identifier:t,id:t+":"+a,defaultWeight:e.props.defaultWeights[t],classRef:e.props.classRef,ref:e.selectionRefs[a],updateWeights:e.updateWeights,symbolConverter:e.props.symbolConverter,deselectNote:e.props.deselectNote})}));return s.a.createElement("div",null,s.a.createElement("ul",null,n))}},{key:"updateWeights",value:function(){var e=this;this.selectionRefs.forEach((function(t){e.props.setWeight(t.current.state.identifier,parseFloat(t.current.state.sliderRef.current.value))}))}}]),a}(s.a.Component),W=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.jtab.render(document.getElementById("jtabRender"),"$ ||")}},{key:"componentDidUpdate",value:function(){var e=this.generateTabNotation(this.props.notes);window.jtab.render(document.getElementById("jtabRender"),e)}},{key:"render",value:function(){return s.a.createElement("div",{id:"jtabRender"})}},{key:"generateTabNotation",value:function(e){var t=this,a="$ ",n=0;return e.forEach((function(e){if(e){var s=e.split("-"),r=s[0],c=s[1];n+=1/g[c],a+=t.noteToTabNotation(r)+v[c],n>=3.9&&(a+=" |",n=0)}})),a+="|"}},{key:"noteToTabNotation",value:function(e){var t=" ";return e.split(",").forEach((function(e){var a=e.split(":"),n=a[0],s=a[1];t+="$"+n+"."+s+"."})),t}}]),a}(s.a.Component),F=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"optionContainer"},s.a.createElement("span",null,"BPM"),s.a.createElement("button",{className:"subButton",onClick:function(){return e.incrementBPM(-5)}},"-"),s.a.createElement("span",{id:"bpmValueDisplay"},"120"),s.a.createElement("button",{className:"subButton",onClick:function(){return e.incrementBPM(5)}},"+"))}},{key:"incrementBPM",value:function(e){var t=parseInt(Math.round(o.f.bpm.value)+e);t>=0&&t<=300&&(document.getElementById("bpmValueDisplay").innerText=t,o.f.bpm.value=t)}}]),a}(s.a.Component),D=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){var n;Object(i.a)(this,a),(n=t.call(this,e)).selectNote=n.selectNote.bind(Object(h.a)(n)),n.deselectNote=n.deselectNote.bind(Object(h.a)(n)),n.selectChordNote=n.selectChordNote.bind(Object(h.a)(n)),n.deselectChordNote=n.deselectChordNote.bind(Object(h.a)(n)),n.setNoteWeight=n.setNoteWeight.bind(Object(h.a)(n)),n.setRythmWeight=n.setRythmWeight.bind(Object(h.a)(n)),n.triggerNote=n.triggerNote.bind(Object(h.a)(n));var s={};p.forEach((function(e){s[e]=100/p.length}));var r=new o.a(10),c=new o.d(2);return n.state={synth:new o.c(o.e,{envelope:{attack:.01,decay:20,sustain:.01,release:.1,decayCurve:"exponential"}}).chain(r,o.b).chain(c,o.b),riffNotes:[],selectedNotes:[],selectedNoteWeights:{},selectedRythmWeights:s,chordMode:!1,chordSelectedNotes:[]},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t={};this.state.selectedNotes.forEach((function(e){t[e]=0}));var a=this.state.chordMode?s.a.createElement("div",null,s.a.createElement(R,{synth:this.state.synth,selectNote:this.selectChordNote,deselectNote:this.deselectChordNote}),s.a.createElement("button",{onClick:function(){return e.addChord()}},"Add Chord")):null;return s.a.createElement("div",null,s.a.createElement(R,{synth:this.state.synth,selectNote:this.selectNote,deselectNote:this.deselectNote}),a,s.a.createElement("label",{className:"mainCheckBox"},s.a.createElement("input",{type:"checkbox",onChange:this.toggleChords.bind(this)}),s.a.createElement("span",null,"Chords")),s.a.createElement("button",{onClick:function(){return e.deselectAllNotes()}},"Clear All"),s.a.createElement("button",{onClick:function(){return e.makeRiff()}},"Generate Riff"),s.a.createElement("select",{name:"bars",id:"barSelect",defaultValue:"4"},s.a.createElement("optgroup",{label:"Bars"},s.a.createElement("option",{value:"1"},"1"),s.a.createElement("option",{value:"2"},"2"),s.a.createElement("option",{value:"3"},"3"),s.a.createElement("option",{value:"4"},"4"),s.a.createElement("option",{value:"5"},"5"),s.a.createElement("option",{value:"6"},"6"),s.a.createElement("option",{value:"7"},"7"),s.a.createElement("option",{value:"8"},"8"))),s.a.createElement("button",{onClick:function(){return e.startRiff()}},s.a.createElement("i",{className:"fa fa-play"})),s.a.createElement("button",{onClick:function(){return e.stopRiff()}},s.a.createElement("i",{className:"fa fa-stop"})),s.a.createElement(F,null),s.a.createElement(W,{notes:this.state.riffNotes}),s.a.createElement(S,{collection:p,defaultWeights:this.state.selectedRythmWeights,setWeight:this.setRythmWeight,classRef:"rythmSlider",symbolConverter:y}),s.a.createElement(S,{collection:this.state.selectedNotes,defaultWeights:t,setWeight:this.setNoteWeight,classRef:"noteSlider",symbolConverter:k,deselectNote:this.deselectNote}))}},{key:"selectNote",value:function(e){this.setState({selectedNotes:this.state.selectedNotes.concat(e)})}},{key:"deselectNote",value:function(e){var t=this.state.selectedNotes,a=t.indexOf(e);a>-1&&t.splice(a,1);var n=this.state.selectedNoteWeights;delete n[e],this.setState({selectedNotes:t,selectedNoteWeights:n});var s=document.getElementById("pick_"+e);s&&(s.checked=!1)}},{key:"selectChordNote",value:function(e){this.setState({chordSelectedNotes:this.state.chordSelectedNotes.concat(e)})}},{key:"deselectChordNote",value:function(e){var t=this.state.chordSelectedNotes,a=t.indexOf(e);a>-1&&t.splice(a,1),this.setState({chordSelectedNotes:t})}},{key:"addChord",value:function(){if(0!==this.state.chordSelectedNotes.length){var e="";this.state.chordSelectedNotes.forEach((function(t){e+=t+","})),this.setState({selectedNotes:this.state.selectedNotes.concat(e)}),this.playSelectedChordNotes()}}},{key:"deselectAllNotes",value:function(){for(var e=document.querySelectorAll("td.fret input"),t=0;t<e.length;t++)"checkbox"===e[t].type&&(e[t].checked=!1);this.setState({selectedNotes:[],selectedNoteWeights:{},chordSelectedNotes:[]})}},{key:"setNoteWeight",value:function(e,t){this.state.selectedNoteWeights[e]=t}},{key:"setRythmWeight",value:function(e,t){this.state.selectedRythmWeights[e]=t}},{key:"toggleChords",value:function(e){e.target.checked?this.setState({chordMode:!0}):this.setState({chordMode:!1,chordSelectedNotes:[]})}},{key:"playSelectedChordNotes",value:function(){this.state.synth.triggerAttackRelease(E(this.state.chordSelectedNotes),"2n")}},{key:"startRiff",value:function(){o.f.start()}},{key:"stopRiff",value:function(){o.f.stop()}},{key:"triggerNote",value:function(e,t,a){this.state.synth.triggerAttackRelease(t,a,e)}},{key:"randomNote",value:function(){var e=Object(l.a)({},this.state.selectedNoteWeights),t=Object.keys(e).map((function(t){return e[t]})),a=this.weightedRandom(Object.keys(e),t);if(a&&a.includes(",")){var n=[];return a.split(",").forEach((function(e){""!=e&&n.push(e)})),n}return a}},{key:"randomNoteRythm",value:function(e){var t=Object(l.a)({},this.state.selectedRythmWeights),a=0,n=0;for(var s in t){1/g[s]>e?(a+=t[s],t[s]=0):n++}for(var s in t)0!=t[s]&&(t[s]+=a/n);var r=Object.keys(t).map((function(e){return t[e]}));return this.weightedRandom(Object.keys(t),r)}},{key:"weightedRandom",value:function(e,t){var a=t.reduce((function(e,t){return e+t}),0),n=0;t=t.map((function(e){return n=e+n}));var s=Math.random()*a;return e[t.filter((function(e){return e<=s})).length]}},{key:"makeRiff",value:function(){o.f.cancel();var e=[];0!=Object.keys(this.state.selectedNoteWeights).length&&(e=this.createRiff(),o.f.position=0),this.setState({riffNotes:e})}},{key:"createRiff",value:function(){for(var e=this,t=parseInt(document.getElementById("barSelect").value),a=[],n=0;n<t;n++)for(var s=4,r=0,c=function(){var t=e.randomNoteRythm(s),c=1/g[t];if(c>=1){var l=e.randomNote(),i=E(l);o.f.schedule((function(a){return e.triggerNote(a,i,t)}),n+":"+r+":0"),a.push(l+"-"+t)}else{for(var u=g[t],h=function(s){var c=e.randomNote(),l=E(c);o.f.schedule((function(a){return e.triggerNote(a,l,t)}),n+":"+r+":"+s),a.push(c+"-"+t)},d=0;d<3.9;d+=4/u)h(d);c=1}r=4-(s-=c)};s>0;)c();return o.f.loopEnd=t+"m",o.f.loop=!0,a}}]),a}(s.a.Component);var G=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",null,"R I F F D E M O N"),s.a.createElement(D,null),s.a.createElement("footer",null,"Built with ",s.a.createElement("a",{href:"https://tonejs.github.io/",target:"_blank"},"Tone.js")," and ",s.a.createElement("a",{href:"https://jtab.tardate.com/",target:"_blank"},"jTab")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[696,1,2]]]);
//# sourceMappingURL=main.db6d9a5a.chunk.js.map