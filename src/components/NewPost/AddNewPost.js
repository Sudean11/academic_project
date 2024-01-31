import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchUsers, saveUser } from "../../services/userService/userService";
import { fetchPosts } from "../../services/postService/postService";

const AddNewPost = ({ onAddPost }) => {
  useEffect(() => {
    fetchUsersFunction();
  }, []);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await saveUser({
      ...formData,
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
          <Form onSubmit={handleSubmit}>
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
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="author">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
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
