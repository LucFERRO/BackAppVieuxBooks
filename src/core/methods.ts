import dayjs from "dayjs";
import toObject from 'dayjs/plugin/toObject'
import relativeTime from 'dayjs/plugin/relativeTime'
import isBetween from 'dayjs/plugin/isBetween'
dayjs.extend(toObject)
dayjs.extend(relativeTime)
dayjs.extend(isBetween)

export const concatRequiredMessage = (data: string): string => {
    return `${data} is required.`
}

export const mergeArrayWithoutDupes = (array1: Object[], array2: Object[]) => {
    const uniqueArray = array1.concat(array2).filter((value: any, index: any) => {
        const _value = JSON.stringify(value);
        return index === array1.concat(array2).findIndex(obj => {
            return JSON.stringify(obj) === _value;
        });
    });
    return uniqueArray
}

// export const isTheSlotAvailable = (date : string, slot : string, doctorAppointementList : any) => {
//     let slot_time = slot.split('-')
//     let formattedDate = dayjs(date).hour(parseInt(slot_time[0])).minute(parseInt(slot_time[1]))

//     let slot_availability = !formattedDate.isBetween(dayjs(appointement.appointement_date), dayjs(appointement.appointement_date).add(appointement.appointement_duration_minutes, 'minute'), 'minute', '[)')
//     if (!slot_availability) console.log('FOUND A MATCH!', slot_time, appointement.appointement_date)
// }