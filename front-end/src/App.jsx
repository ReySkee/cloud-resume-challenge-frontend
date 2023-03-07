import {
  Stack,
  Image,
  Box,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  UnorderedList,
  VStack,
  ListItem,
  Divider,
  Center, 
  Icon,
  Link,
  Tooltip, Tab, Tabs, TabList, TabPanels, TabPanel
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import Blog from "./blog";

function App() {
  const [response, setResponse] = useState(null);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setResponse(data);
    }
    fetchData();
  }, []);

  return (
    <Flex width={"100vw"} height={"100vh"} justifyContent={"center"}>
      <Stack direction={["column", "row"]} spacing="0px">
        <Box bg="gray.900" p={3} borderRadius="lg">
          <Center>
            <Image
              borderRadius="full"
              boxSize="150px"
              src="./avatar.jpg"
              alt="It's a picture of myself"
            />
          </Center>

          <Heading size={"lg"} pt={5}>
            Diether Pastulero
          </Heading>
          <Text size={"md"} fontWeight={"semibold"}>
            Email: reyskee23@gmail.com
          </Text>
          <Text size={"md"} fontWeight={"semibold"} pb={5}>
            Mobile: 0479157915
          </Text>
          <Tooltip label="GitHub">
            <Link href="https://github.com/ReySkee" isExternal>
              <Icon boxSize={8} as={IoLogoGithub} />
            </Link>
          </Tooltip>
          <Tooltip label="LinkedIn">
            <Link
              href="https://www.linkedin.com/in/dietherpastulero/"
              isExternal
            >
              <Icon boxSize={8} as={IoLogoLinkedin} />
            </Link>
          </Tooltip>

          <Heading size={"md"} pb={2} pt={2}>
            Skills
          </Heading>
          <SimpleGrid columns={2} spacing={2} pb={10}>
            <Box>React</Box>
            <Box>Javascript</Box>
            <Box>Agile</Box>
            <Box>Microsoft Azure</Box>
            <Box>IaC (Bicep)</Box>
            <Box>CI/CD</Box>
          </SimpleGrid>
          
          
          <Box> Visitors: {response ? (<p>{response.count}</p>) : (<p>Loading....</p>)}</Box>
          
          
        </Box>
        <Divider orientation="vertical" />
        <Box bg="gray.900" p={10}  >
          <Tabs isFitted variant='enclosed'>
            <TabList>
              <Tab> About me</Tab>
              <Tab> Site Creation - Behind the Scenes</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
              <VStack align="stretch">
            <Heading size={"md"} pt={4} pb={2}>
              Education
            </Heading>
            <HStack>
              <Box w="40vw">
                <Text fontWeight={"semibold"}>
                  Bachelor of Information Technology (Information Systems)
                  
                </Text>
              </Box>
              <Box>
                <Text fontWeight={"semibold"} textAlign={"end"}>
                  Completion in Dec 2023
                </Text>
              </Box>
            </HStack>
            <Text as='i'>Queensland University of Technology (QUT)</Text>
            <Text w="40vw" pl={3} as='i'>
              Relevant Courseworks: Web Computing, Software Development, Business Requirement Analysis, 
              Interaction and Experience Design, IT Project Management, Cloud Information Systems, Cloud Computing
            </Text>
            <HStack pt={4}>
              <Box w="40vw">
                <Text fontWeight={"semibold"}>
                  Microsoft Certified: Azure Fundamentals
                </Text>
              </Box>
              <Box>
                <Text fontWeight={"semibold"} textAlign={"end"}>
                  Certificate Earned in 2022
                </Text>
              </Box>
            </HStack>
            <Text as='i'>
              Provides a foundational understanding of cloud computing and Microsoft Azure services
            </Text>
            <HStack pt={4}>
              <Box w="40vw">
                <Text fontWeight={"semibold"}>
                Microsoft Certified: Azure Administrator Associate
                </Text>
              </Box>
              <Box>
                <Text fontWeight={"semibold"} textAlign={"end"}>
                  Certificate Earned in 2023
                </Text>
              </Box>
            </HStack>
            <Text as='i' w="40vw" >
            Manage and monitor Azure services, implement security, deploy and manage infrastructure, govern solutions, optimize performance,
            troubleshoot issues, and automate tasks using various Azure tools.
            </Text>
            <Heading size={"md"} pt={4} pb={2}>
              Projects
            </Heading>

            <HStack>
              <Box w="40vw">
                <Text fontWeight={"semibold"}>Cloud Resume</Text>
              </Box>
              <Box>
                <Text fontWeight={"semibold"} textAlign={"end"}>
                  2022 - 2023
                </Text>
              </Box>
            </HStack>
            <Text as='i' w="40vw">
              The front-end was built using Vite and React, and the website was deployed through Azure Static Web Apps. An Azure Function HTTP
              trigger was integrated into the website to track visitor count. Continuous deployment was automated through Github Actions. For
              secure management of secrets, Azure Key Vault with Managed Identity was used. Domain management was handled through Azure
              DNS Zone, and Azure Bicep was utilized for Infrastructure as Code.
            </Text>
            <Heading size={"md"} pt={4} pb={2}>
              Work Experience
            </Heading>
            <HStack>
              <Box w="40vw">
                <Text fontWeight={"semibold"}>Casual Employee</Text>
              </Box>
              <Box>
                <Text fontWeight={"semibold"} textAlign={"end"}>
                  2017 - 2018
                </Text>
              </Box>
            </HStack>
            <Text as='i' w="40vw">
              This job involved working as a team member where efficient solo work was required to take customer orders, prepare food, and
              maintain the cleanliness of the chain. The role demanded the ability to multitask, prioritize effectively, and remain organized and
              focused during busy periods.
            </Text>
          </VStack>
              </TabPanel>
              <TabPanel>
                <VStack align={'stretch'}>
                
                  <Blog />

                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>

          
        </Box>
      </Stack>
    </Flex>
  );
}

export default App;
