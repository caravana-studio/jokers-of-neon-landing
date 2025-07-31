// src/pages/DeleteAccount.tsx
import { Box, Heading, Text, Stack, Link } from "@chakra-ui/react";

export const DeleteAccount = () => {
  return (
    <Box maxW="800px" mx="auto" px={4} py={8}>
      <Heading as="h1" mb={6}>
        Delete Your Account – Jokers of Neon
      </Heading>
      <Stack spacing={4}>
        <Text>
          If you've played <strong>Jokers of Neon</strong> and would like to delete your account, we're here to help.
        </Text>

        <Heading as="h2" size="md">
          How to Request Account Deletion
        </Heading>
        <Text>
          To delete your account and associated username, please send an email to:{" "}
          <Link href="mailto:gm@jokersofneon.com" color="blue.500">
            gm@jokersofneon.com
          </Link>{" "}
          with the subject line: <strong>"Delete My Jokers of Neon Account"</strong>.
        </Text>
        <Text>
          Make sure to include your in-game username so we can identify your account.
        </Text>

        <Heading as="h2" size="md">What Data Is Deleted</Heading>
        <Text>
          When you request account deletion, we will permanently delete:
          <ul style={{ marginLeft: "1em" }}>
            <li>Your username</li>
            <li>Your gameplay progress</li>
            <li>Any linked session data associated with your account</li>
          </ul>
        </Text>

        <Heading as="h2" size="md">What Data Is Retained</Heading>
        <Text>
          Anonymous analytics data collected via Google Analytics (such as session duration or screen views) is not linked to your username and will not be removed, as it is used solely for product improvement purposes.
        </Text>

        <Heading as="h2" size="md">Retention Period</Heading>
        <Text>
          Once we receive your request, your account data will be deleted within <strong>7 business days</strong>. You will receive a confirmation once the deletion is complete.
        </Text>

        <Heading as="h2" size="md">Questions?</Heading>
        <Text>
          If you have any questions about account deletion or your data, feel free to reach out at{" "}
          <Link href="mailto:gm@jokersofneon.com" color="blue.500">
            gm@jokersofneon.com
          </Link>.
        </Text>
      </Stack>
    </Box>
  );
};
