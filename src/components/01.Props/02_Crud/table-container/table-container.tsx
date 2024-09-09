import { useEffect } from "react";
import { Button, Space } from 'antd';

const TableContainer = (props:any) => {
    const { touristList, editedTourst } = props;

    useEffect(()=>{
        console.log('TABLE CONTAINER', touristList)
    },[touristList])

    const onEdit = (touristData:any) => {
        console.log('ON EDITE', touristData);
        editedTourst(touristData);
    }

    const onDelete = (touristData:any) => {
        console.log('ON DELETE', touristData);
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
                                    touristList.map((tourist:any) => {
                                        return (
                                            <tr key={tourist.id}>
                                                <td>{tourist.name}</td>
                                                <td>{tourist.location}</td>
                                                <td>{tourist.age}</td>
                                                <td>{tourist.state}</td>
                                                <td>{tourist.gender}</td>
                                                <td>
                                                    {
                                                        tourist.placeType.map((place:any) => {
                                                            return (
                                                                <span className={'pills'}>{place}</span>
                                                            )
                                                        })
                                                    }
                                                </td>
                                                <td>
                                                    <Space size={"small"}>
                                                        <Button type="primary" size={"small"} onClick={() => { onEdit(tourist) }}>Edit</Button>
                                                        <Button type="primary"  className='danger-button-bg' size={"small"} onClick={() => { onDelete(tourist) }}>Delete</Button>
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

export default TableContainer;