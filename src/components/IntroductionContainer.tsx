import { Button, Checkbox } from '@mantine/core'
import { useState } from 'react'

interface Props {
  setSolverVisible: (visible: boolean) => void
}

const IntroductionContainer = ({ setSolverVisible }: Props) => {
  const [agree, setAgree] = useState(false)

  return (
    <div className='min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100'>
      <div className='w-full sm:max-w-md px-6 py-4 sm:bg-white sm:shadow-md overflow-hidden sm:rounded-md relative'>
        <h1 className='text-2xl font-bold'>Wordsearch Solver</h1>
        <p className='description'>
          Honestly screw wordsearches. Use the power of artificial inteligence
          to slack off!
        </p>

        <div className='flex flex-col space-y-3 mt-6'>
          <Checkbox
            checked={agree}
            onChange={() => setAgree(!agree)}
            label='I agree to not leak this to my teacher'
          />
          <div className='flex justify-end'>
            <Button onClick={() => setSolverVisible(true)} disabled={!agree}>
              {agree ? 'Start' : '🤨'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroductionContainer
