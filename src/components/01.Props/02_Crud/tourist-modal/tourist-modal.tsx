import { Modal } from 'antd';

const TouristModal = (props:any) => {
  const { modalHandler, isModalOpen, modalTitle, action } = props;

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