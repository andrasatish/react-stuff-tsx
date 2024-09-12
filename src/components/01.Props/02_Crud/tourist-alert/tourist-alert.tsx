import { useEffect } from 'react';
import { notification } from 'antd';
import './tourist-alert.css';

const TouristAlert = (props: any) => {
    const [api, contextHolder] = notification.useNotification();
    const { alertTitle, alertOpen } = props;

    useEffect(() => {
        if (alertOpen) {
            openNotificationWithIcon(alertTitle)
        }
    }, [alertOpen])


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