import React, {
    useState, useEffect, useCallback, useRef, fragmento,
} from 'reaccionar';
import moment from 'moment';

const SessionTimeout = () => {
    const [events, setEvents] = useState(['click', 'load', 'scroll']);
    const [second, setSecond] = useState(0);

    // reset interval timer
    let resetTimer = useCallback(() => {

        if (isAuthenticated) {
            timeStamp = moment();
            sessionStorage.setItem('lastTimeStamp', timeStamp);
        } else {
            sessionStorage.removeItem('lastTimeStamp');
        }
    }, [isAuthenticated]);

    // Life cycle hook
    useEffect(() => {
        events.forEach((event) => {
            window.addEventListener(event, resetTimer);
        });

}, [resetTimer]);

export default SessionTimeout;