export const enum AppsActionTypes {
  'GET_APPS' = 'GET_APPS',
  'SET_APPS' = 'SET_APPS',
  'SET_APPS_SORT' = 'SET_APPS_SORT',
  'SET_APPS_PER_PAGE' = 'SET_APPS_PER_PAGE',
  'SET_PAGE_INDEX' = 'SET_PAGE_INDEX',
  'SET_PAGE_SIZE' = 'SET_PAGE_SIZE',
  'SET_FILTER' = 'SET_FILTER',
  'SET_SORT' = 'SET_SORT'
}

export const enum EditActionTypes {
  'SET_EDIT_APP'= 'SET_EDIT_APP',
  'MAKE_UPDATE' = 'MAKE_UPDATE',
}

export const enum NetworkActionTypes {
  'UPDATE_NETWORK_STATUS' = 'UPDATE_NETWORK_STATUS',
  'SET_NETWORK_ERROR' = 'SET_NETWORK_ERROR',
  'FLUSH_NETWORK_ERROR' = 'FLUSH_NETWORK_ERROR'
}