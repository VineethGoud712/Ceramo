/** @type {import('tailwindcss').Config} */
export default {
content:[
"./index.html",
"./src/**/*.{js,jsx}"
],
theme:{
extend:{

colors:{
cream:"#F8F5F2",
ink:"#1F1F1F",
clay:"#C8A27E",
soft:"#EDE7E3",
muted:"#6B6B6B"
},

boxShadow:{
premium:"0 10px 30px rgba(0,0,0,0.08)"
}

}
},
plugins:[]
}