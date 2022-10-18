import { it, expect } from 'vitest'
import TestRenderer from 'react-test-renderer'

import { Button } from '../../components/Button'

it('should be able to render a button component', () => {
  function Component() {
    return <Button title="Test" />
  }

  const testRenderer = TestRenderer.create(<Component />)
  const testInstance = testRenderer.root

  expect(testInstance.findByType(Button).props.title).toBe('Test')
})
