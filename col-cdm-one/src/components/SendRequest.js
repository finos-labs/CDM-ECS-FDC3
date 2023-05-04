import React, { Component, useEffect, useState } from 'react';
import Footer from './Footer';
import {DesktopAgent} from  '@finos/fdc3'
const generateEligibilityRequestId = () => 'R' + Math.floor(Math.random())

let fdc3 : DesktopAgent;

export default function SendRequest() {   
    fdc3.addContextListener
    // const fdc3 = useInstance < DesktopAgent > ('DesktopAgent')
    //const [channel, setChannel] = useState < Channel | null > (null)
    // const [eligibilityRequest, setEligibilityRequest] = useState < EligibilityRequest | null > (null)
    const [eligibilityRequest, setEligibilityRequest] = useState(null);
    
    // useEffect(() => {
    //     fdc3.getOrCreateChannel('eligibilityResults').then(channel => {
    //         setChannel(channel)
    //     })
    // }, [fdc3])

    return(<AskQuestion/>); 
}



function EligibilityRequest(){

}

function AskQuestion(){
    return(
        <>
        <h1>"Is this eligible?"</h1>
    <Footer/>
    </>
    );
}