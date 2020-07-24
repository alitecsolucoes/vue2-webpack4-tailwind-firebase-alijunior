const lastNode = (path) => {
  // https://stackoverflow.com/a/16695464/1310632
  return path.toLowerCase().match(/([^/]*)\/*$/)[1]
}

const removeFirstSlash = (path) => {
  return path[0] === '/' ? path.substring(1) : path
}

const getRouteName = (path) => {
  path = removeFirstSlash(path)
  return path.toLowerCase().replace(/\//g, '-')
}

const createPath = (order, path, node, menu, icon, file) => {
  return {
    path     : lastNode(path + node),
    name     : getRouteName(path + node),
    meta     : { menu: menu, icon: icon, order: order },
    component: () => import('@/path' + path + '/' + file)
  }
}
const createPathParam = (key, path, node, menu, icon, file) => {
  return {
    // path: ':' + key + node,
    // path: lastNode(path + node) + '/:' + key,
    // name: getRouteName(path + '/' + key + node),
    path     : lastNode(path + node),
    name     : getRouteName(path + node),
    meta     : { menu: menu, icon: icon, order: -1 },
    params   : true,
    component: () => import('@/path' + path + '/' + file)
  }
}

export { lastNode, removeFirstSlash, getRouteName, createPath, createPathParam }
