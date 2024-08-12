import { assertEquals } from "$assert"
import Person, { sayHello } from "./person.ts"

Deno.test("sayHello function", () => {
  const grace: Person = {
    lastName: "Grace",
    firstName: "Hopper",
  }
  assertEquals(sayHello(grace), "Hello, Hopper!")
})
