import axios from 'axios';
import swal from 'sweetalert';
const URI = 'https://api-okr.herokuapp.com';

export const CONFIGURATIONOFNOTIFICATIONS = 'CONFIGURATION_OF_NOTIFICATIONS';

export const configurationOfNotifications = (data) => ({
    type: CONFIGURATIONOFNOTIFICATIONS,
    payload: data,
  });