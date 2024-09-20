import { useContext, useEffect } from 'react';
import { notification } from 'antd';
import { TouristContext } from '../touristContext';

const TouristAlert = () => {
    const [api, contextHolder] = notification.useNotification();
    const { alertData } = useContext<any>(TouristContext);

    useEffect(()=>{
        if (alertData?.alertOpen) {
            openNotificationWithIcon(alertData.title)
        }
    },[alertData])


    const openNotificationWithIcon = (alertTitle: string) => {
        api.success({
            message: alertTitle,
            placement: 'top'
        });
    };

    return (
        <>
            {contextHolder}
        </>
    );
};

export default TouristAlert;