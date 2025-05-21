const Reminder = require('../models/Reminder');

exports.getAll = async (req, res) => {
  try {
    const reminders = await Reminder.find().sort({ startDateTime: 1 });
    res.json(reminders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    
    const reminder = new Reminder(req.body);
    await reminder.save();
    res.status(201).json(reminder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await Reminder.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await Reminder.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// exports.markDone = async (req, res) => {
//   try {
//     const reminder = await Reminder.findById(req.params.id);
//     if (!reminder) return res.status(404).json({ message: 'Not found' });

//     reminder.status = 'Completed';
//     reminder.streak += 1;
//     await reminder.save();

//     res.json(reminder);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

exports.markDone= async (req, res) => {
  try {
    const reminder = await Reminder.findById(req.params.id);
    if (!reminder) {
      return res.status(404).json({ message: 'Reminder not found' });
    }
    reminder.done = true;
    await reminder.save();
    res.status(200).json(reminder);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// ... update, delete, markDone methods
