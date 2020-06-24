const { run } = require('runjs')
const glob = require('glob')

const list = {}

glob.sync('./packages/*.*').forEach(path => {
  const chunk = path.split('packages/')[1].split('/index')[0]

  list[chunk] = {
    input: `packages/${ chunk }`,
    output: chunk.split('.')[0],
  }
})

Object.keys(list).forEach(i => {
  const { input, output } = list[i]
  run(
    `vue-cli-service build  --target lib --no-clean  --name ${ output } --dest lib ${ input }`,
  )
})
