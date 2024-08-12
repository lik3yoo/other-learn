const EventEmitter = require("events");

// 创建 EventEmitter 实例
class OrderSystem extends EventEmitter {
  constructor() {
    super();
    this.on("orderReceived", this.processOrder);
    this.on("orderProcessed", this.completeOrder);
  }

  processOrder(orderId) {
    console.log(`处理订单: ${orderId}`);
    // 假设处理订单需要一些时间
    setTimeout(() => {
      this.emit("orderProcessed", orderId);
    }, 1000); // 模拟异步操作
  }

  completeOrder(orderId) {
    console.log(`订单完成: ${orderId}`);
  }

  receiveOrder(orderId) {
    console.log(`接收到订单: ${orderId}`);
    this.emit("orderReceived", orderId);
  }
}

// 使用 OrderSystem
const orderSystem = new OrderSystem();

// 模拟接收订单
orderSystem.receiveOrder("1234");
