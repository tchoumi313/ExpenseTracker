// import React from 'react';
import { IconTrash } from '@tabler/icons-react';
import { Container, Title, Card, Text, Button, Group, Flex } from '@mantine/core';

const expenses = [
  { id: 1, title: 'Groceries', price: 50, date: '2024-07-01' },
  { id: 2, title: 'Rent', price: 500, date: '2024-07-05' },
  { id: 3, title: 'Utilities', price: 100, date: '2024-07-10' },
];

export default function ExpenseList() {
  const handleDelete = (id) => {
    console.log(`Delete expense with id: ${id}`);
    // Add your delete logic here
  };

  return (
    <Container>
      <Title order={1} align="center" style={{ marginBottom: '2rem' }}>Expenses</Title>
      <Flex direction="column" align="center">
        {expenses.map((expense) => (
          <Card key={expense.id} shadow="sm" padding="lg" style={{ marginBottom: '1rem', width: '100%', maxWidth: '400px' }}>
             <Flex justify="space-between" align="center">
              <Flex direction="column" gap="xs">
                <Text>{expense.title}</Text>
                <Text size="sm" color="dimmed">{expense.date}</Text>
              </Flex>
              <Text>${expense.price}</Text>
              <Button color="red" onClick={() => handleDelete(expense.id)}>
                <IconTrash  size={20} stroke={2} />
               
              </Button>
            </Flex>
          </Card>
        ))}
      </Flex>
    </Container>
  );
}
