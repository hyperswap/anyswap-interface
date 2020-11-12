import { chainInfo } from './coinbase/nodeConfig'
function getNode(type: any, INIT_NODE: any) {
  switch (type) {
    case 'fusion':
      return chainInfo['32659'].label
    case 'fusiontestnet':
      return chainInfo['46688'].label
    case 'bsc':
      return chainInfo['56'].label
    case 'bsctestnet':
      return chainInfo['97'].label
    case 'fantom':
      return chainInfo['250'].label
    default:
      return INIT_NODE
  }
}

function getParams(param: any) {
  const str = window.location.href.indexOf('?') ? window.location.href.split('?')[1] : ''
  if (str) {
    const arr = str.split('&')
    let value = ''
    for (const str2 of arr) {
      const arr2 = str2.split('=')
      if (arr2[0] === param) {
        value = arr2[1]
        break
      }
    }
    return value
  } else {
    return ''
  }
}

export function getNetwork(ENV_NODE_CONFIG: any, INIT_NODE: any) {
  let nc = ''
  const urlParams = getParams('network')
  if (urlParams) {
    nc = getNode(urlParams, INIT_NODE)
    localStorage.setItem(ENV_NODE_CONFIG, nc)
  } else {
    const localStr = localStorage.getItem(ENV_NODE_CONFIG)
    if (localStr) {
      nc = localStr
    } else {
      nc = INIT_NODE
    }
  }
  return nc
}

const ID_CODE = 'ID_CODE'
export function getIdCode() {
  const urlParams = getParams('agent')
  if (urlParams) {
    localStorage.setItem(ID_CODE, urlParams)
  }
}