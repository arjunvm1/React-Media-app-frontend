import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Row,Col } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCategory, deleteCategory, getAllCategory,getAVideo, updateCategory } from "../services/allAPI";
import VideoCard from "./VideoCard";


function Category() {

  const [allCategories,setAllCategories] = useState([])

  const [categoryName,setCategoryName] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory = async()=>{
    if(categoryName){
      let body = {
        categoryName,allVideos:[]
      }
    //make api call
    const response = await addToCategory(body)
    console.log(response);
    setCategoryName("")
    if(response.status>=200 && response.status<300){
      //hide modal
      handleClose()
      //reset state
      setCategoryName('')
    }
    }else{
      toast.error('Please enter category name')
    }
  }

  const getCategories = async() =>{
    const {data} = await getAllCategory()
    setAllCategories(data)
  }

  console.log(allCategories);

  useEffect(()=>{
    getCategories()
  },[])

  const handleDelete = async(id)=>{
    await deleteCategory(id)
    getCategories()
  }

  const dragOver = (e) =>{
    console.log("Video drag over Category");
    e.preventDefault()
  
  }

  const videoDrop =async (e,categoryId) =>{
    console.log("video drop inside category Id :"+categoryId);
    const videoId = e.dataTransfer.getData("videoId")
    console.log("Video card Id :",videoId);
    //get video details
    const {data} = await getAVideo(videoId)
    console.log(data);

    //get category details

    const selectedCategory = allCategories?.find(item=>item.id ===categoryId)
    selectedCategory.allVideos.push(data)
    console.log("selected",+selectedCategory);

    //make api call
    await updateCategory(categoryId,selectedCategory)
    getCategories()

  }

  return (
    <>
      <div className="d-grid">
        <button
          style={{ width: "50%", marginLeft: "80px" }}
          className="btn btn-info"
          onClick={handleShow}
        >
          Add to Category
        </button>
      </div>

      {
        allCategories?allCategories?.map(item=>(
          <div className="mt-5 mb-5  rounded p-3" droppable onDragOver={(e)=>dragOver(e)} onDrop= {(e)=>videoDrop(e,item?.id)}>
            <div className="d-flex justify-content-between align-items-center ">
                <h6>{item?.categoryName}</h6>
                <button className='btn' style={{border:"none"}} onClick={()=>handleDelete(item?.id)}><i class="fa-solid fa-trash text-danger"></i></button>
            </div>

            <Row>
              {
                item?.allVideos &&
                item?.allVideos.map(card=>(
                  <Col sm={12}>
                    <VideoCard displayData={card} insideCategory={true}/>
                  </Col>
                ))
              }
              </Row>
           



          </div>
        )): <p className="fw-bolder text-danger fs-5">Nothing to display</p>
      }



      

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new category </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Fill the following Fields</p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video name" onChange={(e)=>setCategoryName(e.target.value)}/>
            </Form.Group>



          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      />
    </>
  );
}

export default Category;
