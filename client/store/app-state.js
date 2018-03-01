/*与业务逻辑无关，存储一些纯展示的一些变量*/
import {
  observable,
  computed,
  autorun,
  action,
} from 'mobx'

export class AppState {
  @observable count = 0
  @observable name = 'LLD'
  @computed get msg() {
    return `${this.name} say count is ${this.count}`
  }
  @action add() {
    this.count += 1
  }
  @action changeName(name) {
    this.name = name
  }
}

const appState = new AppState()

autorun(() => {
  //console.log(appState.msg)
})

setInterval(() => {
  //appState.add()
}, 1000)

export default appState
