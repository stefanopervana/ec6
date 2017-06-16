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
                <div>
<p className="it">Este capítulo responde a unas pocas preguntas más frecuentes acerca de ECMAScript 6.</p>

<p className="p">This chapter answers a few frequently asked questions about ECMAScript 6.</p>



<ul>
  <li className="it">2.1. <a href="ch_faq.html#sec_using-es6-today">¿Cómo puedo usar ES6 hoy?</a> </li>

  <li className="p">2.1. <a href="ch_faq.html#sec_using-es6-today">How can I use ES6 today?</a>
</li>
  <li className="it">2.2. <a href="ch_faq.html#sec_es6-vs-es2015">No se ECMAScript 6 ahora llamada ECMAScript 2015?</a> </li>

  <li className="p">2.2. <a href="ch_faq.html#sec_es6-vs-es2015">Isn’t ECMAScript 6 now called ECMAScript 2015?</a>
</li>
  <li className="it">2.3. <a href="ch_faq.html#sec_from-es5-to-es6">¿Cómo migro mi código ECMAScript 5 a 6 ECMAScript?</a> </li>

  <li className="p">2.3. <a href="ch_faq.html#sec_from-es5-to-es6">How do I migrate my ECMAScript 5 code to ECMAScript 6?</a>
</li>
  <li className="it">2.4. <a href="ch_faq.html#sec_why-learn-es5">¿Sigue teniendo sentido para aprender ECMAScript 5?</a> </li>

  <li className="p">2.4. <a href="ch_faq.html#sec_why-learn-es5">Does it still make sense to learn ECMAScript 5?</a>
</li>
  <li className="it">2.5. <a href="ch_faq.html#sec_is-es6-bloated">ES6 está hinchado?</a> </li>

  <li className="p">2.5. <a href="ch_faq.html#sec_is-es6-bloated">Is ES6 bloated?</a>
</li>
  <li className="it">2.6. <a href="ch_faq.html#sec_is-es6-spec-very-big">No es la especificación ES6 muy grande?</a> </li>

  <li className="p">2.6. <a href="ch_faq.html#sec_is-es6-spec-very-big">Isn’t the ES6 specification very big?</a>
</li>
  <li className="it">2.7. <a href="ch_faq.html#sec_array-comprehension">ES6 no tiene por comprensión de la matriz?</a> </li>

  <li className="p">2.7. <a href="ch_faq.html#sec_array-comprehension">Does ES6 have array comprehensions?</a>
</li>
  <li className="it">2.8. <a href="ch_faq.html#sec_es6-static-typing">Se ES6 de tipo estático?</a> </li>

  <li className="p">2.8. <a href="ch_faq.html#sec_es6-static-typing">Is ES6 statically typed?</a>
</li>
</ul>


<h3 id="sec_using-es6-today">
<span class="section-number">2.1 </span>How can I use ES6 today? <a class="header-anchor" href="#sec_using-es6-today" aria-hidden="true">#</a></h3>

<p className="it">La mayor parte de ES6 ya está soportado en los motores actuales, consulte <a href="http://kangax.github.io/compat-table/es6/">la tabla de compatibilidad ES6 Kangax'</a> para averiguar lo que está apoyada dónde.</p>

<p className="p">Most of ES6 is already supported in current engines, consult <a href="http://kangax.github.io/compat-table/es6/">Kangax’ ES6 compatibility table</a> to find out what is supported where.</p>

<p className="it">Para otras opciones (por ejemplo, líneas de mando interactivos y ES6 transpiling ES6 a través de Babel ES5), consulte el Cap. “ <a href="https://leanpub.com/setting-up-es6/read#ch_deploying-es6">La implementación de ECMAScript 6</a> ” en “Configuración de la ES6”.</p>

<p className="p">For other options (e.g. interactive ES6 command lines and transpiling ES6 to ES5 via Babel), consult Chap. “<a href="https://leanpub.com/setting-up-es6/read#ch_deploying-es6">Deploying ECMAScript 6</a>” in “Setting up ES6”.</p>


<h3 id="sec_es6-vs-es2015">
<span class="section-number">2.2 </span>Isn’t ECMAScript 6 now called ECMAScript 2015? <a class="header-anchor" href="#sec_es6-vs-es2015" aria-hidden="true">#</a></h3>

<p className="it">Si y no. El nombre oficial es ECMAScript 2015, pero ES6 es el nombre que todo el mundo conoce y utiliza. Es por eso que decidí utilizar este último para este libro.</p>

<p className="p">Yes and no. The official name is ECMAScript 2015, but ES6 is the name that everyone knows and uses. That’s why I decided to use the latter for this book.</p>

<p className="it">Después ES6, ediciones de ECMAScript son creados a través de <a href="https://tc39.github.io/process-document/">un nuevo proceso</a> y un ciclo de lanzamiento anual. Eso parece como una buena oportunidad para cambiar al nuevo esquema de nombres. Por lo tanto, voy a utilizar el nombre “ECMAScript 2016” para la edición después de la ES6.</p>

<p className="p">After ES6, ECMAScript editions are created via <a href="https://tc39.github.io/process-document/">a new process</a> and a yearly release cycle. That seems like a good opportunity to switch to the new naming scheme. Therefore, I’ll use the name “ECMAScript 2016” for the edition after ES6.</p>


<h3 id="sec_from-es5-to-es6">
<span class="section-number">2.3 </span>How do I migrate my ECMAScript 5 code to ECMAScript 6? <a class="header-anchor" href="#sec_from-es5-to-es6" aria-hidden="true">#</a></h3>

<p className="it">No hay nada que hacer: ECMAScript 6 es un superconjunto de ECMAScript 5. Por lo tanto, todo el código ES5 es automáticamente el código ES6. Eso ayuda enormemente con la adopción de forma incremental esta nueva versión. ¿Cómo funciona exactamente ES6 queda completamente compatible con versiones anteriores se explica en <a href="ch_one-javascript.html#ch_one-javascript">el capítulo “Una JavaScript”</a> .</p>

<p className="p">There is nothing to do: ECMAScript 6 is a superset of ECMAScript 5. Therefore, all of your ES5 code is automatically ES6 code. That helps tremendously with incrementally adopting this new version. How exactly ES6 stays completely backward-compatible is explained in <a href="ch_one-javascript.html#ch_one-javascript">the chapter on “One JavaScript”</a>.</p>


<h3 id="sec_why-learn-es5">
<span class="section-number">2.4 </span>Does it still make sense to learn ECMAScript 5? <a class="header-anchor" href="#sec_why-learn-es5" aria-hidden="true">#</a></h3>

<p className="it">ES6 está cada vez más bien apoyado por todas partes. ¿Eso quiere decir que usted no debe aprender ECMAScript 5, más? No lo hace, por varias razones:</p>

<p className="p">ES6 is increasingly well supported everywhere. Does that mean that you shouldn’t learn ECMAScript 5, anymore? It doesn’t, for several reasons:</p>

<ul>
  <li className="it">ECMAScript 6 es un superconjunto de ECMAScript 5 - nuevas versiones de JavaScript nunca deben romper el código existente. Por lo tanto, nada se aprende acerca de ECMAScript 5 se aprende en vano.</li>

  <li className="p">ECMAScript 6 is a superset of ECMAScript 5 – new JavaScript versions must never break existing code. Thus, nothing you learn about ECMAScript 5 is learned in vain.</li>
  <li className="it">Hay varias características que ECMAScript 6 reemplazan tipo de ECMAScript 5 características, pero todavía los utilizan como sus bases. Es importante entender los fundamentos. Dos ejemplos: las clases se traducen internamente para los constructores y los métodos siguen siendo funciones (como siempre lo han sido).</li>

  <li className="p">There are several ECMAScript 6 features that kind of replace ECMAScript 5 features, but still use them as their foundations. It is important to understand those foundations. Two examples: classes are internally translated to constructors and methods are still functions (as they have always been).</li>
  <li className="it">Mientras ECMAScript 6 se compila para ECMAScript 5, es útil para entender la salida del proceso de compilación. Y usted tiene que compilar a ES5 por un tiempo (probablemente años), hasta que se pueda confiar en la ES6 estar disponible en todos los navegadores pertinentes.</li>

  <li className="p">As long as ECMAScript 6 is compiled to ECMAScript 5, it is useful to understand the output of the compilation process. And you’ll have to compile to ES5 for a while (probably years), until you can rely on ES6 being available in all relevant browsers.</li>
  <li className="it">Es importante ser capaz de entender el código heredado.</li>

  <li className="p">It’s important to be able to understand legacy code.</li>
</ul>


<h3 id="sec_is-es6-bloated">
<span class="section-number">2.5 </span>Is ES6 bloated? <a class="header-anchor" href="#sec_is-es6-bloated" aria-hidden="true">#</a></h3>

<p className="it">Una vez en cuando se encuentra con acusaciones de ES6 estar hinchado y la introducción demasiado inútil <em>azúcar sintáctico</em> (sintaxis más conveniente para algo que ya existe).</p>

<p className="p">One occasionally comes across accusations of ES6 being bloated and introducing too much useless <em>syntactic sugar</em> (more convenient syntax for something that already exists).</p>

<p className="it">Sin embargo, en muchos sentidos, JavaScript es ahora ponerse al día con lenguajes como Python y Ruby. Ambos todavía tienen más características y vienen con una biblioteca estándar mucho más rica.</p>

<p className="p">However, in many ways, JavaScript is just now catching up with languages such as Python and Ruby. Both still have more features and come with a much richer standard library.</p>

<p className="it">Si alguien se queja de ES6 ser demasiado grande, le sugiero que probarlo por un tiempo. Nadie te obliga a utilizar cualquiera de las nuevas características. Puede empezar poco a poco (consultar cap. “ <a href="ch_core-features.html#ch_core-features">Las características principales ES6</a> ” para obtener sugerencias) y luego usar más características nuevas, a medida que crece más cómodo con ES6. Hasta ahora, los comentarios que recibo de personas que se han programado con ES6 (en contraposición a leer sobre él) es muy positiva.</p>

<p className="p">If someone complains about ES6 being too big, I suggest that they try it out for a while. Nobody forces you to use any of the new features. You can start small (consult Chap. “<a href="ch_core-features.html#ch_core-features">Core ES6 features</a>” for suggestions) and then use more new features, as you grow more comfortable with ES6. So far, the feedback I get from people who have actually programmed with ES6 (as opposed to read about it) is overwhelmingly positive.</p>

<p className="it">Por otra parte, las cosas que superficialmente se parecen azúcar sintáctico (tales como clases y módulos) llevar la estandarización muy necesario a la lengua y servir como bases para futuras características.</p>

<p className="p">Furthermore, things that superficially look like syntactic sugar (such as classes and modules) bring much-needed standardization to the language and serve as foundations for future features.</p>

<p className="it">Por último, varias características que no fueron creados por programadores normales, pero para los autores de la biblioteca (por ejemplo, generadores, iteradores, proxies). “normales” los programadores sólo necesitan saber superficialmente en todo caso.</p>

<p className="p">Lastly, several features were not created for normal programmers, but for library authors (e.g. generators, iterators, proxies). “Normal programmers” only need to know them superficially if at all.</p>


<h3 id="sec_is-es6-spec-very-big">
<span class="section-number">2.6 </span>Isn’t the ES6 specification very big? <a class="header-anchor" href="#sec_is-es6-spec-very-big" aria-hidden="true">#</a></h3>

<p className="it">La especificación ECMAScript de hecho ha crecido enormemente: el PDF ECMAScript 5.1 tenía 245 páginas, el PDF ES6 tiene 593 páginas. Sin embargo, para la comparación, la especificación del lenguaje Java 8 tiene 724 páginas (excluyendo un índice). Por otra parte, la especificación ES6 contiene detalles que muchas otras especificaciones del lenguaje omiten como definido por la implementación. También especifica cómo funciona la biblioteca estándar <sup id="fnref-faq_1"><a href="leanpub-endnotes.html#fn-faq_1" rel="footnote">2</a></sup> .</p>

<p className="p">The ECMAScript specification has indeed grown tremendously: The ECMAScript 5.1 PDF had 245 pages, the ES6 PDF has 593 pages. But, for comparison, the Java 8 language specification has 724 pages (excluding an index). Furthermore, the ES6 specification contains details that many other language specifications omit as implementation-defined. It also specifies how its standard library works<sup id="fnref-faq_1"><a href="leanpub-endnotes.html#fn-faq_1" rel="footnote">2</a></sup>.</p>


<h3 id="sec_array-comprehension">
<span class="section-number">2.7 </span>Does ES6 have array comprehensions? <a class="header-anchor" href="#sec_array-comprehension" aria-hidden="true">#</a></h3>

<p className="it">Originalmente, era tener ES6 matriz y comprensiones del generador (de manera similar a Haskell y Python). Pero ellos no se han añadido, porque TC39 quería explorar dos vías:</p>

<p className="p">Originally, ES6 was to have Array and generator comprehensions (similarly to Haskell and Python). But they were not added, because TC39 wanted to explore two avenues:</p>

<ul>
  <li className="it">Puede ser posible crear comprensiones que trabajan para los tipos de datos arbitrarios (pensar LINQ de Microsoft).</li>

  <li className="p">It may be possible to create comprehensions that work for arbitrary datatypes (think Microsoft’s LINQ).</li>
  <li className="it">También puede ser posible que los métodos para iteradores son una mejor manera de lograr lo comprensiones hacer.</li>

  <li className="p">It may also be possible that methods for iterators are a better way to achieve what comprehensions do.</li>
</ul>


<h3 id="sec_es6-static-typing">
<span class="section-number">2.8 </span>Is ES6 statically typed? <a class="header-anchor" href="#sec_es6-static-typing" aria-hidden="true">#</a></h3>

<p className="it">tipos estáticos no es parte de ES6. Sin embargo, los siguientes dos tecnologías añaden tipos estáticos de JavaScript. Características similares pueden eventualmente ser estandarizados.</p>

<p className="p">Static typing is not part of ES6. However, the following two technologies add static typing to JavaScript. Similar features may eventually be standardized.</p>

<ul>
  <li className="it"> <strong>Microsoft mecanografiado:</strong> es básicamente ES6 más anotaciones de tipos opcionales. Por el momento, se compila a ES5 y tira a la basura la información de tipo mientras lo hace. Opcionalmente, también puede hacer que la información disponible en tiempo de ejecución, para el tipo de introspección y para los controles de tipo en tiempo de ejecución.</li>

  <li className="p">
<strong>Microsoft TypeScript:</strong> is basically ES6 plus optional type annotations. At the moment, it is compiled to ES5 and throws away the type information while doing so. Optionally, it can also make that information available at runtime, for type introspection and for runtime type checks.</li>
  <li className="it"> <strong>Facebook flujo:</strong> es un corrector de tipo para ECMAScript 6 que se basa en el análisis de flujo. Como tal, sólo añade anotaciones opcionales de tipo a la lengua y deduce y tipos de cheques. No ayuda a compilar ES6 a ES5.</li>

  <li className="p">
<strong>Facebook Flow:</strong> is a type checker for ECMAScript 6 that is based on flow analysis. As such, it only adds optional type annotations to the language and infers and checks types. It does not help with compiling ES6 to ES5.</li>
</ul>

<p className="it">Dos beneficios de tipos estáticos son:</p>

<p className="p">Two benefits of static typing are:</p>

<ul>
  <li className="it">Se le permite detectar una determinada categoría de errores anteriores, ya que el código se analiza de forma estática (durante el desarrollo, sin correr el código). Como tal, tipos estáticos es complementario a las pruebas y las capturas de diferentes errores.</li>

  <li className="p">It allows you to detect a certain category of errors earlier, because the code is analyzed statically (during development, without running code). As such, static typing is complementary to testing and catches different errors.</li>
  <li className="it">Ayuda a los IDE con auto-completado.</li>

  <li className="p">It helps IDEs with auto-completion.</li>
</ul>

<p className="it">Tanto mecanografiado y flujo están utilizando la misma notación. anotaciones de tipo son opcionales, lo que hace que este enfoque relativamente ligero. Incluso sin anotaciones, los tipos a menudo pueden ser inferidas. Por lo tanto, este tipo de comprobación de tipos es incluso útil para el código completo sin anotaciones, como una comprobación de coherencia.</p>

<p className="p">Both TypeScript and Flow are using the same notation. Type annotations are optional, which makes this approach relatively lightweight. Even without annotations, types can often be inferred. Therefore, this kind of type checking is even useful for completely unannotated code, as a consistency check.</p>

</div>




</div> 
   
  
  </Layout>
  )