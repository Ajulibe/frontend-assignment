import React from "react";
import {
  Modal,
  ModalTitle,
  ModalImage,
  ModalDetails,
  ModalInfo,
} from "./style";
import closeIcon from "images/close-icon.svg";
import config from "config"; //configuration file mapping env
import moment from "moment";

export const ModalForm = ({ modalData, isVisible, onClick }) => {
  return (
    <Modal style={{ display: isVisible ? "flex" : "none" }} data-testid="modal">
      <div className="content-container">
        <ModalTitle>
          <span>{modalData?.title}</span>
          <img src={closeIcon} alt="close-icon" onClick={onClick} />
        </ModalTitle>
        <ModalDetails>
          <ModalImage>
            {modalData?.poster_path ? (
              <img
                src={`${config.IMAGE_BASE_URL}${modalData?.poster_path}`}
                alt={modalData?.original_title}
              />
            ) : (
              <p className="no-image">NO IMAGE</p>
            )}
          </ModalImage>
          <ModalInfo>
            <div className="header">
              <b>Release date:&nbsp;</b>
              {moment(modalData?.release_date).format("MMMM Do, YYYY")}
            </div>
            <div className="content">
              {modalData?.overview ? (
                modalData?.overview
              ) : (
                <p className="no-image">NO CONTENT</p>
              )}
            </div>
            <div className="footer">
              <b>{modalData?.vote_average}</b> / 10 ({modalData?.vote_count}
              &nbsp;total {modalData?.vote_count < 2 ? "vote" : "votes"})
            </div>
          </ModalInfo>
        </ModalDetails>
      </div>
    </Modal>
  );
};
