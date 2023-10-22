
import React, { useContext, useRef, useState } from 'react'; 
import { Steps } from 'primereact/steps';
import { Toast } from 'reactstrap';
import { UserContext } from '../../../context/UserContext';

export const FooterReportForm = ({setInformation}) => {


     
    const [activeIndex, setActiveIndex] = useState(0);
    const toast = useRef(null);
    const items = [
        {
            label: 'Information',
            command: (event) => {
                setInformation(true)
                } 
        },
        {
            label: 'Evidences',
           command: (event) => {
            setInformation(false)
            } 
        },
       
    ];

    return (
        <div className="card">
            <Toast ref={toast}></Toast>
            <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
        </div>
    )
}


