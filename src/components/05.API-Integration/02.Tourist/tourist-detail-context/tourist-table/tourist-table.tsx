import { useContext, useEffect } from "react";
import { Button, Space } from 'antd';
import { TouristContext } from "../touristContext";

const TouristTable = () => {

    const { touristList, setEditedObj, setTouristList, modalActions, modalConfig, setModalConfig, setModalActions, setAlertData } = useContext<any>(TouristContext);

    const onEdit = (touristData: any) => {
        setEditedObj(touristData);
    }

    const onDelete = (touristData: any) => {
        setModalConfig({
            modalTitle: `Do you want to delete the tourist details of ${touristData?.name}?`,
            isModalOpen: true,
            action: 'DELETE',
            data: touristData
        })
    }

    useEffect(()=>{
        getTouristData();
    },[]);

    const getTouristData = () => {
        fetch('http://localhost:3000/touristList').then((response:any)=>{
            if(response.ok){
                return response.json();
            }else{
                throw new Error(response.statusText);
            }
        }).then((data:any)=>{
            setTouristList(data);
        }).catch((err:any)=>{
            setAlertData({
                alertOpen: true,
                title: err.message
            });
        })
    }

    useEffect(() => {
        if (modalActions && modalActions === 'OK') {
            switch (modalConfig?.action) {
                case 'SUBMIT':
                    touristSaveDetails();
                    // const updateDataWithId = { ...modalConfig.data, id: Math.floor(Math.random() * 1000) };
                    // const newData = [updateDataWithId, ...touristList];
                    // setTouristList(newData);
                    // setAlertData({
                    //     alertOpen : true,
                    //     title: `${modalConfig.data.name} details saved successfully!!`
                    // });
                    break;
                case 'UPDATE':
                    console.log('UPDATED DETAILS ', touristList, modalConfig)
                    const updatedTouristData = touristList.map((tourist: any) => {
                        if (tourist.id === modalConfig.data.id) {
                            return modalConfig?.data
                        } else {
                            return tourist;
                        }
                    })
                    setTouristList(updatedTouristData);
                    setAlertData({
                        alertOpen: true,
                        title: `${modalConfig.data.name} details updated successfully!!`
                    });
                    setEditedObj(null);
                    break;
                case 'DELETE':
                    const updatedTourists = touristList.filter((tourist: any) => tourist.id !== modalConfig.data.id);
                    setTouristList(updatedTourists);
                    setAlertData({
                        alertOpen: true,
                        title: `${modalConfig.data.name} details deleted successfully!!`
                    });
                    break;
                default:
                    console.log('Related Actions not performed!!');
            }
            setTimeout(() => {
                setModalConfig();
                setModalActions();
                setAlertData();
            }, 500);
        }
    }, [modalActions, modalConfig])


    const touristSaveDetails = () => {

        const payload = modalConfig.data;
        console.log('PAYLOAD', payload);

        fetch('http://localhost:3000/touristList', {
            method: 'POST',
            body: JSON.stringify(payload)
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        }).then((res) => {
            if (res) {
                setAlertData({
                    alertOpen: true,
                    title: `${modalConfig.data.name} details saved successfully!!`
                });
            }
        })

    }

    return (
        <div className='curd-item-container'>
            <h2 style={{ textAlign: 'center' }}>Tourists</h2>
            <div className='table-wrapper'>
                <table className='table-container'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Age</th>
                            <th>State</th>
                            <th>Gender</th>
                            <th>Place Type to Visit</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            touristList.map((tourist: any) => {
                                return (
                                    <tr key={tourist.id}>
                                        <td>{tourist.name}</td>
                                        <td>{tourist.location}</td>
                                        <td>{tourist.age}</td>
                                        <td>{tourist.state}</td>
                                        <td>{tourist.gender}</td>
                                        <td>
                                            {
                                                tourist.placeType.map((place: any) => {
                                                    return (
                                                        <span className={'pills'}>{place}</span>
                                                    )
                                                })
                                            }
                                        </td>
                                        <td>
                                            <Space size={"small"}>
                                                <Button type="primary" size={"small"} onClick={() => { onEdit(tourist) }}>Edit</Button>
                                                <Button type="primary" className='danger-button-bg' size={"small"} onClick={() => { onDelete(tourist) }}>Delete</Button>
                                            </Space>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TouristTable;