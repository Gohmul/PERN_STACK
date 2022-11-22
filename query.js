const { Album, sequelize } = require("./models");
const { Op } = require("sequelize");

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2));
};

const GetAllAlbums = async (req, res) => {
  try {
    const all = await Album.findAll({ order: [["title", "DESC"]] });
    stringify(all);
  } catch (error) {
    throw error;
  }
};

const getSingleAlbum = async (req, res) => {
  try {
    let albumId = parseInt(req.album_id);
    const single = await Album.findByPk(albumId);
  } catch (error) {
    throw error;
  }
};

const createAlbum = async (req, res) => {
  try {
    let albumBody = {
      title: "Please work",
      numOfTracks: 16,
      genre: "Classic Rock",
      artist_id: 1,
    };
    const album = await Album.create(albumBody);
    stringify(albumBody);
  } catch (error) {
    throw error;
  }
};

// const updateAlbum = async (req, res) => {
//   try {
//     let albumId = parseInt(req.album_id);
//     let updatedAlbumBody = {
//       title: "Some time in Ny",
//       numOfTracks: 16,
//       genre: "Classic Rock",
//       artist_id: 1,
//     };
//     let updatedAlbum = await Album.update(updatedAlbumBody, {
//       where: { id: albumId },
//     });
//     res.send(`Updated Selected Album with ${updatedAlbum}`);
//   } catch (error) {
//     throw error;
//   }
// };

const updateAlbum = async (req, res) => {
  try {
    let albumId = parseInt(req.album_id);
    let updatedAlbum = await Album.update(
      {
        title: "Some time in Ny",
        numOfTracks: 16,
        genre: "Classic Rock",
        artist_id: 1,
      },
      { where: { id: albumId }, returning: true }
    );
    res.send(`updated selected album with ${updatedAlbum}`);
  } catch (error) {
    throw error;
  }
};

const deleteAlbum = async (req, res) => {
  try {
    let albumId = parseInt(req.params.album_id);
    await Album.destroy({ where: { id: albumId } });
    res.send({ message: `Deleted Album with an id of ${albumId}` });
  } catch (error) {
    throw error;
  }
};

//GetAllAlbums();
//createAlbum();
updateAlbum(1);
//deleteAlbum(1);
//getSingleAlbum(1);
