
import "../modals/Modal.css"
const AlertModal = ({onboardingComplete, closeModal, heading, message}) => {
    return (
        onboardingComplete && (
            <div className="alert-modal alertPOP">
            <div className="alert-modal-overlay" onClick={closeModal}></div>
            <div className="alert-modal-card vivify popInBottom">
              <div className="close-alert-button"></div>
    
              <div className="alert-modal-body">
                <br />
    
                <div
                  className="alert-modal-icon bg-success"
                >
                  <i className="fa fa-check"></i>
                </div>
                <h4 className='text-success'>{heading}</h4>
                <p style={{lineHeight: "30px"}}>
             
                    {message}
             
                </p>
    
                <div className="alert-modal-button mt-3">
                  <button onClick={closeModal} className="btn btn-primary py-3">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      
    );
};

export default AlertModal;