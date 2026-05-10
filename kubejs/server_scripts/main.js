ServerEvents.recipes((event) => {
    const noCraft = [
        'ars_nouveau:stable_warp_scroll',
        'ars_nouveau:relay_warp',
        'ars_nouveau:ritual_warping',
        'advanced_ae:flight_card',
        'advanced_ae:flight_drift_card'
    ]

    for (const id of noCraft) {
        event.remove({ output: id })
    }

    event.remove({ id: 'ars_nouveau:tomes/warp_impact_tome' })
})
