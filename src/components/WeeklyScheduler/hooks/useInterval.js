import { useState, useEffect, useMemo } from 'react';

const syncSecond = date => 1000 - date.getMilliseconds();
const syncMinute = date => (60 - date.getSeconds()) * 1000 + syncSecond(date);
const syncHour = date => (60 - date.getMinutes()) * 60000 + syncMinute(date);
const syncDay = date => (24 - date.getHours()) * 3600000 + syncHour(date);

const units = {
    seconds: {
        time: 1000,
        sync: syncSecond,
    },
    minutes: {
        time: 60000,
        sync: syncMinute,
    },
    hours: {
        time: 3600000,
        sync: syncHour,
    },
    days: {
        time: 86400000,
        sync: syncDay,
    },
};

const defaultSettings = {
    interval: 1,
    unit: 'seconds',
    sync: true,
};

export default function useInterval(settings) {
    const { interval, unit, sync } = { ...defaultSettings, ...settings };
    const time = useMemo(() => (units[unit] ? interval * units[unit].time : interval), [
        interval,
        unit,
    ]);
    const [date, setDate] = useState(new Date());
    const [timer, setTimer] = useState(() => (units[unit] && sync ? units[unit].sync(date) : time));

    useEffect(() => {
        const intervalRef = setInterval(() => {
            if (timer !== time) {
                setTimer(time);
            }
            setDate(new Date());
        }, timer);
        return () => clearInterval(intervalRef);
    }, [time, timer]);
    return date;
}
