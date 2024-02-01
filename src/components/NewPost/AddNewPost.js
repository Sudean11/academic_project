import React, { useEffect, useRef, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchUsers, saveUser } from "../../services/userService/userService";
import { fetchPosts } from "../../services/postService/postService";

const AddNewPost = ({ onAddPost }) => {
  useEffect(() => {
    fetchUsersFunction();
  }, []);

  const formValues = useRef();

  const fetchUsersFunction = async () => {
    let users = await fetchUsers();
    setDropdownOptions(
      users.map((user) => ({ id: user.id, firstName: user.firstname }))
    );
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });

  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

 

  const handleSubmit = async (e) => {
    console.log(formValues.current);
    const a = formValues.current;
    const data = {
      title: a['title'].value,
      author: a['author'].value,
      content: a['content'].value
  };
  console.log(data);
    e.preventDefault();

    await saveUser({
      ...data,
      user_id: selectedOption,
    });

    fetchPosts();    

    setFormData({
      title: "",
      content: "",
      author: "",
    });

    // Close the modal after submission
    setModalOpen(false);
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const modalPopup = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Button
        variant="primary"
        onClick={modalPopup}>
        Create New Post
      </Button>

      <Modal
        show={isModalOpen}
        onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form ref={formValues} onSubmit={handleSubmit}>
            <Form.Group controlId="dropdown">
              <Form.Label>Dropdown</Form.Label>
              <Form.Control
                as="select"
                name="dropdown"
                value={selectedOption.id} // Set the value to the user's ID
                onChange={handleDropdownChange}
                required>
                <option
                  value=""
                  disabled>
                  Select an option
                </option>
                {dropdownOptions.map((user) => (
                  <option
                    key={user.id}
                    value={user.id}>
                    {user.firstName}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                label= "title"
                name="title"
                required
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                name="content"
                
                required
              />
            </Form.Group>
            <Form.Group controlId="author">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                
                required
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit">
              Create Post
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddNewPost;
