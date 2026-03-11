const { Autores } = require('../models');

const getAllAuthors = async (req, res) => {
  try {
    const autores = await Autores.findAll({
      attributes: ['FirstName', 'LastName', 'BirthYear', 'Nationality']
    });

    res.json({
      message: "Autores solicitados exitosamente",
      count: autores.length,
      data: autores
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      error: error.message || 'Fallo al leer autores'
    });
  }
};

const createSpecificAuthor = async (req, res) => {
  try {
    const payload = {
        id: 4,
        FirstName: "Stephen",
        LastName: "King",
        BirthYear: 1947,
        Nationality: "Estadounidense"
    };
    const created = await Autores.create(payload);
    res.status(201).json({ message: 'Autor creado exitosamente', data: created });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      error: error.message
    });
  }
};

const createAuthor = async (req, res) => {
  try {
    // Read from body (preferred)
    let {
        id,
        FirstName,
        LastName,
        BirthYear,
        Nationality
    } = req.body || {};

    if (!FirstName || !LastName) {
        return res.status(400).json({
            error: 'FirstName y LastName son campos requeridos'
        });
    }
    if (BirthYear !== undefined && BirthYear !== null && !Number.isInteger(BirthYear)) {
        return res.status(400).json({ error: 'BirthYear debe ser un numero' });
    }

    const created = await Autores.create({
        id,
        FirstName,
        LastName,
        BirthYear: Number(BirthYear) ?? null,
        Nationality: Nationality ?? null
    });

    res
      .status(201)
      .location(`/dbTest/${created.id || created.username || created.FirstName}-${created.LastName}`)
      .json({
        message: 'Autor creado exitosamente',
        data: created
      });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      error: error.message
    });
  }
};



module.exports = {
  getAllAuthors,
  createSpecificAuthor,
  createAuthor
};