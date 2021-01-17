import Head from 'next/head'
import styles from '../styles/layout.module.scss'

export default function Layout(props) {
    return (
        <div className={styles.container}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{props.title} | Capivara do Trampo</title>
                <link rel="shortcut icon" href="/images/favicon.png" type="image/png" />

                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.teal-amber.min.css" />
                <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Quicksand:wght@500&display=swap" rel="stylesheet" />
            </Head>
            {props.children}

            <div id="toast" className="mdl-js-snackbar mdl-snackbar">
                <div className="mdl-snackbar__text"></div>
                <button className="mdl-snackbar__action" type="button"></button>
            </div>
        </div>
    )
}