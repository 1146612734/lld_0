/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-01-29 18:24:03
 * @version $Id$
 */

import AppStateClass from './app-state'

export const AppState = AppStateClass

export default {
  AppState,
}

export const createStoreMap = () => {
  return {
    appState: new AppState(),
  }
}
