import axios from 'axios';
import swal from 'sweetalert';
const URI = 'https://api-okr.herokuapp.com';

export const CONFIGURATION_OF_NOTIFICATIONS = 'CONFIGURATION_OF_NOTIFICATIONS';

export const configurationOfNotifications = (data) => ({
    type: CONFIGURATION_OF_NOTIFICATIONS,
    payload: data,
});

export const postConfiguration = (data) => {
    return async (dispatch) => {
        const { data } = await axios.get(`${URI}/createConfigNotifications`);
        console.log(data)
    };
};