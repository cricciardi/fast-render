import{a as S}from"./chunk-CZ4XXHQN.js";import{a as I}from"./chunk-KSEL3XLO.js";import{a as g}from"./chunk-MGYAJENJ.js";import"./chunk-5LYK52ZE.js";import"./chunk-5MVNKRVB.js";import{B as m,Ja as a,Ka as h,Wa as c,_ as l,db as n,eb as i,fb as d,n as p,pb as r,qb as f,sb as u}from"./chunk-ZDP6SL2T.js";var v=class s{constructor(e){this.marsGalleryService=e}nasaApi$;Planets=I;ngOnInit(){this.nasaApi$=this.marsGalleryService.getNASAImagesBySearch("Jupiter").pipe(m(e=>(console.error(e),p(()=>e))))}static \u0275fac=function(t){return new(t||s)(h(g))};static \u0275cmp=l({type:s,selectors:[["app-jupiter-images"]],standalone:!0,features:[u],decls:5,vars:2,consts:[[1,"text-danger","text-center","mt-5"],[1,"card-text","text-center","text-white"],[3,"nasaApi$"]],template:function(t,o){t&1&&(n(0,"h3",0),r(1),i(),n(2,"p",1),r(3," Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than 2.5 times that of all the other planets in the Solar System combined, and slightly less than one-thousandth the mass of the Sun. Its diameter is eleven times that of Earth, and a tenth that of the Sun. Jupiter orbits the Sun at a distance of 5.20 AU (778.5 Gm), with an orbital period of 11.86 years. It is the third brightest natural object in the Earth's night sky, after the Moon and Venus, and has been observed since prehistoric times. Its name derives from that of Jupiter, the chief deity of ancient Roman religion. "),i(),d(4,"app-list-images",2)),t&2&&(a(),f(o.Planets.JUPITER),a(3),c("nasaApi$",o.nasaApi$))},dependencies:[S],encapsulation:2})};export{v as JupiterImagesComponent};
