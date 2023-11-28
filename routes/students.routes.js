import { Router } from "express";
import {
  createStudentController,
  deleteStudentByIdController,
  getStudentByIdController,
  getStudentController,
  updateStudentByIdController,
} from "../students.controller/students.control.js";

const studentRouter = Router();

// Create student
studentRouter.post("/", createStudentController);

// Get Student - GET
studentRouter.get("/", getStudentController);
// Get student by id - Method: GET, data: {req.params}
studentRouter.get("/:id", getStudentByIdController);
// Update student by id - Method: PUT, data: {req.params, req.body}
studentRouter.put("/:id", updateStudentByIdController);
// Delete student by id - Method: DELETE, data: {req.params}
studentRouter.delete("/:id", deleteStudentByIdController);

export default studentRouter;
