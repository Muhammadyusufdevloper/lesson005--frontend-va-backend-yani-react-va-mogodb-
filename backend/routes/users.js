import express from 'express';
import { Users } from '../schemas/usersSchema';
const router = express.Router();

function ReturnInformation(msg, variant, payload) {
    return {
        msg,
        variant,
        payload
    };
}

router.get("/", async (req, res) => {
    try {
        const users = await Users.find();
        if (!users.length) {
            return res.status(404).json(ReturnInformation("Users not found", "error", null));
        }
        res.status(200).json(ReturnInformation("Success", "success", users));
    } catch (error) {
        res.status(500).json(ReturnInformation("Internal Server Error", "error", error.message));
    }
});

router.post("/", async (req, res) => {
    try {
        const { username, email } = req.body;
        const existingUser = await Users.findOne({ $or: [{ username }, { email }] });

        if (existingUser) {
            return res.status(400).json(ReturnInformation("Username or email already exists", "error", null));
        }

        const newUser = new Users({ username, email });
        await newUser.save();
        res.status(201).json(ReturnInformation("User created successfully", "success", newUser));
    } catch (error) {
        res.status(500).json(ReturnInformation("Internal Server Error", "error", error.message));
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await Users.findById(id);

        if (!user) {
            return res.status(404).json(ReturnInformation("User not found", "error", null));
        }

        await user.remove();
        res.status(200).json(ReturnInformation("User deleted successfully", "success", user));
    } catch (error) {
        res.status(500).json(ReturnInformation("Internal Server Error", "error", error.message));
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email } = req.body;

        const user = await Users.findById(id);

        if (!user) {
            return res.status(404).json(ReturnInformation("User not found", "error", null));
        }

        const existingUser = await Users.findOne({ $or: [{ username }, { email }] });

        if (existingUser && existingUser.id !== id) {
            return res.status(400).json(ReturnInformation("Username or email already exists", "error", null));
        }

        user.username = username || user.username;
        user.email = email || user.email;

        await user.save();
        res.status(200).json(ReturnInformation("User updated successfully", "success", user));
    } catch (error) {
        res.status(500).json(ReturnInformation("Internal Server Error", "error", error.message));
    }
});

export default router;
