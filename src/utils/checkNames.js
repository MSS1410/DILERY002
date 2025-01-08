const { projects, users, studios, exhibitions } = require('../data/seedData')

const userNames = users.map((user) => user.nombre.trim())

// Función para verificar nombres en otros arrays
const checkNames = (array, fields, arrayName) => {
  console.log(`\n--- Verificando ${arrayName} ---`)
  array.forEach((item, index) => {
    fields.forEach((field) => {
      const names = Array.isArray(item[field]) ? item[field] : [item[field]]
      names.forEach((name) => {
        if (!userNames.includes(name.trim())) {
          console.log(
            `Error: '${name}' en ${arrayName}[${index}] no coincide con los nombres en users.`
          )
        }
      })
    })
  })
}

// Verificar nombres
checkNames(projects, ['artist'], 'projects')
checkNames(studios, ['participantes', 'dueño'], 'studios')
checkNames(exhibitions, ['organizadores', 'expositores'], 'exhibitions')
