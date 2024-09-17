import { useEffect } from 'react';
import { notification } from 'antd';
import './tourist-alert.css';

const TouristAlert = (props: any) => {
    const [api, contextHolder] = notification.useNotification();
    const { alertData } = props;

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