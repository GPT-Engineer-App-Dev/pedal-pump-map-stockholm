import { Box, Container, Heading } from "@chakra-ui/react";
import Map from "../components/Map";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="blue.500" w="100%" p={4} color="white">
        <Heading as="h1" size="lg">
          Stockholm Bike Pump Stations
        </Heading>
      </Box>
      <Map />
    </Container>
  );
};

export default Index;