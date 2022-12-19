import {
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
} from "@chakra-ui/react";
import { useState } from "react";

function App() {
  return (
    <Flex width={"100vw"} height={"100vh"} justifyContent={"center"}>
      <HStack align="stretch">
        <Box textColor={"white"} borderWidth={3} borderColor={"blackAlpha.700"} bg="gray.800" w="30%" p={3} borderRadius='lg'>
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2021/12/12191403/Spider-Man-No-Way-Home-Miles-Morales.jpg"
            alt="Dan Abramov"
            align="stretch"
          />

          <Heading size={"lg"} pt={5}>
            Diether Pastulero 23
          </Heading>
          <Text size={"md"} fontWeight={"semibold"}>
            Email: reyskee23@gmail.com
          </Text>
          <Text size={"md"} fontWeight={"semibold"} pb={5}>
            Mobile: 0479157915
          </Text>

          <Heading size={"md"} pb={2}>
            Soft Skills
          </Heading>
          <SimpleGrid columns={2} spacing={2}>
            <Box>Customer Service</Box>
            <Box>Communication</Box>
            <Box>Time Management</Box>
            <Box>Organisation</Box>
            <Box>Teamwork</Box>
            <Box>Adaptability</Box>
          </SimpleGrid>
        </Box>
        <Box textColor={"white"} borderRadius='lg' borderWidth={3} borderColor={"whiteAlpha.50"} bg="gray.800" width={"70vw"} p={10}>
          <VStack align="stretch">
            <Heading w={"50vw"} size={"md"} pt={4} pb={2}>
              Education
            </Heading>
            <HStack >
              <Box bg="gray.800" w="40vw">
                <Text fontWeight={"semibold"}>
                  Queensland University of Technology (QUT)
                </Text>
              </Box>
              <Box bg="gray.800">
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
              <Box bg="gray.800" w="40vw">
                <Text fontWeight={"semibold"}>Google IT Support by Google</Text>
              </Box>
              <Box bg="gray.800">
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
              <Box bg="gray.800" w="40vw">
                <Text fontWeight={"semibold"}>
                  Microsoft Certified: AZ-900 - Azure Fundamentals
                </Text>
              </Box>
              <Box bg="gray.800">
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

            <Heading w={"50vw"} size={"md"} pt={4} pb={2}>
              Work Experience
            </Heading>
            <HStack>
              <Box bg="gray.800" w="40vw">
                <Text fontWeight={"semibold"}>Oporto - Team Member</Text>
              </Box>
              <Box bg="gray.800">
                <Text fontWeight={"semibold"} textAlign={"end"}>
                  Feb 2017 - Nov 2018
                </Text>
              </Box>
            </HStack>

            <Heading w={"50vw"} size={"md"} pt={4} pb={2}>
              Projects
            </Heading>

            <HStack>
              <Box bg="gray.800" w="40vw">
                <Text fontWeight={"semibold"}>Cloud Resume Challenge</Text>
              </Box>
              <Box bg="gray.800">
                <Text fontWeight={"semibold"} textAlign={"end"}>
                  Ongoing
                </Text>
              </Box>
            </HStack>

            <UnorderedList pl={5}>
              <ListItem>HTML, Javascript</ListItem>
              <ListItem>..</ListItem>
              <ListItem>..</ListItem>
              <ListItem>....</ListItem>
            </UnorderedList>
          </VStack>
        </Box>
      </HStack>
    </Flex>
  );
}

export default App;
