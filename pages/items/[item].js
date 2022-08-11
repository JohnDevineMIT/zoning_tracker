import { useRouter } from 'next/router'
import Head from 'next/head'
import {table, minifyRecords} from "/Users/JDevine/Desktop/zoning_tracker_draft/zoning_tracker/pages/api/utils/airtable"
import Item from "/Users/JDevine/Desktop/zoning_tracker_draft/zoning_tracker/components/item";


export default function Item_Page({initialItems, search}) {

const router = useRouter()
const { id } = router.query
console.log(search)

  return ( 
    <>
    <h1> {id} </h1>
   <li>
      {initialItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </li>
  </>
  );
}

export async function getServerSideProps(context) {
    try{

const search = context.params.item
//const search = "Z190-311"

//const items = await table.select({filterByFormula: 'case_no = "Z190-311"'}).firstPage();
const items = await table.select({filterByFormula: `{case_no} = "${search}"`}).firstPage();
//const items = await table.select({filterByFormula: 'case_no = "{search}"'}).firstPage();
  return {
    props: {
    initialItems: minifyRecords(items),
    search: search
    }
  }
} catch(err) {
  console.error(err);
}

}