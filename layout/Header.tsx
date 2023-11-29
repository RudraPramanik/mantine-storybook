import { Flex, Title, Input, Button } from '@mantine/core';
import { memo } from 'react';

type HeaderProps = {
  query: string;
  onSearch: (e: any) => void;
  onFetch: () => void;
};

const Header = ({ onFetch, query, onSearch }: HeaderProps) => {
  const searchStart = () => {
    if (query) onFetch();
  };

  console.log('Re render Header');

  return (
    <Flex
      align="center"
      justify="space-between"
      sx={{
        flexDirection: 'row',
        '@media (max-width: 900px)': {
          flexDirection: 'column',
        },
      }}
      p={16}
    >
      <Title
        order={2}
        sx={{
          '@media (max-width: 900px)': {
            marginBottom: 12,
          },
        }}
      >
        Next Image Gallery
      </Title>
      <Flex align="center" justify="center" gap={4}>
        <Input
          sx={{
            width: '500px',
            '@media (max-width: 755px)': {
              width: '240px',
            },
          }}
          placeholder="Search Picture"
          radius="md"
          size="md"
          variant="filled"
          value={query}
          onChange={(e) => onSearch(e)}
        />
        <Button
          variant="gradient"
          size="md"
          onClick={searchStart}
          gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
        >
          Search
        </Button>
      </Flex>
    </Flex>
  );
};

export default memo(Header);
