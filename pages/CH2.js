import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='CH2'>
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


<h2 id="ch_faq">
<span class="section-number">2. </span>FAQ: ECMAScript 6 <a class="header-anchor" href="#ch_faq" aria-hidden="true">#</a></h2>

<p>This chapter answers a few frequently asked questions about ECMAScript 6.</p>



<ul>
  <li>2.1. <a href="ch_faq.html#sec_using-es6-today">How can I use ES6 today?</a>
</li>
  <li>2.2. <a href="ch_faq.html#sec_es6-vs-es2015">Isn’t ECMAScript 6 now called ECMAScript 2015?</a>
</li>
  <li>2.3. <a href="ch_faq.html#sec_from-es5-to-es6">How do I migrate my ECMAScript 5 code to ECMAScript 6?</a>
</li>
  <li>2.4. <a href="ch_faq.html#sec_why-learn-es5">Does it still make sense to learn ECMAScript 5?</a>
</li>
  <li>2.5. <a href="ch_faq.html#sec_is-es6-bloated">Is ES6 bloated?</a>
</li>
  <li>2.6. <a href="ch_faq.html#sec_is-es6-spec-very-big">Isn’t the ES6 specification very big?</a>
</li>
  <li>2.7. <a href="ch_faq.html#sec_array-comprehension">Does ES6 have array comprehensions?</a>
</li>
  <li>2.8. <a href="ch_faq.html#sec_es6-static-typing">Is ES6 statically typed?</a>
</li>
</ul>


<h3 id="sec_using-es6-today">
<span class="section-number">2.1 </span>How can I use ES6 today? <a class="header-anchor" href="#sec_using-es6-today" aria-hidden="true">#</a></h3>

<p>Most of ES6 is already supported in current engines, consult <a href="http://kangax.github.io/compat-table/es6/">Kangax’ ES6 compatibility table</a> to find out what is supported where.</p>

<p>For other options (e.g. interactive ES6 command lines and transpiling ES6 to ES5 via Babel), consult Chap. “<a href="https://leanpub.com/setting-up-es6/read#ch_deploying-es6">Deploying ECMAScript 6</a>” in “Setting up ES6”.</p>


<h3 id="sec_es6-vs-es2015">
<span class="section-number">2.2 </span>Isn’t ECMAScript 6 now called ECMAScript 2015? <a class="header-anchor" href="#sec_es6-vs-es2015" aria-hidden="true">#</a></h3>

<p>Yes and no. The official name is ECMAScript 2015, but ES6 is the name that everyone knows and uses. That’s why I decided to use the latter for this book.</p>

<p>After ES6, ECMAScript editions are created via <a href="https://tc39.github.io/process-document/">a new process</a> and a yearly release cycle. That seems like a good opportunity to switch to the new naming scheme. Therefore, I’ll use the name “ECMAScript 2016” for the edition after ES6.</p>


<h3 id="sec_from-es5-to-es6">
<span class="section-number">2.3 </span>How do I migrate my ECMAScript 5 code to ECMAScript 6? <a class="header-anchor" href="#sec_from-es5-to-es6" aria-hidden="true">#</a></h3>

<p>There is nothing to do: ECMAScript 6 is a superset of ECMAScript 5. Therefore, all of your ES5 code is automatically ES6 code. That helps tremendously with incrementally adopting this new version. How exactly ES6 stays completely backward-compatible is explained in <a href="ch_one-javascript.html#ch_one-javascript">the chapter on “One JavaScript”</a>.</p>


<h3 id="sec_why-learn-es5">
<span class="section-number">2.4 </span>Does it still make sense to learn ECMAScript 5? <a class="header-anchor" href="#sec_why-learn-es5" aria-hidden="true">#</a></h3>

<p>ES6 is increasingly well supported everywhere. Does that mean that you shouldn’t learn ECMAScript 5, anymore? It doesn’t, for several reasons:</p>

<ul>
  <li>ECMAScript 6 is a superset of ECMAScript 5 – new JavaScript versions must never break existing code. Thus, nothing you learn about ECMAScript 5 is learned in vain.</li>
  <li>There are several ECMAScript 6 features that kind of replace ECMAScript 5 features, but still use them as their foundations. It is important to understand those foundations. Two examples: classes are internally translated to constructors and methods are still functions (as they have always been).</li>
  <li>As long as ECMAScript 6 is compiled to ECMAScript 5, it is useful to understand the output of the compilation process. And you’ll have to compile to ES5 for a while (probably years), until you can rely on ES6 being available in all relevant browsers.</li>
  <li>It’s important to be able to understand legacy code.</li>
</ul>


<h3 id="sec_is-es6-bloated">
<span class="section-number">2.5 </span>Is ES6 bloated? <a class="header-anchor" href="#sec_is-es6-bloated" aria-hidden="true">#</a></h3>

<p>One occasionally comes across accusations of ES6 being bloated and introducing too much useless <em>syntactic sugar</em> (more convenient syntax for something that already exists).</p>

<p>However, in many ways, JavaScript is just now catching up with languages such as Python and Ruby. Both still have more features and come with a much richer standard library.</p>

<p>If someone complains about ES6 being too big, I suggest that they try it out for a while. Nobody forces you to use any of the new features. You can start small (consult Chap. “<a href="ch_core-features.html#ch_core-features">Core ES6 features</a>” for suggestions) and then use more new features, as you grow more comfortable with ES6. So far, the feedback I get from people who have actually programmed with ES6 (as opposed to read about it) is overwhelmingly positive.</p>

<p>Furthermore, things that superficially look like syntactic sugar (such as classes and modules) bring much-needed standardization to the language and serve as foundations for future features.</p>

<p>Lastly, several features were not created for normal programmers, but for library authors (e.g. generators, iterators, proxies). “Normal programmers” only need to know them superficially if at all.</p>


<h3 id="sec_is-es6-spec-very-big">
<span class="section-number">2.6 </span>Isn’t the ES6 specification very big? <a class="header-anchor" href="#sec_is-es6-spec-very-big" aria-hidden="true">#</a></h3>

<p>The ECMAScript specification has indeed grown tremendously: The ECMAScript 5.1 PDF had 245 pages, the ES6 PDF has 593 pages. But, for comparison, the Java 8 language specification has 724 pages (excluding an index). Furthermore, the ES6 specification contains details that many other language specifications omit as implementation-defined. It also specifies how its standard library works<sup id="fnref-faq_1"><a href="leanpub-endnotes.html#fn-faq_1" rel="footnote">2</a></sup>.</p>


<h3 id="sec_array-comprehension">
<span class="section-number">2.7 </span>Does ES6 have array comprehensions? <a class="header-anchor" href="#sec_array-comprehension" aria-hidden="true">#</a></h3>

<p>Originally, ES6 was to have Array and generator comprehensions (similarly to Haskell and Python). But they were not added, because TC39 wanted to explore two avenues:</p>

<ul>
  <li>It may be possible to create comprehensions that work for arbitrary datatypes (think Microsoft’s LINQ).</li>
  <li>It may also be possible that methods for iterators are a better way to achieve what comprehensions do.</li>
</ul>


<h3 id="sec_es6-static-typing">
<span class="section-number">2.8 </span>Is ES6 statically typed? <a class="header-anchor" href="#sec_es6-static-typing" aria-hidden="true">#</a></h3>

<p>Static typing is not part of ES6. However, the following two technologies add static typing to JavaScript. Similar features may eventually be standardized.</p>

<ul>
  <li>
<strong>Microsoft TypeScript:</strong> is basically ES6 plus optional type annotations. At the moment, it is compiled to ES5 and throws away the type information while doing so. Optionally, it can also make that information available at runtime, for type introspection and for runtime type checks.</li>
  <li>
<strong>Facebook Flow:</strong> is a type checker for ECMAScript 6 that is based on flow analysis. As such, it only adds optional type annotations to the language and infers and checks types. It does not help with compiling ES6 to ES5.</li>
</ul>

<p>Two benefits of static typing are:</p>

<ul>
  <li>It allows you to detect a certain category of errors earlier, because the code is analyzed statically (during development, without running code). As such, static typing is complementary to testing and catches different errors.</li>
  <li>It helps IDEs with auto-completion.</li>
</ul>

<p>Both TypeScript and Flow are using the same notation. Type annotations are optional, which makes this approach relatively lightweight. Even without annotations, types can often be inferred. Therefore, this kind of type checking is even useful for completely unannotated code, as a consistency check.</p>






<div class="next-chapter">
    Next: <a href="ch_one-javascript.html">3. One JavaScript: avoiding versioning in ECMAScript 6</a>
</div>


</div>


</div> 
   
  
  </Layout>
  )