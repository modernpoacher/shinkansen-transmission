import { expect } from 'chai'

import transform from 'shinkansen-transmission/transmission/into-values'

describe('shinkansen-transmission/transmission/into-values', () => {
  it('is a function', () => {
    expect(transform)
      .to.be.a('function')
  })

  it('transforms', () => {
    const response = {
      stringTypeSubSchema: 'mock string',
      numberTypeSubSchema: 1,
      arrayTypeSubSchema: [
        'mock array string'
      ],
      objectTypeSubSchema: {
        one: 'mock object string',
        two: 2
      },
      booleanTypeSubSchema: true,
      nullTypeSubSchema: null,
      latitude: 84,
      longitude: -90
    }

    return expect(transform(response))
      .to.eql({
        '#/stringTypeSubSchema': 'mock string',
        '#/numberTypeSubSchema': '1',
        '#/arrayTypeSubSchema/0': 'mock array string',
        '#/objectTypeSubSchema/one': 'mock object string',
        '#/objectTypeSubSchema/two': '2',
        '#/booleanTypeSubSchema': 'true',
        '#/nullTypeSubSchema': 'null',
        '#/latitude': '84',
        '#/longitude': '-90'
      })
  })

  it('transforms `number` schemas', () => {
    const response = 1

    return expect(transform(response))
      .to.eql({
        '#/': '1'
      })
  })

  it('transforms `string` schemas', () => {
    const response = 'mock string'

    return expect(transform(response))
      .to.eql({
        '#/': 'mock string'
      })
  })

  describe('Transforming `array` schemas', () => {
    describe('With `items`', () => {
      it('transforms `array` schemas (`items` is type `number`)', () => {
        const response = [1]

        return expect(transform(response))
          .to.eql({
            '#/0': '1'
          })
      })

      it('transforms `array` schemas (`items` is type `string`)', () => {
        const response = ['mock array type index string']

        return expect(transform(response))
          .to.eql({
            '#/0': 'mock array type index string'
          })
      })

      it('transforms `array` schemas (`items` is type `array`)', () => {
        const response = []

        return expect(transform(response))
          .to.eql({})
      })

      it('transforms `array` schemas (`items` is type `array` with `items` is type `array`)', () => {
        const response = [['mock array type index string type', 1]]

        return expect(transform(response))
          .to.eql({
            '#/0/0': 'mock array type index string type',
            '#/0/1': '1'
          })
      })

      it('transforms `array` schemas (`items` is type `array` with `items` is type `object`)', () => {
        const response = [['mock array type index string type (0)', 'mock array type index string type (1)']]

        return expect(transform(response))
          .to.eql({
            '#/0/0': 'mock array type index string type (0)',
            '#/0/1': 'mock array type index string type (1)'
          })
      })

      it('transforms `array` schemas (`items` is type `object`)', () => {
        const response = []

        return expect(transform(response))
          .to.eql({})
      })

      it('transforms `array` schemas (`items` is type `object` with `properties`)', () => {
        const response = [{
          one: 'mock array type index object type key string (one)',
          two: 'mock array type index object type key string (two)'
        }]

        return expect(transform(response))
          .to.eql({
            '#/0/one': 'mock array type index object type key string (one)',
            '#/0/two': 'mock array type index object type key string (two)'
          })
      })

      it('transforms `array` schemas (`items` is type `boolean`)', () => {
        const response = [true]

        return expect(transform(response))
          .to.eql({
            '#/0': 'true'
          })
      })

      it('transforms `array` schemas (`items` is type `null`)', () => {
        const response = [null]

        return expect(transform(response))
          .to.eql({
            '#/0': 'null'
          })
      })
    })

    describe('Without `items`', () => {
      it('transforms `array` schemas', () => {
        const response = []

        return expect(transform(response))
          .to.eql({})
      })
    })
  })

  describe('Transforming `object` schemas', () => {
    describe('With `properties`', () => {
      it('transforms `object` schemas (with `properties`)', () => {
        const response = {
          one: 'mock object type key string (one)',
          two: 'mock object type key string (two)'
        }

        return expect(transform(response))
          .to.eql({
            '#/one': 'mock object type key string (one)',
            '#/two': 'mock object type key string (two)'
          })
      })
    })

    describe('Without `properties`', () => {
      it('transforms `object` schemas', () => {
        const response = {}

        return expect(transform(response))
          .to.eql({})
      })
    })
  })

  it('transforms `boolean` schemas', () => {
    const response = true

    return expect(transform(response))
      .to.eql({
        '#/': 'true'
      })
  })

  it('transforms `null` schemas', () => {
    const response = null

    return expect(transform(response))
      .to.eql({
        '#/': 'null'
      })
  })
})
