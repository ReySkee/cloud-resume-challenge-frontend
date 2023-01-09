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

  export default function Blog() {
    
    return (
        <>
        <Box overflowY={"auto" } maxHeight="800px" w="50.15vw">
            <Box w="40vw" >
                <Text pb={4}>
                    8/01/2023
                </Text>
                <Text> 
                    Hey guys! I recently completed this challenge while studying for Az-104 as an extra help for learning the services.
                    Overall the front-end and back-end took around 20 days while converting them to a bicep file took around 8 days.
                    I'll be breaking down in sections to talk more about it in detail.
                    
                </Text>
                <Heading size={"md"} pt={4} pb={2}>
                    Creating the front-end
                </Heading>
                <Text pb={2}>
                    The front-end is a bit different to what the challenge wanted to use. Instead of using Azure Storage Static Website,
                    the website is constructed using React with the help of Vite so the deployment will have to use Azure Static Web App to facilitate the site.
                    I chose to use react since i did a subject unit regarding web computing and generally found it intuitive. Vite was chosen as it's lightweight which
                    is perfect to what I'm doing.
                </Text>
                <Text pb={2}>
                    Azure Static Web App on default will give you a HTTPs connection so using Azure CDN is unnecessary.
                    A problem i encountered was the Azure Function's URL that you have to keep as an environement variable which you can't use the configuration setting of the static app since Vite replaces the variables with 
                    the actual values on build time. Since I'm deploying from Github, the secret must be stored in the repository which means i'll have to update the values
                    often when fiddling with Azure Function apps.
                </Text>
                <Text>
                    To point the site to this domain, I bought the domain from Namecheap and used Azure DSN 
                </Text>
                <Heading size={"md"} pt={4} pb={2}>
                    Creating the back-end
                </Heading>
                <Text>
                    Azure Static Web App on default will give you a HTTPs connection so using Azure CDN is unnecessary.
                    A problem i encountered was the Azure Function's URL that you have to keep as an environement variable which you can't use the configuration setting of the static app since Vite replaces the variables with 
                    the actual values on build time. Since I'm deploying from Github, the secret must be stored in the repository which means i'll have to update the values
                    often when fiddling with Azure Function apps.
                </Text>
            </Box>
        </Box>
        </>
    );
  }