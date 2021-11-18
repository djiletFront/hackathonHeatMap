export const filterOrders = (orders, formData) => {
    let totalOrder = 0
    let totalLatecomers = 0
    let totalTime = 0
    let proceeds = 0

    // for ranking
    let oldOrders = 0
    let rankingSum = 0

    const filteredOrders = orders.filter(order => {
            if (
                checkLocation(order.locationId, Number(formData.cityId))
                && checkStatus(order.status, formData.status)
                && checkLateness(order.lated, formData.latecomer)
                && checkSum(order.sum, formData.sum)
                && checkPromoCode(order.promo, formData.promoCode)
                && checkDate(order.date, formData.date)
            ) {
                totalOrder++
                order.lated && totalLatecomers++
                totalTime += order.deliveryTime
                if (order.status === null) {
                    proceeds += order.sum
                    oldOrders++
                    rankingSum += order.ranking
                }
                return true
            } else {
                return false
            }
        }
    )
    return {
        totalOrder,
        totalLatecomers,
        averageTime : totalOrder !== 0 ? Math.round(totalTime / totalOrder) : 0,
        proceeds: proceeds !== 0 ? proceeds : 0,
        ranking: oldOrders !== 0 ? Math.round((rankingSum/oldOrders)* 10) / 10 : 0,
        filteredOrders
    }
}


const checkLocation = (orderLocationId, formLocationId) => orderLocationId === formLocationId

const checkStatus = (orderStatus, formStatus) => {
    if (formStatus === "allTypes") {
        return true
    }
    return orderStatus === Number(formStatus)
}

const checkLateness = (orderLate, formLate) => orderLate === !!formLate

const checkSum = (orderSum, formSum) => {
    if (formSum === "allSum") {
        return true
    }
    return orderSum > Number(formSum)
}

const checkPromoCode = (orderCode, formCode) => {
    if (formCode === "") {
        return true
    }

    return orderCode === formCode
}

const checkDate = (orderDate, {start: formDateStart, end: formDateEnd}) => {
    const order = new Date(orderDate)
    const formStart = new Date(formDateStart)
    const formEnd = new Date(formDateEnd)
    return order >= formStart && order <= formEnd
}
