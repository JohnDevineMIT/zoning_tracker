import {table, getMinifiedRecord, minifyRecords} from '/utils/airtable.js';

export default async (req, res) => {
    try{
    const records = await table.select({maxRecords: 1}).firstPage();
    const minifiedRecords = minifyRecords(records);
    res.statusCode = 200;
    res.json({minifiedRecords});
    } catch(err){
    res.statusCode = 500;    
    res.json("Something went wrong");
    }

};