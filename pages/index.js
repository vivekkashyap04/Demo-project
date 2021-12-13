import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Header from '../component/header';

export default function Home() {
  return (
    <div>
       <Header />
       <h1>welcome to Next.js App</h1>
    </div>
  )
}
