import { Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React E-commerce</title>
        <meta name="description" content="The ecommerce website by next and sanity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography>React E-commerce</Typography>
    </div>
  )
}
