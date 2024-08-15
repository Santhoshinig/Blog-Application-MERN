import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
import Form from "../../components/Form/Form";
import { axiosInstance } from "../../config";

const Write = () => {
  const navigate = useNavigate();

  const fetchHandler = async (data) => {
    try {
      await axiosInstance.post("posts", data);
      navigate("/home", { replace: true });
    } catch (err) {
      console.error("An error occurred while creating the post:", err);
    }
  };

  return (
    <Fragment>
      <Form onOrder={fetchHandler} />
    </Fragment>
  );
};

export default Write;
