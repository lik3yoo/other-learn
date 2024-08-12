interface Observer {
  update(data: any): void
}

interface Subject {
  registerObserver(observer: Observer): void

  removeObserver(observer: Observer): void

  notifyObservers(data: any): void
}
