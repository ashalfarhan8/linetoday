import Head from "next/head";
import Groups from "../components/Groups";
import Header from "../components/Header";
import { API_URL, API_ENDPOINT } from "../helper/constant";
// import styles from '../styles/Home.module.css'

export default function Home({ data }) {
  // console.log(data);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Groups categories={data?.categories} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch(`${API_URL}${API_ENDPOINT}`);
    const data = await response.json();
    return {
      props: {
        data: data.result,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      error: true,
    };
  }
}
