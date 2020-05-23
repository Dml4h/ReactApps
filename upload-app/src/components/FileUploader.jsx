import React from "react";
import api from "../api/api";
import { Form, Button } from "react-bootstrap";

export const FileUploader = (props) => {
  const [uploadFile, setUploadFile] = React.useState(null);
  const handleOnChange = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      setUploadFile(newFile);
    }
  };
  const handleSubmit = () => {
    api.fileSubmit(uploadFile);
  }

  return (
    <>
      <Form>
        <Form.File id="formcheck-api-custom" custom>
          <Form.File.Input isValid onChange={handleOnChange} />
          <Form.File.Label>
            {uploadFile?.name ?? "Upload a File..."}
          </Form.File.Label>
        </Form.File>
        <Button variant="secondary" size="sm" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default FileUploader;
