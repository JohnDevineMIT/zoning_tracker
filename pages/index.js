import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {table, minifyRecords} from "./api/utils/airtable.js"
import Item from "/components/item.js";

export default function Home({initialItems}) {
  console.log(initialItems);
  return ( 
   <li>
      {initialItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </li>
  
  );
}

export async function getServerSideProps(context) {
  try{
  const items = await table.select({}).firstPage();
  return {
    props: {
    initialItems: minifyRecords(items)
    }
  }
} catch(err) {
  console.error(err);
}

}