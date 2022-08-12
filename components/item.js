import React from 'react'
import Head from "next/head";
import Image from "next/image";

export default function Item({item}) {
    return(
        <>
        <Head><title>{item.fields['case_no']}</title></Head>


        <div className="container font-Raleway mt-10">

            <div className = "bg-blue-700 max-w-xl py-8 mx-auto">
                <h1 className="text-3xl font-bold text-white px-5">{item.fields['Address']}</h1>
            </div>
            
            <div className = "border-2 border-blue-700 p-5 max-w-xl mx-auto mb-20">
                <div className="mx-auto mb-5">
                <Image src="/map_placeholder.png" alt="map" layout="responsive" width={538} height={311}/>
                </div>
                <table className="table-auto border-spacing-5">
                        <tbody>
                            <tr className="border-solid border-b border-gray-300">
                                <td className="whitespace-nowrap">Case number:</td>
                                <td>{item.fields['case_no']}</td>
                            </tr>
                            <tr className="border-solid border-b border-gray-300">
                                <td>Applicant:</td>
                                <td>{item.fields['Applicant']}</td>
                            </tr>
                            <tr className="border-solid border-b border-gray-300">
                                <td>Description:</td>
                                <td>{item.fields['Brief description']}</td>
                            </tr>
                            <tr className="border-solid border-b border-gray-300">
                                <td>CPC/BOA Date:</td>
                                <td>{item.fields['CPC/BOA Date']}</td>
                            </tr>
                            <tr className="border-solid border-b border-gray-300">
                                <td>Approved?</td>
                                <td>{item.fields['Approved?']}</td>
                            </tr>
                            <tr className="border-solid border-b border-gray-300">
                                <td>Owner:</td>
                                <td>{item.fields['Owner']}</td>
                            </tr>
                            <tr className="border-solid border-b border-gray-300">
                                <td>Representative</td>
                                <td>{item.fields['Representative']}</td>
                            </tr>
                            <tr className="border-solid border-b border-gray-300">
                                <td>Property Size:</td>
                                <td>{item.fields['Property size']}</td>
                            </tr>
                            <tr className="border-solid border-b border-gray-300">
                                <td>Current Zoning:</td>
                                <td>{item.fields['Current zoning']}</td>
                            </tr>
                            <tr className="border-solid border-b border-gray-300">
                                <td>Proposed zoning:</td>
                                <td>{item.fields['Proposed zoning']}</td>
                            </tr>
                            <tr className="border-solid border-b border-gray-300">
                                <td>Assigned Planner:</td>
                                <td>{item.fields['Assigned planner']}</td>
                            </tr>
                        </tbody>
                    </table>
            </div>

        </div>
        </>
    )
}