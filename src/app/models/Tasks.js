const mongoose = require('../../database/database');
const bcrypt = require('bcryptjs');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    Project: {
        type: mongoose.Types.ObjectId,
        ref: 'Project',
        require: true
    },
    assignTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    createdAt: {
        type: Date,
        dafault: Date.now()
    },
    completed: {
        type: Boolean,
        require: true,
        dafault: false
    }
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;