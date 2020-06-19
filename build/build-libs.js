const { run } = require('runjs')
const glob = require('glob')

const list =
  {
    index: {
      input: 'packages/index.ts',
      output: 'index',
    },
  }

glob.sync('./packages/*/index.ts').forEach(path => {
  const chunk = path.split('packages/')[1].split('/index')[0]
  list[chunk] = {
    input: `packages/${ chunk }/index.ts`,
    output: chunk,
  }
})

Object.keys(list).forEach(i => {
  const { input, output } = list[i]
  run(
    `vue-cli-service build  --target lib --no-clean  --name ${ output } --dest lib ${ input }`,
  )
})
