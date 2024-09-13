import { Modal } from 'antd';

interface TouristProps {
  modalHandler : any;
  modalConfig: any;
}

const TouristModal = (props:TouristProps) => {
  const { modalHandler, modalConfig } = props;
  const { modalTitle, action, isModalOpen } = modalConfig;

  const handleOk = () => {
    modalHandler({
      actionButtonValue : 'OK',
      action: action
    });
    // modalHandler('OK',action);
  };

  const handleCancel = () => {
    modalHandler({
        actionButtonValue : 'CANCEL',
        action: action
    });
  };

  return (
    <>
      <Modal 
        title={modalTitle} 
        open={isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}>
      </Modal>
    </>
  );
};

export default TouristModal;