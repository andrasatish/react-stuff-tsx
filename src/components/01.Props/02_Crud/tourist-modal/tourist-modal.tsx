import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';

const TouristModal = (props:any) => {
  const { newTouristDetails } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(()=>{
    newTouristDetails && setIsModalOpen(true);
  },[newTouristDetails]);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal 
        title={`Are you sure want to submit the details of ${newTouristDetails?.name ? newTouristDetails?.name : ''}?`} 
        open={isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}>
      </Modal>
    </>
  );
};

export default TouristModal;