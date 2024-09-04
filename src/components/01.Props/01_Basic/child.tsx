import { InterestedStates, TouristDetail } from "./parent";
import './child.css';

const ChildComponent = (props: any) => {
    const { nameText, empId, adultStatus, userList, touristData } = props;
    return (
        <>
            <h2>Child Component</h2>
            {nameText && <p>Name : {nameText}</p>}
            {empId && <p>Employee ID : {empId}</p>}
            {adultStatus && <p>Adult Status : {JSON.stringify(adultStatus)}</p>}
            {userList && (
                <p>{userList.name}</p>
            )}
            {
                touristData && (
                    <div className="tourist-container">
                        {
                            touristData.map((tourist: TouristDetail) => (
                                <>
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
                                </>
                            )
                            )
                        }

                    </div>
                )
            }
        </>
    )
}

export default ChildComponent;