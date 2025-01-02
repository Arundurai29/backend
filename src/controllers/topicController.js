const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create Topic
const createTopic = async (req, res) => {
  const { name, parentId } = req.body;

  try {
    const topic = await prisma.topic.create({
      data: { name, chapterId:parentId },
    });
    res.status(201).json(topic);
  } catch (error) {
    res.status(500).json({ message: "Error creating topic", error });
  }
};

// Edit Topic
const editTopic = async (req, res) => {
  const { id } = req.params;
  const { name, chapterId } = req.body;

  try {
    const topic = await prisma.topic.update({
      where: { id: parseInt(id) },
      data: { name, chapterId },
    });
    res.json(topic);
  } catch (error) {
    res.status(500).json({ message: "Error editing topic", error });
  }
};

// Delete Topic
const deleteTopic = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.topic.delete({ where: { id: parseInt(id) } });
    res.json({ message: "Topic deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting topic", error });
  }
};

// Get All Topics
const getAllTopics = async (req, res) => {
    try {
      const topics = await prisma.topic.findMany();
      res.json(topics);
    } catch (error) {
      res.status(500).json({ message: "Error fetching topics", error });
    }
  };
  
  // Get Topic by ID
  const getTopicById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const topic = await prisma.topic.findUnique({
        where: { id: parseInt(id) },
      });
  
      if (!topic) {
        return res.status(404).json({ message: "Topic not found" });
      }
  
      res.json(topic);
    } catch (error) {
      res.status(500).json({ message: "Error fetching topic", error });
    }
  };

  
module.exports = {
  createTopic,
  editTopic,
  deleteTopic,
  getAllTopics,
  getTopicById,
};
