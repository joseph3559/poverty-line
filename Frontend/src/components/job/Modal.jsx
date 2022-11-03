import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => setOpenModal(false)} > X </button>
        </div>
        <div className="title">
          <div className="jobtitle">
          <h1>Data Val</h1>
          </div>
          <div className="companyname">
            <h2>Cahayo TechLinks</h2>
          </div>
        </div>
        <div className="body" >
          {/* <p>This part will display the Job description and qualifications</p> */}
          <p class="overflow-y-auto h-100 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas elit quis tellus molestie sollicitudin. Vivamus fermentum diam vitae urna malesuada interdum ut sit amet arcu. Phasellus sed neque at nibh accumsan viverra. Cras ut velit gravida, luctus elit tempus, hendrerit risus. Proin fermentum libero nec ex feugiat viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce placerat orci ut metus imperdiet, non tempus neque egestas. Ut sodales tincidunt tellus nec tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean efficitur efficitur risus commodo viverra. Curabitur aliquet dolor eget dolor luctus interdum. Duis euismod a sem non elementum. Vivamus massa arcu, sodales sit amet est varius, vulputate suscipit tellus.

</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Apply</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;