import React, { Component, useEffect, useState } from 'react';

function ECSChecker() {
    //state
    const fdc3 = useInstance < DesktopAgent > ('DesktopAgent')
    const [channel, setChannel] = useState < Channel | null > (null)
    const [eligibilityRequest, setEligibilityRequest] = useState < EligibilityRequest | null > (null)
    const [schedules, setSchedules]= useState<isEligibleResult[]>(()=>{
        const value =window.localStorage.getItem('json file here')
        return value !== null ? JSON.parse(value) : []
    })

    //get the app channel
    //const channel = await fdc3.getOrCreateChannel("eligibleCollateralChannel")
    useEffect(() => {
        fdc3.getOrCreateChannel('eligibilityResults').then(channel => {
            setChannel(channel)
        })
    }, [fdc3])

    }

    //intent listener
    useEffect(()=>{
        const listener = fdc3.addIntentListener("ExecuteEligibilityCheck")
    })


//fdc3.addIntentListener("ExecuteEligibilityCheck", EligibilityRequest => {

    //check eligibility
    const IsEligibleResult = {
        type: 'IsEligibleResult',
        id: {
            isEligibleResultId: EligibilityRequest.id.isEligibleResultId,
            scheduleInstanceId: "s1"
        },
        EligibilityRequest,
        status: "Eligible",//hard-coded for now
        timestamp: new Date().toLocaleString(),
    }
    channel.broadcast(IsEligibleResult)
})