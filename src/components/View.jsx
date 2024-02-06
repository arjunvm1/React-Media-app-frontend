import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Col, Row } from "react-bootstrap";
import { getAllVideo } from "../services/allAPI";

function View(uploadVideoServerResponse) {
  const [allVideos, setAllVideos] = useState([]);

  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)

  const getAllUploadedVideos = async () => {
    const { data } = await getAllVideo();
    setAllVideos(data);
  };

  useEffect(() => {
    getAllUploadedVideos();
    setDeleteVideoStatus(false);
  }, [uploadVideoServerResponse,deleteVideoStatus]);

  console.log(allVideos);

  return (
    <>
      <Row>
        {allVideos.length > 0 ? (
          allVideos.map((video) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <VideoCard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
            </Col>
          ))
        ) : (
          <p className="fw-bolder text-danger fs-5">Nothing to display</p>
        )}
      </Row>
    </>
  );
}

export default View;
