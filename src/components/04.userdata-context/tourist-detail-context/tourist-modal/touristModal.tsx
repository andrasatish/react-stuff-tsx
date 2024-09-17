import { Modal } from 'antd';
import { TouristContext } from '../touristContext';
import { useContext } from 'react';

interface TouristProps {
  modalHandler : any;
  modalConfig: any;
}

const TouristModal = () => {
  const { modalConfig, setModalConfig, setModalActions } = useContext<any>(TouristContext);

  const handleOk = () => {
      console.log('modalConfig :::: ', modalConfig);
      setModalActions('OK');
  };

  const handleCancel = () => {
    setModalConfig({
        modalTitle: null,
        isModalOpen: false
       })
    setModalActions('CANCEL');
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