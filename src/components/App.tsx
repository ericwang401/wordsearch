import IntroductionContainer from '@/components/IntroductionContainer'
import SolverContainer from '@/components/SolverContainer'
import { createEmotionCache, MantineProvider } from '@mantine/core'
import { useState } from 'react'

const emotionCache = createEmotionCache({
  key: 'mantine',
  prepend: false,
})

const App = () => {
  const [solverVisible, setSolverVisible] = useState(false)

  return (
    <MantineProvider emotionCache={emotionCache}>
      {solverVisible ? (
        <SolverContainer />
      ) : (
        <IntroductionContainer setSolverVisible={setSolverVisible} />
      )}
    </MantineProvider>
  )
}

export default App