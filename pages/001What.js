import Layout from '../components/layout'

export default () => (
  <Layout title='001What'>
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
    <div id="page-content">


<h2 id="ch_about-book">What you need to know about this book <a class="header-anchor" href="#ch_about-book" aria-hidden="true">#</a></h2>

<p className="it">Este libro trata de ECMAScript 6 (cuyo nombre oficial es ECMAScript 2015), una nueva versión de JavaScript.</p>

<p className="p">This book is about ECMAScript 6 (whose official name is ECMAScript 2015), a new version of JavaScript.</p>

<h3 id="_audience-javascript-programmers">Audience: JavaScript programmers <a class="header-anchor" href="#_audience-javascript-programmers" aria-hidden="true">#</a></h3>

<p className="it">Con el fin de entender este libro, usted ya debe saber JavaScript. Si no lo hace: mi otro libro “ <a href="http://speakingjs.com/">JavaScript Hablando</a> ” es gratuita en línea y enseña a los programadores de todo JavaScript (hasta e incluyendo ECMAScript 5).</p>

<p className="p">In order to understand this book, you should already know JavaScript. If you don’t: my other book “<a href="http://speakingjs.com/">Speaking JavaScript</a>” is free online and teaches programmers all of JavaScript (up to and including ECMAScript 5).</p>

<h3 id="_why-should-i-read-this-book">Why should I read this book? <a class="header-anchor" href="#_why-should-i-read-this-book" aria-hidden="true">#</a></h3>

<ul>
<li className ="it"><strong> Decide lo profundo que debe ir: </strong> Este libro cubre el ECMAScript 6 en profundidad, pero está estructurado para que también pueda obtener rápidamente una vista general si lo desea.</li>

<li className="p"><strong>You decide how deep to go:</strong> This book covers ECMAScript 6 in depth, but is structured so that you can also quickly get an overview if you want to.</li>
 
<li className ="it"><strong>No sólo "qué", sino también "por qué": </strong> Este libro no solo le explica cómo funciona ES6, sino que también le explica por qué funciona de la manera que lo hace.</li>
 
<li className="p"><strong>Not just “what”, also “why”:</strong> This book not only tells you how ES6 works, it also tells you why it works the way it does.</li>

<li className="it"><strong>El conocimiento profundo:</strong> Lea todo un capítulo, incluyendo las partes en profundidad.</li>

<li className="it"><strong>Investigado a fondo:</strong> Con el fin de dar sentido a ES6, he consultado muchas fuentes:</li>

<li className="p"><strong>Thoroughly researched:</strong> In order to make sense of ES6, I have consulted many sources:</li>
 </ul>
    <ul>
      <li className="it">La especificación del lenguaje (a la que de vez en cuando podrás encontrar punteros en este libro)</li>

      <li className="p">The language specification (to which you’ll occasionally find pointers in this book)</li>
      <li className="it">El ES-discutir lista de correo</li>

      <li className="p">The es-discuss mailing list</li>
      <li className="it">Las notas de la reunión TC39</li>

      <li className="p">The TC39 meeting notes</li>
      <li className="it">Articulos cientificos</li>

      <li className="p">Scientific papers</li>
      <li className="it">Documentación de las funciones de otros idiomas que inspiró ES6 características</li>

      <li className="p">Documentation on features in other languages that inspired ES6 features</li>
      <li className="it">Y más</li>

      <li className="p">And more</li>
    </ul>
 


<h3 id="_how-to-read-this-book">How to read this book <a class="header-anchor" href="#_how-to-read-this-book" aria-hidden="true">#</a></h3>

<p className="it">Este libro cubre ES6 con tres niveles de detalle:</p>

<p className="p">This book covers ES6 with three levels of detail:</p>

<ul>
  <li className="p"><strong>Quick start:</strong> Begin with the chapter “<a href="ch_core-features.html#ch_core-features">Core ES6 features</a>”. Additionally, almost every chapter starts with a section giving an overview of what’s in the chapter. <a href="ch_overviews.html#ch_overviews">The last chapter</a> collects all of these overview sections in a single location.</li>
  <li className="p"><strong>Solid foundation:</strong> Each chapter always starts with the essentials and then increasingly goes into details. The headings should give you a good idea of when to stop reading, but I also occasionally give tips in sidebars w.r.t. how important it is to know something.</li>
  <li className="p"><strong>In-depth knowledge:</strong> Read all of a chapter, including the in-depth parts.</li>
</ul>

<p className="it">Otras cosas que debe saber:</p>

<p className="p">Other things to know:</p>

<ul>
  <li className="it"><strong>Recomendaciones:</strong> de vez en cuando recomiendan reglas simples. Los que se ofrecen como lineamientos, para mantenerse a salvo sin tener que saber (o recordar) todos los detalles. Me inclino a favor de la corriente principal sobre la elegancia, porque la mayor parte del código no existe en el vacío. Sin embargo, siempre voy a dar suficiente información para que pueda tomar su propia decisión.</li>
<li className="it"><strong>Foro:</strong> Los “Explorando ES6” Página de <a href="http://exploringjs.com/es6.html#forum">enlaces a un foro</a> donde se puede discutir preguntas e ideas relacionadas con este libro.</li>
<li className="it"><strong>Erratas (errores tipográficos, errores, etc.):</strong> En <a href="http://exploringjs.com/es6.html#errata">la página “Exploración ES6”</a> , hay enlaces a una forma de presentación de erratas y a una lista con las erratas presentada.</li>
<li className="p"><strong>Recommendations:</strong> I occasionally recommend simple rules. Those are meant as guidelines, to keep you safe without you having to know (or remember) all of the details. I tend to favor mainstream over elegance, because most code doesn’t exist in a vacuum. However, I’ll always give you enough information so that you can make up your own mind.</li>
  <li className="it"><strong>Recomendaciones:</strong> de vez en cuando recomiendan reglas simples. Los que se ofrecen como lineamientos, para mantenerse a salvo sin tener que saber (o recordar) todos los detalles. Me inclino a favor de la corriente principal sobre la elegancia, porque la mayor parte del código no existe en el vacío. Sin embargo, siempre voy a dar suficiente información para que pueda tomar su propia decisión.</li>
<li className="it"><strong>Foro:</strong> Los “Explorando ES6” Página de <a href="http://exploringjs.com/es6.html#forum">enlaces a un foro</a> donde se puede discutir preguntas e ideas relacionadas con este libro.</li>
<li className="it"><strong>Erratas (errores tipográficos, errores, etc.):</strong> En <a href="http://exploringjs.com/es6.html#errata">la página “Exploración ES6”</a> , hay enlaces a una forma de presentación de erratas y a una lista con las erratas presentada.</li>
<li className="p"><strong>Forum:</strong> The “Exploring ES6” homepage <a href="http://exploringjs.com/es6.html#forum">links to a forum</a> where you can discuss questions and ideas related to this book.</li>
  <li className="it"><strong>Recomendaciones:</strong> de vez en cuando recomiendan reglas simples. Los que se ofrecen como lineamientos, para mantenerse a salvo sin tener que saber (o recordar) todos los detalles. Me inclino a favor de la corriente principal sobre la elegancia, porque la mayor parte del código no existe en el vacío. Sin embargo, siempre voy a dar suficiente información para que pueda tomar su propia decisión.</li>
<li className="it"><strong>Foro:</strong> Los “Explorando ES6” Página de <a href="http://exploringjs.com/es6.html#forum">enlaces a un foro</a> donde se puede discutir preguntas e ideas relacionadas con este libro.</li>
<li className="it"><strong>Erratas (errores tipográficos, errores, etc.):</strong> En <a href="http://exploringjs.com/es6.html#errata">la página “Exploración ES6”</a> , hay enlaces a una forma de presentación de erratas y a una lista con las erratas presentada.</li>
<li className="p"><strong>Errata (typos, errors, etc.):</strong> On <a href="http://exploringjs.com/es6.html#errata">the “Exploring ES6” homepage</a>, there are links to a form for submitting errata and to a list with submitted errata.</li>
</ul>

<h3 id="_sources-of-this-book">Sources of this book <a class="header-anchor" href="#_sources-of-this-book" aria-hidden="true">#</a></h3>

<p className="it">Empecé a escribir este libro mucho antes de que hubiera implementaciones de características ES6, lo que requería un poco de investigación. fuentes esenciales fueron:</p>

<p className="p">I started writing this book long before there were implementations of ES6 features, which required quite a bit of research. Essential sources were:</p>

<ul>
  <li className="it"><a href="https://mail.mozilla.org/listinfo/es-discuss">El ES-discutir lista de correo</a></li>

  <li className="p"><a href="https://mail.mozilla.org/listinfo/es-discuss">The es-discuss mailing list</a></li>
  <li className="it"><a href="https://github.com/tc39/tc39-notes/">notas de la reunión TC39</a></li>

  <li className="p"><a href="https://github.com/tc39/tc39-notes/">TC39 meeting notes</a></li>
  <li className="it"><a href="http://www.ecma-international.org/ecma-262/6.0/">La especificación del lenguaje ECMAScript</a></li>

  <li className="p"><a href="http://www.ecma-international.org/ecma-262/6.0/">The ECMAScript language specification</a></li>
  <li className="it"><a href="http://wiki.ecmascript.org/doku.php?id=harmony:harmony">El viejo Armonía wiki de ECMAScript</a></li>

  <li className="p"><a href="http://wiki.ecmascript.org/doku.php?id=harmony:harmony">The old ECMAScript Harmony wiki</a></li>
  <li className="it">Los artículos científicos (por ejemplo, los escritos sobre los proxies ES6) y otro material en la web.</li>

  <li className="p">Scientific papers (e.g. the ones written about ES6 proxies) and other material on the web.</li>
  <li className="it">Preguntar por ahí para llenar los agujeros restantes (las personas que respondieron son reconocidos en todo el libro)</li>

  <li className="p">Asking around to fill remaining holes (the people who answered are acknowledged throughout the book)</li>
</ul>

<h3 id="_glossary">Glossary <a class="header-anchor" href="#_glossary" aria-hidden="true">#</a></h3>

<h4 id="_strict-mode-versus-sloppy-mode">Strict mode versus sloppy mode <a class="header-anchor" href="#_strict-mode-versus-sloppy-mode" aria-hidden="true">#</a></h4>

<p className="it">ECMAScript 5 introdujo modos de lenguaje: <em>El modo estricto</em> hace JavaScript un lenguaje más limpio cambiando su semántica, la realización de más controles y lanzando más excepciones. Consulte secta. “ <a href="http://speakingjs.com/es5/ch07.html#strict_mode">Modo estricto</a> ” en “Hablando JavaScript” para más información. El modo de herencia / por defecto se llama <em>modo no estricto</em> o <em>el modo descuidado</em> .</p>

<p className="p">ECMAScript 5 introduced language modes: <em>Strict mode</em> makes JavaScript a cleaner language by changing its semantics, performing more checks and throwing more exceptions. Consult Sect. “<a href="http://speakingjs.com/es5/ch07.html#strict_mode">Strict Mode</a>” in “Speaking JavaScript” for more information. The legacy/default mode is called <em>non-strict mode</em> or <em>sloppy mode</em>.</p>

<p className="it">El modo estricto se conecta a través de la línea siguiente (que no hace nada en versiones de ECMAScript antes ES5):</p>

<p className="p">Strict mode is switched on via the following line (which does nothing in ECMAScript versions before ES5):</p>

<figure class="code">
<div class="highlight"><pre><code></code><code class="s1">'use strict'</code><code class="p">;</code>
</pre></div>

</figure>

<p className="it">Si se pone esta línea al principio de un archivo, todo el código en el que se encuentra en el modo estricto. Si hace esta línea de la primera línea de una función, solo que la función es en modo estricto.</p>

<p className="p">If you put this line at the beginning of a file, all code in it is in strict mode. If you make this line the first line of a function, only that function is in strict mode.</p>

<p className="it">El uso de una directiva para activar el modo estricto no muy fácil de usar y es fue una de las razones por las que el modo estricto no era tan popular en ES5 como debe ser. Sin embargo, los módulos ES6 y las clases son implícitamente en modo estricto. Teniendo en cuenta que la mayoría del código ES6 vivirá en módulos, el modo estricto se convierte en el valor predeterminado de facto para la ES6.</p>

<p className="p">Using a directive to switch on strict mode is not very user friendly and was one of the reasons why strict mode was not nearly as popular in ES5 as it should be. However, ES6 modules and classes are implicitly in strict mode. Given that most ES6 code will live in modules, strict mode becomes the de-facto default for ES6.</p>

<h4 id="sec_protocol">Protocol <a class="header-anchor" href="#sec_protocol" aria-hidden="true">#</a></h4>

<p className="it">El término <em>protocolo</em> tiene varios significados en la informática. En el contexto de los lenguajes de programación y diseño de API, lo estoy usando la siguiente manera:</p>

<p className="p">The term <em>protocol</em> has various meanings in computing. In the context of programming languages and API design, I’m using it as follows:</p>

<blockquote>
  <p className="it">Un protocolo define las interfaces (firmas para los métodos y / o funciones) y las normas para el uso de ellos.</p>

  <p className="p">A protocol defines interfaces (signatures for methods and/or functions) and rules for using them.</p>
</blockquote>

<p className="it">La idea es especificar cómo un servicio se va a realizar. A continuación, cualquier persona puede realizar el servicio y cualquiera puede solicitarlo y que están garantizados para trabajar bien juntos.</p>

<p className="p">The idea is to specify how a service is to be performed. Then anyone can perform the service and anyone can request it and they are guaranteed to work together well.</p>

<p className="it">Tenga en cuenta que la definición dada aquí es diferente de la visualización de un protocolo de interfaz (como, por ejemplo, Objective C lo hace), ya que esta definición incluye reglas.</p>

<p className="p">Note that the definition given here is different from viewing a protocol as an interface (as, for example, Objective C does), because this definition includes rules.</p>

<h4 id="_receiver-of-a-method-call">Receiver (of a method call) <a class="header-anchor" href="#_receiver-of-a-method-call" aria-hidden="true">#</a></h4>

<p className="it">Dada una llamada de método <code>obj.m(···)</code>, <code>obj</code>es el <em>receptor</em> de la llamada al método y accesible a través <code>this</code>dentro del método.</p>

<p className="p">Given a method call <code>obj.m(···)</code>, <code>obj</code> is the <em>receiver</em> of the method call and accessible via <code>this</code> inside the method.</p>

<h4 id="_signature-of-a-function-or-a-method">Signature of a function (or a method) <a class="header-anchor" href="#_signature-of-a-function-or-a-method" aria-hidden="true">#</a></h4>

<p className="it">El (tipo de) la firma de una función se describe cómo la función ha de ser llamado, cuáles son sus entradas y su salida son. Estoy usando la sintaxis establecida por Microsoft y Facebook mecanografiado de flujo en este libro. Un ejemplo de una firma:</p>

<p className="p">The (type) signature of a function describes how the function is to be called, what its inputs and its output are. I’m using the syntax established by Microsoft TypeScript and Facebook Flow in this book. An example of a signature:</p>

<figure class="code">
<div class="highlight"><pre><code></code><code class="nb">parseInt</code><code class="p">(</code><code class="nx">string</code> <code class="o">:</code> <code class="nx">string</code><code class="p">,</code> <code class="nx">radix</code><code class="o">?</code> <code class="o">:</code> <code class="nx">number</code><code class="p">)</code> <code class="o">:</code> <code class="nx">number</code>
</pre></div>

</figure>

<p className="it">Se puede ver que <code>parseInt()</code>espera una cadena y un número y devuelve un número. Si el tipo de un parámetro es clara, a menudo omite el tipo de anotación.</p>

<p className="p">You can see that <code>parseInt()</code> expects a string and a number and returns a number. If the type of a parameter is clear, I often omit the type annotation.</p>

<h4 id="_internal-slots">Internal slots <a class="header-anchor" href="#_internal-slots" aria-hidden="true">#</a></h4>

<p className="it">La especificación del lenguaje ES6 utiliza <em>ranuras internas</em> para almacenar datos internos. En la especificación, se accede a ranuras internas como si fueran propiedades cuyos nombres están en corchetes:</p>

<p className="p">The ES6 language specification uses <em>internal slots</em> to store internal data. In the spec, internal slots are accessed as if they were properties whose names are in square brackets:</p>

<figure class="code">
<div class="highlight"><pre><code></code><code class="nx">O</code><code class="p">.[[</code><code class="nx">GetPrototypeOf</code><code class="p">]]()</code>
</pre></div>

</figure>

<p className="it">Hay dos cosas que los diferencian de propiedades:</p>

<p className="p">Two things differentiate them from properties:</p>

<ul>
  <li className="it">Ellos no se leen a través de operaciones “get” y se escriben a través de operaciones de “set”.</li>

  <li className="p">They are not read via “get” operations and written via “set” operations.</li>
  
  <li className="it">Sólo se sabe que la especificación y no son accesibles desde JavaScript. Por ejemplo: el enlace entre un objeto y su prototipo es la ranura interna <code>[[Prototype]]</code>. El valor de esa ranura no se puede leer directamente a través de JavaScript, pero se puede utilizar <code>Object.getPrototypeOf()</code>para hacerlo.</li>

  <li className="p">They are only known to the spec and not accessible from JavaScript. For example: the link between an object and its prototype is the internal slot <code>[[Prototype]]</code>. The value of that slot cannot be read directly via JavaScript, but you can use <code>Object.getPrototypeOf()</code> to do so.</li>
</ul>

<p className="it">¿Cómo funciona exactamente ranuras internas se almacenan no se especifica. Algunos ni siquiera pueden existir en las implementaciones reales de JavaScript.</p>

<p className="p">How exactly internal slots are stored is left unspecified. Some may not even exist in actual JavaScript implementations.</p>

<h4 id="_bindings-and-environments">Bindings and environments <a class="header-anchor" href="#_bindings-and-environments" aria-hidden="true">#</a></h4>

<p className="it">La especificación ECMAScript utiliza una estructura de datos llamada <em>entorno</em> para almacenar las variables de alcance. Un entorno es básicamente un diccionario que mapea los nombres de variables a los valores. Una <em>unión</em> es una entrada en un entorno, espacio de almacenamiento para una variable.</p>

<p className="p">The ECMAScript spec uses a data structure called <em>environment</em> to store the variables of a scope. An environment is basically a dictionary that maps variable names to values. A <em>binding</em> is an entry in an environment, storage space for a variable.</p>

<h4 id="_destructive-operations">Destructive operations <a class="header-anchor" href="#_destructive-operations" aria-hidden="true">#</a></h4>

<p className="it">Operaciones destructivas (métodos, funciones) modifican sus parámetros o sus receptores. Por ejemplo, <code>push()</code>modifica su receptor <code>arr</code>:</p>

<p className="p">Destructive operations (methods, functions) modify their parameters or their receivers. For example, <code>push()</code> modifies its receiver <code>arr</code>:</p>

<figure class="code">
<div class="highlight"><pre><code></code>&gt; const arr = ['a', 'b'];
&gt; arr.push('c')
3
&gt; arr
[ 'a', 'b', 'c' ]
</pre></div>

</figure>

<p className="it">Por el contrario, <code>concat()</code>crea una nueva matriz y no cambia su receptor <code>arr</code>:</p>

<p className="p">In contrast, <code>concat()</code> creates a new Array and does not change its receiver <code>arr</code>:</p>

<figure class="code">
<div class="highlight"><pre><code></code>&gt; const arr = ['a', 'b'];
&gt; arr.concat(['c'])
[ 'a', 'b', 'c' ]
&gt; arr
[ 'a', 'b' ]
</pre></div>

</figure>

<h3 id="_conventions">Conventions <a class="header-anchor" href="#_conventions" aria-hidden="true">#</a></h3>

<h4 id="_documenting-classes">Documenting classes <a class="header-anchor" href="#_documenting-classes" aria-hidden="true">#</a></h4>

<p className="it">La API de una clase <code>C</code>normalmente se documentó la siguiente manera:</p>

<p className="p">The API of a class <code>C</code> is usually documented as follows:</p>

<ul>
  <li className="p"><code>C</code> constructor</li>
  <li className="p">Static <code>C</code> methods</li>
  <li className="p"><code>C.prototype</code> methods</li>
</ul>

<h4 id="_capitalization">Capitalization <a class="header-anchor" href="#_capitalization" aria-hidden="true">#</a></h4>

<p className="it">En Inglés, que con mayúscula términos de JavaScript de la siguiente manera:</p>

<p className="p">In English, I capitalize JavaScript terms as follows:</p>


  <li className="it">Los nombres de entidades primitivas no se capitalizan: un valor booleano, un valor numérico, un símbolo, una cadena. Una razón por la que estoy haciendo esto es porque mecanografiado y flujo distinguen:</li>

  <li className="p">The names of primitive entities are not capitalized: a boolean value, a number value, a symbol, a string. One reason why I’m doing this is because TypeScript and Flow distinguish:</li>
  
      <li className="it">El tipo <code>String</code>: sus miembros son objetos, los casos de <code>String</code>.</li>

      <li className="p">The type <code>String</code>: its members are objects, instances of <code>String</code>.</li>
      <li className="it">El tipo <code>string</code>: sus miembros son valores primitivos, cuerdas.</li>

      <li className="p">The type <code>string</code>: its members are primitive values, strings.</li>
   

  <li className="it">La estructura de datos del mapa se escribe con mayúscula. Justificación: distinguir a partir del método de matriz <code>map()</code>.</li>

  <li className="p">The data structure Map is capitalized. Rationale: distinguish from the Array method <code>map()</code>.</li>
  <li className="it">El conjunto de estructura de datos se escribe con mayúscula. Justificación: distinguirlo del verbo <em>conjunto</em> .</li>

  <li className="p">The data structure Set is capitalized. Rationale: distinguish from the verb <em>set</em>.</li>
  <li className="it">Promise matriz y se capitalizan. Justificación: fácil de confundir con las palabras en inglés.</li>

  <li className="p">Array and Promise are capitalized. Rationale: easy to confuse with English words.</li>
  <li className="it">No se capitaliza (por ahora): objeto, generador, proxy.</li>

  <li className="p">Not capitalized (for now): object, generator, proxy.</li>

<h3 id="_demo-code-on-github">Demo code on GitHub <a class="header-anchor" href="#_demo-code-on-github" aria-hidden="true">#</a></h3>

<p className="it">Varios repositorios de GitHub contienen código que se muestra en este libro:</p>

<p className="p">Several repositories on GitHub contain code shown in this book:</p>

<ul>
  <li className="p"><a href="https://github.com/rauschma/async-examples"><code>async-examples</code></a></li>
  <li className="p"><a href="https://github.com/rauschma/babel-on-node"><code>babel-on-node</code></a></li>
  <li className="p"><a href="https://github.com/rauschma/demo_promise"><code>demo_promise</code></a></li>
  <li className="p"><a href="https://github.com/rauschma/generator-examples"><code>generator-examples</code></a></li>
  <li className="p"><a href="https://github.com/rauschma/node-es6-demo"><code>node-es6-demo</code></a></li>
  <li className="p"><a href="https://github.com/rauschma/promise-examples"><code>promise-examples</code></a></li>
  <li className="p"><a href="https://github.com/rauschma/webpack-es6-demo"><code>webpack-es6-demo</code></a></li>
</ul>

<h3 id="_sidebars">Sidebars <a class="header-anchor" href="#_sidebars" aria-hidden="true">#</a></h3>

<p className="it">Las barras laterales son cajas de texto marcados con iconos. Se complementan el contenido normal.</p>

<p className="p">Sidebars are boxes of text marked with icons. They complement the normal content.</p>

<aside class="generic_inbar blurb eye icon-eye"><h3 id="_tips-for-reading">Consejos para la lectura <a class="header-anchor" href="#_tips-for-reading" aria-hidden="true">#</a></h3></aside>

<aside class="generic_inbar blurb eye icon-eye">
    <h3 id="_tips-for-reading">Tips for reading <a class="header-anchor" href="#_tips-for-reading" aria-hidden="true">#</a></h3>

  <p className="it">le da consejos para la lectura (qué contenido para saltar, etc.).</p>

  <p className="p">Gives you tips for reading (what content to skip etc.).</p>

</aside>

<aside class="generic_inbar blurb github-alt icon-github-alt"><h3 id="_code-on-github">Código en GitHub <a class="header-anchor" href="#_code-on-github" aria-hidden="true">#</a></h3></aside>

<aside class="generic_inbar blurb github-alt icon-github-alt">
    <h3 id="_code-on-github">Code on GitHub <a class="header-anchor" href="#_code-on-github" aria-hidden="true">#</a></h3>

  <p className="it">te dice donde se puede descargar el código de demostración se muestra en este libro.</p>

  <p className="p">Tells you where you can download demo code shown in this book.</p>

</aside>

<aside class="information blurb"><h3 id="_information">información <a class="header-anchor" href="#_information" aria-hidden="true">#</a></h3></aside>

<aside class="information blurb">
    <h3 id="_information">Information <a class="header-anchor" href="#_information" aria-hidden="true">#</a></h3>

  <p className="it">Información general.</p>

  <p className="p">General information.</p>

</aside>

<aside class="question blurb"><h3 id="_question">pregunta <a class="header-anchor" href="#_question" aria-hidden="true">#</a></h3></aside>

<aside class="question blurb">
    <h3 id="_question">Question <a class="header-anchor" href="#_question" aria-hidden="true">#</a></h3>

  <p className="it">Pregunta y responde a una pregunta, en FAQ estilo.</p>

  <p className="p">Asks and answers a question, in FAQ style.</p>

</aside>

<aside class="warning blurb"><h3 id="_warning">advertencia <a class="header-anchor" href="#_warning" aria-hidden="true">#</a></h3></aside>

<aside class="warning blurb">
    <h3 id="_warning">Warning <a class="header-anchor" href="#_warning" aria-hidden="true">#</a></h3>

  <p className="it">Cosas que hay que tener cuidado.</p>

  <p className="p">Things you need to be careful about.</p>

</aside>

<aside class="generic_inbar blurb external-link icon-external-link"><h3 id="_external-material">El material externo <a class="header-anchor" href="#_external-material" aria-hidden="true">#</a></h3></aside>

<aside class="generic_inbar blurb external-link icon-external-link">
    <h3 id="_external-material">External material <a class="header-anchor" href="#_external-material" aria-hidden="true">#</a></h3>

  <p className="it">Puntos a material relacionado alojados en algún lugar de la web.</p>

  <p className="p">Points to related material hosted somewhere on the web.</p>

</aside>

<aside class="generic_inbar blurb gears icon-gears"><h3 id="_related-parts-of-the-spec">Partes relacionadas de la especificación <a class="header-anchor" href="#_related-parts-of-the-spec" aria-hidden="true">#</a></h3></aside>

<aside class="generic_inbar blurb gears icon-gears">
    <h3 id="_related-parts-of-the-spec">Related parts of the spec <a class="header-anchor" href="#_related-parts-of-the-spec" aria-hidden="true">#</a></h3>

  <p className="it">Explica en qué parte del ES6 Spec se puede encontrar la característica que se está explicando la actualidad.</p>

  <p className="p">Explains where in the ES6 spec you can find the feature that is currently being explained.</p>

</aside>

<h3 id="_footnotes">Footnotes <a class="header-anchor" href="#_footnotes" aria-hidden="true">#</a></h3>

<p className="it">De vez en cuando, me refiero a material exterior (disponible públicamente) a través de notas al pie. Dos fuentes están marcados con un prefijo entre corchetes:</p>

<p className="p">Occasionally, I refer to (publicly available) external material via footnotes. Two sources are marked with a prefix in square brackets:</p>

<ul>
  <li className="it">[Spec] se refiere al contenido en la versión HTML de la especificación ES6.</li>

  <li className="p">[Spec] refers to content in the HTML version of the ES6 spec.</li>

  <li className="it">[Hablando JS] se refiere al contenido en la versión HTML del “Hablando JavaScript”.</li>

  <li className="p">[Speaking JS] refers to content in the HTML version of “Speaking JavaScript”.</li>
</ul>

<div class="next-chapter">
    Next: <a href="ch_foreword.html">Foreword</a>

</div>
</div>
</div>
  </Layout>
)
