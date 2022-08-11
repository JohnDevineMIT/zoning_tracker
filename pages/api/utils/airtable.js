var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.AIRTABLE_API_KEY,
});

var base = Airtable.base('appYInGwdTUKS9JPP');
var table = base(process.env.AIRTABLE_TABLE_NAME)

const getMinifiedRecord = (record) => {
    return {
        id: record.id,
        fields: record.fields
    }
}

const minifyRecords = (records) => {
    return records.map(record => getMinifiedRecord(record));
}


const findRecord = (search) => {

    var result = table.select({filterByFormula: 'case_no = {search}', maxRecords: 1})
    var mini_result = getMinifiedRecord(result);

    return{
        mini_result
}
}



export default async (req, res) => {

    const records = await table.select({maxRecords: 1}).firstPage();
    const minifiedRecords = minifyRecords(records);
    res.statusCode = 200;
    res.json({minifiedRecords});

};

export{Airtable, table, getMinifiedRecord, minifyRecords, findRecord};