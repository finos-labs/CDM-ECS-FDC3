// react import stuff here
import React, { Component, useEffect, useState } from 'react';

const generateEligibilityRequestId = () => 'R' + Math.floor(Math.random())

function ECSRequestController() {

    //state
    const fdc3 = useInstance < DesktopAgent > ('DesktopAgent')
    const [assetType, setAssetType] = useState("Sovereign Debt")
    const [jurisdiction, setJurisdiction] = useState("EU")
    const [residualMaturity, setResidualMaturity] = useState("5")
    const [haircut, setHaircut] = useState("0.02")
    const [isEligible, setIsEligible] = useState < string | null > (null)
    const [channel, setChannel] = useState < Channel | null > (null)
    const [pendingSchedule, setPendingSchedule] = useState < EligibilityRequest | null > (null)
    const [isEligibleResult, setIsEligibleResult] = useState < IsEligibleResult | null > (null)

    //get our eligibility app channel
    useEffect(() => {
        fdc3.getOrCreateChannel('eligibilityResults').then(channel => {
            setChannel(channel)
        })
    }, [fdc3])
}
// const channel= await fdc3.getOrCreateChannel("eligibleCollateralChannel")


//add our context listener before raising intent
useEffect(() => {
    //channel.addContextListener("isEligibleResult", isEligibleResult => {/* yes or no */})

    if (channel) {
        const listener = channel.addContextListener < IsEligibleResult > ("isEligibleResult", isEligibleResult => {
            setPendingSchedule(null)//no longer pending
            setIsEligibleResult(IsEligibleResult)
        })
        return () => listener.unsubscribe()
    }
}, [channel])


const isEligibleResult = {
    type: "isElibibleResult",
    id: { isEligibleResultId: 'ECS1' },
    instrument: {
        type: 'fdc3.instrument',
        id: { ticker: 'EURUSD' }
    },
    jurisdiction: "EU",
    residualMaturity: 5,
    haircut: 0.02
}

await fdc3.raiseIntent("ExecuteEligibilityCheck", EligibilityRequest)