import { FC } from 'react';

const USPBox: FC = () => {
  return (
    <section className="container utp-box white">
      <div className="row">
        <div className="col-sm-6 col-md-3">
          <div className="grey-box-icon">
            <div className="icon-box-top grey-box-icon-pos">
              <i className="fa medium circle-white center icon-results"></i>
            </div>
            <h4>High standards</h4>
            <p>Clean, valid, and maintainable code that meets latest WEB standards.</p>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="grey-box-icon">
            <div className="icon-box-top grey-box-icon-pos">
              <i className="fa medium circle-white center icon-responsibility"></i>
            </div>
            <h4>Responsibility</h4>
            <p>Thorough elaboration with the customer of all project details.</p>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="grey-box-icon">
            <div className="icon-box-top grey-box-icon-pos">
              <i className="fa medium circle-white center icon-payment"></i>
            </div>
            <h4>Productivity</h4>
            <p>The workflow is optimized for a fast-paced, multitasking environment.</p>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="grey-box-icon">
            <div className="icon-box-top grey-box-icon-pos">
              <i className="fa medium circle-white center icon-support"></i>
            </div>
            <h4>Support</h4>
            <p>Small-scale assistance is offered to customer even beyond project completion.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPBox;
