import ContentContainer from '@/components/elements/ContentContainer'
import { Group, Text, useMantineTheme } from '@mantine/core'
import { Dropzone } from '@mantine/dropzone'
import { useState } from 'react'
import { IconUpload, IconPhoto, IconX } from '@tabler/icons'

const SolverContainer = () => {
  const [uploaded, setUploaded] = useState(false)
  const [source, setSource] = useState('')
  const theme = useMantineTheme()

  const handleCapture = (target: EventTarget & HTMLInputElement) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0]
        const newUrl = URL.createObjectURL(file)
        setSource(newUrl)
      }
    }
  }

  const handleDrop = (files: File[]) => {
    if (files.length !== 0) {
      const file = files[0]
      const newUrl = URL.createObjectURL(file)
      setSource(newUrl)
    }
  }

  return !uploaded ? (
    <div className='min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100'>
      <div className='w-full sm:max-w-md px-6 py-4 sm:bg-white sm:shadow-md overflow-hidden sm:rounded-md relative'>
        <p>Click below if you want to take a picture with your phone</p>
        <input
          accept='image/*'
          id='icon-button-file'
          type='file'
          capture='environment'
          onChange={(e) => handleCapture(e.target)}
        />

        <Dropzone
          className='mt-3'
          onDrop={handleDrop}
          onReject={(files) => alert('sorry this file is not supported')}
          accept={['image/png', 'image/jpeg']}
        >
          <Group
            position='center'
            spacing='xl'
            style={{ minHeight: 220, pointerEvents: 'none' }}
          >
            <Dropzone.Accept>
              <IconUpload
                size={50}
                stroke={1.5}
                color={
                  theme.colors[theme.primaryColor][
                    theme.colorScheme === 'dark' ? 4 : 6
                  ]
                }
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                size={50}
                stroke={1.5}
                color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconPhoto size={50} stroke={1.5} />
            </Dropzone.Idle>

            <div>
              <Text size='xl' inline>
                Drag images here or click to select files
              </Text>
            </div>
          </Group>
        </Dropzone>
      </div>
    </div>
  ) : (
    <ContentContainer>wow</ContentContainer>
  )
}

export default SolverContainer
