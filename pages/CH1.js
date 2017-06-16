import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='game'>
 <div>
    
     
                <style jsx>{`

                    .col-md-7 {
                        border-radius: 4px;
                        overflow: hidden;
                        box-shadow: 0 9px 9px rgba(0, 0, 0, 0.9);
                        display: block;
                        min-height: 70%;
                        font-family: Verdana;
                        max-width: 1300px;
                        background-color: #EEEDE8;
                        margin: auto;
                        margin-top: auto;
                        margin-right: auto;
                        margin-bottom: auto;
                        margin-left: auto;
                        white-space: pre-wrap;
                        border: none;
                        box-sizing: border-box;
                        color: #2D0D0D;
                        line-height: 1.1;
                        padding: 4.7em;

                    }

                    .home {
                        margin: 1.5em 0;
                        
                    }

                    h1 {
                        color: #867452;
                        font-size: 60px;
                    }

                    h2 {
                        color: #867452;
                        font-size: 40px;
                    }
                        h3 {
                        color: #867452;
                        font-size: 30px;
                      }
                      
                   h4 {
                        color: #867452;
                        font-size: 25px;
                    }



                    .it, .listit {
                        color: brown;
                        font-size: 24px;
                        font-style: italic;
                        letter-spacing: 0.04em;
                    }
                    .p, .listitem {
                        color: #75AFAD;
                        font-size: 24px;
                        font-style: italic;
                        letter-spacing: 0.04em;
                    }

                    pre {display: block;
                    font-family: monospace;
                    white-space: pre;
                    margin: 1em 0;
                    font-size: 16px


                    }

                    code
                    {margin: auto,
                        font-family:"Lucida Console";
                        "Andale Mono";
                        "Courier New";
                        Courier;
                        monospace;
                        font-style:normal;
                        color:#395C73;}
                    
                    code strong
                    {color:#000;
                        background:#F5FD11;
                        padding:1px;
                        font-weight:normal;
                    }

                    .interno {
                    font-family: verdana;
                    font-style: italic;
                    color: #395C73;
                    font-size: 24px;    
                    }

                `}</style>

              <div id="top-bar">
</div>



<div id="page-content">


<h2 id="ch_about-es6">
<span class="section-number">1. </span>About ECMAScript 6 (ES6) <a class="header-anchor" href="#ch_about-es6" aria-hidden="true">#</a></h2>



<ul>

<li className="it">1.1. <a href="ch_about-es6.html#sec_tc39">TC39 (Comité Técnico ECMA 39)</a> </li>
<li className="p">1.1. <a href="ch_about-es6.html#sec_tc39">TC39 (Ecma Technical Committee 39)</a>
</li>

<p className="it">1.2. <a href="ch_about-es6.html#sec_designing-es6">¿Cómo se diseñó ECMAScript 6</a></p>
 <li className="p">1.2. <a href="ch_about-es6.html#sec_designing-es6">How ECMAScript 6 was designed</a>

<ul>

<li className="it">1.2.1. El proceso de diseño después ES6</li>
<li className="p">1.2.1. The design process after ES6</li>

</ul>

</li>

<li className="it">1.3. <a href="ch_about-es6.html#sec_javascript-vs-ecmascript">JavaScript frente a ECMAScript</a> </li>
  <li className="p">1.3. <a href="ch_about-es6.html#sec_javascript-vs-ecmascript">JavaScript versus ECMAScript</a>
</li>

<li className="it">1.4. <a href="ch_about-es6.html#sec_upgrading-to-es6">La actualización a ES6</a> </li>
  <li className="p">1.4. <a href="ch_about-es6.html#sec_upgrading-to-es6">Upgrading to ES6</a>
</li>
<p className="it">1.5. <a href="ch_about-es6.html#sec_es6-goals">Objetivos para ES6</a></p> 

  <li className="p">1.5. <a href="ch_about-es6.html#sec_es6-goals">Goals for ES6</a>
    <ul>

    <li className="it">1.5.1. Objetivo: Ser una lengua mejor</li>
      <li className="p">1.5.1. Goal: Be a better language</li>

      <li className="it">1.5.2. Objetivo: Mejorar la interoperación</li>

      <li className="p">1.5.2. Goal: Improve interoperation</li>

      <li className="it">1.5.3. Objetivo: Control de versiones</li>

      <li className="p">1.5.3. Goal: Versioning</li>
    </ul>

  </li>

  <li className="it">1.6. <a href="ch_about-es6.html#sec_es6-feature-categories">Categorías de características ES6</a> </li>

  <li className="p">1.6. <a href="ch_about-es6.html#sec_es6-feature-categories">Categories of ES6 features</a>
</li>
<p className="it">1.7. <a href="ch_about-es6.html#sec_ecmascript-history">Una breve historia de ECMAScript</a></p>
  <li className="p">1.7. <a href="ch_about-es6.html#sec_ecmascript-history">A brief history of ECMAScript</a>
    <ul>
      <li className="p">1.7.1. The early years: ECMAScript 1–3</li>
      <li className="p">1.7.2. ECMAScript 4 (abandoned in July 2008)</li>
      <li className="p">1.7.3. ECMAScript Harmony</li>
    </ul>
  </li>
</ul>


<p className="it">Tomó mucho tiempo para terminarlo, pero ECMAScript 6, la próxima versión de JavaScript, es finalmente una realidad:</p>
<p className="p">It took a long time to finish it, but ECMAScript 6, the next version of JavaScript, is finally a reality:</p>

<ul>
  <li className="it"> <a href="http://www.ecma-international.org/news/Publication%20of%20ECMA-262%206th%20edition.htm">Se convirtió en una norma el 17 de junio el año 2015</a> .</li>

  <li className="p">
<a href="http://www.ecma-international.org/news/Publication%20of%20ECMA-262%206th%20edition.htm">It became a standard on 17 June 2015</a>.</li>
  <li className="it">La mayoría de sus características ya están ampliamente disponibles (como se documenta en kangax' <a href="http://kangax.github.io/compat-table/es6/">tabla de compatibilidad ES6</a> ).</li>

  <li className="p">Most of its features are already widely available (as documented in kangax’ <a href="http://kangax.github.io/compat-table/es6/">ES6 compatibility table</a>).</li>
  <li className="it">Transpilers (como <a href="https://babeljs.io/">Babel</a> ) permiten compilar ES6 a ES5.</li>

  <li className="p">Transpilers (such as <a href="https://babeljs.io/">Babel</a>) let you compile ES6 to ES5.</li>
</ul>

<p className="it">Las siguientes secciones explican los conceptos que son importantes en el mundo de la ES6.</p>
<p className="p">The next sections explain concepts that are important in the world of ES6.</p>


<h3 id="sec_tc39">
<span class="section-number">1.1 </span>TC39 (Ecma Technical Committee 39) <a class="header-anchor" href="#sec_tc39" aria-hidden="true">#</a></h3>

<p className="it"><a href="http://www.ecma-international.org/memento/TC39.htm">TC39 (Comité Técnico ECMA 39)</a> es el comité que evoluciona JavaScript. Sus miembros son empresas (entre otros, los principales proveedores de navegadores). <a href="http://www.ecma-international.org/memento/TC39-M.htm">TC39 se reúne regularmente</a> , sus reuniones asiste a los delegados que los miembros envían y los expertos invitados. Las actas de las reuniones están <a href="https://github.com/tc39/tc39-notes">disponibles en línea</a> y le dan una buena idea de cómo funciona TC39.</p>
<p className="p"><a href="http://www.ecma-international.org/memento/TC39.htm">TC39 (Ecma Technical Committee 39)</a> is the committee that evolves JavaScript. Its members are companies (among others, all major browser vendors). <a href="http://www.ecma-international.org/memento/TC39-M.htm">TC39 meets regularly</a>, its meetings are attended by delegates that members send and by invited experts. Minutes of the meetings are <a href="https://github.com/tc39/tc39-notes">available online</a> and give you a good idea of how TC39 works.</p>


<h3 id="sec_designing-es6">
<span class="section-number">1.2 </span>How ECMAScript 6 was designed <a class="header-anchor" href="#sec_designing-es6" aria-hidden="true">#</a></h3>

<p className="it">El proceso de diseño de ECMAScript 6 se centra en <em>las propuestas</em> de características. Las propuestas son a menudo causadas por las sugerencias de la comunidad de desarrolladores. Para evitar el diseño por el comité, las propuestas son mantenidos por los <em>campeones</em> (1-2 delegados del Comité).</p>

<p className="p">The ECMAScript 6 design process centers on <em>proposals</em> for features. Proposals are often triggered by suggestions from the developer community. To avoid design by committee, proposals are maintained by <em>champions</em> (1–2 committee delegates).</p>

<p className="it">Una propuesta pasa a través de los siguientes pasos antes de convertirse en un estándar:</p>

<p className="p">A proposal goes through the following steps before it becomes a standard:</p>

<ul>
  <li className="it">Boceto (informalmente: “La propuesta hombre de paja”): Una primera descripción de la función propuesta.</li>

  <li className="p">Sketch (informally: “strawman proposal”): A first description of the proposed feature.</li>

  <li className="it">Propuesta: Si TC39 está de acuerdo en que una característica es importante, es ascendido al estatus oficial propuesta. Eso no garantiza que se convertirá en un estándar, pero aumenta considerablemente sus posibilidades. El plazo para presentar propuestas ES6 era mayo de 2011. No hay grandes nuevas propuestas fueron consideradas después de eso.</li>

  <li className="p">Proposal: If TC39 agrees that a feature is important, it gets promoted to official proposal status. That does not guarantee it will become a standard, but it considerably increases its chances. The deadline for ES6 proposals was May 2011. No major new proposals were considered after that.</li>


<li className="it">Implementaciones: características propuestas deben ser implementadas. Lo ideal sería que en dos motores de JavaScript. Implementaciones y la retroalimentación de la comunidad dan forma a la propuesta a medida que evoluciona.</li>

  <li className="p">Implementations: Proposed features must be implemented. Ideally in two JavaScript engines. Implementations and feedback from the community shape the proposal as it evolves.</li>
  <li className="it">Boceto (informalmente: “La propuesta hombre de paja”): Una primera descripción de la función propuesta.</li>

<li className="it">Estándar: Si la propuesta sigue demostrando y es aceptado por TC39, con el tiempo se puede incluir en una edición de la norma ECMAScript. En este punto, es una característica estándar.</li>
  <li className="p">Standard: If the proposal continues to prove itself and is accepted by TC39, it will eventually be included in an edition of the ECMAScript standard. At this point, it is a standard feature.</li>
</ul>

<p className="it">[Fuente de esta sección: “ <a href="http://tc39wiki.calculist.org/about/harmony/">El Proceso de Armonía</a> ” por David Herman.]</p>
<p className="p">[Source of this section: “<a href="http://tc39wiki.calculist.org/about/harmony/">The Harmony Process</a>” by David Herman.]</p>

<h4 id="_the-design-process-after-es6">
<span class="section-number">1.2.1 </span>The design process after ES6 <a class="header-anchor" href="#_the-design-process-after-es6" aria-hidden="true">#</a></h4>

<p className="it">A partir de ECMAScript 2016 (ES7), TC39 agotará el tiempo-Box comunicados. Una nueva versión de ECMAScript se dará a conocer todos los años, con lo que las características son preparados en ese momento. Esto significa que a partir de ahora, las versiones de ECMAScript serán relativamente pequeñas actualizaciones. Para obtener más información sobre el nuevo proceso, incluidas las propuestas de características terminados y próximos, consultar <a href="https://github.com/tc39/ecma262">el repositorio GitHub<code>ecma262</code></a> .</p>
<p className="p">Starting with ECMAScript 2016 (ES7), TC39 will time-box releases. A new version of ECMAScript will be released every year, with whatever features are ready at that time. That means that from now on, ECMAScript versions will be relatively small upgrades. For more information on the new process, including finished and upcoming feature proposals, consult <a href="https://github.com/tc39/ecma262">the GitHub repository <code>ecma262</code></a>.</p>


<h3 id="sec_javascript-vs-ecmascript">
<span class="section-number">1.3 </span>JavaScript versus ECMAScript <a class="header-anchor" href="#sec_javascript-vs-ecmascript" aria-hidden="true">#</a></h3>

<p className="it">JavaScript es lo que todo el mundo llama el idioma, pero ese nombre es una marca registrada (por Oracle, que heredó la marca comercial de Sun). Por lo tanto, el nombre oficial de JavaScript es <em>ECMAScript</em> . Ese nombre viene de la organización de estándares de ECMA, que gestiona el lenguaje estándar. Desde el inicio de ECMAScript, el nombre de la organización ha cambiado desde el acrónimo “ECMA” al nombre propio “ECMA”.</p>
<p className="p">JavaScript is what everyone calls the language, but that name is trademarked (by Oracle, which inherited the trademark from Sun). Therefore, the official name of JavaScript is <em>ECMAScript</em>. That name comes from the standards organization Ecma, which manages the language standard. Since ECMAScript’s inception, the name of the organization has changed from the acronym “ECMA” to the proper name “Ecma”.</p>

<p className="it">Versiones de JavaScript son definidos por las especificaciones que llevan el nombre oficial de la lengua. Por lo tanto, la primera versión del estándar ECMAScript JavaScript es 1, que es la abreviatura de “ECMAScript Language Specification, Edición 1”. ECMAScript x es a menudo abreviado ESX.</p>
<p className="p">Versions of JavaScript are defined by specifications that carry the official name of the language. Hence, the first standard version of JavaScript is ECMAScript 1 which is short for “ECMAScript Language Specification, Edition 1”. ECMAScript x is often abbreviated ESx.</p>


<h3 id="sec_upgrading-to-es6">
<span class="section-number">1.4 </span>Upgrading to ES6 <a class="header-anchor" href="#sec_upgrading-to-es6" aria-hidden="true">#</a></h3>

<p className="it">Las partes interesadas en la web son:</p>
<p className="p">The stake holders on the web are:</p>

<ul>
  <li className="p">Implementors of JavaScript engines</li>
  <li className="p">Developers of web applications</li>
  <li className="p">Users</li>
</ul>

<p className="it">Estos grupos tienen muy poco control sobre la otra. Es por eso que la actualización de un lenguaje web es tan difícil.</p>
<p className="p">These groups have remarkably little control over each other. That’s why upgrading a web language is so challenging.</p>

<p className="it">Por un lado, la mejora de los motores es un reto, ya que se enfrentan a todo tipo de código en la web, algunas de las cuales es muy antigua. También quiere mejoras en el motor a ser automática e imperceptible para los usuarios. Por lo tanto, ES6 es un superconjunto de ES5, nada se quita <sup id="fnref-introduction_1"><a href="leanpub-endnotes.html#fn-introduction_1" rel="footnote">1</a></sup> . ES6 actualiza el lenguaje sin la introducción de versiones o modos. Incluso se las arregla para hacer que el modo estricto de facto por defecto (a través de módulos), sin aumentar la brecha entre él y el modo descuidado. El enfoque que se ha hecho se llama “Una JavaScript” y explica en <a href="ch_one-javascript.html#ch_one-javascript">un capítulo aparte</a> .</p>
<p className="p">On one hand, upgrading engines is challenging, because they are confronted with all kinds of code on the web, some of which is very old. You also want engine upgrades to be automatic and unnoticeable for users. Therefore, ES6 is a superset of ES5, nothing is removed<sup id="fnref-introduction_1"><a href="leanpub-endnotes.html#fn-introduction_1" rel="footnote">1</a></sup>. ES6 upgrades the language without introducing versions or modes. It even manages to make strict mode the de-facto default (via modules), without increasing the rift between it and sloppy mode. The approach that was taken is called “One JavaScript” and explained in <a href="ch_one-javascript.html#ch_one-javascript">a separate chapter</a>.</p>

<p className="it">Por otro lado, la actualización de código es un reto, debido a que su código debe ejecutarse en todos los motores de JavaScript que son utilizados por su público objetivo. Por lo tanto, si desea utilizar ES6 en su código, que sólo tiene dos opciones: Puede esperar a que nadie en su público objetivo utiliza un motor no ES6, nunca más. Eso llevará años; las audiencias de corriente estaban en ese momento ES5 ES6 WRT cuando se convirtió en un estándar en junio de 2015. Y ES5 se estandarizó en diciembre de 2009! O se puede compilar a ES6 ES5 y usarlo ahora. Más información sobre cómo hacer que se da en el libro “ <a href="https://leanpub.com/setting-up-es6">La creación de ES6</a> ”, que es libre de leer en línea.</p>
<p className="p">On the other hand, upgrading code is challenging, because your code must run on all JavaScript engines that are used by your target audience. Therefore, if you want to use ES6 in your code, you only have two choices: You can either wait until no one in your target audience uses a non-ES6 engine, anymore. That will take years; mainstream audiences were at that point w.r.t. ES5 when ES6 became a standard in June 2015. And ES5 was standardized in December 2009! Or you can compile ES6 to ES5 and use it now. More information on how to do that is given in the book “<a href="https://leanpub.com/setting-up-es6">Setting up ES6</a>”, which is free to read online.</p>

<p className="it">Objetivos y requisitos se enfrentan en el diseño de ES6:</p>
<p className="p">Goals and requirements clash in the design of ES6:</p>

<ul>
<li className="it">Objetivos están fijando trampas de JavaScript y la adición de nuevas características.</li>
  <li className="p">Goals are fixing JavaScript’s pitfalls and adding new features.</li>
<li className="it">Los requisitos son que ambos necesitan ser hecho sin romper el código existente y sin cambiar la naturaleza de peso ligero de la lengua.</li>
  <li className="p">Requirements are that both need to be done without breaking existing code and without changing the lightweight nature of the language.</li>
</ul>


<h3 id="sec_es6-goals">
<span class="section-number">1.5 </span>Goals for ES6 <a class="header-anchor" href="#sec_es6-goals" aria-hidden="true">#</a></h3>

<p className="it"><a href="http://wiki.ecmascript.org/doku.php?id=harmony:harmony">La página original proyecto para Armonía / ES6</a> menciona varios objetivos. En las siguientes subsecciones, estoy tomando un vistazo a algunos de ellos.</p>
<p className="p"><a href="http://wiki.ecmascript.org/doku.php?id=harmony:harmony">The original project page for Harmony/ES6</a> mentions several goals. In the following subsections, I’m taking a look at some of them.</p>

<h4 id="_goal-be-a-better-language">
<span class="section-number">1.5.1 </span>Goal: Be a better language <a class="header-anchor" href="#_goal-be-a-better-language" aria-hidden="true">#</a></h4>

<p className="it">El objetivo es: ser un mejor lenguaje para escribir:</p>
<p className="p">The goal is: Be a better language for writing:</p>

<ol class="lower-roman">
<li className="it">aplicaciones complejas;</li>
  <li className="p">complex applications;</li>
<li className="it">bibliotecas (posiblemente incluyendo el DOM) compartidos por estas aplicaciones;</li>
  <li className="p">libraries (possibly including the DOM) shared by those applications;</li>
  <li className="it">generadores de código dirigidas a la nueva edición.</li>
  <li className="p">code generators targeting the new edition.</li>
</ol>

<p className="it">Subobjetivo (i) reconoce que las aplicaciones escritas en JavaScript han crecido enorme. Una característica clave ES6 el cumplimiento de este objetivo es módulos incorporados.</p>
<p className="p">Sub-goal (i) acknowledges that applications written in JavaScript have grown huge. A key ES6 feature fulfilling this goal is built-in modules.</p>

<p className="it">Los módulos son también una respuesta a la meta (ii). Como acotación al margen, el DOM es notoriamente difícil de implementar en JavaScript. <a href="ch_proxies.html#ch_proxies">ES6 La representación</a> debe ayudar aquí.</p>
<p className="p">Modules are also an answer to goal (ii). As an aside, the DOM is notoriously difficult to implement in JavaScript. <a href="ch_proxies.html#ch_proxies">ES6 Proxies</a> should help here.</p>

<p className="it">Varias características se agregaron principalmente para hacer que sea más fácil para compilar tener JavaScript. Dos ejemplos son:</p>
<p className="p">Several features were mainly added to make it easier to compile to JavaScript. Two examples are:</p>

<ul>
<li className="it"> <code>Math.fround()</code> - Números de redondeo a 32 bits flotadores</li>
  <li className="p">
<code>Math.fround()</code> – rounding Numbers to 32 bit floats</li>
  <li className="it"> <code>Math.imul()</code> - la multiplicación de dos enteros de 32 bits</li><li className="p">
<code>Math.imul()</code> – multiplying two 32 bit ints</li>
</ul>

<p className="it">Ambos son útiles para, por ejemplo, la compilación de C / C ++ para JavaScript través <a href="https://github.com/kripken/emscripten">emscripten</a> .</p>
<p className="p">They are both useful for, e.g., compiling C/C++ to JavaScript via <a href="https://github.com/kripken/emscripten">Emscripten</a>.</p>

<h4 id="_goal-improve-interoperation">
<span class="section-number">1.5.2 </span>Goal: Improve interoperation <a class="header-anchor" href="#_goal-improve-interoperation" aria-hidden="true">#</a></h4>

<p className="it">El objetivo es: mejorar el interfuncionamiento, la adopción de estándares de facto en lo posible.</p>
<p className="p">The goal is: Improve interoperation, adopting de facto standards where possible.</p>

<p className="it">Los ejemplos son:</p>
<p className="p">Examples are:</p>

<ul>
  <li className="it">Clases: se basan en cómo se utilizan actualmente las funciones constructoras.</li>
  <li className="p">Classes: are based on how constructor functions are currently used.</li>
  <li className="it">Módulos: recogieron las ideas de diseño del formato del módulo CommonJS.</li>
  <li className="p">Modules: picked up design ideas from the CommonJS module format.</li>
  <li className="it">Flecha funciones: tienen una sintaxis que es prestado desde CoffeeScript.</li>
  <li className="p">Arrow functions: have syntax that is borrowed from CoffeeScript.</li>
  
<li className="it">Nombrado parámetros de la función: No hay soporte incorporado para los parámetros con nombre. En lugar de ello, la práctica existente de nombrar parámetros a través de objetos literales se apoya a través de <a href="ch_parameter-handling.html#sec_named-parameters">desestructuración en definiciones de parámetros</a> .</li>
  <li className="p">Named function parameters: There is no built-in support for named parameters. Instead, the existing practice of naming parameters via object literals is supported via <a href="ch_parameter-handling.html#sec_named-parameters">destructuring in parameter definitions</a>.</li>
</ul>

<h4 id="_goal-versioning">
<span class="section-number">1.5.3 </span>Goal: Versioning <a class="header-anchor" href="#_goal-versioning" aria-hidden="true">#</a></h4>

<p className="it">El objetivo es: El control de versiones tan simple y lineal posible.</p>
<p className="p">The goal is: Keep versioning as simple and linear as possible.</p>

<p className="it">Como se mencionó anteriormente, ES6 evita el control de versiones a través de “ <a href="ch_one-javascript.html#ch_one-javascript">Una JavaScript</a> ”: En una base de código ES6, todo es ES6, no hay partes que están ES5-específica.</p>
<p className="p">As mentioned previously, ES6 avoids versioning via “<a href="ch_one-javascript.html#ch_one-javascript">One JavaScript</a>”: In an ES6 code base, everything is ES6, there are no parts that are ES5-specific.</p>


<h3 id="sec_es6-feature-categories">
<span class="section-number">1.6 </span>Categories of ES6 features <a class="header-anchor" href="#sec_es6-feature-categories" aria-hidden="true">#</a></h3>

<p className="it">La introducción de la especificación ES6 enumera todas las nuevas características:</p>
<p className="p">The introduction of the ES6 specification lists all new features:</p>

<blockquote>
  <p className="it">Algunas de las mejoras más importantes de ECMAScript [6] incluyen módulos, las declaraciones de clase, de alcance bloque léxica, iteradores y generadores, promesas para la programación asincrónica, los patrones de desestructuración y llamadas de cola adecuados. La biblioteca de ECMAScript muebles empotrados se ha ampliado para apoyar las abstracciones de datos adicionales, incluyendo mapas, conjuntos y matrices de valores numéricos binarios, así como apoyo adicional para Unicode caracteres suplementarios en cadenas y expresiones regulares. Los muebles empotrados son ahora extensible a través de subclases.</p>
  <p className="p">Some of [ECMAScript 6’s] major enhancements include modules, class declarations, lexical block scoping, iterators and generators, promises for asynchronous programming, destructuring patterns, and proper tail calls. The ECMAScript library of built-ins has been expanded to support additional data abstractions including maps, sets, and arrays of binary numeric values as well as additional support for Unicode supplemental characters in strings and regular expressions. The built-ins are now extensible via subclassing.</p>
</blockquote>

<p className="it">Hay tres categorías principales de características:</p>
<p className="p">There are three major categories of features:</p>

<ul><p className="it">Mejor sintaxis para características que ya existen (por ejemplo, a través de las bibliotecas). Por ejemplo:</p>
  <li className="p">Better syntax for features that already exist (e.g. via libraries). For example:
    <ul>
      <li className="p"><a href="ch_classes.html#ch_classes">Classes</a></li>
      <li className="p"><a href="ch_modules.html#ch_modules">Modules</a></li>
    </ul>
  </li>
  <li className="p">New functionality in the standard library. For example:
    <ul>
      <li className="p">New methods for <a href="ch_strings.html#ch_strings">strings</a> and <a href="ch_arrays.html#ch_arrays">Arrays</a>
</li>
      <li className="p"><a href="ch_promises.html#ch_promises">Promises</a></li>
      <li className="p"><a href="ch_maps-sets.html#ch_maps-sets">Maps, Sets</a></li>
    </ul>
  </li>
  <li className="p">Completely new features. For example:
    <ul>
      <li className="p"><a href="ch_generators.html#ch_generators">Generators</a></li>
      <li className="p"><a href="ch_proxies.html#ch_proxies">Proxies</a></li>
      <li className="p"><a href="ch_maps-sets.html#sec_weakmap">WeakMaps</a></li>
    </ul>
  </li>
</ul>


<h3 id="sec_ecmascript-history">
<span class="section-number">1.7 </span>A brief history of ECMAScript <a class="header-anchor" href="#sec_ecmascript-history" aria-hidden="true">#</a></h3>

<p className="it">En esta sección se describe lo que sucedió en el camino de ECMAScript 6.</p>
<p className="p">This section describes what happened on the road to ECMAScript 6.</p>

<h4 id="_the-early-years-ecmascript-13">
<span class="section-number">1.7.1 </span>The early years: ECMAScript 1–3 <a class="header-anchor" href="#_the-early-years-ecmascript-13" aria-hidden="true">#</a></h4>

<ul>
<li className="it"> <strong>ECMAScript 1 (junio de 1997)</strong> fue la primera versión de la norma Javascript.</li>
  <li className="p">
<strong>ECMAScript 1 (June 1997)</strong> was the first version of the JavaScript language standard.</li>
<li className="it"> <strong>ECMAScript 2 (junio de 1998)</strong> contenía cambios menores, para mantener la especificación en sincronización con un estándar ISO separado para JavaScript.</li>
  <li className="p">
<strong>ECMAScript 2 (June 1998)</strong> contained minor changes, to keep the spec in sync with a separate ISO standard for JavaScript.</li>
<li className="it"> <strong>ECMAScript 3 (diciembre de 1999)</strong> introdujo muchas características que se han convertido en piezas populares de la lengua, como se describe en la introducción de la especificación ES6: “[...] expresiones regulares, un mejor manejo de cadenas, las nuevas sentencias de control, intente / manejo de excepciones captura, más apretado definición de errores, el formato de salida numérica y otras mejoras “.</li>
  <li className="p">
<strong>ECMAScript 3 (December 1999)</strong> introduced many features that have become popular parts of the language, as described in the introduction of the ES6 specification: “[…] regular expressions, better string handling, new control statements, try/catch exception handling, tighter definition of errors, formatting for numeric output and other enhancements.”</li>
</ul>

<h4 id="_ecmascript-4-abandoned-in-july-2008">
<span class="section-number">1.7.2 </span>ECMAScript 4 (abandoned in July 2008) <a class="header-anchor" href="#_ecmascript-4-abandoned-in-july-2008" aria-hidden="true">#</a></h4>

<p className="it">El trabajo en ES4 se inició después de la liberación de ES3 en 1999. En 2003, un informe provisional fue puesto en libertad después de lo cual el trabajo en ES4 pausa. Subconjuntos del lenguaje descrito en el informe provisional se llevaron a cabo por Adobe (en ActionScript) y Microsoft (en JScript.NET).</p>
<p className="p">Work on ES4 started after the release of ES3 in 1999. In 2003, an interim report was released after which work on ES4 paused. Subsets of the language described in the interim report were implemented by Adobe (in ActionScript) and by Microsoft (in JScript.NET).</p>

<p className="it">En febrero de 2005, Jesse James Garrett observó que una combinación de técnicas se había convertido en popular para la implementación de aplicaciones dinámicas frontend en JavaScript. <a href="http://www.adaptivepath.com/ideas/ajax-new-approach-web-applications/">Llamó a esas técnicas Ajax</a> . Ajax habilitado una clase completamente nueva de aplicaciones web y dio lugar a una oleada de interés en JavaScript.</p>
<p className="p">In February 2005, Jesse James Garrett observed that a combination of techniques had become popular for implementing dynamic frontend apps in JavaScript. <a href="http://www.adaptivepath.com/ideas/ajax-new-approach-web-applications/">He called those techniques Ajax</a>. Ajax enabled a completely new class of web apps and led to a surge of interest in JavaScript.</p>

<p className="it">Eso puede haber contribuido a TC39 reanudar el trabajo en la ES4 en el otoño de 2005. Se basan en la ES4 ES3, ES4 el informe provisional y experiencias con ActionScript y JScript.NET.</p>
<p className="p">That may have contributed to TC39 resuming work on ES4 in fall 2005. They based ES4 on ES3, the interim ES4 report and experiences with ActionScript and JScript.NET.</p>

<p className="it">Ahora había dos grupos de trabajo en futuras versiones de ECMAScript:</p>
<p className="p">There were now two groups working on future ECMAScript versions:</p>

<ul>
<p className="it">ECMAScript 4 fue diseñado por Adobe, Mozilla, Opera y Google y era una actualización masiva. Sus conjuntos de características planeadas incluyen: </p> 
  <li className="p">ECMAScript 4 was designed by Adobe, Mozilla, Opera, and Google and was a massive upgrade. Its planned feature sets included:
    <ul>
<li className="it">Programación en el grande (clases, las interfaces, espacios de nombres, paquetes, dependencias de programas, anotaciones de tipo opcional, y la comprobación de tipo estático opcional y verificación)</li>
      <li className="p">Programming in the large (classes, interfaces, namespaces, packages, program units, optional type annotations, and optional static type checking and verification)</li>
<li className="it">programación evolutiva y de secuencias de comandos (tipos estructurales, mecanografía pato, definiciones de tipo, y métodos múltiples)</li>
      <li className="p">Evolutionary programming and scripting (structural types, duck typing, type definitions, and multimethods)</li>
 <li className="it">construcción de la estructura de datos (tipos parametrizados, captadores y definidores, y métodos de nivel meta)</li>     
      <li className="p">Data structure construction (parameterized types, getters and setters, and meta-level methods)</li>
<li className="it">abstracciones de control (llamadas de cola adecuada, iteradores, y generadores)</li>
      <li className="p">Control abstractions (proper tail calls, iterators, and generators)</li>

<li className="it">La introspección (tipo meta-objetos y signos de pila)</li>
      <li className="p">Introspection (type meta-objects and stack marks)</li>
    </ul>
  </li>
  <li className="it">ECMAScript 3.1 fue diseñado por Microsoft y Yahoo. Se planeó como un subconjunto de ES4 y una actualización incremental del ECMAScript 3, con correcciones de errores y nuevas características de menor importancia. ECMAScript 3.1, finalmente, se convirtió en ECMAScript 5.</li>
  <li className="p">ECMAScript 3.1 was designed by Microsoft and Yahoo. It was planned as a subset of ES4 and an incremental upgrade of ECMAScript 3, with bug fixes and minor new features. ECMAScript 3.1 eventually became ECMAScript 5.</li>
</ul>

<p className="it">Los dos grupos no estaban de acuerdo sobre el futuro de JavaScript y las tensiones entre ellas continuaron aumentando.</p>
<p className="p">The two groups disagreed on the future of JavaScript and tensions between them continued to increase.</p>

<aside class="generic_inbar blurb external-link icon-external-link">
    <h3 id="_sources-of-this-section">Sources of this section: <a class="header-anchor" href="#_sources-of-this-section" aria-hidden="true">#</a></h3>

  <ul>
<li className="it">“ <a href="http://www.ecmascript.org/es4/spec/overview.pdf">Propuesta cuarto ECMAScript Edition - Idioma general</a> ”. 2007-10-23</li>
    <li className="p">“<a href="http://www.ecmascript.org/es4/spec/overview.pdf">Proposed ECMAScript 4th Edition – Language Overview</a>”. 2007-10-23</li>
    <li className="it">“ <a href="http://ejohn.org/blog/ecmascript-harmony/">Armonía ECMAScript</a> ” de John Resig. 2008-08-13</li>

    <li className="p">“<a href="http://ejohn.org/blog/ecmascript-harmony/">ECMAScript Harmony</a>” by John Resig. 2008-08-13</li>
  </ul>

</aside>

<h4 id="_ecmascript-harmony">
<span class="section-number">1.7.3 </span>ECMAScript Harmony <a class="header-anchor" href="#_ecmascript-harmony" aria-hidden="true">#</a></h4>

<p className="it">A finales de julio de 2008, hubo una reunión TC39 en Oslo, cuyo resultado fue <a href="https://mail.mozilla.org/pipermail/es-discuss/2008-August/006837.html">descrito</a> de la siguiente manera por Brendan Eich:</p>
<p className="p">At the end of July 2008, there was a TC39 meeting in Oslo, whose outcome was <a href="https://mail.mozilla.org/pipermail/es-discuss/2008-August/006837.html">described</a> as follows by Brendan Eich:</p>

<blockquote>
  <p className="it">No es ningún secreto que el organismo de estándares JavaScript, el Comité Técnico de ECMA 39, se ha dividido por más de un año, con algunos miembros que favorecen ES4 [...] y otros abogando ES3.1 [...]. Ahora, estoy feliz de informar, la división ha terminado.</p>
  <p className="p">It’s no secret that the JavaScript standards body, Ecma’s Technical Committee 39, has been split for over a year, with some members favoring ES4 […] and others advocating ES3.1 […]. Now, I’m happy to report, the split is over.</p>
</blockquote>

<p className="it">El acuerdo que se elaboró ​​en la reunión consistió en cuatro puntos:</p>
<p className="p">The agreement that was worked out at the meeting consisted of four points:</p>

<ol class="numeric">

<li className="it">Desarrollar una actualización incremental de ECMAScript (que se convirtió en ECMAScript 5).</li>
  <li className="p">Develop an incremental update of ECMAScript (which became ECMAScript 5).</li>

  <li className="it">Desarrollar una nueva versión principal, que iba a ser más modesto que el ECMAScript 4, pero mucho más grande en su alcance que la versión después de ECMAScript 3. Esta versión era el nombre clave de <em>la armonía</em> , debido a la naturaleza de la reunión en la que fue concebida.</li>
  <li className="p">Develop a major new release, which was to be more modest than ECMAScript 4, but much larger in scope than the version after ECMAScript 3. This version was code-named <em>Harmony</em>, due to the nature of the meeting in which it was conceived.</li>

 
  <li className="it">Características de ECMAScript 4 que se han Eliminado: paquetes, espacios de nombres, pronto enlace.</li>
  <li className="p">Features from ECMAScript 4 that would be dropped: packages, namespaces, early binding.</li>

  <li className="it">Otras ideas se iban a desarrollar en consenso con todos TC39.</li>
  <li className="p">Other ideas were to be developed in consensus with all of TC39.</li>
</ol>

<p className="it">Por lo tanto: El grupo ES4 acordó hacer Armonía menos radical que ES4, el resto del TC39 acordó mantener las cosas en movimiento hacia adelante.</p>
<p className="p">Thus: The ES4 group agreed to make Harmony less radical than ES4, the rest of TC39 agreed to keep moving things forward.</p>

<p className="it">Las siguientes versiones de ECMAScript son:</p>
<p className="p">The next versions of ECMAScript are:</p>

<ul>
   <li className="it"> <strong>ECMAScript 5 (diciembre de 2009). </strong>Esta es la versión de ECMAScript que la mayoría de los navegadores soportan en la actualidad. Trae varias mejoras a la biblioteca estándar y la semántica del lenguaje actualizados a través de un <em>modo estricto</em> .</li> 
  <li className="p">
<strong>ECMAScript 5 (December 2009).</strong> This is the version of ECMAScript that most browsers support today. It brings several enhancements to the standard library and updated language semantics via a <em>strict mode</em>.</li>
<li className="it"> <strong>ECMAScript 5.1 (junio de 2011). </strong>ES5 se presentó como un estándar ISO. En el proceso, se hicieron correcciones menores. ES5.1 contiene esas correcciones. Es el mismo texto que la norma ISO / IEC 16262: 2011.</li> 
  <li className="p">
<strong>ECMAScript 5.1 (June 2011).</strong> ES5 was submitted as an ISO standard. In the process, minor corrections were made. ES5.1 contains those corrections. It is the same text as ISO/IEC 16262:2011.</li>
<li className="it"> <strong>ECMAScript 6 (junio de 2015). </strong>Esta versión fue a través de varios cambios de nombre: </li> 

<li className="p"><strong>ECMAScript 6 (June 2015).</strong> This version went through several name changes:
    
    <ul>
<li className="it">ECMAScript Armonía: era el nombre en clave inicial para mejoras de JavaScript después de ECMAScript 5.</li>    
      <li className="p">ECMAScript Harmony: was the initial code name for JavaScript improvements after ECMAScript 5.</li>
<li className="it">ECMAScript.next: se hizo evidente que los planes para la armonía eran demasiado ambicioso para una sola versión, por lo que sus características se dividieron en dos grupos: el primer grupo de características tenía la más alta prioridad y que se convertiría en la versión siguiente de ES5. El nombre en clave de esa versión era ECMAScript.next, para evitar prematuramente comitting a un número de versión, que resultó problemática con ES4. El segundo grupo de características tuvo tiempo hasta después de ECMAScript.next.</li>
      <li className="p">ECMAScript.next: It became apparent that the plans for Harmony were too ambitious for a single version, so its features were split into two groups: The first group of features had highest priority and was to become the next version after ES5. The code name of that version was ECMAScript.next, to avoid prematurely comitting to a version number, which proved problematic with ES4. The second group of features had time until after ECMAScript.next.</li>
<li className="it">ECMAScript 6: Como maduró ECMAScript.next, su nombre en clave fue eliminado y todo el mundo empezó a llamarlo ECMAScript 6.</li>      
      <li className="p">ECMAScript 6: As ECMAScript.next matured, its code name was dropped and everybody started to call it ECMAScript 6.</li>
<li className="it">ECMAScript 2015: A finales de 2014, TC39 decidió cambiar el nombre oficial de ECMAScript 6 a ECMAScript 2015, a la luz de las próximas versiones de especificaciones anuales. Sin embargo, teniendo en cuenta lo establecido el nombre de “ECMAScript 6” ya que es y lo tarde TC39 cambiaron de opinión, espero que así es como todo el mundo continuará refiriéndose a esa versión.</li>
      <li className="p">ECMAScript 2015: In late 2014, TC39 decided to change the official name of ECMAScript 6 to ECMAScript 2015, in light of upcoming yearly spec releases. However, given how established the name “ECMAScript 6” already is and how late TC39 changed their minds, I expect that that’s how everybody will continue to refer to that version.</li>
    </ul>
  </li>

  <li className="it"> <strong>ECMAScript 2016</strong> antes se llamaba ECMAScript 7. A partir de la ES2016, el lenguaje estándar verá lanzamientos anuales más pequeños.</li>
  <li className="p">
<strong>ECMAScript 2016</strong> was previously called ECMAScript 7. Starting with ES2016, the language standard will see smaller yearly releases.</li>
</ul>






<div class="next-chapter">
    Next: <a href="ch_faq.html">2. FAQ: ECMAScript 6</a>
</div>


</div>




</div> 
   
  
  </Layout>
  )