const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
// Auto genero ids para usuairios que meto de fabrica
const userIds = {
  Admin: new mongoose.Types.ObjectId(),
  Admin02: new mongoose.Types.ObjectId(),
  Banksy: new mongoose.Types.ObjectId(),
  Martina: new mongoose.Types.ObjectId(),
  AiWeiwei: new mongoose.Types.ObjectId(),
  Kapoor: new mongoose.Types.ObjectId(),
  Walker: new mongoose.Types.ObjectId(),
  Kusama: new mongoose.Types.ObjectId(),
  Hirst: new mongoose.Types.ObjectId(),
  Sherman: new mongoose.Types.ObjectId()
}

const projectIds = {
  'Girl with Balloon': new mongoose.Types.ObjectId(),
  'Flower Thrower': new mongoose.Types.ObjectId(),
  'Sunflower Seeds': new mongoose.Types.ObjectId(),
  'Dropping a Han Dynasty Urn': new mongoose.Types.ObjectId(),
  ' Gone ': new mongoose.Types.ObjectId(),
  'La Entrada de Cristo al Periodismo': new mongoose.Types.ObjectId(),
  'Infinity Room': new mongoose.Types.ObjectId(),
  'The Physical Impossibility of Death in the Mind of Someone Living':
    new mongoose.Types.ObjectId(),
  'For the Love of God': new mongoose.Types.ObjectId(),
  ' Pumpkins ': new mongoose.Types.ObjectId(),
  'Not Alone': new mongoose.Types.ObjectId(),
  'Momentum Crudo': new mongoose.Types.ObjectId(),
  'Spot Paintings': new mongoose.Types.ObjectId()
}

const studioIds = {
  'Generic Studio': new mongoose.Types.ObjectId(),
  'Banksy Studio': new mongoose.Types.ObjectId(),
  'Kusama Studio': new mongoose.Types.ObjectId(),
  'La Rambla': new mongoose.Types.ObjectId(),
  'Miracle Estudio': new mongoose.Types.ObjectId(),
  'Kapoor Studio': new mongoose.Types.ObjectId(),
  'Walker Studio': new mongoose.Types.ObjectId()
}

const exhibitionIds = {
  'Miró Matisse': new mongoose.Types.ObjectId(),
  'Sculptural Horizons': new mongoose.Types.ObjectId(),
  'Street Art Showcase': new mongoose.Types.ObjectId(),
  'Modern Installations': new mongoose.Types.ObjectId(),
  'Contemporary Visions': new mongoose.Types.ObjectId(),
  'Infinity Explorations': new mongoose.Types.ObjectId()
}

// Datos organizados
const users = [
  {
    _id: userIds.Banksy,
    nombre: 'Banksy',
    imagen: 'https://example.com/banksy.jpg',
    descripcion: 'Artista callejero de renombre mundial.',
    email: 'banksy@example.com',
    password: bcrypt.hashSync('banksy123', 10),
    proyectos: [projectIds['Girl with Balloon'], projectIds['Flower Thrower']],
    estudios: [studioIds['Banksy Studio']],
    exposiciones: [exhibitionIds['Street Art Showcase']],
    role: 'user'
  },
  {
    _id: userIds.Martina,
    nombre: 'Martina Escolano',
    imagen: 'https://example.com/martina.jpg',
    descripcion: 'Artista emergente conocida por su arte conceptual.',
    email: 'martina@example.com',
    password: bcrypt.hashSync('Esvac123', 10),
    proyectos: [projectIds['Not Alone'], projectIds['Momentum Crudo']],
    estudios: [studioIds['La Rambla']],
    exposiciones: [exhibitionIds['Miró Matisse']],
    role: 'user'
  },
  {
    _id: userIds.AiWeiwei,
    nombre: 'Ai Weiwei',
    imagen: 'https://example.com/aiweiwei.jpg',
    descripcion: 'Artista contemporáneo chino, conocido por sus instalaciones.',
    email: 'aiweiwei@example.com',
    password: bcrypt.hashSync('aiweiwei123', 10),
    proyectos: [
      projectIds['Sunflower Seeds'],
      projectIds['Dropping a Han Dynasty Urn']
    ],
    estudios: [],
    exposiciones: [exhibitionIds['Street Art Showcase']],
    role: 'user'
  },
  {
    _id: userIds.Kapoor,
    nombre: 'Anish Kapoor',
    imagen: 'https://example.com/kapoor.jpg',
    descripcion: 'Escultor conocido por obras de gran escala.',
    email: 'kapoor@example.com',
    password: bcrypt.hashSync('kapoor123', 10),
    proyectos: [projectIds['Spot Paintings']],
    estudios: [],
    exposiciones: [exhibitionIds['Sculptural Horizons']],
    role: 'user'
  },
  {
    _id: userIds.Walker,
    nombre: 'Kara Walker',
    imagen: 'https://example.com/walker.jpg',
    descripcion: 'Artista conocida por sus instalaciones de siluetas.',
    email: 'walker@example.com',
    password: bcrypt.hashSync('walker123', 10),
    proyectos: [
      projectIds[' Gone '],
      projectIds['La Entrada de Cristo al Periodismo']
    ],
    estudios: [studioIds['Miracle Estudio']],
    exposiciones: [exhibitionIds['Modern Installations']],
    role: 'user'
  },
  {
    _id: userIds.Kusama,
    nombre: 'Yayoi Kusama',
    imagen: 'https://example.com/kusama.jpg',
    descripcion: 'Artista japonesa conocida por sus diseños de lunares.',
    email: 'kusama@example.com',
    password: bcrypt.hashSync('kusama123', 10),
    proyectos: [projectIds['Infinity Room'], projectIds[' Pumpkins ']],
    estudios: [studioIds['Kusama Studio']],
    exposiciones: [exhibitionIds['Infinity Explorations']],
    role: 'user'
  },
  {
    _id: userIds.Hirst,
    nombre: 'Damien Hirst',
    imagen: 'https://example.com/hirst.jpg',
    descripcion: 'Artista conceptual inglés conocido por su tiburones.',
    email: 'hirst@example.com',
    password: bcrypt.hashSync('hirst123', 10),
    proyectos: [
      projectIds[
        'The Physical Impossibility of Death in the Mind of Someone Living'
      ],
      projectIds['For the Love of God']
    ],
    estudios: [],
    exposiciones: [exhibitionIds['Contemporary Visions']],
    role: 'user'
  },
  {
    _id: userIds.Sherman,
    nombre: 'Cindy Sherman',
    imagen: 'https://example.com/sherman.jpg',
    descripcion: 'Fotógrafa conceptual y cineasta estadounidense.',
    email: 'sherman@example.com',
    password: bcrypt.hashSync('sherman123', 10),
    proyectos: [],
    estudios: [],
    exposiciones: [],
    role: 'user'
  },
  {
    _id: userIds.Admin,
    nombre: 'Dilery Admin',
    imagen: 'https://example.com/admin.jpg',
    descripcion: 'Administrador de Dilery.',
    email: 'adminDil@example.com',
    password: bcrypt.hashSync('admin999', 10),
    role: 'admin'
  },
  {
    _id: userIds.Admin02,
    nombre: 'Dilery Admin02',
    imagen: 'https://example.com/admin.jpg',
    descripcion: 'Administrador de Dilery02.',
    email: 'adminDil02@example.com',
    password: bcrypt.hashSync('admin123', 10),
    role: 'admin'
  }
]

const projects = [
  {
    _id: projectIds['Girl with Balloon'],
    nombre: 'Girl with Balloon',
    descripcion: 'Una de las obras más icónicas de Banksy.',
    artist: userIds.Banksy,
    estudio: studioIds['Banksy Studio'],
    exposiciones: [exhibitionIds['Street Art Showcase']],
    fechaPubli: new Date('1999-03-10')
  },
  {
    _id: projectIds['Flower Thrower'],
    nombre: 'Flower Thrower',
    descripcion: 'Otra obra representativa de Banksy.',
    artist: userIds.Banksy,
    estudio: studioIds['Banksy Studio'],
    exposiciones: [exhibitionIds['Street Art Showcase']],
    fechaPubli: new Date('2009-06-03')
  },
  {
    _id: projectIds['Sunflower Seeds'],
    nombre: 'Sunflower Seeds',
    descripcion: 'Instalación con millones de semillas de porcelana.',
    artist: userIds.AiWeiwei,
    estudio: studioIds['Generic Studio'],
    exposiciones: [exhibitionIds['Street Art Showcase']],
    fechaPubli: new Date('2010-10-12')
  },
  {
    _id: projectIds['Dropping a Han Dynasty Urn'],
    nombre: 'Dropping a Han Dynasty Urn',
    descripcion: 'Acto icónico de desafío cultural.',
    artist: userIds.AiWeiwei,
    estudio: studioIds['Generic Studio'],
    exposiciones: [],
    fechaPubli: new Date('1995-02-23')
  },
  {
    _id: projectIds[' Gone '],
    nombre: 'Gone',
    descripcion: 'Siluetas impactantes y narrativas poderosas.',
    artist: userIds.Walker,
    estudio: studioIds['Miracle Estudio'],
    exposiciones: [exhibitionIds['Modern Installations']],
    fechaPubli: new Date('2002-06-30')
  },
  {
    _id: projectIds['La Entrada de Cristo al Periodismo'],
    nombre: 'La Entrada de Cristo al Periodismo',
    descripcion: 'Obra conceptual sobre los medios.',
    artist: userIds.Walker,
    estudio: studioIds['Miracle Estudio'],
    exposiciones: [],
    fechaPubli: new Date('2008-11-15')
  },
  {
    _id: projectIds['Infinity Room'],
    nombre: 'Infinity Room',
    descripcion: 'Una experiencia inmersiva infinita.',
    artist: userIds.Kusama,
    estudio: studioIds['Kusama Studio'],
    exposiciones: [exhibitionIds['Infinity Explorations']],
    fechaPubli: new Date('2013-05-07')
  },
  {
    _id: projectIds[' Pumpkins '],
    nombre: 'Pumpkins',
    descripcion: 'Obra icónica de Kusama con calabazas.',
    artist: userIds.Kusama,
    estudio: studioIds['Kusama Studio'],
    exposiciones: [exhibitionIds['Infinity Explorations']],
    fechaPubli: new Date('2016-10-22')
  },
  {
    _id: projectIds[
      'The Physical Impossibility of Death in the Mind of Someone Living'
    ],
    nombre: 'The Physical Impossibility of Death in the Mind of Someone Living',
    descripcion: 'Un tiburón sumergido en formaldehído.',
    artist: userIds.Hirst,
    estudio: studioIds['Generic Studio'],
    exposiciones: [exhibitionIds['Contemporary Visions']],
    fechaPubli: new Date('1991-03-15')
  },
  {
    _id: projectIds['For the Love of God'],
    nombre: 'For the Love of God',
    descripcion: 'Una calavera cubierta de diamantes.',
    artist: userIds.Hirst,
    estudio: studioIds['Generic Studio'],
    exposiciones: [],
    fechaPubli: new Date('2007-06-01')
  },
  {
    _id: projectIds['Not Alone'],
    nombre: 'Not Alone',
    descripcion: 'Representación del sentimiento de soledad.',
    artist: userIds.Martina,
    estudio: studioIds['La Rambla'],
    exposiciones: [exhibitionIds['Miró Matisse']],
    fechaPubli: new Date('2024-12-13')
  },
  {
    _id: projectIds['Momentum Crudo'],
    nombre: 'Momentum Crudo',
    descripcion: 'Fotografía conceptual.',
    artist: userIds.Martina,
    estudio: studioIds['La Rambla'],
    exposiciones: [exhibitionIds['Miró Matisse']],
    fechaPubli: new Date('2024-12-20')
  },
  {
    _id: projectIds['Spot Paintings'],
    nombre: 'Spot Paintings',
    descripcion: 'Pinturas con patrones repetitivos.',
    artist: userIds.Kapoor,
    estudio: studioIds['Generic Studio'],
    exposiciones: [exhibitionIds['Sculptural Horizons']],
    fechaPubli: new Date('2010-09-14')
  }
]

const studios = [
  {
    _id: studioIds['Generic Studio'],
    nombre: 'Generic Studio',
    participantes: [],
    dueño: null,
    obras: [],
    exposiciones: []
  },
  {
    _id: studioIds['Banksy Studio'],
    nombre: 'Banksy Studio',
    participantes: [userIds.Banksy],
    dueño: userIds.Banksy,
    obras: [projectIds['Girl with Balloon'], projectIds['Flower Thrower']],
    exposiciones: [exhibitionIds['Street Art Showcase']]
  },
  {
    _id: studioIds['La Rambla'],
    nombre: 'La Rambla',
    participantes: [userIds.Martina],
    dueño: userIds.Martina,
    obras: [projectIds['Not Alone'], projectIds['Momentum Crudo']],
    exposiciones: [exhibitionIds['Miró Matisse']]
  },
  {
    _id: studioIds['Kusama Studio'],
    nombre: 'Kusama Studio',
    participantes: [userIds.Kusama],
    dueño: userIds.Kusama,
    obras: [projectIds['Infinity Room'], projectIds[' Pumpkins ']],
    exposiciones: [exhibitionIds['Infinity Explorations']]
  },
  {
    _id: studioIds['Miracle Estudio'],
    nombre: 'Miracle Estudio',
    participantes: [userIds.Walker],
    dueño: userIds.Walker,
    obras: [
      projectIds[' Gone '],
      projectIds['La Entrada de Cristo al Periodismo']
    ],
    exposiciones: [exhibitionIds['Modern Installations']]
  }
]

const exhibitions = [
  {
    _id: exhibitionIds['Street Art Showcase'],
    nombre: 'Street Art Showcase',
    descripcion: 'Exposición de arte urbano.',
    organizadores: [userIds.Banksy],
    expositores: [userIds.Banksy]
  },
  {
    _id: exhibitionIds['Miró Matisse'],
    nombre: 'Miró Matisse',
    descripcion: 'Exploración de talento local en Barcelona.',
    organizadores: [userIds.Martina],
    expositores: [userIds.Martina]
  },
  {
    _id: exhibitionIds['Sculptural Horizons'],
    nombre: 'Sculptural Horizons',
    descripcion: 'Exploración de esculturas modernas.',
    organizadores: [userIds.Kapoor],
    expositores: [userIds.Kapoor]
  },
  {
    _id: exhibitionIds['Modern Installations'],
    nombre: 'Modern Installations',
    descripcion: 'Arte de instalaciones modernas.',
    organizadores: [userIds.Walker],
    expositores: [userIds.Walker]
  },
  {
    _id: exhibitionIds['Contemporary Visions'],
    nombre: 'Contemporary Visions',
    descripcion: 'Perspectivas contemporáneas del arte.',
    organizadores: [userIds.Hirst],
    expositores: [userIds.Hirst]
  },
  {
    _id: exhibitionIds['Infinity Explorations'],
    nombre: 'Infinity Explorations',
    descripcion: 'Instalaciones infinitas de Kusama.',
    organizadores: [userIds.Kusama],
    expositores: [userIds.Kusama]
  }
]

module.exports = { users, projects, studios, exhibitions }
