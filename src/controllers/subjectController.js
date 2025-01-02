const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create Subject
const createSubject = async (req, res) => {
  const { name } = req.body;

  try {
    const subject = await prisma.subject.create({
       data: { name } 
      });
    res.status(201).json(subject);
  } catch (error) {
    res.status(500).json({ message: "Error creating subject", error });
  }
};

// Edit Subject
const editSubject = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const subject = await prisma.subject.update({
      where: { id: parseInt(id) },
      data: { name },
    });
    res.json(subject);
  } catch (error) {
    res.status(500).json({ message: "Error editing subject", error });
  }
};

// Delete Subject
const deleteSubject = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.subject.delete({ where: { id: parseInt(id) } });
    res.json({ message: "Subject deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting subject", error });
  }
};

// Get All Subjects
const getAllSubjects = async (req, res) => {
    try {
      const subjects = await prisma.subject.findMany();
      res.json(subjects);
    } catch (error) {
      res.status(500).json({ message: "Error fetching subjects", error });
    }
  };
  
  // Get Subject by ID
  const getSubjectById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const subject = await prisma.subject.findUnique({
        where: { id: parseInt(id) },
      });
  
      if (!subject) {
        return res.status(404).json({ message: "Subject not found" });
      }
  
      res.json(subject);
    } catch (error) {
      res.status(500).json({ message: "Error fetching subject", error });
    }
  };

module.exports = {
  createSubject,
  editSubject,
  deleteSubject,
  getAllSubjects,
  getSubjectById,
};
