import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/'><a>EC6</a></Link> | <br></br>
        <Link href='/001What'><a>What you need to know about this book</a></Link> | <br></br>
        <Link href='/002Foreword'><a>Foreword</a></Link> | <br></br>
        <Link href='/003Preface'><a>Preface</a></Link> | <br></br>
        <Link href='/CH1'><a>CH1</a></Link> | <br></br>
        <Link href='/CH2'><a>CH2</a></Link> | <br></br>
        <Link href='/CH3'><a>CH3</a></Link> | <br></br>
      </nav>
    </header>

    { children }

    <footer>
      {'I`m here to stay'}
    </footer>
  </div>
)
