import Layout from '../components/layout'

export default () => (
  <Layout title='About us'>
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


<h2 id="ch_foreword">Foreword <a class="header-anchor" href="#ch_foreword" aria-hidden="true">#</a></h2>

<p className="it"> ¡Casos al borde! Mi vida como editor de proyectos con especificación ES6 ha sido toda sobre los casos al borde. Al igual que la mayoría de los programas informáticos, el diseño de una característica del lenguaje de programación suele estar impulsada por casos de uso específicos. Pero los programadores pueden y usan a menudo características del lenguaje de maneras nuevas que están bien fuera del alcance de esos casos de uso originales. Además, ninguna característica del lenguaje está sola. Cada característica potencialmente interactúa con cualquier otra característica. Los usos inesperados y las interacciones de características son el ámbito de los casos al borde. </p>

<p className="p">Edge cases! My life as the project editor of the ES6 specification has been all about edge cases. Like most software, the design of a programming language feature is typically driven by specific use cases. But programmers can and often do use language features in novel ways that are well outside the scope of those original use cases.  In addition, no language feature stands alone.  Every feature potentially interacts with every other feature.  Those unexpected uses and feature interactions are the realm of edge cases.</p>

<p className="it"> Por ejemplo, considerá una función que tiene una expresión de valor predeterminado de inicialización de valor que utiliza la función eval para declarar primero una variable local que tiene el mismo nombre que una variable local declarada en el cuerpo de la función y luego devuelve como valor del parámetro, una función arrow que hace referencia a ese nombre. ¿Qué sucede si el código en el cuerpo de la función accede al valor del parámetro y llama a la función arrow? ¿A qué variable se accede? ¿Hay algún error que deba ser detectado y reportado? Es un caso al borde como este que me mantuvo despierto en la noche mientras ES6 fue diseñado. </p>

<p className="p">For example, consider a function that has a parameter default value initialization expression that uses the eval function to first declare a local variable that has the same name as a local variable declared in the function body and then returns, as the parameter value, an arrow function that references that name. What happens if code in the function body accesses the parameter value and calls the arrow function?  Which variable is accessed? Is there an error that should be detected and reported? It’s edge cases like this that kept me up at night while ES6 was being designed.</p>

<p className="it"> Un buen diseño de lenguaje debe considerar al menos tales casos de borde. La especificación de un lenguaje masivamente popular que tendrá implementaciones múltiples debe señalar lo que sucede para todos los casos de borde. De lo contrario, la implementación diferente del lenguaje manejará casos de borde de forma diferente y los programas no funcionarán igual en todas partes. </p>

<p className="p">A good language design must at least consider such edge cases.  The specification of a massively popular language that will have multiple implementations must pin down what happens for all the edge cases. Otherwise, different implementation of the language will handle edge cases differently and programs won’t work the same everywhere.</p>

<p className="it"> Si realmente queres entender ES6, tenes que entender cómo funciona cada característica, incluso cuando estás tratando con situaciones inusuales y casos de borde. Lo que distingue a la Exploración de ES6 de Axel Rauschmayer de otros libros es que realmente se preocupa por el funcionamiento interno de ECMAScript. No sólo describe los casos de uso común que probablemente ya entiendas. Se hunde profundamente en la semántica y, cuando sea necesario, wallows en los casos de borde. Explica por qué las características funcionan de la manera en que funcionan y cómo se utilizan en el código realista. Asimilá el material de este libro y serás un experto en ES6. </p>

<p className="p">If you really want to understand ES6, you have to understand how each feature works, even when you’re dealing with  unusual situations and edge cases.  What sets Axel Rauschmayer’s Exploring ES6 apart from other books is that it really cares about the inner workings of ECMAScript.  It doesn’t just describe the common use cases that you probably already understand. It digs deep into the semantics and, where necessary, wallows in the edge cases.  It explains why features work the way that they work and how they are used in realistic code.  Assimilate the material in this book and you will be an ES6 expert.</p>

<p className="p">Allen Wirfs-Brock<br></br>
ECMAScript 2015 (ES6) Specification Editor</p>

<div class="next-chapter">
    Next: <a href="ch_preface.html">Preface</a>
</div>


</div></div>
  </Layout>
)
