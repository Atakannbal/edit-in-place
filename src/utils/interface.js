export default class Interface {
  constructor(name, methods) {
    if (!name) {
      throw new Error('Interface implementation requires a name')
    }

    if (methods.length === 0) {
      throw new Error('Interface implementation does not have any methods')
    }

    this.name = name
    this.methods = []

    for (const method of methods) {
      if (typeof method !== 'string') {
        throw new TypeError(
          'Interface constructor expects method names to be passed in as string'
        )
      }
      this.methods.push(method)
    }
  }
}

Interface.ensureImplements = function (object, ...interfaces) {
  if (!object) {
    throw new Error(
      'Interface.ensureImplements expects an object to be passed in as the first argument'
    )
  }

  if (interfaces.length === 0) {
    throw new Error(
      `Interface.ensureImplements needs atleast one interfaces passed in as argument`
    )
  }

  for (const interface of interfaces) {
    const { methods, name, constructor } = interface

    if (constructor !== Interface) {
      throw new Error(
        'Function Interface.ensureImplements expects arguments two and above to be instances of Interface'
      )
    }

    for (const method of methods) {
      if (!object[method] || typeof object[method] !== 'function') {
        throw new Error(
          `Function Interface.ensureImplements: object does not implement the ${name} interface. Method ${method} was not found.`
        )
      }
    }
  }
}
