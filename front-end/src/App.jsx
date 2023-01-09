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
            <Box>Customer Service</Box>
            <Box>Communication</Box>
            <Box>Time Management</Box>
            <Box>Organisation</Box>
            <Box>Teamwork</Box>
            <Box>Adaptability</Box>
          </SimpleGrid>
          
          
          <Box>Page Visited: {response && <p>{response.count}</p>}</Box>
          
          
        </Box>
        <Divider orientation="vertical" />
        <Box bg="gray.900" p={10} >
          <Tabs>
            <TabList>
              <Tab> About me</Tab>
              <Tab> How i made this site</Tab>
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
                  Queensland University of Technology (QUT)
                </Text>
              </Box>
              <Box>
                <Text fontWeight={"semibold"} textAlign={"end"}>
                  Expected End Date - 2023
                </Text>
              </Box>
            </HStack>
            <UnorderedList pl={5}>
              <ListItem>Process Modelling</ListItem>
              <ListItem>Web Computing/Deployment</ListItem>
              <ListItem>Business Analyst</ListItem>
              <ListItem>Project Management</ListItem>
              <ListItem>User Experience</ListItem>
            </UnorderedList>
            <HStack>
              <Box w="40vw">
                <Text fontWeight={"semibold"}>Google IT Support by Google</Text>
              </Box>
              <Box>
                <Text fontWeight={"semibold"} textAlign={"end"}>
                  Certificate Earned in 2022
                </Text>
              </Box>
            </HStack>
            <UnorderedList pl={5}>
              <ListItem>Customer Service</ListItem>
              <ListItem>Networking</ListItem>
              <ListItem>Security</ListItem>
              <ListItem>Hardware</ListItem>
              <ListItem>Troubleshooting</ListItem>
            </UnorderedList>
            <HStack>
              <Box w="40vw">
                <Text fontWeight={"semibold"}>
                  Microsoft Certified: AZ-900 - Azure Fundamentals
                </Text>
              </Box>
              <Box>
                <Text fontWeight={"semibold"} textAlign={"end"}>
                  Certificate Earned in 2022
                </Text>
              </Box>
            </HStack>
            <UnorderedList pl={5}>
              <ListItem>Cloud Concepts</ListItem>
              <ListItem>Azure Services</ListItem>
              <ListItem>Azure Workloads and Security</ListItem>
              <ListItem>Azure Pricing and Support</ListItem>
            </UnorderedList>
            <Heading size={"md"} pt={4} pb={2}>
              Projects
            </Heading>

            <HStack>
              <Box w="40vw">
                <Text fontWeight={"semibold"}>Cloud Resume Challenge</Text>
              </Box>
              <Box>
                <Text fontWeight={"semibold"} textAlign={"end"}>
                  Ongoing
                </Text>
              </Box>
            </HStack>

            <UnorderedList pl={5}>
              <ListItem>
                Azure Static Web Apps - Reactjs using Vite to create a front end
                site
              </ListItem>
              <ListItem>Azure Function HTTP Trigger</ListItem>
              <ListItem>Azure Cosmos DB</ListItem>
              <ListItem>Azure DNS Zone</ListItem>
              <ListItem>
                GitHub Actions (CI/CD) for the website and function app
              </ListItem>
            </UnorderedList>
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
