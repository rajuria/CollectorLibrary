const { or } = require('sequelize');
const { Books } = require('../models');

const getByISBN = async (req, res) => {
  try {
    const { isbn } = req.params;
    if (!isbn) {
      return res.status(400).json({ error: 'Se requiere el ISBN del libro' });
    }

    const book = await Books.findOne({
      where: { isbn },
      attributes: ['id', 'Title', 'AuthorID', 'Genre', 'PublicationYear', 'isbn', 'PageCount']
    });

    if (!book) {
      return res.status(404).json({ error: 'Libro no encontrado' });
    }

    res.json({
      message: 'Libro leido exitosamente',
      data: book
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en la Base de Datos' });
  }
};


const createBook = async (req, res) => {
  try {
    let {
        id,
        Title,
        AuthorID,
        Genre,
        PublicationYear,
        isbn,
        PageCount
    } = req.body || {};

    if (!Title || !AuthorID || !PublicationYear || !isbn || !PageCount) {
        return res.status(406).json({ error: 'El libro debe contener un Titulo, Autor, Año de Publicación, ISBN y Número de Páginas (no pueden estar vacios)' });
    }

    const created = await Books.create({
        id,
        Title,
        AuthorID,
        Genre,
        PublicationYear: Number(PublicationYear),
        isbn,
        PageCount: Number(PageCount)
    });
    res
      .status(201)
      .location(`/dbTest/${created.id || created.username || created.Title}`)
      .json({
        message: 'Libro creado exitosamente',
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
  getByISBN,
  createBook
};