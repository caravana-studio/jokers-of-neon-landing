import { Box, Heading, Link, Stack, Text } from "@chakra-ui/react";

export const PrivacyPolicy = () => {
  return (
    <Box maxW="800px" mx="auto" px={4} py={8}>
      <Heading as="h1" mb={6}>
        Jokers of Neon - Privacy Policy
      </Heading>
      <Stack spacing={4}>
        <Text>
          <strong>Effective Date:</strong> Jul 28, 2025
        </Text>

        <Text>
          Caravana Studio (“we”, “us”, or “our”) respects your privacy. This
          Privacy Policy explains what data we collect and how we use it.
        </Text>

        <Heading as="h2" size="md">
          What We Collect
        </Heading>
        <Text>
          – <strong>Username:</strong> Chosen by the player to display in-game
          and on leaderboards.
          <br />– <strong>Usage Data:</strong> We use Google Analytics to
          collect anonymous usage statistics, such as screen views, session
          duration, and interaction events. This data does not include personal
          identifiers like name, email, or location.
        </Text>

        <Heading as="h2" size="md">
          How We Use It
        </Heading>
        <Text>
          We use this information to:
          <br />– Display your username in the game
          <br />– Improve gameplay and user experience
          <br />– Understand general usage patterns and app performance
        </Text>

        <Heading as="h2" size="md">
          Third-Party Services
        </Heading>
        <Text>
          We use <strong>Google Analytics</strong> to collect anonymous usage
          data. Google may use cookies or similar technologies to analyze app
          usage. Learn more about how Google uses data{" "}
          <Link
            href="https://policies.google.com/technologies/partner-sites"
            isExternal
            color="blue.500"
          >
            here
          </Link>
          .
        </Text>

        <Heading as="h2" size="md">
          Data Retention
        </Heading>
        <Text>
          – Usernames may be stored as long as your account is active.
          <br />– Analytics data is retained by Google according to their
          policies.
        </Text>

        <Heading as="h2" size="md">
          Your Rights
        </Heading>
        <Text>
          You can request to delete your username or opt out of analytics
          tracking by contacting us.
        </Text>

        <Heading as="h2" size="md">
          Contact
        </Heading>
        <Text>
          For any privacy-related questions or requests, please email us at:
          gm@jokersofneon.com
        </Text>
      </Stack>
    </Box>
  );
};
