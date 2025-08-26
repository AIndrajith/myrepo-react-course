import React, { useEffect, useState } from 'react'
import { Heading , Text , Button , Container, Center , Highlight } from "@chakra-ui/react"

const App = () => {
  const storageKeyName = "awesomeApp";
  const retrieveCountValue = () => Number(localStorage.getItem(storageKeyName) || 0);

  const [count, setCount] = useState(retrieveCountValue());
  
  const addCount = (count) => setCount(Number(count) + 1);

  useEffect(() => {
    localStorage.setItem(storageKeyName, String(count));
  },[count]);

  return (
    <>

      <Container maxW={['full', 'container.lg']} mt={4} mb={4}>
        <Center>
          <Heading>
            <Highlight
              query="Stranger"
              styles={{ px: "1",py: "1", color: "orange.fg" }}
            >
              Welcome Stranger ! 🎉
            </Highlight>
          </Heading>
        </Center>

        <Center>
          <Text fontStyle='italic' fontSize='md'>This is my beautiful Web App </Text>
        </Center>
        <Center>
          <Text color="tomato" m={4} fontSize='lg' fontWeight='bold'>Count me Now!</Text>
        </Center>

        <Center>
          <Button colorPalette='teal' onClick={() => addCount(count)}>
            Count is {count}
          </Button>
        </Center>
      </Container>

    </>
  )
}

export default App
