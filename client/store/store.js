/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-01-29 18:24:03
 * @version $Id$
 */

import AppState from './app-state'
import TopicStore from './topic-store'

export { AppState, TopicStore }

export default {
  AppState,
  TopicStore,
}

export const createStoreMap = () => {
  return {
    appState: new AppState(),
    topicStore: new TopicStore(),
  }
}
