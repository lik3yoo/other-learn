class ConcreteSubject implements Subject {
  private observers: Observer[] = []
  private state: any

  registerObserver(observer: Observer): void {
    this.observers.push(observer)
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer)
    if (index !== -1) {
      this.observers.splice(index, 1)
    }
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.state)
    }
  }

  setState(state: any): void {
    this.state = state
    this.notifyObservers()
  }
  getState(): any {
    return this.state
  }
}

class ConcreteObserver implements Observer {
  private state: any

  update(data: any): void {
    this.state = data
    this.display()
  }
  display(): void {
    console.log("Observer state updated", this.state)
  }
}

const subject = new ConcreteSubject()
const observer1 = new ConcreteObserver()
const observer2 = new ConcreteObserver()

subject.registerObserver(observer1)
subject.registerObserver(observer2)

subject.setState("state 1")
subject.setState('state 2')

subject.removeObserver(observer1)

subject.setState('state 3')
