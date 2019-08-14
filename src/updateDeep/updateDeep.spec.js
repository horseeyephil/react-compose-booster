import updateDeep from './updateDeep'

const state = {
  isLoading: false,
  data: [],
  display: {
    button: true, nav: false, slider: false
  }
}

describe('updateDeep', () => {

  const update = updateDeep(state, 'display.slider', true)

  test('recursively clones an object and updates the value at the end of the path', () => {
    
    expect(update).toEqual({
      isLoading: false,
      data: [],
      display: {
        button: true, nav: false, slider: true
      }
    })
  })

  test('immutably shallow clones each level of the object', () => {
    expect(update).not.toBe(state)
    expect(update.display).not.toBe(state.display)
    expect(update.data).toBe(state.data) // data will equal because it is a shallow clone of the same array
  })

  test('will merge in the data at the path, if the merge option is selected', () => {
    const mergeUpdate = updateDeep(state, 'display', { slider: true, waitingSpinner: true }, 'merge')
    expect(mergeUpdate).toEqual({
      isLoading: false,
      data: [],
      display: {
        button: true, nav: false, slider: true, waitingSpinner: true
      }
    })
  })
})
