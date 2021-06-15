import React, { useState } from "react";
import { Modal } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function ModalBell() {

    const [modal, setModal] = useState(false);
    const open_close_Modal = () => {
        setModal(!modal);
    }

    const body = (
        <div className="Modal" id="Modal">
            <div align="center">
                <header>
                    <strong>Notificaciones</strong>
                    <button onClick={() => open_close_Modal()}>X</button>
                </header>
            </div>
        </div>
    );

    return (
        <div className="App" id="App">
            <NotificationsIcon style={{ color: 'white', cursor: "pointer" }} fontSize="large" onClick={() => open_close_Modal()} ><FiberManualRecordIcon/></NotificationsIcon>
            <Modal open={modal} onClose={open_close_Modal}>
                {body}
            </Modal>
        </div>
    )
}

export default ModalBell;
