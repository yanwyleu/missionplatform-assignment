import React, { useState } from "react";
import axios from 'axios'
import CustomTextField from "../form/textField";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
// import CustomDropDown from "./CustomDropDown";
import { useForm } from "react-hook-form";
import { RecordList } from "../form/recordList";

interface FormState {
  title: string;
  description: string;
  status: string;
  userID: string;
  taskID: string;
}

// const useStyles = makeStyles(() => createStyles({
//   form: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   container: {
//     backgroundColor: "#ffffff",
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%,-50%)",
//     padding: 30,
//     textAlign: "center"
//   },
//   title: {
//     margin: "0px 0 20px 0"
//   },
//   button: {
//     margin: "20px 0"
//   }
// }))

const ages = [
  { value: "20-40", label: "From 20 to 40" },
  { value: "40-50", label: "From 40 to 50" },
]

const Form = () => {

  // const classes = useStyles();

  const [formData, setFormData] = useState<FormState>({
    title: '',
    description: '',
    status: '',
    userID: '',
    taskID: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }
  
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4040/tasks', formData, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      });      
      console.log(response); //Will result in an error because the above endpoint doesn't exist yet
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <Card color="transparent">
        <Typography variant="h4" color="blue-gray">
          Task Input
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Title
            </Typography>
            <Input
              size="lg"
              // placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Description
            </Typography>
            <Input
              size="lg"
              // placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              TaskID
            </Typography>
            <Input
              // type="password"
              size="lg"
              // placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              UserID
            </Typography>
            <Input
              // type="password"
              size="lg"
              // placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button className="mt-6" fullWidth>
            Submit
          </Button>
        </form>
        <RecordList/>
      </Card>      
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">TaskID:</label>
          <br />
          <input type="text" name="taskID" id="taskID" onChange={handleChange} value={formData.taskID} required maxLength={20} />
          <br />
        </div>

        <div>
          <label htmlFor="firstname">Title:</label>
          <br />
          <input type="text" name="title" id="fname" onChange={handleChange} value={formData.title} required maxLength={20} />
          <br />
        </div>

        <div>
          <label htmlFor="lastname">Description:</label>
          <br />
          <input type="text" name="description" id="lname" onChange={handleChange} value={formData.description} required maxLength={20} />
          <br />
        </div>

        <div>
          <label htmlFor="email">Status:</label>
          <br />
          <input type="text" name="status" id="status" onChange={handleChange} value={formData.status} required maxLength={40} />
          <br />
        </div>

        <div>
          <label htmlFor="password">User:</label>
          <br />
          <input type="text" name="userID" id="userID" onChange={handleChange} value={formData.userID} required maxLength={15} />
          <br />
        </div>

        <button>Submit</button>

      </form> */}
    </div>
  );
}

export default Form;