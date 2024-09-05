import { InterestedStates, TouristDetail, UserDetail } from "./parent";
import './child.css';

export interface ChangeDetails {
    nameData: string;
    adultFlag: boolean;
    userData: UserDetail,
    touristList: TouristDetail
}
const ChildComponent = (props: any) => {
    const { nameText, empId, adultStatus, userList, touristData, dataChanges } = props;

    const handleChange = () => {
        //some functionalty -> end result -> If want to send those end results to the parent then we need to use child-parent props
        const formData = {
            nameData: 'Sudheer',
            adultFlag: false,
            userData: { name: 'Satish', designation: 'Data Analyst', age: 32, location: 'Bangalore' },
            touristList: {
                name: 'Satish', age: 32, location: 'Bangalore',
                address: {
                    street: 'Electronic City',
                    state: 'Karnataka',
                    country: 'INDIA',
                    countryID: '8888'
                },
                interestedStates: [{ state: 'OL' }, { state: 'HM' }, { state: 'LG' }]
            }
        }
        // dataChanges() -> No parameter
        // dataChanges('Click') -> Static Parameters
        dataChanges(formData, 'test_data');  //Dynamic Data
    }

    return (
        <>
            <h2>Child Component</h2>
            {nameText && <p>Name : {nameText}</p>}
            {empId && <p>Employee ID : {empId}</p>}
            {adultStatus && <p>Adult Status : {JSON.stringify(adultStatus)}</p>}
            {userList && (
                <>
                    <p>username : {userList.name}</p>
                    <p>Designation : {userList.designation}</p>
                    <p>Location : {userList.location}</p>
                </>
            )}
            {
                touristData && (
                    <div className="tourist-container">
                        {
                            touristData.map((tourist: TouristDetail) => (
                                <div className="tourist-detail">
                                    <div className="tourist-flex-item">
                                        <span>Name </span>
                                        <span>:</span>
                                        <span>{tourist.name}</span>
                                    </div>
                                    <div className="tourist-flex-item">
                                        <span>Age </span>
                                        <span>:</span>
                                        <span>{tourist.age}</span>
                                    </div>
                                    <div className="tourist-flex-item">
                                        <span>Location </span>
                                        <span>:</span>
                                        <span>{tourist.location}</span>
                                    </div>
                                    <div className="tourist-flex-item">
                                        <span>Address Street</span>
                                        <span>:</span>
                                        <span>{tourist.address.street}</span>
                                    </div>
                                    <div className="tourist-flex-item">
                                        <span>Address State</span>
                                        <span>:</span>
                                        <span>{tourist.address.state}</span>
                                    </div>
                                    <div className="tourist-flex-item">
                                        <span>Address Country</span>
                                        <span>:</span>
                                        <span>{tourist.address.country}</span>
                                    </div>
                                    {
                                        tourist.interestedStates.map((eachState: InterestedStates) => (
                                            <div className="tourist-flex-item">
                                                <span>Interested State</span>
                                                <span>:</span>
                                                <span>{eachState.state}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                            )
                        }

                    </div>
                )
            }


            <div>
                <button onClick={handleChange}>Change Data</button>
            </div>
        </>
    )
}

export default ChildComponent;