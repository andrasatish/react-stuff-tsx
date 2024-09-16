import { Modal } from 'antd';
import { TouristContext } from '../touristContext';
import { useContext } from 'react';

interface TouristProps {
  modalHandler : any;
  modalConfig: any;
}

const TouristModal = () => {
  const { modalConfig } = useContext<any>(TouristContext);

  const handleOk = () => {
  };

  const handleCancel = () => {
  };

  return (
    <>
      <Modal 
        title={modalConfig?.modalTitle} 
        open={modalConfig?.isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}>
      </Modal>
    </>
  );
};

export default TouristModal;