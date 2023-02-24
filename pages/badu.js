import Head from 'next/head';
import styles from '../styles/BaiDu.module.css';
import axios from 'axios';

export default function BaiDu({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{data.title}</title>
      </Head>

      

        <div>
            <h2>description : {data.desc}</h2>
        </div>
    </div>
  )
}

export async function getStaticProps() {
    try {
        const { data } = await axios.post(`http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=%E9%93%B6%E9%AD%82&bk_length=600`, {});
      //  console.log('data : ' + data.title);
      //  console.log('desc : ' + data.desc); 
        return { 
            props: {   
                data
              }
         };
      } catch (error) {
        console.log({ error })
        return { error: 'Something went wrong...' }
      }
  }
