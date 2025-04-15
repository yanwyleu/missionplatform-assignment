/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import TasksController from "./tasks.controller";

/**
 * Router Definition
 */

export const tasksRouter = express.Router();

/**
 * Controller Definitions
 */

// GET /tasks: Retrieve all tasks.
  
export default { 
  listTasks: tasksRouter.get("/tasks", TasksController.listTasks),
}

// GET /tasks/:id: Retrieve a specific task by ID.


// POST items

// tasksRouter.post("/", async (req: Request, res: Response) => {
//   try {
//     const item: BaseTask = req.body;

//     const newTask = await TaskService.create(item);

//     res.status(201).json(newTask);
//   } catch (e) {
//     res.status(500).send(e.message);
//   }
// });

// PUT items/:id

// tasksRouter.put("/:id", async (req: Request, res: Response) => {
//   const id: number = parseInt(req.params.id, 10);

//   try {
//     const itemUpdate: Task = req.body;

//     const existingTask: Task = await TaskService.find(id);

//     if (existingTask) {
//       const updatedTask = await TaskService.update(id, itemUpdate);
//       return res.status(200).json(updatedTask);
//     }

//     const newTask = await TaskService.create(itemUpdate);

//     res.status(201).json(newTask);
//   } catch (e) {
//     res.status(500).send(e.message);
//   }
// });

// DELETE items/:id

// tasksRouter.delete("/:id", async (req: Request, res: Response) => {
//   try {
//     const id: number = parseInt(req.params.id, 10);
//     await tasksRouter.get("/", async (req: Request, res: Response) => {
//       try {
//         const items: Task[] = await TaskService.findAll();

//         res.status(200).send(items);
//       } catch (e) {
//         res.status(500).send(e.message);
//       }
//     });

//     // GET items/:id

//     tasksRouter.get("/:id", async (req: Request, res: Response) => {
//       const id: number = parseInt(req.params.id, 10);

//       try {
//         const item: Task = await TaskService.find(id);

//         if (item) {
//           return res.status(200).send(item);
//         }

//         res.status(404).send("item not found");
//       } catch (e) {
//         res.status(500).send(e.message);
//       }
//     });

//     // POST items

//     tasksRouter.post("/", async (req: Request, res: Response) => {
//       try {
//         const item: BaseTask = req.body;

//         const newTask = await TaskService.create(item);

//         res.status(201).json(newTask);
//       } catch (e) {
//         res.status(500).send(e.message);
//       }
//     });

//     // PUT items/:id

//     tasksRouter.put("/:id", async (req: Request, res: Response) => {
//       const id: number = parseInt(req.params.id, 10);

//       try {
//         const itemUpdate: Task = req.body;

//         const existingTask: Task = await TaskService.find(id);

//         if (existingTask) {
//           const updatedTask = await TaskService.update(id, itemUpdate);
//           return res.status(200).json(updatedTask);
//         }

//         const newTask = await TaskService.create(itemUpdate);

//         res.status(201).json(newTask);
//       } catch (e) {
//         res.status(500).send(e.message);
//       }
//     });

//     // DELETE items/:id

//     tasksRouter.delete("/:id", async (req: Request, res: Response) => {
//       try {
//         const id: number = parseInt(req.params.id, 10);
//         await TaskService.remove(id);

//         res.sendStatus(204);
//       } catch (e) {
//         res.status(500).send(e.message);
//       }
//     });.remove(id);

//     res.sendStatus(204);
//   } catch (e) {
//     res.status(500).send(e.message);
//   }
// });
