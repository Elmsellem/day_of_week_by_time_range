/**
* @param {Object} time_range - Object With Two Props {start_time: seconds, delay_time: seconds}
* @returns {number} value -1 => day not found
*/

function getDayOfWeek(time_range) {
    let day = -1;

    let today = new Date();
    today.setHours(0, 0, 0);

    let cd = new Date();

    let start_date = new Date(today.getTime() + (time_range.start_time * 1000));
    let end_date = new Date(start_date.getTime() + (time_range.delay_time * 1000));

    if (start_date.getTime() / 1000 > cd.getTime() / 1000) {
        start_date.setDate(start_date.getDate() - 1);
        end_date.setDate(end_date.getDate() - 1);
    }

    let t1 = Math.round(cd.getTime() / 1000),
        t2 = Math.round(start_date.getTime() / 1000),
        t3 = Math.round(end_date.getTime() / 1000);

    if (t1 >= t2 && t1 <= t3) {
        day = start_date.getDay();
    }

    return day;
}