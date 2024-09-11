import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';

const TouristModal = (props:any) => {
  const { newTouristDetails, modalHandler, isModalOpen } = props;

  const handleOk = () => {
    modalHandler('OK');
  };

  const handleCancel = () => {
    modalHandler('CANCEL');
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