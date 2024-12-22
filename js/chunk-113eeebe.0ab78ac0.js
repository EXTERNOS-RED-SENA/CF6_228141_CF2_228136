(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-113eeebe"],{"0337":function(e,a,o){"use strict";o.r(a);var i=function(){var e=this,a=e._self._c;return a("div",{staticClass:"curso-main-container glosario"},[a("BannerInterno",{attrs:{icono:"fas fa-atlas",titulo:"Glosario"}}),a("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},e._l(e.orderedData,(function(o){return a("div",{key:"letra-"+o.letra,staticClass:"glosario__letra-item mb-2"},[a("div",{staticClass:"glosario__letra-item__letra me-4"},[a("div",{staticClass:"glosario__letra-item__letra__icono"},[a("span",[e._v(e._s(o.letra))])])]),a("div",{staticClass:"glosario__letra-item__texto"},e._l(o.terminos,(function(o){return a("p",{key:o.termino,staticClass:"mb-3"},[e._m(0,!0),a("strong",{domProps:{innerHTML:e._s(o.terminoHtml||o.termino)}}),a("strong",[e._v(": ")]),a("span",{domProps:{innerHTML:e._s(o.significado)}})])})),0)])})),0)],1)},n=[function(){var e=this,a=e._self._c;return a("strong",[a("i",{staticClass:"lista-ul__vineta"})])}],t=(o("14d9"),o("13d5"),o("0643"),o("fffc"),o("4e3e"),o("a573"),o("9d4a"),{computed:{menuData(){return this.$config.menuPrincipal.menu},iniciarLnk(){const e=this.menuData.find(e=>"introduccion"===e.nombreRuta),a=this.menuData.find(e=>"tema1"===e.nombreRuta);return e||a}},methods:{quitarAcentos(e){const a=e.replace(/<\/?[^>]+(>|$)/g,""),o={"á":"a","é":"e","í":"i","ó":"o","ú":"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U"};return a.split("").map(e=>o[e]||e).join("").toString()}}}),s={name:"Glosario",mixins:[t],data(){return{glosarioData:[{termino:"Arquitectura estrella",significado:"Modelo de diseño de bases de datos dimensionales donde una tabla de hechos central se conecta con múltiples tablas de dimensiones desnormalizadas."},{termino:"Bodega de datos",significado:"Sistema de almacenamiento diseñado específicamente para el análisis y reporteo, que integra datos de múltiples fuentes en un modelo unificado."},{termino:"Copo de nieve",significado:"Variante de la arquitectura estrella donde las dimensiones están normalizadas, creando una estructura más compleja pero con mejor eficiencia de almacenamiento."},{termino:"<em>Data mart</em>",significado:"Subconjunto de una bodega de datos enfocado en un área específica del negocio o departamento."},{termino:"Dimensiones conformadas",significado:"Tablas de dimensiones estandarizadas que se comparten entre diferentes <em>data marts</em>, asegurando consistencia en el análisis."},{termino:"ETL avanzado",significado:"Procesos sofisticados de Extracción, Transformación y Carga que incluyen validaciones complejas y transformaciones avanzadas de datos."},{termino:"<em>Feature importance</em>",significado:"Medida que indica la relevancia o contribución de cada variable en un modelo predictivo o análisis estadístico."},{termino:"Metodología Inmon",significado:'Enfoque "<em>top-down</em>" para el diseño de bodegas de datos, que comienza con una visión empresarial completa y luego deriva en <em>data marts</em> específicos.'},{termino:"Metodología Kimball",significado:'Enfoque "<em>bottom-up</em>" para el diseño de bodegas de datos, que construye data marts incrementalmente que luego se integran en una solución empresarial.'},{termino:"Metadatos empresariales",significado:"Información que describe el contenido, formato, estructura y uso de los datos en un contexto empresarial."},{termino:"Normalización avanzada",significado:"Proceso de diseño de bases de datos que va más allá de la tercera forma normal, incluyendo BCNF y formas normales superiores."},{termino:"Prueba de hipótesis",significado:"Método estadístico para tomar decisiones sobre poblaciones basándose en muestras de datos."},{termino:"Reglas de negocio",significado:"Políticas, condiciones y restricciones que definen cómo se deben gestionar y validar los datos en un contexto empresarial."},{termino:"Tabla de hechos",significado:"Tabla central en un modelo dimensional que contiene las métricas o medidas del negocio y las claves foráneas a las dimensiones."},{termino:"Tablas de dimensiones",significado:"Tablas que contienen los atributos descriptivos utilizados para analizar los datos en las tablas de hechos."},{termino:"Transformación de datos",significado:"Proceso de convertir datos de un formato o estructura a otro, incluyendo limpieza, normalización y agregación."},{termino:"Validación cruzada",significado:"Técnica estadística para evaluar modelos analíticos dividiendo los datos en conjuntos de entrenamiento y prueba."},{termino:"Variables categóricas",significado:"Tipos de datos que representan categorías o grupos discretos, que pueden ser nominales u ordinales."},{termino:"Visualización avanzada",significado:"Técnicas sofisticadas para representar datos complejos de manera visual, incluyendo gráficos interactivos y multidimensionales."},{termino:"<em>Workflow ETL</em>",significado:"Flujo de trabajo que define la secuencia y dependencias de los procesos de extracción, transformación y carga de datos."}]}},computed:{orderedData(){const e=[...this.glosarioData];e.forEach(e=>{e.significado=e.significado.charAt(0).toLowerCase()+e.significado.slice(1)});const a=[...e].reduce((e,a)=>{const o=this.quitarAcentos(a.termino.toLowerCase())[0];return e[o]?e[o].terminos.push(a):e[o]={letra:o,terminos:[a]},e},{}),o=Object.keys(a).sort(),i=[];return o.forEach(e=>{const o=a[e];let n=o.terminos;if(n.length>1){const e=[],a=o.terminos.map(e=>e.termino).sort((e,a)=>{const o=this.quitarAcentos(e).toLowerCase(),i=this.quitarAcentos(a).toLowerCase();return o<i?-1:i<o?1:0});a.forEach(a=>{e.push(n.find(e=>e.termino===a))}),n=e}i.push({letra:o.letra.toUpperCase(),terminos:n})}),i}}},r=s,c=(o("356c"),o("2877")),d=Object(c["a"])(r,i,n,!1,null,null,null);a["default"]=d.exports},"13d5":function(e,a,o){"use strict";var i=o("23e7"),n=o("d58f").left,t=o("a640"),s=o("1212"),r=o("9adc"),c=!r&&s>79&&s<83,d=c||!t("reduce");i({target:"Array",proto:!0,forced:d},{reduce:function(e){var a=arguments.length;return n(this,e,a,a>1?arguments[1]:void 0)}})},"25d1":function(e,a,o){},"356c":function(e,a,o){"use strict";o("25d1")},"4e3e":function(e,a,o){"use strict";o("7d54")},"7d54":function(e,a,o){"use strict";var i=o("23e7"),n=o("2266"),t=o("59ed"),s=o("825a"),r=o("46c4");i({target:"Iterator",proto:!0,real:!0},{forEach:function(e){s(this),t(e);var a=r(this),o=0;n(a,(function(a){e(a,o++)}),{IS_RECORD:!0})}})},8558:function(e,a,o){"use strict";var i=o("cfe9"),n=o("b5db"),t=o("c6b6"),s=function(e){return n.slice(0,e.length)===e};e.exports=function(){return s("Bun/")?"BUN":s("Cloudflare-Workers")?"CLOUDFLARE":s("Deno/")?"DENO":s("Node.js/")?"NODE":i.Bun&&"string"==typeof Bun.version?"BUN":i.Deno&&"object"==typeof Deno.version?"DENO":"process"===t(i.process)?"NODE":i.window&&i.document?"BROWSER":"REST"}()},9485:function(e,a,o){"use strict";var i=o("23e7"),n=o("2266"),t=o("59ed"),s=o("825a"),r=o("46c4"),c=TypeError;i({target:"Iterator",proto:!0,real:!0},{reduce:function(e){s(this),t(e);var a=r(this),o=arguments.length<2,i=o?void 0:arguments[1],d=0;if(n(a,(function(a){o?(o=!1,i=a):i=e(i,a,d),d++}),{IS_RECORD:!0}),o)throw new c("Reduce of empty iterator with no initial value");return i}})},"9adc":function(e,a,o){"use strict";var i=o("8558");e.exports="NODE"===i},"9d4a":function(e,a,o){"use strict";o("9485")},a640:function(e,a,o){"use strict";var i=o("d039");e.exports=function(e,a){var o=[][e];return!!o&&i((function(){o.call(null,a||function(){return 1},1)}))}},d58f:function(e,a,o){"use strict";var i=o("59ed"),n=o("7b0b"),t=o("44ad"),s=o("07fa"),r=TypeError,c="Reduce of empty array with no initial value",d=function(e){return function(a,o,d,l){var u=n(a),m=t(u),f=s(u);if(i(o),0===f&&d<2)throw new r(c);var p=e?f-1:0,g=e?-1:1;if(d<2)while(1){if(p in m){l=m[p],p+=g;break}if(p+=g,e?p<0:f<=p)throw new r(c)}for(;e?p>=0:f>p;p+=g)p in m&&(l=o(l,m[p],p,u));return l}};e.exports={left:d(!1),right:d(!0)}}}]);
//# sourceMappingURL=chunk-113eeebe.0ab78ac0.js.map