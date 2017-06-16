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


<h2 id="ch_preface">Preface <a class="header-anchor" href="#ch_preface" aria-hidden="true">#</a></h2>

<p className="it">Estás leyendo un libro sobre ECMAScript 6 (ES6), una nueva versión de JavaScript. Es muy bueno que por fin podemos usar esa versión, que tenía un pasado largo y lleno de acontecimientos: Se concibió por primera vez como ECMAScript 4, un sucesor de ECMAScript 3 (cuya liberación fue en diciembre de 1999). En julio de 2008, los planes cambiaron y las próximas versiones de JavaScript debían ser primero una pequeña versión incremental (que se convirtió en ES5) y luego una liberación más grande y potente. Este último tenía el nombre en clave Armonía y parte de ella se convirtió en ES6.</p>

<p className="p">You are reading a book about ECMAScript 6 (ES6), a new version of JavaScript. It’s great that we can finally use that version, which had a long and eventful past: It was first conceived as ECMAScript 4, a successor to ECMAScript 3 (whose release was in December 1999). In July 2008, plans changed and the next versions of JavaScript were to be first a small incremental release (which became ES5) and then a larger, more powerful release. The latter had the code name Harmony and part of it became ES6.</p>

<p className="it">ECMAScript 5 se estandarizó en diciembre de 2009. La primera vez que oí y <a href="http://www.2ality.com/2011/01/brendan-eichs-dream-for-next-version-of.html">escribió en su blog</a> acerca de ECMAScript 6 de enero de 2011, cuando todavía se llamaba <em>Armonía</em> . El plan original era terminar ES6 en 2013, pero las cosas se tomó más tiempo y se estandarizó en junio de 2015. (Una descripción más detallada de la historia de ES6 se da en <a href="ch_about-es6.html#sec_ecmascript-history">el siguiente capítulo</a> .)</p>

<p className="p">ECMAScript 5 was standardized in December 2009. I first heard and <a href="http://www.2ality.com/2011/01/brendan-eichs-dream-for-next-version-of.html">blogged</a> about ECMAScript 6 in January 2011, when it was still called <em>Harmony</em>. The original plan was to finish ES6 in 2013, but things took longer and it was standardized in June 2015. (A more detailed account of ES6’s history is given in <a href="ch_about-es6.html#sec_ecmascript-history">the next chapter</a>.)</p>

<p className="it">Con unas pocas excepciones, estoy feliz de cómo ECMAScript 6 resultó. Este libro describe mi experiencia con mi investigación, y de, sus características. De manera similar a ES6, que tomó mucho tiempo para terminar - de una manera, empecé a escribir que a principios de 2011. Al igual que mi anterior libro “ <a href="http://speakingjs.com/">Hablando JavaScript</a> ”, escribí la mayor parte de ella como una serie de entradas de blog. Me gusta la discusión y retroalimentación que permite este proceso abierto, por lo que este libro está disponible gratuitamente en Internet.</p>

<p className="p">With a few minor exceptions, I am happy how ECMAScript 6 turned out. This book describes my experiences with, and my research of, its features. Similarly to ES6, it took a long time to finish – in a way, I started writing it in early 2011. Like my previous book “<a href="http://speakingjs.com/">Speaking JavaScript</a>”, I wrote most of it as a series of blog posts. I like the discussion and feedback that this open process enables, which is why this book is available for free online.</p>

<p className="it">Este libro se puede leer en línea de forma gratuita. Si le resulta útil, por favor apoyarlo por <a href="https://leanpub.com/exploring-es6/">la compra de una copia</a> . Usted obtendrá libre de DRM archivos PDF, EPUB, MOBI.</p>

<p className="p">This book can be read online for free. If you find it useful, please support it by <a href="https://leanpub.com/exploring-es6/">buying a copy</a>. You’ll get DRM-free PDF, EPUB, MOBI files.</p>

<p className="it">Espero que la lectura del libro transmite algo de la diversión que tenía investigar y jugar con ES6.</p>

<p className="p">I hope that reading the book conveys some of the fun I had investigating and playing with ES6.</p>



<p className="p">Axel Rauschmayer</p>






<div class="next-chapter">
    Next: <a href="ch_acknowledgements.html">Acknowledgements</a>
</div>


</div>
</div> 
 
   
  
  </Layout>
  )