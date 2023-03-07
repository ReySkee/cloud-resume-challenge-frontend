import {
    Box,
    Heading,
    Text
  } from "@chakra-ui/react";

  export default function Blog() {
    
    return (
        <>
        <Box overflowY={"auto" } maxHeight="800px" w="50.15vw" >
            <Box pr={2} >
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
                    A problem i encountered was the Azure Function's URL as you have to keep it as an environment variable which you can't use the configuration setting of the static app since Vite replaces the variables with 
                    the actual values on build time. Since I'm deploying from Github, the secret must be stored in the repository which means i'll have to update the values
                    often when fiddling with Azure Function apps. To point the site to this domain, I bought the domain from Namecheap and used Azure DNS to be used as a main management. 
                </Text>
                <Heading size={"md"} pt={4} pb={2}>
                    Creating the back-end
                </Heading>
                <Text>
                    The back-end requires creating an API for the visitor count to function as persistent storage is needed. This was done through Azure Functions HTTP Trigger with the use of javascript
                    and Azure Cosmos DB. They were chosen since serverless option can be used to minimise cost during its uptime. Although free tier exist for cosmos, the usage 
                    for this project will exceed the free tier so I kept it as serverless. The Azure Function is called with an useEffect hook which will then get the Cosmos DB values and return it.
                    The function facilitate first time values if it doesn't exist so remaking cosmos db will not break the function app. The function app needs the credentials from
                    cosmos db and was done manually by adding them to the function app configuration in the portal before i learned about Azure Bicep to automate it.
                </Text>

                <Heading size={"md"} pt={4} pb={2}>
                    Converting to Infrastructure as Code (Bicep)
                </Heading>
                <Text>
                    I learned bicep after getting everything to work. What the bicep files I made can't fully do is handle custom domains since I'm managing it through Azure DNS and secrets outside of Azure. 
                    I started small and just learned to create each services by itself without making any connections to other resources. Once that was done, I created them all together by using them as modules but still
                    without any connections to see if it works. Afterwards, dependencies and values are added to connect each resources together. This part took a lot longer than i thought.
                    For example, I personally didn't know that Source Control was a seperate resource that must be appended as a child resource for the function app to have CI/CD so that part took me a bit of time.
                    The bicep files are available in my back-end repository if anyone wants to look. I made sure important variables are not hardcoded into the file and this was solved by using managed identity.
                    

                </Text>
            </Box>
        </Box>
        </>
    );
  }